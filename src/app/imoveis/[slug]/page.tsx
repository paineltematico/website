import { notFound } from 'next/navigation'
import { headers } from 'next/headers'
import type { Metadata } from 'next'
import { supabaseAdmin } from '@/lib/supabase-admin'
import ImovelLuxury from './ImovelLuxury'
import type { Imovel } from '@/types/database'

interface Props {
  params: Promise<{ slug: string }>
}

async function getImovel(slug: string): Promise<Imovel | null> {
  const { data } = await supabaseAdmin
    .from('imoveis')
    .select('*')
    .eq('slug', slug)
    .eq('disponivel', true)
    .single()
  return data as Imovel | null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const imovel = await getImovel(slug)
  if (!imovel) return { title: 'Imóvel não encontrado' }
  // URL absoluto do próprio site (o metadataBase pode apontar para um domínio ainda não ligado)
  const h = await headers()
  const host = h.get('x-forwarded-host') ?? h.get('host') ?? 'painel-tematico.vercel.app'
  const ogImage = `https://${host}/api/og/imovel/${slug}`
  return {
    title: imovel.titulo,
    description: imovel.descricao ?? undefined,
    openGraph: {
      title: imovel.titulo,
      description: imovel.descricao ?? undefined,
      images: imovel.fotos?.[0] ? [{ url: ogImage, width: 1200, height: 630, type: 'image/jpeg', alt: imovel.titulo }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      images: imovel.fotos?.[0] ? [ogImage] : [],
    },
  }
}

export default async function ImovelPage({ params }: Props) {
  const { slug } = await params
  const imovel = await getImovel(slug)
  if (!imovel) notFound()

  let angariador: { nome: string; role: string } | null = null

  if (imovel.angariador_id) {
    const { data } = await supabaseAdmin
      .from('admin_users')
      .select('nome, role')
      .eq('id', imovel.angariador_id)
      .single()
    if (data) {
      angariador = { nome: data.nome as string, role: data.role as string }
    }
  }

  return <ImovelLuxury imovel={imovel} angariador={angariador} />
}
