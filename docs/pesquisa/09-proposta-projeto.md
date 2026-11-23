# 09 — Proposta de projeto: CRM de promotor, site que converte e agente PT-PT

> Proposta a 23/11/2026, a discutir.
>
> Parte do estado atual (`00`), da síntese (`08`) e das tabelas detalhadas dos capítulos 03, 05,
> 06 e 07. Os prazos são estimativas para uma pessoa a desenvolver com o Claude Code e devem
> rever-se ao fim da fase 0.

## 1. Visão

**O comprador de uma casa do Painel Temático sabe sempre o que se passa:** que frações há, quanto
custam, em que ponto está a obra, o que falta pagar e quem o vai atender.

O comercial responde em minutos, nunca perde um próximo passo e chega a cada visita preparado.

Uma IA em português de Portugal ajuda nos dois lados:
- nunca inventa um número;
- diz sempre que é uma IA;
- passa o cliente a uma pessoa no momento certo.

## 2. Princípios

1. **Construir o núcleo e integrar o resto.**
   - Construir: CRM de promotor, ligação ao CARRINHO, agente.
   - Integrar: WhatsApp Cloud API, Casafari, INE, Google Calendar, Resend, portais (cap. 02).
2. **Os números vêm da base de dados, nunca do modelo.**
   - O agente e as skills leem por ferramentas.
   - A resposta passa por um verificador antes de sair (cap. 03 §4).
3. **Primeiro medir, depois automatizar.**
   - Gravar `first_response_at`, os estados com data e a origem de cada lead, antes de pôr
     automações em cima.
4. **Conformidade desde o início.**
   - Consentimento por canal, aviso de IA, KYC antes do CPCV, AMI confirmado (cap. 06 §8).
5. **A obra é o argumento de venda.**
   - O que vem do CARRINHO vai para o site e para o comprador.
   - **Sem nunca expor custos:** a base é partilhada e a vista é só de leitura.

## 3. Arquitetura-alvo (resumo)

```
 Site público (Next.js)          Admin / CRM (Next.js)            Canais
 ├─ fichas e projetos ──┐        ├─ pipeline Kanban                ├─ WhatsApp Cloud API (fase 4)
 ├─ mapa de frações     │        ├─ frações: opção/reserva/CPCV    ├─ email (Resend)
 ├─ diário de obra      │        ├─ tarefas e próximo passo        └─ Google Calendar
 └─ assistente IA ──────┤        ├─ copiloto IA (rascunhos)
                        ▼        └─ estatísticas (speed-to-lead)
                 API routes (sessão validada, whitelists)
                        │
         ┌──────────────┼───────────────────────────────┐
         ▼              ▼                               ▼
  Supabase (site)   Agente (Messages API + ~12 ferramentas   CARRINHO (mesma BD)
  leads, frações,   só de leitura + 2 de escrita pendentes)   vista `v_obra_publica`
  consentimentos,   verificador de saída · evals em CI        (marcos, %, fotos; sem custos)
  conversas         dados de mercado: Casafari MCP, INE
```

## 4. Fases

### Fase 0 — Casa arrumada (semanas 1–2) · P0

| # | Entrega | Base |
|---|---|---|
| 0.1 | **Segurança do admin:** validar a assinatura do token no proxy, tirar o cookie legado, `requireUser()` em todas as páginas `/admin`, verificar o dono no detalhe do lead, falhar se `ADMIN_JWT_SECRET` não existir, whitelists nos POST, correr o lockdown de RLS (Fase 4 da `TAREFA-migracao-admin-api.md`) | cap. 00 §4 |
| 0.2 | **Crons:** aceitar `Authorization: Bearer`; negar quando não há segredo | cap. 00 §4 |
| 0.3 | **Legal mínimo:** confirmar o AMI 25031, criar `/privacidade` e `/cookies`, gestão de consentimento de cookies, identificação legal e Livro de Reclamações no rodapé, checkbox de marketing por canal nos formulários, tabela `consentimentos` | cap. 06 §8 (P0) |
| 0.4 | **Limpeza de conteúdo:** retirar os imóveis demo, o artigo «teste», os parceiros fictícios e o testemunho escrito no código; corrigir o título duplicado e a og:image; reescrever os dois anúncios principais; fotos e planta em cada imóvel | cap. 04 §5 |
| 0.5 | **Todos os formulários criam lead:** `/visita` e `/agendar-visita` passam a criar ou atualizar o lead e a registar atividade; deteção de duplicados por email ou telefone; `fonte` distinta para avaliação, visita, projeto e UTM | cap. 00 §6 (13–15) |

**Critério de saída**
- Sem cookie válido, nenhuma rota `/admin` abre.
- Os quatro formulários criam lead com origem.
- O site tem as páginas legais.
- Já não há conteúdo de teste público.

### Fase 1 — CRM de promotor + resposta rápida (semanas 2–5) · MVP

| # | Entrega | Base |
|---|---|---|
| 1.1 | **Speed-to-lead**: atribuição automática (round-robin ou por projeto), email ou push imediato ao comercial, resposta automática ao cliente, `first_response_at` / `first_contact_at`, reatribuição aos 60 min | cap. 05 C.1 |
| 1.2 | **Pipeline novo**: estados `visita_feita`, `cpcv`, `escritura`, `pos_venda` e `nutricao`; motivo de perda obrigatório; Kanban drag & drop; `proxima_acao_em` e lista «sem próximo passo» | cap. 05 C.1 |
| 1.3 | **Qualificação PT** no lead: financiamento, capitais próprios, elegível jovem, prazo, venda dependente, país de residência, decisores; fração de interesse (`fracao_id`) | cap. 05 C.4 |
| 1.4 | **Ciclo da fração**: `em_breve → disponivel → opcao (72h) → reservada → cpcv → vendida → entregue` + `bloqueada`; histórico de estados; permissões por papel; `unidades_disponiveis` calculado e não escrito à mão | cap. 05 C.3, cap. 02 |
| 1.5 | **Tabela de preços com versões** e plano de pagamentos do CPCV, com marcos e cobranças | cap. 05 C.4 |
| 1.6 | **KYC / negócio**: entidade `negocios` (lead + fração + preço de fecho + meio de pagamento + KYC); bloqueia a passagem a `reservada` sem KYC; exportação para a comunicação ao IMPIC | cap. 06 §2, §8 |
| 1.7 | **Estatísticas**: tempo até à primeira resposta (mediana e % em menos de 5 min), conversão por etapa, origem → venda, absorção por projeto | cap. 05 D |

**Critério de saída**
- 100% dos leads novos com responsável e `first_response_at`.
- Cada fração com estado e histórico.
- Uma reserva feita do princípio ao fim no CRM.

### Fase 2 — Copiloto da equipa (semanas 4–7)

| # | Entrega | Base |
|---|---|---|
| 2.1 | **Lista diária «quem contactar e porquê»**: os critérios ficam no código; o LLM só redige | cap. 03 §8 (2) |
| 2.2 | **Registo pós-chamada e conversa**: resumo, campos e `lead_atividades`, aprovado pelo comercial | cap. 03 §8 (1) |
| 2.3 | **Rascunhos de WhatsApp e email** com o link da fração, a planta e as respostas; o envio é sempre feito por uma pessoa | cap. 03 §8 (3) |
| 2.4 | **Skills internas** `/funil-semanal`, `/preparar-visita`, `/auditar-anuncio`, `/descricao-ptpt` (Claude Code, sobre vistas só de leitura) | cap. 07 §4 |

**Critério de saída**
- ≥ 50% dos rascunhos enviados com pouca edição.
- Follow-ups vencidos a descer semana após semana.

### Fase 3 — Site que converte + assistente na página da fração (semanas 6–10)

| # | Entrega | Base |
|---|---|---|
| 3.1 | **Mockups de julho por ordem de funil:** barra fixa no telemóvel com WhatsApp já preenchido com o imóvel; página de projeto com guia e mapa de frações, formulário e «avisar-me»; ficha em blocos com planta e custo mensal | cap. 04 §5, `docs/design/mockups` |
| 3.2 | **Diário de obra público e relatório de obra para compradores** (skill `/relatorio-obra`), a partir da vista `v_obra_publica` do CARRINHO | cap. 07 §4, cap. 05 §10 |
| 3.3 | **Assistente IA na página da fração ou projeto:** responde sobre a fração, a obra e o processo; pedidos de visita ficam pendentes até confirmação humana; passagem a uma pessoa com resumo; aviso de IA; 30–50 casos de avaliação em CI | cap. 03 §7–8 (5, 6) |
| 3.4 | **SEO e medição:** JSON-LD (`RealEstateListing`, `Residence`), sitemap completo, eventos de funil GA4 e Pixel (só com consentimento), páginas por freguesia | cap. 04, cap. 00 §1 |

**Critério de saída**
- 0 erros factuais no conjunto de avaliação e na amostra semanal (`/qa-agente-ia`).
- Primeira resposta em menos de 1 min nas páginas com assistente.

### Fase 4 — Canais e escala (semana 10 em diante)

| # | Entrega | Base |
|---|---|---|
| 4.1 | **WhatsApp Business Cloud API** própria: webhook robusto, opt-in registado, templates, janela de 24 h, passagem a uma pessoa | cap. 03 §3, cap. 07 |
| 4.2 | **Nurturing** com consentimento: pré-registos «em breve», leads perdidos por preço ou prazo (90/180 dias), pós-venda e NPS | cap. 05 §4–5 |
| 4.3 | **Portais:** feed próprio de `imoveis` e `unidades`, se o idealista e o Imovirtual o aceitarem; senão, Casafari CRM só para publicar | cap. 02 §3 |
| 4.4 | **Dados de mercado:** Casafari MCP e INE trimestral; `/benchmark-precos` e `/radar-concorrencia` | cap. 02 §4, cap. 07 |
| 4.5 | **MCP público do Painel Temático** com frações disponíveis e pedido de contacto, publicado no registo oficial | cap. 07 §5 |
| 4.6 | **Área de cliente** para quem compra em planta: obra, documentos e pagamentos | cap. 01, 05 |

## 5. MVP (6 semanas) — o que se mostra no fim

**Fases 0 e 1 completas, mais a lista diária do copiloto (2.1).** Um dia de trabalho com o MVP:

1. Um lead entra pelo site.
2. Fica atribuído e o comercial é avisado nesse momento.
3. O cliente recebe resposta em menos de 1 minuto.
4. O comercial qualifica-o e liga-o a uma fração.
5. Põe a fração em opção, faz a reserva e o CPCV com KYC.
6. O diretor vê a mediana do tempo de resposta e a conversão por etapa.

Tudo isto com o admin seguro e com o site conforme com o RGPD.

## 6. Modelo de dados (rascunho das alterações)

> O `website` ainda não versiona migrações (há ficheiros `.sql` soltos na raiz). Proposta: criar
> `supabase/migrations/` com o mesmo molde do `carrinhoGES`: idempotente, RLS ativo e verificação
> em `schema_migrations`.
>
> A base é **partilhada com o CARRINHO**: confirmar que os nomes de tabela novos estão livres
> antes de criar.

| Tabela | Alteração |
|---|---|
| `contactos_imoveis` | `first_response_at`, `first_contact_at`, `proxima_acao_em`, `motivo_perda`, `fracao_id`, campos de qualificação PT, `utm_*`, `campanha` |
| `unidades` | estados novos, `estado_desde`, `lead_id`, `preco_tabela_versao_id`, `preco_fecho`, `motivo_bloqueio` |
| nova `unidades_estados_log` | histórico de estados (alimenta a absorção) |
| nova `tabela_precos_versoes` | versões da tabela de preços com autor e motivo |
| nova `negocios` | lead, fração, valores, KYC, meio de pagamento, datas da reserva, do CPCV e da escritura |
| nova `planos_pagamento` | marcos, valores, datas previstas e pagas |
| nova `consentimentos` | titular, canal, finalidade, data, origem, texto aceite, revogação |
| nova `tarefas` | lead ou fração, responsável, prazo, estado |
| novas `conversas` / `mensagens` / `agente_turnos` | registo do agente (canal, modelo, ferramentas, passagem a humano) |
| `imoveis` | `projeto_id`, `classe_energetica`, áreas útil, bruta e de terreno, `proprio_ou_mediado`, contrato de mediação |
| `projetos` | `obra_id` → CARRINHO |
| vista `v_obra_publica` | marcos e percentagem por obra, **sem colunas de custo** |

## 7. Skills e MCPs (a ligar por ordem)

**Skills a criar**, por esta ordem:
- `/funil-semanal`, `/auditar-anuncio`, `/preparar-visita`, `/relatorio-obra`, `/qa-agente-ia`;
- depois `/descricao-ptpt`, `/benchmark-precos`, `/rgpd-campanha`, `/visibilidade-ia`.

A lista completa, com dados, output e frequência, está no cap. 07 §4.

**MCPs a ligar já:**
- Supabase, **só de leitura e para o copiloto interno**;
- Vercel, Playwright, Canva e Google Calendar;
- GA4, depois de haver consentimento de cookies;
- Casafari, depois de avaliar o plano.

Antes de instalar qualquer MCP de terceiros, auditá-lo com `snyk/agent-scan` ou `NVIDIA/SkillSpector`.

**A construir em vez de instalar:**
- a integração com o WhatsApp Business;
- um MCP interno do CRM.

**A não usar:** MCPs de WhatsApp pessoal, scraping de portais.

A tabela completa está no cap. 07 §5.

## 8. Métricas de sucesso

| Métrica | Fórmula | Meta inicial (rever aos 90 dias) |
|---|---|---|
| Tempo até à primeira resposta | mediana de `first_response_at − created_at`, em horário de expediente | < 5 min |
| % de leads com resposta em menos de 5 min | n.º com resposta em menos de 5 min ÷ leads em horário de expediente | ≥ 80% |
| Leads sem próximo passo | n.º de leads ativos sem `proxima_acao_em` | 0 |
| Lead → visita | visitas feitas ÷ leads qualificados (coorte mensal) | linha de base nas primeiras 4 semanas |
| Visita → reserva | reservas ÷ visitas feitas | linha de base |
| Absorção | frações vendidas por mês e por projeto | linha de base |
| Anúncios completos | % de imóveis e frações com fotos, planta, classe energética e áreas | 100% |
| Qualidade do agente | erros factuais na amostra semanal | 0 |
| Conformidade | % de leads com consentimento registado por canal | 100% dos contactos de marketing |

Fórmulas completas no cap. 05 D.

## 9. Riscos e como os tratar

| Risco | Tratamento |
|---|---|
| A base partilhada com o CARRINHO pode expor custos ou partir o outro sistema | Vista só de leitura sem colunas de custo; nomes de tabela verificados; migrações versionadas |
| O agente inventa preços ou áreas | Números só por ferramenta, verificador de saída, avaliações em CI, `/qa-agente-ia` semanal |
| Licença AMI não confirmada | Suspender as angariações de terceiros até confirmar; vender o que é próprio continua permitido |
| WhatsApp com o número banido | Só a Cloud API oficial; nunca ligações por QR |
| Dados de mercado caros | Começar pelo INE e pelo plano Free da Casafari |
| Uma só pessoa a desenvolver | Fases curtas com critério de saída; MVP de 6 semanas; o resto só depois de o MVP estar em uso |
| A pesquisa tem pontos por confirmar | Capítulo 10; validação jurídica dos itens marcados no cap. 06 §8.5 |

## 10. Primeiro passo concreto (hoje às 8h)

1. **15 min:** responder às perguntas da secção 11. Mudam o âmbito da fase 0.
2. **Manhã:** **0.1 Segurança do admin**, num PR próprio, testado com login real.
3. **Tarde:**
   - **0.2 Crons** (uma linha cada).
   - **0.4 Limpeza de conteúdo**, feita por ti no admin e no `/edit`, com a lista do cap. 04 §5.
   - Eu preparo, em paralelo, as migrações de **0.3** (consentimentos) e **0.5** (formulários a
     criar lead).

## 11. Perguntas que só tu podes responder

1. **AMI 25031:** de que entidade é, e está ativo? A verificação (cap. 10) não encontrou ligação
   pública. O registo comercial da Painel Temático, Lda. tem CAE 68100 (compra e venda), e não o
   da mediação. Queremos continuar a angariar imóveis de terceiros e a anunciar arrendamentos,
   através de uma entidade com licença ou de uma parceira, ou ficamos só com o que é nosso?
2. **Equipa:** quem responde aos leads hoje, em que horário, e quem faz o quê (comercial, diretor,
   gestor de projeto)? Vai haver escala para responder em 5 minutos?
3. **Projetos à venda agora:** quais e quantas frações (Merelim, Esporões, Lomar, Trandeiras)? Os
   preços e estados no site estão certos?
4. **WhatsApp:** o 913 440 800 é um número da empresa, que pode passar para a WhatsApp Business
   Platform, ou é pessoal?
5. **Orçamento mensal para ferramentas:** Casafari (49–249 €/mês), WhatsApp (por mensagem de
   template), Meta e Google Ads e LLM.
6. **CARRINHO ↔ site:** podemos ligar `projetos.obra_id` às obras do CARRINHO e publicar marcos e
   fotos da obra, sem custos?
7. **Domínio** `paineltematico.pt`: está registado? Quando o ligamos?
8. **Redes como canal:** aceitamos vender frações por ZOME, ERA e outras, com comissão e a regra de
   que o cliente fica registado no nosso CRM?
