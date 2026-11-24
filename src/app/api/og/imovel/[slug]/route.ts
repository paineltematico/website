import UPNG from 'upng-js'
import jpeg from 'jpeg-js'
import { supabaseAdmin } from '@/lib/supabase-admin'

// Imagem de pré-visualização (WhatsApp, Facebook, LinkedIn…) de cada imóvel:
// primeira foto, recortada a 1200×630 e comprimida em JPEG leve,
// porque as fotos originais (PNG grandes) são ignoradas pelo WhatsApp.
// Só bibliotecas em JavaScript puro (sem dependências nativas no deploy).
export const runtime = 'nodejs'

const W = 1200
const H = 630

type Rgba = { width: number; height: number; data: Uint8Array }

function decode(buf: ArrayBuffer, type: string): Rgba {
  const bytes = new Uint8Array(buf)
  const isPng = type.includes('png') || (bytes[0] === 0x89 && bytes[1] === 0x50)
  if (isPng) {
    const img = UPNG.decode(buf)
    const frame = UPNG.toRGBA8(img)[0]
    return { width: img.width, height: img.height, data: new Uint8Array(frame) }
  }
  const img = jpeg.decode(bytes, { useTArray: true, maxMemoryUsageInMB: 1024 })
  return { width: img.width, height: img.height, data: img.data }
}

// Recorte "cover" centrado + redimensionamento por média de área (boa qualidade ao reduzir)
function cover(src: Rgba): Uint8Array {
  const scale = Math.max(W / src.width, H / src.height)
  const cropW = W / scale
  const cropH = H / scale
  const x0 = (src.width - cropW) / 2
  const y0 = (src.height - cropH) / 2
  const out = new Uint8Array(W * H * 4)
  const step = 1 / scale
  for (let y = 0; y < H; y++) {
    const sy0 = Math.floor(y0 + y * step)
    const sy1 = Math.max(sy0 + 1, Math.min(src.height, Math.floor(y0 + (y + 1) * step)))
    for (let x = 0; x < W; x++) {
      const sx0 = Math.floor(x0 + x * step)
      const sx1 = Math.max(sx0 + 1, Math.min(src.width, Math.floor(x0 + (x + 1) * step)))
      let r = 0, g = 0, b = 0, n = 0
      for (let sy = sy0; sy < sy1; sy += 1) {
        for (let sx = sx0; sx < sx1; sx += 1) {
          const i = (sy * src.width + sx) * 4
          r += src.data[i]; g += src.data[i + 1]; b += src.data[i + 2]; n++
        }
      }
      const o = (y * W + x) * 4
      out[o] = r / n; out[o + 1] = g / n; out[o + 2] = b / n; out[o + 3] = 255
    }
  }
  return out
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { data } = await supabaseAdmin
    .from('imoveis')
    .select('fotos')
    .eq('slug', slug)
    .single()

  const foto: string | undefined = data?.fotos?.[0]
  if (!foto) return new Response('Sem foto', { status: 404 })

  const res = await fetch(foto)
  if (!res.ok) return new Response('Foto indisponível', { status: 502 })

  const src = decode(await res.arrayBuffer(), res.headers.get('content-type') ?? '')
  const encoded = jpeg.encode({ width: W, height: H, data: cover(src) }, 72)

  return new Response(new Uint8Array(encoded.data), {
    headers: {
      'Content-Type': 'image/jpeg',
      'Cache-Control': 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400',
    },
  })
}
