import sharp from 'sharp'
import { supabaseAdmin } from '@/lib/supabase-admin'

// Imagem de pré-visualização (WhatsApp, Facebook, LinkedIn…) de cada imóvel:
// primeira foto, recortada a 1200×630 e comprimida em JPEG leve,
// porque as fotos originais (PNG grandes) são ignoradas pelo WhatsApp.
export const runtime = 'nodejs'

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

  const jpeg = await sharp(Buffer.from(await res.arrayBuffer()))
    .resize(1200, 630, { fit: 'cover', position: 'attention' })
    .jpeg({ quality: 72, mozjpeg: true })
    .toBuffer()

  return new Response(new Uint8Array(jpeg), {
    headers: {
      'Content-Type': 'image/jpeg',
      'Cache-Control': 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400',
    },
  })
}
