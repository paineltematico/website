# 03 — Agentes de IA no imobiliário

> Capítulo de pesquisa para o Painel Temático (Braga). Eixo: agentes de IA imobiliários —
> produtos, código aberto, arquitetura, guardrails, prática no terreno e copiloto interno.
> Pesquisa feita a 23/11/2026. Em curso — gravado de forma incremental.

## Resumo

*(a preencher no fim)*

## Notas de método

- **Pesquisa feita a 23/11/2026**, com dezenas de pesquisas web, a API do GitHub (`gh api`) e
  leitura de READMEs. Várias páginas de fabricantes (ylopo.com, followupboss.com, rismedia.com,
  cio.com, developers.facebook.com) **não abriram** a partir deste ambiente (domínio bloqueado
  na rede da sessão); nesses casos o conteúdo vem dos excertos devolvidos pelo motor de pesquisa
  e está assinalado. Convém reabrir esses links num browser antes de citar números em público.
- **Factos ≠ inferências.** Os números de resultados publicados por fabricantes (taxas de
  resposta, conversões) são **auto-reportados** e quase nunca auditados — vão marcados como
  tal. As leituras para o Painel Temático são **inferências** e estão nas caixas
  "O que isto significa".
- Preços em USD quando a fonte é americana; câmbio não aplicado.

---

## 1. Produtos existentes (2023–2026)

### 1.1 Visão geral — cinco famílias

| Família | Exemplos | O que fazem | Relevância para nós |
|---|---|---|---|
| **A. "ISA" de IA para leads** (Inside Sales Agent) | Structurely (Aisa Holmes), Ylopo (Raiya), Verse.ai, Roof AI, Lofty AI Sales Agent | Responder ao lead em segundos por SMS/email/voz, qualificar (prazo, orçamento, financiamento, motivação), marcar chamada/visita, passar ao humano | **Alta** — é o papel (a) do nosso agente |
| **B. Copilotos de CRM para o comercial** | Rechat Lucy, Lofty AI Assistant/Cowork, Follow Up Boss Smart Messages, Compass AI Assistant, Realtor.com RealAssist (agentes), BoldTrail Smart Assistant | Rascunhos de resposta, resumos, próximos passos, campanhas, atualização do CRM por linguagem natural/voz | **Alta** — é o papel (b) |
| **C. Pesquisa conversacional de portais** | Zillow app no ChatGPT, Ask Redfin + pesquisa conversacional, idealista app no ChatGPT, ImmoScout24 HeyImmo, Fotocasa, Realtor.com RealAssist (consumidor), QuintoAndar | Pesquisa de imóveis em linguagem natural, perguntas sobre o anúncio, bairro, financiamento | **Média** — referência de UX; mostram o que o cliente já espera |
| **D. Agentes de promotoras / redes (WhatsApp/web)** | Metrovacesa MiA (ES), MRV Mia/Sofia (BR), Tecnisa Isa (BR), Lais/Lastro (BR), QuintoAndar Domi (BR), RE/MAX PT, Porta da Frente Christie's "Rachel" (PT), Inmovilla IA WhatsApp (PT/ES) | Primeiro contacto 24/7 no WhatsApp/site, qualificação, pré-agendamento, passagem ao comercial | **Muito alta** — o contexto mais próximo do nosso (promotora, mercado ibérico/lusófono) |
| **E. Plataformas de voz (horizontais)** | Retell AI, Synthflow, Vapi, ElevenLabs Agents | Infraestrutura para construir agentes telefónicos (ligar ao lead em <60 s, transferir chamada) | Média/baixa no arranque — voz em PT-PT é o canal mais arriscado |

### 1.2 Fichas por produto

**Ylopo — AI Text + AI Voice ("Raiya")** · EUA
- **O que faz:** SMS de IA envolve o lead; uma resposta positiva dispara uma chamada de voz de IA
  que faz **transferência ao vivo** ("live transfer") para o agente humano. Ylopo diz ter IA de
  texto desde 2018 e voz em produção desde **ago/2025**.
- **Resultados publicados (auto-reportados):** "48% de taxa de resposta ao SMS de IA, 3× a média
  do setor" e "25M+ conversas de texto". Há um caso de cliente (Jeff Cook Real Estate, "291 live
  conversions") e anedotas do tipo "o lead elogiou o Jesse da equipa — o Jesse era a IA".
  Fonte: páginas da própria Ylopo (excertos de pesquisa; site não abriu daqui) —
  [ylopo.com/ai-agents-lead-nurture](https://www.ylopo.com/ai-agents-lead-nurture),
  [blog: AI voice + AI texting](https://www.ylopo.com/blog/how-real-estate-teams-are-using-ai-voice-ai-texting-to-convert-more-leads)
  (consultado 23/11/2026).
- **Crítica a reter:** o caso "o cliente não percebeu que era IA" é apresentado como mérito;
  na UE, depois de 02/08/2026, é precisamente o que o **art. 50.º do AI Act** proíbe (ver §4).

**Structurely — "Aisa Holmes"** · EUA
- **O que faz:** ISA de IA por SMS e email (e voz em versões recentes) que qualifica por prazo,
  orçamento e motivação, faz nurturing longo e marca reuniões. Integra com CRMs (Follow Up Boss,
  etc.).
- **Preço:** fontes de terceiros divergem — US$ 179 a 1 499/mês, setup de US$ 1 500 numa delas, e
  um modelo de **créditos** introduzido em 2026 (não confirmado na página do fabricante).
  [aitoolsbakery — pricing 2026](https://aitoolsbakery.com/?p=14014),
  [aiproductivity.ai](https://aiproductivity.ai/pricing/structurely/) (2026).
- **Críticas:** Trustpilot 2,7/5 com 7 avaliações (suporte, integrações com CRM); G2 "o bot
  baralha-se de vez em quando com perguntas"; "só compensa acima de ~200 leads/mês".
  [Trustpilot](https://nz.trustpilot.com/review/structurely.com),
  [G2](https://www.g2.com/products/structurely/reviews) (consultado 23/11/2026).
- **Passagem ao humano:** não documentada publicamente; o caso da Zendesk refere *bot-to-human
  handoff* via Sunshine Conversations. [Zendesk](https://www.zendesk.com/blog/structurely-realtor-chatbots/).

**Verse.ai (ex-Agentology)** · EUA
- **Modelo híbrido:** motor de IA + "concierges" humanos. Desde US$ 5 000/mês
  ([Software Advice](https://www.softwareadvice.com/crm/agentology-profile/)).
- **Crítica mais útil de todo o capítulo:** a queixa recorrente nas avaliações é a **passagem ao
  humano** — clientes esperavam que, quando o lead respondesse, falasse com uma pessoa, e
  desconfiavam que continuava a ser o bot; "templates muito genéricos", "conversão baixa, fazíamos
  melhor sozinhos". [G2 Verse.ai reviews](https://www.g2.com/products/verse-io/reviews)
  (avaliações sobretudo 2018–2021).

**Roof AI** · EUA (desde 2016)
- Chatbot de site para redes de mediação (Long & Foster "Holmes", BHHS Fox & Roach). Ativo, sem
  notícia de aquisição. O CEO defendeu em 2024 que um LLM puro precisa de **guardrails** — o bot
  não deve inventar sobre anúncios nem responder fora do domínio.
  [Real Estate News, 12/06/2024](https://www.realestatenews.com/2024/06/12/roof-ai-ceo-on-chatgpt-and-the-need-for-guardrails),
  [Long & Foster](https://newsroom.longandfoster.com/news/long-foster-real-estate-partners-with-roof-ai/).

**Lofty — AI Assistant, AI Sales Agent, "Cowork"** · EUA
- Assistente com **sub-agentes especializados** ("AI Workforce"): responder a SMS, marcar
  visitas, resumos matinais de leads, notificações. O **AI Sales Agent** (qualificação por chat,
  SMS e email) é cobrado à parte (~US$ 60+/mês segundo terceiros). Em jul/2026 lançou o
  "Cowork" e um "Homeowner Agent".
  [lofty.com/ai/copilot](https://lofty.com/ai/copilot),
  [Luxury Presence — Lofty review 2026](https://luxurypresence.com/blogs/lofty-review),
  [RISMedia 28/07/2026](https://www.rismedia.com/2026/07/28/lofty-expands-agentic-ai-os-real-estate-cowork/).
- **Números do fabricante:** "até 20 h/mês poupadas", "70% das perguntas resolvidas" — não
  verificados. G2 4,3/5 (399 avaliações); crítica: curva de aprendizagem das automações.

**Follow Up Boss (Zillow)** · EUA
- **Smart Messages** (jun/2025): respostas sugeridas por IA a SMS e email, dentro do fluxo, com
  base no histórico do lead (chamadas, SMS, emails, atividade); **incluído sem custo extra**.
  Priorização de leads por IA e integração com mensagens da Zillow em 2025.
  [FUB updates — Smart Messages](https://updates.followupboss.com/en/smart-messages-ai_suggested-text-and-email-replies-built-into-your-workflow),
  [FUB 2025 Wrapped](https://www.followupboss.com/blog/2025-wrapped).
- Leitura: o padrão vencedor nos copilotos é **"sugerir, o humano envia"** — não automação cega.

**Rechat — Lucy** · EUA (lançada jul/2025)
- Copiloto dentro do CRM/transação: rascunhos de resposta, campanhas, sites de imóvel, leitura
  de formulários de transação, priorização de leads; em 2026 campanha "Hey Lucy" por **voz**
  (atualizar CRM, relatórios de mercado).
  [HousingWire](https://www.housingwire.com/articles/rechat-launches-lucy-an-ai-agent-assistant/),
  [Inman 23/07/2025](https://www.inman.com/2025/07/23/meet-lucy-an-ai-assistant-thats-all-about-empowering-agents/),
  [Inman 21/07/2026](https://www.inman.com/2026/07/21/rechat-hey-lucy-ad-campaign/).

**Compass — AI Assistant** · EUA (jul/2026)
- Assistente conversacional sobre a plataforma: atualizar fichas de clientes, rascunhar
  follow-ups, criar pesquisas guardadas, gerar listas de potenciais vendedores e coleções de
  imóveis para compradores. ~15 000 agentes e 97 000 conversas nas primeiras semanas
  (auto-reportado). [Fortune 23/09/2026](https://fortune.com/2026/09/23/compass-ai-assistant-real-estate-agents),
  [Real Estate News 21/07/2026](https://www.realestatenews.com/2026/07/21/compass-unveils-ai-assistant-brokerage-comparison-tool-launches).

**Realtor.com — RealAssist** · EUA
- Consumidor (beta jun/2026, Gemini/Google Cloud): pesquisa em linguagem natural, perguntas
  sobre o anúncio, amenidades, deslocações, escolas, *affordability*. Agentes (06/10/2026):
  preferências do comprador, **resumos diários por cliente e próximos passos sugeridos — o
  agente revê e aprova cada tarefa**; adoção de 10% dos agentes à data.
  [Google Cloud Press Corner 02/06/2026](https://www.googlecloudpresscorner.com/2026-06-02-Realtor-com-R-Launches-RealAssist-TM-AI-A-Completely-Reimagined-Way-to-Find-A-Home),
  [Inman 06/10/2026](https://inman.com/2026/10/06/realtor-com-adds-realassist-ai),
  [PYMNTS 2026 — "The AI House Hunter Meets a Skeptical Market"](https://www.pymnts.com/artificial-intelligence-2/2026/the-ai-house-hunter-meets-a-skeptical-market/).

**Zillow — app no ChatGPT** · EUA (06/10/2025)
- Ativa-se escrevendo "Zillow…" no ChatGPT; listagens reais com os mesmos filtros e dados IDX;
  os dados mostrados **não passam para o ChatGPT**; salvaguardas de *fair housing*; ainda sem
  obra nova nem visitas 3D. (Distinto do plugin de 2023, que não usava dados da Zillow.)
  [Zillow Group — launch](https://www.zillowgroup.com/news/zillow-becomes-first-real-estate-app-in-chatgpt),
  [Zillow — fair housing](https://www.zillowgroup.com/news/zillow-in-chatgpt-fair-housing).

**Redfin — Ask Redfin + pesquisa conversacional** · EUA
- Ask Redfin (beta 07/03/2024): perguntas sobre o anúncio que se está a ver (59% das perguntas);
  93% dos utilizadores voltam à app numa semana; recusa perguntas com risco de discriminação.
  Pesquisa conversacional (13/11/2025, construída com a **Sierra**): utilizadores 47% mais
  propensos a pedir visita (auto-reportado).
  [Redfin — Ask Redfin nationwide](https://redfin.com/news/ask-redfin-launches-nationwide),
  [Redfin — conversational search](https://www.redfin.com/news/redfin-debuts-conversational-search-to-reinvent-how-people-find-homes/).

**idealista — app no ChatGPT** · ES/PT/IT (13/03/2026)
- Primeiro portal espanhol com app no ChatGPT: pesquisar, comparar e resumir imóveis por
  conversa; gratuita; habitações, quartos, garagens, lojas e terrenos. Também em Portugal.
  [idealista news 13/03/2026](https://www.idealista.com/en/news/property-for-sale-in-spain/2026/03/13/887103-idealista-launches-its-app-on-chatgpt),
  [idealista.pt — app no ChatGPT](https://www.idealista.pt/news/node/74218).
- **Não encontrei** pesquisa conversacional própria do idealista fora do ChatGPT.

**Inmovilla by idealista — IA no WhatsApp** · PT/ES (2025–2026)
- Assistente de IA **no WhatsApp do agente**: regista contactos a partir de mensagens em
  linguagem natural, atualiza o CRM e envia lembretes; **Qualificador de Leads por IA** que, ao
  chegar um lead de portal, manda mensagem WhatsApp ao cliente a qualquer hora.
  [idealista.pt — "WhatsApp + IA: o CRM imobiliário que trabalha sempre contigo"](https://www.idealista.pt/news/node/75745) (data exata não confirmada).

**ImmoScout24 — HeyImmo** · DE (21/10/2025), CH/AT (2026)
- Assistente gratuito (GPT-5) para compradores, inquilinos e proprietários: recomendações,
  estimativa de preço, simulação de financiamento, perguntas de seguimento. Na Suíça a pesquisa
  passou de "uma frase → filtros" para **diálogo contínuo** (21/05/2026). Sem métricas públicas.
  [ImmoScout24 press](https://www.immobilienscout24.de/unternehmen/news-medien/news/default-title/immoscout24-startet-kostenlosen-ki-assistenten-heyimmo/),
  [OpenAI — Scout24](https://openai.com/index/scout24),
  [SMG 21/05/2026](https://swissmarketplace.group/media-release/immoscout24-search-dialogue-en).

**Casafari — agentes de IA** · PT (sede em Lisboa)
- Dados de mercado em 20+ países; "agentic AI" no CRM (analisar imóveis, ordenar leads, criar
  conteúdos; **Presentation Builder** para angariação). Caso: Porta da Frente Christie's. Sem data
  de lançamento confirmada.
  [Casafari — agentic AI seller funnel](https://casafari.com/insights/agentic-ai-automates-seller-funnel-growth/),
  [caso Porta da Frente](https://casafari.com/case-studies/casafari-agentic-ai-luxury-real-estate-porta-frente-christies/).

**Porta da Frente Christie's — "Rachel"** · PT
- Assistente virtual 24/7 no site, faz triagem no primeiro contacto e explica imóveis
  visualmente; prémio de inovação (SIC Notícias/Expresso). A imprensa estrangeira associa à
  tecnologia da eSelf AI e a "US$ 100 M em vendas" a partir de leads gerados pelo agente
  (**não auditado**; as fontes não esclarecem se Rachel e o agente eSelf são o mesmo produto).
  [idealista.pt — IA na mediação](https://www.idealista.pt/news/node/66750),
  [Inman 13/03/2025](https://www.inman.com/2025/03/13/portuguese-real-estate-agent-inks-100m-in-sales-the-twist-its-a-bot/),
  [Fox Business](https://www.foxbusiness.com/real-estate/first-ever-ai-real-estate-agent-generates-100m-sales-portugal).

**RE/MAX Portugal — assistente do primeiro contacto** · PT (11/09/2026)
- No site, recolhe nome, contacto e localização (e, nalguns casos, características do imóvel,
  zona, objetivo) e **encaminha para a agência e o consultor certos**. A CEO sublinha que a IA
  complementa e não substitui a proximidade humana.
  [Marketeer](https://marketeer.sapo.pt/?p=422216), [Echo Boomer](https://echoboomer.pt/remax-lanca-chatbot-site-oficial/).
- Antecedente: ERA "vERA" no Messenger (2019). [ECO 27/11/2019](https://eco.sapo.pt/2019/11/27/vera-a-assistente-virtual-que-o-ajuda-a-comprar-casa).

**Metrovacesa — MiA** · ES (set/2025) — *a promotora mais parecida connosco em escala de
processo, não em tamanho*
- Agente conversacional de IA generativa (Google Cloud + Making Science) integrado no idealista,
  Fotocasa e site; 24/7; "contrasta com fontes autorizadas"; acompanha do primeiro contacto até à
  entrega; quando o comercial pega, a chamada já parte do cliente qualificado. Primeiros meses:
  "centenas de conversas", 65% começam por pedir informação de uma promoção/casa. Sem números de
  conversão.
  [Alimarket](https://www.alimarket.es/construccion/noticia/414282/metrovacesa-lanza-mia--su-agente-de-ia-que-ofrece-una-atencion-integral-personalizada-en-tiempo-real),
  [CIO España](https://www.cio.com/article/4063228/metrovacesa-lanza-mia-un-agente-virtual-conversacional-basado-en-ia-generativa.html).

**MRV&CO — Sofia (2024) e Mia (2025–26)** · BR (promotora de habitação)
- Sofia (Microsoft/OpenAI, marca Sensia): conversão de leads **20% → 40%**, ~R$ 100 M de VGV
  anual atribuído. [Microsoft News BR](https://news.microsoft.com/pt-br/mrv-dobra-a-conversao-de-seus-leads-com-a-sofia-um-chatbot-de-ia-generativa-com-tecnologia-microsoft/).
- Mia: ~130 mil atendimentos/mês; uma fonte (TI Inside, 15/01/2026) diz conversão **20% → 70%**
  e "50% das vendas originadas"; equipa de receção de leads reduzida de 100 para 20 pessoas
  (InvestNews). **Números de imprensa/empresa, não auditados**, e só uma fonte junta 20→70.
  [TI Inside](https://tiinside.com.br/15/01/2026/ia-eleva-conversao-de-leads-da-mrv-de-20-para-70-e-atende-130-mil-clientes-por-mes/),
  [InvestNews](https://investnews.com.br/tecnologia/chatbots-viram-corretores-virtuais-e-ganham-espaco-no-mercado-imobiliario/amp/).

**Tecnisa — Isa** · BR (promotora)
- Agente no WhatsApp: >19 mil atendimentos em 2025, **um terço dos leads qualificados online**;
  venda de R$ 2,7 M (primeiro contacto em set/2024 por WhatsApp; a IA identificou perfil
  investidor "sem prazo") e negociação >R$ 1 M fechada em 26 dias após **235 mensagens**.
  [Exame, fev/2026](https://exame.com/mercado-imobiliario/inteligencia-artificial-da-tecnisa-fecha-venda-de-imovel-de-r-18-milhao),
  [TI Inside 14/04/2025](https://tiinside.com.br/en/14/04/2025/ia-vende-apartamento-milionario-em-sao-paulo/).
- Leitura: ciclos longos (meses) e muitas mensagens — **memória por cliente** e
  **follow-up paciente** importam mais do que a "conversa perfeita".

**Lais (Lastro)** · BR
- IA de primeiro atendimento no WhatsApp para imobiliárias: boas-vindas, dúvidas, sugestão de
  imóveis, **pré-agendamento de visitas**, entrega do qualificado ao CRM. 1 000+ imobiliárias,
  5 M+ pessoas atendidas; "até +60% de conversão" (auto-reportado); Série A de R$ 85 M (Prosus).
  [Finsiders](https://finsidersbrasil.com.br/conteudo-de-marca/lais-supera-5-milhoes-de-pessoas-atendidas-e-inaugura-nova-fase-da-proptech-lastro/),
  [Startups.com.br](https://startups.com.br/negocios/proptechs/proptech-lastro-levanta-serie-a-de-r-85m-liderada-pela-prosus/).

**QuintoAndar — Julia e Domi** · BR
- "Julia" agenda ~**25 mil visitas/mês** há dois anos; "Domi" (19/08/2026) é a versão B2B para
  imobiliárias: atende no WhatsApp com a marca da imobiliária, recomenda imóveis, qualifica,
  organiza visitas e entrega **resumo de cada conversa**. Dado citado: **50–70% das mensagens que
  as imobiliárias recebem em anúncios ficam sem resposta**.
  [Mobile Time 19/08/2026](https://www.mobiletime.com.br/noticias/19/08/2026/ia-quintoandar-business/),
  [Canaltech](https://canaltech.com.br/mercado/nova-ia-do-quintoandar-recomenda-imoveis-e-marca-visitas-pelo-whatsapp/),
  [quintoandar.com.br/domi](https://quintoandar.com.br/domi).

**EliseAI** · EUA (arrendamento multifamiliar — o caso com mais dados públicos)
- 47,5% de todas as mensagens de *leasing* chegam **fora de horas** (61,7 M em 2025); visitas
  guiadas por IA: 1 950/mês num cliente, 37% fora de horas, 59% de comparência, 5% lead→contrato;
  com a Zillow, +43% de candidaturas (out/2025–abr/2026). Tudo auto-reportado.
  [EliseAI — 2025 review](https://eliseai.com/blog/a-year-to-remember-for-multifamily-eliseai),
  [Business Wire 11/06/2026](https://www.businesswire.com/news/home/20260611736825/en/),
  [caso Summit PM](https://eliseai.com/customer-stories/revolutionizing-the-self-serve-prospect-experience-at-summit-property-management-with-ai-guided-tours).

**Homebot** · EUA (pós-venda / proprietários)
- "Likelihood to Sell Score" (ML, prevê quem vende nos próximos 9 meses; "89% das vendas no top
  50% de score", auto-reportado) e assistente Homebot AI em beta (2026) que responde ao
  proprietário sobre valor da casa, capital próprio, refinanciamento.
  [Homebot — investing in AI](https://homebot.ai/blog/how-homebot-is-investing-in-ai),
  [Q2 2026 releases](https://homebot.ai/blog/q2-2026-product-releases).

**BoldTrail (ex-kvCORE, Inside Real Estate)** — "Smart Assistant" de rascunhos de SMS/email com
dados do MLS e automação comportamental (dispara sequências quando o lead vê imóveis); críticas
de personalização limitada. [Help Inside RE](https://help.insiderealestate.com/en/articles/8219516-kvcore-smart-assistant-powered-by-ai).

**Plataformas de voz (horizontais)**
- **Retell AI:** "liga a cada lead em 60 s, qualifica orçamento/prazo/financiamento e marca
  visitas"; o único caso imobiliário (ISpeedToLead) é de um *marketplace* de vendedores para
  investidores — chamadas em <2 min após o formulário. Métricas imobiliárias claras: **não
  encontradas**. [Retell — real estate](https://www.retellai.com/industry-pages/real-estate),
  [caso ISpeedToLead](https://www.retellai.com/case-study/ispeedtolead-retell-ai-lead-response-case-study).
- **Synthflow:** caso Kleindienst Group (promotor, Dubai) — "outreach 10×", sem métricas de
  tempo de resposta; *live transfer* e multi-tenant.
  [Synthflow — Kleindienst](https://synthflow.ai/customer-stories/kleindienst-group-scaled-lead-outreach-10x-with-voice-ai).
- **Vapi:** US$ 0,05/min só de orquestração; custo real ~US$ 0,08–0,13/min com STT, LLM, TTS e
  telefonia; ZDR +US$ 1 000/mês. [Retell — Vapi pricing](https://www.retellai.com/blog/revealing-vapi-ai-pricing),
  [Telnyx — Vapi pricing](https://telnyx.com/resources/vapi-pricing) (2026).

### 1.3 Padrões que se repetem

1. **Velocidade + persistência, não eloquência.** Todos vendem "responder em segundos, 24/7" e
   "seguir durante meses". Os casos brasileiros com mais vendas (Tecnisa, MRV) têm ciclos de
   meses e centenas de mensagens.
2. **A passagem ao humano é o ponto onde os produtos falham** (Verse.ai) e onde os melhores se
   destacam (Ylopo *live transfer*, Metrovacesa "o comercial já parte do qualificado", Domi
   "resumo de cada conversa").
3. **Os copilotos sugerem; o humano aprova** (FUB Smart Messages, Realtor.com "rever e aprovar
   cada tarefa").
4. **Os portais estão a mudar a expectativa do comprador** — perguntar em linguagem natural (Zillow,
   idealista no ChatGPT, HeyImmo). Um formulário de contacto parece antiquado ao lado disso.
5. **Números quase sempre auto-reportados.** Nenhum dos resultados acima é auditado; os mais
   credíveis são os que vêm com contexto (MRV/Microsoft 20→40%, EliseAI com cliente nomeado).

> **O que isto significa para o Painel Temático** *(inferência)*
> - O nosso caso não é o de um portal nem o de uma rede de mediação com milhares de leads: é o de
>   uma **promotora com poucos projetos e frações**, onde cada lead vale muito. Os modelos mais
>   próximos são **Metrovacesa MiA, Tecnisa Isa e MRV** — agente de primeiro contacto e
>   acompanhamento longo, **sempre a passar a um comercial nomeado**.
> - Comprar uma ISA americana (Structurely, Ylopo, Verse) não serve: não falam PT-PT, não
>   conhecem o nosso CRM e assumem SMS/MLS. A peça de valor somos nós a ligá-la aos nossos dados
>   (frações, estado, preços, atualizações de obra).
> - O "quick win" de copiloto é o padrão FUB/Realtor.com: **rascunho + resumo + próximo passo,
>   aprovado pelo comercial**.

