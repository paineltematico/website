'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { Upload, X, Loader2, ImageIcon, GripVertical, FileText, Sparkles, Wand2 } from 'lucide-react'

interface Props {
  urls: string[]
  onChange: (urls: string[]) => void
  folder?: string   // ex: "imoveis", "projetos", "equipa"
  max?: number      // máximo de fotos (default: 20)
  single?: boolean  // modo single (ex: foto de perfil)
  allowPdf?: boolean // aceitar PDF além de imagens (ex: plantas)
}

const isPdf = (url: string) => /\.pdf($|\?)/i.test(url)

export default function ImageUpload({ urls, onChange, folder = 'geral', max = 20, single = false, allowPdf = false }: Props) {
  const inputRef   = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError]         = useState('')
  const [dragOver, setDragOver]   = useState(false)

  // --- Geração com IA (Gemini "Nano Banana") ---
  const [iaOpen, setIaOpen]         = useState(false)
  const [iaPrompt, setIaPrompt]     = useState('')
  const [iaSource, setIaSource]     = useState<string | null>(null) // URL de base a transformar
  const [generating, setGenerating] = useState(false)

  const upload = async (files: FileList | null) => {
    if (!files || files.length === 0) return
    setError('')

    const remaining = max - urls.length
    const toUpload  = Array.from(files).slice(0, single ? 1 : remaining)

    if (toUpload.length === 0) {
      setError(`Máximo de ${max} imagens atingido.`)
      return
    }

    setUploading(true)
    const newUrls: string[] = []

    for (const file of toUpload) {
      if (file.size > 20 * 1024 * 1024) {
        setError(`"${file.name}" excede o limite de 20MB.`)
        continue
      }
      const fd = new FormData()
      fd.append('file', file)
      fd.append('folder', folder)

      const res  = await fetch('/api/admin/upload', { method: 'POST', body: fd })
      const data = await res.json()

      if (res.ok) {
        newUrls.push(data.url)
      } else {
        setError(data.error ?? 'Erro no upload')
      }
    }

    onChange(single ? newUrls : [...urls, ...newUrls])
    setUploading(false)
  }

  const gerarIA = async () => {
    const prompt = iaPrompt.trim()
    if (!prompt) { setError('Descreve a imagem que queres gerar.'); return }
    if (urls.length >= max && !single) { setError(`Máximo de ${max} imagens atingido.`); return }

    setError('')
    setGenerating(true)
    try {
      const res = await fetch('/api/admin/gerar-imagem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, folder, imagemUrl: iaSource || undefined }),
      })
      const data = await res.json()
      if (res.ok) {
        onChange(single ? [data.url] : [...urls, data.url])
        setIaOpen(false)
        setIaPrompt('')
        setIaSource(null)
      } else {
        setError(data.error ?? 'A geração de imagem falhou.')
      }
    } catch {
      setError('Erro de rede ao gerar a imagem.')
    } finally {
      setGenerating(false)
    }
  }

  const remove = async (index: number) => {
    const url  = urls[index]
    // Extract path from URL for deletion
    const path = url.split('/media/')[1]
    if (path) {
      await fetch(`/api/admin/upload?path=${encodeURIComponent(path)}`, { method: 'DELETE' })
    }
    onChange(urls.filter((_, i) => i !== index))
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    upload(e.dataTransfer.files)
  }

  const atingiuMax = !single && urls.length >= max
  const fotosBase  = urls.filter((u) => !isPdf(u))

  return (
    <div className="space-y-3">

      {/* Preview grid */}
      {urls.length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
          {urls.map((url, i) => (
            <div key={url} className="relative group aspect-square rounded-xl overflow-hidden border border-[#e2e8f0] bg-[#f8fafc]">
              {isPdf(url) ? (
                <a href={url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center h-full text-[#64748b] hover:text-[#00545F] p-2 transition-colors">
                  <FileText className="w-7 h-7 mb-1" />
                  <span className="text-[10px] font-medium">PDF</span>
                </a>
              ) : (
                <Image
                  src={url}
                  alt={`Foto ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              )}
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-200" />
              {/* Remove button */}
              <button
                type="button"
                onClick={() => remove(i)}
                className="absolute top-1 right-1 w-6 h-6 rounded-full bg-red-500 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow"
              >
                <X className="w-3.5 h-3.5" />
              </button>
              {/* First badge */}
              {i === 0 && (
                <span className="absolute bottom-1 left-1 bg-[#00545F] text-white text-[10px] font-semibold px-1.5 py-0.5 rounded">
                  Principal
                </span>
              )}
              {/* Drag handle */}
              <div className="absolute top-1 left-1 opacity-0 group-hover:opacity-60 transition-opacity text-white">
                <GripVertical className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload zone — hidden in single mode if already has image */}
      {(!single || urls.length === 0) && urls.length < max && (
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => !uploading && inputRef.current?.click()}
          className={`
            relative border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-200
            ${dragOver
              ? 'border-[#00545F] bg-teal-50'
              : 'border-[#e2e8f0] hover:border-[#00545F] hover:bg-teal-50/30'
            }
          `}
        >
          <input
            ref={inputRef}
            type="file"
            accept={`image/jpeg,image/jpg,image/png,image/webp,image/heic,image/heif,.heic,.heif${allowPdf ? ',application/pdf,.pdf' : ''}`}
            multiple={!single}
            className="hidden"
            onChange={(e) => upload(e.target.files)}
          />

          {uploading ? (
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="w-8 h-8 text-[#00545F] animate-spin" />
              <p className="text-sm text-[#64748b]">A carregar...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-[#00545F]/10 flex items-center justify-center">
                {urls.length > 0 ? <ImageIcon className="w-6 h-6 text-[#00545F]" /> : <Upload className="w-6 h-6 text-[#00545F]" />}
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1F3F44]">
                  {urls.length > 0 ? (allowPdf ? 'Adicionar mais' : 'Adicionar mais fotos') : (allowPdf ? 'Carregar ficheiros' : 'Carregar fotos')}
                </p>
                <p className="text-xs text-[#94a3b8] mt-0.5">
                  Arrasta aqui ou clica para selecionar · JPEG, PNG, WebP, HEIC{allowPdf ? ', PDF' : ''} · máx. 20MB
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Botão: gerar com IA */}
      {!atingiuMax && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); setError(''); setIaOpen(true) }}
          className="w-full flex items-center justify-center gap-2 rounded-xl border border-[#00545F]/30 bg-gradient-to-r from-teal-50 to-white px-4 py-2.5 text-sm font-semibold text-[#00545F] hover:border-[#00545F] hover:from-teal-100 transition-colors"
        >
          <Sparkles className="w-4 h-4" />
          Gerar imagem com IA
        </button>
      )}

      {error && (
        <p className="text-red-600 text-xs bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>
      )}

      {urls.length > 1 && (
        <p className="text-xs text-[#94a3b8]">A primeira imagem é a principal. Remove para reordenar.</p>
      )}

      {/* Modal de geração com IA */}
      {iaOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => !generating && setIaOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-2xl bg-white p-5 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00545F]/10">
                <Wand2 className="h-5 w-5 text-[#00545F]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#1F3F44]">Gerar imagem com IA</h3>
                <p className="text-xs text-[#94a3b8]">Gemini · Nano Banana</p>
              </div>
            </div>

            {/* Escolher uma foto existente para transformar (virtual staging / variações) */}
            {fotosBase.length > 0 && (
              <div className="mb-4">
                <label className="mb-1.5 block text-xs font-semibold text-[#1F3F44]">
                  Transformar uma foto existente <span className="font-normal text-[#94a3b8]">(opcional)</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setIaSource(null)}
                    className={`rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${
                      iaSource === null ? 'border-[#00545F] bg-teal-50 text-[#00545F]' : 'border-[#e2e8f0] text-[#64748b]'
                    }`}
                  >
                    Nova imagem
                  </button>
                  {fotosBase.slice(0, 6).map((u) => (
                    <button
                      key={u}
                      type="button"
                      onClick={() => setIaSource(u)}
                      className={`relative h-12 w-12 overflow-hidden rounded-lg border-2 transition-colors ${
                        iaSource === u ? 'border-[#00545F]' : 'border-transparent'
                      }`}
                    >
                      <Image src={u} alt="base" fill className="object-cover" sizes="48px" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <label className="mb-1.5 block text-xs font-semibold text-[#1F3F44]">
              {iaSource ? 'Como transformar a imagem?' : 'Descreve a imagem'}
            </label>
            <textarea
              value={iaPrompt}
              onChange={(e) => setIaPrompt(e.target.value)}
              rows={4}
              autoFocus
              placeholder={
                iaSource
                  ? 'Ex: mobilar esta sala vazia com estilo moderno e luz natural'
                  : 'Ex: sala de estar moderna e luminosa, estilo escandinavo, fotografia imobiliária'
              }
              className="w-full resize-none rounded-xl border border-[#e2e8f0] px-3 py-2 text-sm text-[#1F3F44] outline-none focus:border-[#00545F]"
            />

            {error && (
              <p className="mt-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-600">{error}</p>
            )}

            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIaOpen(false)}
                disabled={generating}
                className="rounded-xl px-4 py-2 text-sm font-medium text-[#64748b] hover:bg-[#f8fafc] disabled:opacity-50"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={gerarIA}
                disabled={generating || !iaPrompt.trim()}
                className="flex items-center gap-2 rounded-xl bg-[#00545F] px-4 py-2 text-sm font-semibold text-white hover:bg-[#003f47] disabled:opacity-50"
              >
                {generating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                {generating ? 'A gerar...' : 'Gerar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
