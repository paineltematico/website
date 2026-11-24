# 00 — Estado atual do site e do CRM (ponto de partida)

> Levantamento feito a 2026-11-23 a partir do código do repositório `paineltematico/website`
> (último commit de `main` lido: `8c0932b`). Só leitura de código; não houve acesso à base de
> dados real (não há `.env.local` nesta cópia). Cada afirmação aponta para o ficheiro.

## Resumo

- O site tem 13 rotas públicas e o CRM tem 15 secções em `src/app/admin`.
- **Segurança (prioridade zero, confirmado no código):**
  - `src/proxy.ts` l.9-14 aceita qualquer cookie `admin_token` com formato `xxx.yyy`, sem validar a assinatura, e aceita também o cookie legado `admin_session=authenticated`.
  - Várias páginas do admin leem com a service role sem verificar sessão: `admin/imoveis`, `admin/projetos`, `admin/blog`, `admin/definicoes`.
  - O detalhe de um lead (`admin/leads/[id]/page.tsx`) mostra dados pessoais sem redirecionar quem não tem sessão e sem verificar a quem pertence o lead.
  - `ADMIN_JWT_SECRET` tem fallback inseguro escrito no código (`src/lib/auth.ts` l.24).
- **Dois dos quatro formulários públicos não criam lead:**
  - `/api/visita` (visita pedida pelo cliente) e `/api/agendar-visita` (mediadores) gravam só a visita.
- **O cron de follow-up das avaliações nunca corre em produção:**
  - só aceita o header `x-cron-secret`;
  - a Vercel Cron envia `Authorization: Bearer`.
- **Faltam as funções de base de um CRM imobiliário:**
  - matching imóvel↔lead;
  - tarefas e próxima ação;
  - SLA de resposta;
  - scoring dinâmico;
  - atribuição automática de leads;
  - reservas de frações ligadas a clientes;
  - documentos (CPCV, contrato de mediação);
  - integração com portais;
  - histórico real de comunicações.

## 1. Site público

### Rotas

| Rota | Ficheiro | O que tem | Notas |
|---|---|---|---|
| `/` | `src/app/page.tsx` | Vídeo hero, pesquisa, contadores, destaques (≤6), "Porquê nós", Merelim showcase, FloorPlanStory, até 4 projetos, CTA de avaliação | `/videos/hero.mp4` não existe em `public/videos` |
| `/imoveis` | `src/app/imoveis/page.tsx` | Grelha com filtros q, tipo, tipologia, min, max | Sem ordenação |
| `/imoveis/[slug]` | `ImovelLuxury.tsx` | Galeria, plantas, mapa, angariador, "Agendar visita", formulário | WhatsApp e telefone fixos (l.467, 474-482); "© 2025" fixo |
| `/projetos` | `src/app/projetos/page.tsx` | Cartões | `unidades_disponiveis` preenchido à mão |
| `/projetos/[slug]` | `ProjetoLuxury.tsx` | Hero, ficha, galeria, vídeos, plantas, frações com estado, timeline de obra (só se `em_curso`) | Nenhum CTA por fração. `ProjetoForm` definido (l.618) mas nunca usado: **a página do projeto não capta leads**. Testemunhos carregados e não mostrados |
| `/construcao` | `src/app/construcao/page.tsx` | Pilares e vídeos de obra | Parceiros são placeholders |
| `/sobre` | `SobreClient.tsx` | Equipa e textos | |
| `/blog`, `/blog/[slug]` | `src/app/blog/...` | Artigos | `/blog/[slug]` sem `generateMetadata` |
| `/contacto` | `src/app/contacto/page.tsx` | Contactos e `ContactForm` | `contacto-hero.jpg` em falta; telefone placeholder +351 210 000 000 (`ContactForm.tsx` l.199-200) |
| `/avaliacao` | `AvaliacaoForm.tsx` | Formulário de 4 passos | Sem checkbox de consentimento RGPD (l.522-526) |
| `/visita` | `VisitaForm.tsx` | Agendamento de visita pelo cliente | Não cria lead |
| `/agendar-visita` | — | Portal de mediadores (`noindex`) | Não cria lead |
| `/edit` | `src/proxy.ts` | Modo CMS inline | |

**Navegação e páginas legais**
- O menu não tem `/avaliacao`, `/blog` nem `/visita`.
- Não há política de privacidade, termos nem Livro de Reclamações.

### Para onde vão os formulários

**`/api/contacto`** (formulário de contacto e de imóvel)
- Cria lead em `contactos_imoveis` com score 20 fixo, `fonte='site'` e `responsavel_id` nulo (l.48-66), ou seja, sem atribuição.
- Envia email ao admin e email de boas-vindas ao lead.
- Rate limit de 5 pedidos por 10 min.

**`/api/avaliacao`**
- Cria a avaliação e um lead com `fonte='site'`, sem distinção da origem e sem FK entre os dois.
- Envia emails.

**`/api/visita` e `/api/agendar-visita`**
- Gravam em `visitas_parceiros` e criam um evento no Google Calendar.
- **Não criam lead nem enviam email.**

### SEO, analytics, WhatsApp

**SEO**
- Título duplicado nas fichas: " | Painel Temático" aparece duas vezes (`imoveis/[slug]/page.tsx` l.26, `projetos/[slug]/page.tsx` l.16).
- `og:image` sem fallback.
- Sem JSON-LD/schema.org e sem hreflang.
- O sitemap não inclui `/avaliacao`.

**Analytics**
- GA4 e Meta Pixel só carregam se as variáveis existirem (não existem).
- Só registam PageView: não há eventos de funil.
- Não há banner de cookies.

**WhatsApp**
- Usa `wa.me/351913440800`, com uma mensagem genérica no botão flutuante.
- Nas fichas, os links não têm texto pré-preenchido com o imóvel e não usam o número do angariador.
- Não há WhatsApp Business API.

**Booklets** (`public/booklets/escudeiros.html`, `vale-s-cosme.html`)
- HTML estático `noindex` com PDF pré-gerado.
- Sem formulário e sem analytics.
- Não estão ligados à tabela `imoveis` nem ao sitemap.

## 2. CRM / admin

| Secção | O que faz | Lacunas |
|---|---|---|
| Dashboard | Vista do comercial: alertas (sem contacto há mais de 3 dias, quentes parados há mais de 7), KPIs, pipeline pessoal. Restantes papéis: contagens, pipeline da equipa, follow-ups de oportunidades vencidos | "Última atividade" calculada só sobre as 500 atividades mais recentes (l.83-87). Marketing e gestor_projeto veem a vista de equipa sem `leads.view` |
| Imóveis | CRUD: título, tipologia, preço, área, fotos, plantas, especificidades, disponível, destaque; `angariador_id`; angariação perdida | Sem estado reservado/vendido (só `disponivel`), sem proprietário, sem `projeto_id`, sem classe energética. POST insere `...body` sem whitelist |
| Leads | 8 estados (novo → contactado → qualificado → visita_agendada → negociacao → reserva → ganho / perdido) como filtros com contagens; pesquisa por nome; detalhe com fase, prioridade, notas, atividades manuais (nota/chamada/email/visita/reunião), timeline com versões (super_admin), transferir, arquivar | **Não é um Kanban.** Imóvel de interesse em texto livre de 30 caracteres. Temperatura, orçamento e tags sem UI. Score nunca é recalculado. Sem tarefas, lembretes ou emails. API POST sem whitelist |
| Oportunidades (super_admin) | Pré-leads de venda, compra ou arrendamento; estimativa em linhas; fotos e documentos; follow-up com evento no Google Calendar e email do cron; conversão em lead ou imóvel | Documentos ficam no bucket **público** `media` |
| Projetos | CRUD do projeto; frações (`unidades`) com referência, tipologia, áreas, % de conclusão, preço, piso, estado (disponivel/reservado/vendido/em_breve), planta; evolução da obra (criar e apagar) | Fração sem lead, cliente, data ou sinal de reserva. Estado da fração não atualiza `unidades_disponiveis`. API sem `canUser`, grava o body inteiro |
| Avaliações | Lista com 4 estados; envio manual dos follow-ups | `notas_internas` sem UI |
| Parceiros | Mediadores e visitas, estados da visita, link `/agendar-visita` | Visitas sem ligação a leads |
| Estatísticas | Últimos 12 meses: angariações, leads, funil, origem, temperatura, por comercial | Sem filtro de datas, sem tempo de resposta, sem valor de negócio |
| Equipa, Blog, Construção, Definições, Permissões, Utilizadores | CRUD | Blog sem DELETE. Definições grava qualquer chave |

**Não existe uma secção `/admin/vendas`, nem tabela de vendas: "ganho" é só um estado do lead.**

## 3. Modelo de dados (resumo)

Os ficheiros `.sql` da raiz estão desatualizados face ao código.

**Tabelas principais**
- `imoveis`.
- `contactos_imoveis` (leads): tem `score`, `temperatura`, `tags[]`, `projeto_interesse`, `orcamento_min/max` e `responsavel_id`, mas vários destes campos não têm UI.
- `lead_atividades`, com versões.
- `oportunidades` e `oportunidade_atividades`.
- `projetos`.
- **`unidades`**: no código chama-se assim; a tabela `unidades_projeto` não existe.
- `atualizacoes_obra`.
- `avaliacoes_imovel`: não aparece em nenhum `.sql`.
- `parceiros`: há dois esquemas em conflito.
- `visitas_parceiros`.
- `admin_users`, com `permissions_extra` e `permissions_denied`.
- `blog_posts`, `videos_obra`, `equipa`, `site_settings`, `testemunhos` (sem UI de administração) e `faqs` (sem uso).

**RLS**
- As políticas atuais são permissivas.
- O fecho está em `supabase-rls-lockdown.sql` (Fase 4 de `TAREFA-migracao-admin-api.md`), por correr.

## 4. Automação e integrações

**Crons** (`vercel.json`, 09:00 UTC)
- `avaliacoes-followup`: **nunca corre**, por causa do header.
- `oportunidades-followup`: fica aberto se `CRON_SECRET` não existir.

**Email (Resend)**
- 7 modelos.
- Os emails enviados não ficam registados em `lead_atividades`.
- Não há nurturing de leads.

**Outras integrações**
- Google Calendar (service account): usado em oportunidades e visitas.
- Não há integração com portais, Meta Lead Ads, WhatsApp API, SMS nem LLMs.

**Autenticação**
- Token HMAC próprio de 7 dias, sem revogação.
- O proxy só verifica o formato do token (ver Resumo).
- Não há CSP.

## 5. Skill `vendas` (`.claude/skills/vendas/SKILL.md`)

**O que é:** um "diretor comercial virtual" que acrescenta inputs semanais a `docs/comercial/INPUTS-AAAA-MM.md`.

**O que produz:** fotografia da semana, 3 inputs, 1 risco no funil e 1 decisão para o dono.

**Dados que lê:** agregados de `projetos`, `unidades`, `contactos_imoveis` e `imoveis` via REST, com a service key do `.env.local`.

**O que falta:** a pasta `docs/comercial/` ainda não existe.

## 6. Lacunas confirmadas (lista de trabalho)

1. Matching imóvel↔lead: o lead não guarda preferências.
2. Tarefas, próxima ação e lembretes nos leads.
3. SLA de resposta: não se mede o tempo até ao primeiro contacto.
4. Scoring dinâmico.
5. Atribuição automática (round-robin): os leads do site ficam sem responsável.
6. Notificação ao comercial quando há lead novo ou transferência.
7. Histórico real de comunicações: emails enviados, WhatsApp.
8. Integração com portais: exportar anúncios e importar contactos.
9. Documentos (CPCV, contrato de mediação, proprietário) em armazenamento privado.
10. Reservas de frações ligadas a lead, com data, sinal e prazo; sincronização com o projeto.
11. Ligação imóvel↔projeto.
12. Estado comercial do imóvel (reservado/vendido).
13. Visitas → CRM: lead e atividade.
14. Origem distinguível: UTM, campanha, avaliação vs contacto.
15. Deteção de duplicados.
16. Captação de leads nas páginas de projeto e "Avisa-me quando disponível".
17. Consentimento RGPD e páginas legais.
18. Eventos de funil GA4/Pixel e schema.org.
19. Pipeline em Kanban drag&drop.
20. UI para temperatura, orçamento e tags.
21. Valor do negócio (preço fechado, comissão) e previsão.
22. Controlo de acesso (ver Resumo).

## 7. Pendentes já declarados

**`CLAUDE.md`**
- `CRON_SECRET` na Vercel.
- IDs de GA4 e Pixel.
- `contacto-hero.jpg`.
- Conteúdo real: Esporões, Merelim, Lomar.
- Domínio próprio.

**`HISTORY.md`**
- Preço de Vale S. Cosme.
- Booklets de Esporões e Balazar.

**`BRIEFING.md` §8**
- Sincronização de `unidades_disponiveis`.
- Pré-registo "em breve".
- Calculadora de prestação.
- Nurturing de 3 emails.
- Mapa com pontos de interesse.
- Planta interativa.
- Tour virtual.
- Eventos GA4/Pixel.
- Blog SEO.

**`TAREFA-migracao-admin-api.md`**
- Fase 4: lockdown RLS.

**`docs/design/AUDITORIA-UXUI-2026-07.md`**
- Roadmap M1–M10 por implementar.
- F-01, F-02, F-04, F-06, F-12, F-14 e F-18 ainda visíveis no código.
