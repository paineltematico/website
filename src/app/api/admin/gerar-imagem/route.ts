import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { GoogleGenAI } from '@google/genai'
import { getCurrentUser } from '@/lib/auth-server'

// Precisa do runtime Node (Buffer + SDK). A geração pode demorar alguns segundos.
export const runtime = 'nodejs'
export const maxDuration = 60

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

// "Nano Banana" — modelo nativo de geração/edição de imagens do Gemini
const MODELO = 'gemini-2.5-flash-image'

type Parte =
  | { text: string }
  | { inlineData: { mimeType: string; data: string } }

// POST /api/admin/gerar-imagem
// Body JSON: { prompt, folder?, imagemUrl? }
//  - prompt    : descrição da imagem a gerar (obrigatório)
//  - folder    : pasta no bucket "media" (ex: imoveis, blog) — default "ia"
//  - imagemUrl : URL de uma imagem já existente para EDITAR/transformar
//                (virtual staging, variações) — opcional
export async function POST(request: Request) {
  const me = await getCurrentUser()
  if (!me) return NextResponse.json({ error: 'Não autenticado' }, { status: 401 })

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: 'GEMINI_API_KEY não está configurada no servidor.' },
      { status: 500 }
    )
  }

  let body: { prompt?: string; folder?: string; imagemUrl?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Corpo JSON inválido' }, { status: 400 })
  }

  const prompt = (body.prompt ?? '').trim()
  const folder = (body.folder ?? 'ia').replace(/[^a-z0-9/_-]/gi, '') || 'ia'
  if (!prompt) {
    return NextResponse.json({ error: 'Descreve a imagem que queres gerar.' }, { status: 400 })
  }

  // contents = texto + (opcional) imagem base a transformar
  const partes: Parte[] = [{ text: prompt }]

  if (body.imagemUrl) {
    try {
      const r = await fetch(body.imagemUrl)
      if (!r.ok) throw new Error(`HTTP ${r.status}`)
      const ab = await r.arrayBuffer()
      const mimeType = r.headers.get('content-type') || 'image/jpeg'
      partes.push({
        inlineData: { mimeType, data: Buffer.from(ab).toString('base64') },
      })
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'erro'
      return NextResponse.json(
        { error: `Não foi possível ler a imagem de base: ${msg}` },
        { status: 400 }
      )
    }
  }

  const ai = new GoogleGenAI({ apiKey })

  let resposta
  try {
    resposta = await ai.models.generateContent({
      model: MODELO,
      contents: partes,
    })
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'erro desconhecido'
    console.error('[gerar-imagem] Gemini error:', e)
    return NextResponse.json({ error: `A geração falhou: ${msg}` }, { status: 502 })
  }

  // Extrair a 1.ª imagem devolvida (vem em base64 dentro de inlineData)
  let imgB64: string | undefined
  let imgMime = 'image/png'
  for (const cand of resposta.candidates ?? []) {
    for (const p of cand.content?.parts ?? []) {
      if (p.inlineData?.data) {
        imgB64 = p.inlineData.data
        imgMime = p.inlineData.mimeType || imgMime
        break
      }
    }
    if (imgB64) break
  }

  // O modelo pode recusar e devolver só texto (ex.: política de conteúdo)
  if (!imgB64) {
    const texto = resposta.text?.trim()
    return NextResponse.json(
      { error: texto ? `O modelo não devolveu imagem: ${texto}` : 'O modelo não devolveu nenhuma imagem.' },
      { status: 502 }
    )
  }

  const buffer = Buffer.from(imgB64, 'base64')
  const ext = imgMime.includes('png') ? 'png' : imgMime.includes('webp') ? 'webp' : 'jpg'
  const filename = `${folder}/ia-${Date.now()}.${ext}`

  const { error } = await supabaseAdmin.storage
    .from('media')
    .upload(filename, buffer, { contentType: imgMime, upsert: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const { data: { publicUrl } } = supabaseAdmin.storage.from('media').getPublicUrl(filename)

  return NextResponse.json({ url: publicUrl, path: filename, bucket: 'media' })
}
