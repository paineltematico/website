# 07 — Onde se aprende isto: eventos, entrevistas, comunidades, skills e MCP servers

> Capítulo de pesquisa para o Painel Temático (construção e promoção imobiliária, Braga).
> Eixo: onde o setor discute IA, CRM e novas formas de vender; que *skills* de análise criar
> para o Claude Code; que MCP servers ligar. Pesquisa feita a **23/11/2026**.

## Notas de método (ler antes de citar)

- **O que funcionou:** ~70 pesquisas web (motor de pesquisa em modo standard e extended), a
  **API do GitHub** (`gh api search/repositories` e `search/code`, estrelas e datas lidas a
  23/11/2026), a **API do registo oficial de MCP** (`registry.modelcontextprotocol.io/v0/servers`,
  consultada diretamente) e a leitura de READMEs em `raw.githubusercontent.com`.
- **O que não funcionou:** a abertura direta de páginas (WebFetch) falhou para quase todos os
  sites de notícias (idealista.pt, theportugalnews.com, marketeer.sapo.pt, inman.com,
  jornaldenegocios.pt, vidaimobiliaria.com, reddit.com, smithery.ai, glama.ai, pulsemcp.com).
  Estão fora da rede permitida nesta sessão. **As citações de imprensa vêm dos excertos devolvidos
  pelo motor de pesquisa**, não da página original. Estão marcadas *(excerto)* e devem ser
  confirmadas num browser antes de uso público.
- **Orçamento de pesquisa esgotado** a meio da secção 3 (limite de 200 pesquisas por turno,
  partilhado com os outros agentes desta sessão). Por isso a **secção 3 (fóruns) ficou
  incompleta**: não li threads do Reddit/BiggerPockets/HN. Não invento threads. Ficam sinais
  indiretos e um protocolo de escuta para a próxima sessão.
- **Factos ≠ inferências.** Factos têm link e data. As leituras para o Painel Temático estão nas
  caixas *O que isto significa*. Números de fabricantes (vendas geradas por bots, adoção) são
  **auto-reportados**.
- Capítulos irmãos com que este se cruza: `01` (concorrência), `02` (CRM/portais/dados),
  `03` (agentes de IA — inclui o AI Act, §4), `06` (legal). Não repito o que lá está.

---

## Resumo

1. **2026 foi o ano da "IA agêntica" nos palcos** — Inman Connect Nova Iorque (fev/2026) e
   San Diego (jul/2026), MIPIM (mar/2026), Tom Ferry Summit. O tema deixou de ser "escrever
   anúncios com ChatGPT" e passou a ser **agentes que tratam do follow-up, do CRM e do
   primeiro contacto**.
2. **Em Portugal o discurso é "IA sim, mas o negócio é de proximidade e confiança"**: editorial
   do SIL 2026, Predimed ("nenhuma máquina criará os laços que criamos com clientes"), RE/MAX
   (IA para eficiência, não para substituir o consultor). O regulador também já usa IA (IMPIC,
   na Convenção APEMIP de 30/06/2026) e a **nova lei da mediação** traz formação obrigatória.
3. **A RE/MAX Portugal pôs IA no primeiro contacto** (assistente no site que faz a triagem e
   encaminha para o consultor certo — Marketeer, 11/09/2026). A **Porta da Frente Christie's**
   tem a "Rachel" (agente virtual em vídeo) desde 2024–25 e diz ter gerado 100 M USD em vendas
   a partir dos leads do bot (número da empresa, não auditado).
4. **O idealista tem app oficial dentro do Claude e do ChatGPT, com Portugal e português**
   (documentação no GitHub do idealista, outubro/2026). Os compradores já pesquisam casas *dentro*
   dos assistentes de IA. A app é só de leitura e diz **expressamente** que não serve para
   análise de mercado nem recolha em massa.
5. **A Casafari publicou MCP servers oficiais** (comparáveis, tendências por zona, análise de
   agências e agentes — registo oficial, 18/10/2026). É a via **licenciada** para benchmark de
   preços e concorrência, em vez de scraping de portais.
6. **Já há portais e sites a publicar o seu próprio MCP server** para serem encontrados por
   agentes de IA: em Portugal, o **flatin.pt** (obra nova + IMT/IMI); lá fora, sites com
   ferramenta de "pedido de contacto → passagem a humano". É um canal novo de aquisição que
   nenhuma rede portuguesa explora de forma visível.
7. **O registo oficial de MCP tem mais de 40 000 servidores** (contagem truncada às 40 000
   entradas a 23/11/2026). Muito ruído e muito servidor pago à chamada. A curadoria e a
   segurança passam a ser o trabalho principal.
8. **WhatsApp é o canal crítico e o MCP mais perigoso**: não encontrei MCP oficial da Meta. Os
   populares usam a conta pessoal por engenharia inversa (risco de banimento e de *tool
   poisoning*, com caso público em 2025). Para nós, a integração com a WhatsApp Business
   Cloud API deve ser **nossa**, no backend, e não um MCP de terceiros.
9. **Skills de referência existem e são reutilizáveis**: `anthropics/skills` (★199 k),
   `coreyhaines31/marketingskills` (★62 k, 50+ skills de marketing), e repositórios imobiliários
   pequenos mas úteis como molde (`ai-realestate-claude`, `cre-agent-skills`,
   `realtor-claude-skills`). Nenhum é português nem de promotor. **As 15 skills propostas na
   §4 cobrem esse buraco** e assentam nos dados que já temos (projetos, unidades, leads,
   visitas, atualizações de obra).
10. **O diferenciador mais barato que encontrei é o "relatório de obra para o comprador"**.
    Os dados de progresso já existem no CARRINHO, na mesma base Supabase. Nenhuma mediadora
    consegue dar isto, porque não constrói.

---

## 1. Conferências e eventos (2024–2026)

### 1.1 Portugal

| Evento | Última edição | O que se discutiu sobre IA / CRM / marketing | Próxima edição | Relevância |
|---|---|---|---|---|
| **SIL — Salão Imobiliário de Portugal** (Fundação AIP, FIL Lisboa) | 29.ª ed., **23–25/04/2026**, com a Tektónica (~45 000 m²) | O gestor do evento, Sérgio Runa, destacou a presença de **PropTech e *smart building*** como reflexo da "crescente incorporação da tecnologia e da IA no setor" *(excerto)*. A **iad Portugal** organizou um debate sobre **IA e mediação** no SIL Hub Stage a 24/04 *(excerto, diarioimobiliario.pt)*. Editorial de balanço: "num contexto em que tanto se fala de IA, o SIL reforça que o imobiliário continua a ser um negócio de **proximidade, confiança e relação direta**" *(excerto, The Portugal News, 24/04/2026)*. Em 2025 (28.ª ed., 10–12/04/2025, ~33 500 visitantes) o SIL organizou pela primeira vez o setor **PropTech** de forma integrada. Em 2024 houve uma sessão sobre "IA ao serviço do setor" no SIL Investment Pro (com a APPII) | **22–24/04/2027**, FIL (idealista/news) | **Alta**: é a montra nacional para compradores e o sítio onde as redes mostram tecnologia |
| **Convenção APEMIP IMOCIONATE** | 4.ª ed., **30/06/2026**, Centro de Congressos do Estoril, ~700 profissionais | Agenda: novo pacote fiscal, intermediação financeira e **IA**, com um painel sobre **IA e digitalização da atividade** *(excerto)*. O presidente do **IMPIC**, Fernando Batista, disse que o instituto já usa ferramentas de IA para ganhar rapidez e que a prioridade é **combater a mediação ilegal**. Em paralelo, o IMPIC e a AT vão cruzar dados (idealista/news). A APEMIP (presidente Patrícia Barão, mandato 2026–28, eleita com 72%) defende a **nova lei da mediação, com formação obrigatória**. A convenção assinou um memorando com a **Suncoast Tampa Association of REALTORS** (EUA) | Não confirmada (habitual: junho) | **Média**: perceber os mediadores, que são parceiros de venda e concorrência |
| **Portugal Real Estate Summit** (Iberian Property, Estoril) | **14–15/09/2026**, 10.ª ed., esgotado; abertura do ministro Miguel Pinto Luz; Blackstone no painel final. 2025: 15–16/09, >400 participantes, ~20 países | Investimento, habitação acessível, PPP, **data centres e procura gerada pela IA** (lado infraestrutura). **Não encontrei sessões sobre IA na venda** | Não confirmada (padrão: setembro) | **Baixa**: público de investidores institucionais |
| **APPII** (promotores e investidores) | COPIP 2026, que celebrou os 35 anos da associação (data não confirmada) | Hugo Santos Ferreira reeleito presidente (25/06/2025). Manuel Maria Gonçalves é o CEO executivo. **Develotech Centre**: a APPII nota que a maioria das *proptech* que entram em Portugal não está focada na promoção. APPII Academy em parceria com a Católica-Lisbon. **Não encontrei um congresso APPII dedicado a IA** | Não confirmada | **Média**: é a associação do nosso lado (promotor) |
| **"Portugal Proptech"** | — | **Não confirmei** a existência de uma associação ou evento com este nome. A PropTech aparece como setor dentro da APPII e do SIL | — | — |
| **Web Summit** (Lisboa) | 2025 (nov/2025); 2026 a **9–12/11/2026** (já decorreu) | Em 2025, o tema central foram os **agentes de IA** ("a IA entrou na fase industrial", SQLI). Do lado imobiliário: a **Avendo** (CEO Roland Schüpfer) mostrou uma plataforma de IA que lê a intenção do comprador, liga compradores a agentes e identifica potenciais vendedores (resumo oficial Web Summit). **Não encontrei uma trilha de imobiliário** em 2026 | nov/2027 (não confirmado) | **Baixa–média**: ver *startups* e fornecedores, não clientes |
| **Outros** | Concreta (Exponor, Porto, **18–21/11/2026**, construção). Imobinvest (Alfândega do Porto, 17–19/09, **ano não confirmado**). Portugal Real Estate Expo (Cascais, 13/11/2026, **não confirmado**). Portugal GRI 2026 e IE "Portugal Real Estate Outlook 2026" (datas não confirmadas). Evento "A Nova Mediação Imobiliária" no Algarve (cobertura de 13/04 e 02/06/2026, com painel de IA; organizador **não confirmado**) | — | — | Concreta é **média** (somos construtores) |

### 1.2 Internacional

| Evento | Última edição | O que se discutiu (IA, CRM, novas formas de vender) | Próxima edição |
|---|---|---|---|
| **Inman Connect New York** | jan–fev/2026 | Brad Inman abriu a apresentar a IA como a "**5.ª revolução industrial**" (Inman, 03/02/2026). A **IA agêntica** foi o tema dominante: "colegas digitais" que coordenam fluxos, fazem follow-up e correm processos de rotina. A **segurança de dados** dos clientes foi a principal preocupação. Os fornecedores competem por "ecossistemas" de IA completos. Jeff Lobb (SparkTank Media) avisou que a **pesquisa por IA já está a mudar a forma como os clientes encontram agentes, e a maioria não está preparada** *(excerto, Inman, 03/03/2026 e 05/02/2026)* | **26–28/01/2027**, New York Hilton Midtown |
| **Inman Connect San Diego** | 28–30/07/2026 (as fontes divergem: 29–31) | Lema "The Reset Is Here". Lançamentos: **Lofty Cowork** (espaço de trabalho com IA agêntica), **House.ai** (prontidão financeira do comprador), "AI teammate" da **Lone Wolf**. Zack Kass (ex-OpenAI): o custo da habitação é um problema de política, não de tecnologia (Inman, 02/08/2026). Em 2025 (30/07–01/08/2025), Brad Inman disse que a IA "vai eliminar o debate do Clear Cooperation" ao levar as casas diretamente ao consumidor (Inman, 31/07/2025) | jul/2027 (não confirmado) |
| **NAR NXT** (National Association of REALTORS) | 2025: Houston, 14–16/11/2025. 2026: Nova Orleães, 06–08/11/2026 | 2025: trilha *Tech & Innovation*; sessão "AI-Driven Success" (ChatGPT para emails, CRM e briefings); aula de ChatGPT da Realtor.com. 2026: John Rogers sobre IA — "**trust but verify**" (Inman, 09/11/2026); fórum "Risk or Reward? How AI Is Reshaping the Real Estate Industry"; sessão "Protecting Clients and Yourself in the Age of AI". A NAR publicou também guias do tipo "o que pode e não pode pôr na IA" | nov/2027 (não confirmado) |
| **RE/MAX R4** | **22–25/02/2026**, MGM Grand, Las Vegas (>4 200 participantes de 55+ países, segundo a RE/MAX) | **SkyView**: assistente de IA da marca, com versão para agentes e para *broker/owners* (recrutamento e retenção), "em breve". Também **MAX/Refer** (referências com IA), **AI Visualizer** (o comprador personaliza a casa na página do anúncio) e melhorias de IA nos sites MAX/Marketing. O CEO Erik Carlson apresentou a "nova direção" (Real Estate News, 27/02/2026). **Claims de comunicado, por verificar** | **22–25/02/2027**, MGM Grand (uma listagem diz 21–24) |
| **Keller Williams — Family Reunion / Mega Camp** | FR 2026: Atlanta, fev/2026. Mega Agent Camp 2025: 11–14/08/2025 | Mega Camp 2025: "**IA e redes sociais no centro do palco**". A KW lançou o seu *playbook* de IA, com convidados da equipa do Google Gemini (Real Estate News, 09/08/2025). FR 2026: o CEO Chris Czarnecki descreveu o Command como tendo começado como "a little bit of a closed-end system". Agora há o **Command Launchpad**, para integrar ferramentas de IA de terceiros por API (Real Estate News, 23/02/2026). Gary Keller: a IA só vai substituir trabalhos que não "trazem valor"; avisou contra a "over exuberance" do investimento em IA (RISMedia, 24/02/2026). Dez/2025: Patrick Ferry nomeado para conduzir o crescimento "AI- and online brand-first" | FR 2027: **19–22/02/2027**, Houston. Mega Camp 2026 já decorreu (17–20/08/2026, San Antonio), com blocos sobre "lead gen com IA" |
| **MIPIM** (Cannes) | **10–13/03/2026** | As expectativas sobre IA estão à frente da adoção (Marygold Studio). "**Dados antes de IA**": o setor continua pouco digitalizado (neext/Drees & Sommer com a Schindler). O foco passou dos *chatbots* para *leasing* preditivo, preços dinâmicos e eficiência (HyperIn). O *keynote* de abertura foi sobre a aceleração da IA e o controlo responsável (CoStar). **Fontes secundárias, maioria de fornecedores** | **15–19/03/2027** |
| **SIMA** (IFEMA, Madrid) | ~20–23/05/2026 | **SIMA Tech** e Proptech Expo (IA, *big data*, digitalização; >70 *proptech* na edição anterior). A Homming lançou um "Agente IA" integrado no seu software de gestão de arrendamento (merca2, 19/05/2026). Portugal foi também **país convidado do The District** (IFEMA, 22–24/09/2026) | mai/2027 (não confirmado) |
| **Tom Ferry Summit** / **HousingWire AI Summit 2026** | 2026 | "Como a IA agêntica roubou o protagonismo no Tom Ferry Summit" (Luxury Presence, data não confirmada). HousingWire AI Summit 2026: "A IA não vai substituir o agente. Vai expor o que não está preparado"; caso Epique, "da experiência à adoção" | — |

**Vídeos de *keynotes*:** não consegui confirmar links de vídeo nesta sessão. As páginas de
eventos não abriram. Fica como pendente.

### 1.3 Calendário útil (próximos 12 meses)

| Data | Evento | Ação sugerida |
|---|---|---|
| 26–28/01/2027 | Inman Connect NY | Seguir à distância (recaps da Inman e da Real Estate News) |
| 19–22/02/2027 | KW Family Reunion (Houston) | Seguir as novidades do Command/Launchpad (modelo de CRM aberto a IA) |
| 22–25/02/2027 | RE/MAX R4 (Las Vegas) | Ver se o SkyView chega a Portugal (a RE/MAX PT já tem assistente) |
| 15–19/03/2027 | MIPIM (Cannes) | Só recaps |
| **22–24/04/2027** | **SIL (FIL, Lisboa)** | **Visitar** (as conferências e o SIL Hub Stage) e avaliar a presença com um projeto |
| mai/2027 (n/c) | SIMA (Madrid) | Opcional, se houver projeto para comprador espanhol |
| jun/2027 (n/c) | APEMIP IMOCIONATE | Ir, se a venda passar por mediadores parceiros |
| set/2027 (n/c) | Portugal Real Estate Summit | Baixa prioridade |

> **O que isto significa para o Painel Temático**
> - **Inferência:** o que se ouve nos palcos de 2026 cabe em três ideias. (1) A IA passou do
>   *conteúdo* para a *operação*: follow-up, CRM, primeiro contacto. (2) "Dados antes de IA". (3) A
>   confiança e a proximidade continuam a ser o produto. Um promotor pequeno ganha nas três se
>   tiver **dados limpos** (unidades, estados, leads), **resposta imediata** e **transparência
>   de obra**. Não precisa de ir a Las Vegas para isso.
> - **Ir ao SIL 2027** (22–24/04) é o único evento obrigatório. Os outros resolvem-se com recaps:
>   ler a Inman e a Real Estate News nas semanas de ICNY, R4 e FR.
> - O **IMPIC já usa IA para fiscalizar** e vai cruzar dados com a AT. Qualquer agente de IA
>   nosso que fale com clientes tem de respeitar à letra as regras de mediação e de anúncio
>   (ver cap. 06). Não pode parecer mediação feita por quem não tem licença AMI.

---

## 2. Entrevistas e podcasts

### 2.1 Líderes em Portugal — o que disseram sobre IA, tecnologia e consultores

| Quem | Onde / quando | Ideia-chave | Fonte |
|---|---|---|---|
| **Beatriz Rubio**, CEO RE/MAX Portugal | Executive Digest (artigo de opinião; data não confirmada) | O setor atravessa uma transformação profunda impulsionada pela IA, vista com otimismo. A RE/MAX tem apostado na **formação contínua dos consultores em ferramentas digitais e IA** para otimizar processos. A IA "já não é apenas uma tendência, mas uma realidade que transforma irreversivelmente o setor" *(excerto)* | [Executive Digest](https://executivedigest.sapo.pt/?p=600599) |
| **RE/MAX Portugal** (lançamento) | Marketeer, 11/09/2026 (o formato da data é ambíguo: pode ser 09/11) | Assistente virtual no site, **desenvolvido internamente**: pede nome, contacto e localização, pergunta se quer comprar, vender, arrendar ou avaliar e **encaminha para a agência e o consultor certos** entre mais de 11 000 consultores *(excerto; também Echoboomer)* | [Marketeer](https://marketeer.sapo.pt/?p=422216) · [Echoboomer](https://echoboomer.pt/remax-lanca-chatbot-site-oficial/) |
| **Patrícia Costa**, diretora de marketing RE/MAX PT | Marketeer, "5 minutos de marketing", 23/07/2026 | A tendência sobrevalorizada é a **produção massiva de conteúdo**. A IA acelera tudo, mas torna "muito mais fácil produzir coisas médias que parecem boas" *(excerto, paráfrase)* | [Marketeer](https://marketeer.sapo.pt/5-minutos-de-marketing-com-patricia-costa-da-re-max/) |
| **Ricardo Sousa**, CEO Century 21 Portugal e Espanha | Marketeer, 01/07/2026 | A comunicação imobiliária deve focar-se menos na casa isolada e mais na **experiência completa das pessoas**. Os compradores já usam IA na pesquisa inicial *(excerto)*. Contexto: a **Finance21** automatiza a intermediação de crédito, com meta de 1 000 M€ intermediados em 2026 (RTP/Lusa). A faturação de 2025 subiu 28%, para 150 M€ (DN/Lusa, fev/2026) | [Marketeer](https://marketeer.sapo.pt/mais-dados-mais-ruido-mais-exigencia-como-o-marketing-imobiliario-evoluiu-em-portugal/) · [RTP](https://www.rtp.pt/noticias/economia/century-21-espera-atingir-1000-me-em-2026-em-credito-a-habitacao-intermediado_n1674957) |
| **Mariana Coimbra**, diretora de marketing ERA Portugal | Marketeer, 01/07/2026 | O **consumidor** é o principal motor da mudança no marketing imobiliário *(excerto)* | idem |
| **Carolina Xavier e Sousa**, iad Portugal | Marketeer (opinião, 2026) | "A Odisseia do consultor imobiliário": o caminho é a **confiança** *(excerto)* | [Marketeer](https://marketeer.sapo.pt/?p=424065) |
| **Miguel Ribeiro**, fundador da Predimed | idealista/news (2025) | "**Nenhuma máquina criará os laços que criamos com clientes**". "Num mundo cada vez mais virtual, o caminho é ser cada vez mais humanos" *(excerto)* | [idealista/news](https://www.idealista.pt/news/node/69926) |
| **Miguel Silva**, Head of IT da Porta da Frente Christie's | idealista/news (2025) | A IA "está a criar oportunidades de negócio". A **Rachel** é apresentada como a primeira assistente virtual imobiliária em Portugal, pensada ~3 anos antes e premiada (Prémios do Imobiliário SIC Notícias/Expresso, Inovação na Mediação) *(excerto)* | [idealista/news](https://www.idealista.pt/news/node/66750) |
| **João Cília**, CEO da Porta da Frente Christie's | Fox Business / Inman, 13/03/2025 | O agente de IA em vídeo (tecnologia eSelf AI) terá gerado **100 M USD** em vendas a partir dos leads, com "great results" desde o teste ao vivo. A Inman tratou o número com ceticismo. A empresa criou um **comité de IA** com todos os departamentos, não só o IT (caso Casafari) | [Inman](https://www.inman.com/2025/03/13/portuguese-real-estate-agent-inks-100m-in-sales-the-twist-its-a-bot/) · [Casafari](https://casafari.com/case-studies/casafari-agentic-ai-luxury-real-estate-porta-frente-christies/) |
| **ZOME** | Executive Digest / 4gnews (data **não confirmada**) | Integrou o **ChatGPT na pesquisa de imóveis** do zome.pt, "a primeira rede" a fazê-lo. CEO Talk: futuro "apoiado na tecnologia, mas sobretudo nas pessoas". **Não encontrei entrevista de 2025–26 sobre IA** | [Executive Digest](https://executivedigest.sapo.pt/?p=409626) · [CEO Talk](https://executivedigest.sapo.pt/?p=508180) |
| **ERA Portugal — Rui Torgal**; **KW Portugal** | — | **Não encontrei** entrevistas de 2025–26 sobre IA (pesquisa feita, sem resultado relevante) | — |
| **Fernando Batista**, presidente do IMPIC | Convenção APEMIP, 30/06/2026 | O IMPIC já usa IA. O foco é a mediação ilegal | [idealista/news](https://www.idealista.pt/news/node/76312) |
| **Caetano de Bragança**, JLL | JLL (opinião) | A IA está a empurrar o imobiliário para "um período de mudança sem precedentes" *(excerto)* | [JLL](https://www.jll.com/pt-pt/insights/como-a-inteligencia-artificial-vai-transformar-o-setor-imobiliario-e-as-cidades-portuguesas-nos-proximos-anos) |

### 2.2 Vozes internacionais (2025–2026)

| Quem | Ideia | Fonte / data |
|---|---|---|
| Brad Inman | A IA é a 5.ª revolução industrial. "Os modelos antigos estão a partir-se" | [Inman, 03/02/2026](https://www.inman.com/2026/02/03/brad-inman-were-entering-the-5th-industry-revolution/) |
| Jeff Lobb (SparkTank) | A pesquisa por IA muda como os clientes encontram agentes, e a maioria não está pronta | [Inman, 05/02/2026](https://www.inman.com/2026/02/05/staying-authentic-while-getting-found-in-the-new-era-of-ai-search/) |
| Gary Keller (KW) | A IA só substitui trabalho que não acrescenta valor. Cuidado com a "over exuberance" | [RISMedia, 24/02/2026](https://www.rismedia.com/2026/02/24/gary-keller-on-thinly-veiled-private-listing-pitches-the-fed-and-the-big-circle-of-ai/) |
| Chris Czarnecki (KW) | O Command passou de sistema fechado a plataforma com APIs (Launchpad) para IA de terceiros | [Real Estate News, 23/02/2026](https://www.realestatenews.com/2026/02/23/keller-williams-opens-command-as-investor-ties-deepen) |
| Zack Kass | A IA não resolve sozinha o custo da habitação | [Inman, 02/08/2026](https://www.inman.com/2026/08/02/ai-resets-and-everything-else-you-missed-in-san-diego-the-download/) |
| John Rogers (NAR NXT 2026) | IA: "trust but verify" | [Inman, 09/11/2026](https://www.inman.com/2026/11/09/nar-nxt-takeaways/) |
| Inquérito Delta Media Group 2026 | **97%** dos líderes de agências dizem que os agentes usam IA (80% em 2024). **55%** planeiam IA para CRM e automação de fluxos. Preferem plataformas integradas a ferramentas soltas | [HousingWire](https://www.housingwire.com/articles/real-estate-brokerage-ai-adoption-hits-a-tipping-point-as-holdouts-disappear/) · [Florida Realtors, out/2026](https://www.floridarealtors.org/news-media/news-articles/2026/10/brokerages-expand-ai-plans-beyond-marketing) |
| Real Estate News | "O uso de IA é agora a norma entre agentes" (29/01/2026). "As pequenas agências independentes são os últimos resistentes" (14/08/2026) | [jan](https://realestatenews.com/2026/01/29/ai-use-now-the-norm-among-real-estate-agents) · [ago](https://www.realestatenews.com/2026/08/14/small-indie-brokerages-are-industrys-last-ai-holdouts) |

### 2.3 Podcasts de referência

| Podcast | Língua | Para quê | Nota |
|---|---|---|---|
| **Vida Imobiliária — Mediação Imobiliária (MI#)** | PT | Mediação, arrendamento, habitação; episódios semanais (MI#255 a 22/06/2026) | O mais regular em PT |
| **Let's Get Real Estate** (iad Portugal) | PT | Liderança de equipas, *coaching* para consultores | — |
| **Aproximocast** (Imovirtual) | PT | Entrevistas a profissionais, marketing imobiliário | — |
| **Mais Imobiliário by RE/MAX** · **Mais Valia** (Doutor Finanças) | PT | Mercado em linguagem acessível; crédito | Útil para o tom com o comprador |
| **Expresso Imobiliário** · **Conversas à Metro** (Jornal Económico) · **Hall de Entrada** (CNN/CBRE, 12 episódios em 2026) | PT | Mercado e habitação; perspetivas 2026 (JLL) | Macro, não operação |
| **Real Estate Talks by Norfin** · **Iberian Property** · **Portugal Property Insider** | PT/EN | Investimento; comprador estrangeiro | Útil se vendermos a estrangeiros |
| **EY "Palavra de CEO" — Ricardo Sousa** | PT | Visão de um CEO de rede | — |
| **The Tom Ferry Podcast Experience** (+ *Growth Mode*) | EN | Prospeção, vendas. Ep. de 22/01/2026 com Jason Pantana: "3 Mega-Trends in Real Estate AI" | Popular, orientado para o agente |
| **Industry Relations** (Rob Hahn e Greg Robertson) | EN | Visão crítica de quem conhece o setor por dentro. "Can the MLS Keep Up with AI?" (18/02/2026); "AI Octagon" (ago/2025) | O mais analítico |
| **Real Estate Rockstars** · **BiggerPockets** | EN | Vendas (agentes); investimento | BiggerPockets é investidor, não comprador final |
| **Real Estate AI Flash** (Rajeev Sajja) · **AI Agent Advantage** (Robert Lee) | EN | IA prática para agentes | Nicho, pouco verificados |
| **Playmakers** (Real Estate News) | EN | Ep. com Tom Ferry (29/12/2025) | — |

**Não confirmado nesta sessão:** uma análise de 2026 de Mike DelPrete (as pesquisas não o
devolveram) e um podcast do próprio idealista (há webinars, não podcast).

> **O que isto significa para o Painel Temático**
> - **Facto:** as redes grandes já automatizaram a **triagem** (RE/MAX) e o **primeiro
>   contacto em vídeo** (Christie's). Ninguém em Portugal fala publicamente de um agente que
>   **conheça o stock de frações em tempo real, marque visitas e acompanhe a obra**. É esse o
>   espaço de um promotor.
> - **Inferência:** a frase que o mercado está a repetir ("IA sim, mas proximidade") é um
>   argumento de venda pronto: **"responde em segundos, mas quem te recebe na obra é o
>   promotor"**. O nosso agente deve **passar ao humano depressa** e dizê-lo.
> - O aviso de Patrícia Costa (RE/MAX) vale para nós: conteúdo médio feito por IA **dilui**
>   uma marca "média gama, execução premium". As skills de copy (§4) têm de ter revisão
>   humana e regras de marca, não volume.

---

## 3. Fóruns e comunidades

### 3.1 Limitação desta secção

Não consegui ler threads: o `reddit.com` não abre nesta sessão (WebFetch bloqueado e a API
`.json` sem rede) e o orçamento de pesquisa esgotou antes das pesquisas com o domínio
`reddit.com`. **Não cito nenhuma thread**, para não inventar. O que fica abaixo são sinais
indiretos (imprensa, queixas públicas, inquéritos) e um protocolo para a próxima sessão.

### 3.2 Sinais indiretos (com fonte)

| Tema | O que se sabe | Fonte |
|---|---|---|
| **Confiança e mediação ilegal** | O IMPIC e a AT vão cruzar dados contra a mediação ilegal. A APEMIP pede mais qualificação e a nova lei traz formação obrigatória | [idealista 76312](https://www.idealista.pt/news/node/76312) · [76323](https://www.idealista.pt/news/node/76323) · [76286](https://www.idealista.pt/news/node/76286) |
| **Falsos agentes em plataformas digitais** | Há no Portal da Queixa uma queixa contra a RE/MAX intitulada "pessoas a fingirem-se de agentes imobiliários em plataformas digitais" (só li o título) | [Portal da Queixa](https://portaldaqueixa.com/brands/remax-portugal/complaints/remax-pessoas-a-fingirem-se-de-agentes-imobiliarios-em-plataformas-digitais-164011126) |
| **Qualidade da resposta varia com o consultor** | Já levantado no cap. 01 (Portal da Queixa, RE/MAX) | cap. 01, §16 |
| **Agentes (EUA): segurança de dados com IA** | Principal preocupação no ICNY 2026. A NAR publica o que se pode e não pode pôr na IA | [Inman](https://www.inman.com/2026/03/03/ai-comes-into-focus-at-inman-connect-new-york-2026/) · [NAR](https://www.nar.realtor/news/real-estate-news/technology/what-you-can-and-shouldnt-put-into-ai) |
| **Agentes (EUA): a IA é já a norma** | 97% dos líderes dizem que os agentes usam IA. Os resistentes são as pequenas agências | Delta Media / Real Estate News (§2.2) |
| **Marketing de redes sociais** | O comprador pergunta "qual é o preço?" nos comentários. A Marketeer tem um artigo sobre isso que não consegui confirmar; **fica como hipótese** | — |

### 3.3 Protocolo de escuta para a próxima sessão (sem threads inventadas)

Comunidades a ler, com as perguntas a fazer. Pesquisa manual ou com o orçamento renovado:

| Comunidade | Pesquisas sugeridas | O que procurar |
|---|---|---|
| r/PortugalExpats, r/portugal, r/literaciafinanceira | "comprar casa agente imobiliário", "buying new build Portugal", "CPCV problems", "Braga apartment" | Queixas sobre falta de resposta, preço não publicado, comissões, obra nova atrasada, falta de informação durante a obra |
| r/realtors, r/RealEstateTechnology | "AI CRM", "speed to lead", "AI ISA", "chatbot leads quality" | O que os agentes dizem que **funciona** vs **irrita** os clientes nos bots |
| r/RealEstate, BiggerPockets (fórum) | "new construction builder communication", "builder updates" | O que os compradores de obra nova querem saber do construtor (**valida a skill 9**) |
| Hacker News | "real estate AI agent", "MCP security" | Críticas técnicas e incidentes de segurança |
| Grupos PT (Facebook "Consultores Imobiliários Portugal", LinkedIn) | — | Ferramentas que os consultores PT usam de facto |

> **O que isto significa para o Painel Temático**
> - **Inferência (a validar com o protocolo acima):** as dores mais prováveis do comprador
>   português são as mesmas que aparecem na imprensa e no Portal da Queixa: **demora na
>   resposta, falta de transparência (preço, estado da obra), desconfiança de quem está do
>   outro lado**. Todas se atacam com dados e processo, não com marketing.
> - O risco de **falsos agentes e burlas** em plataformas digitais é real. O nosso agente de
>   IA e as mensagens de WhatsApp devem usar **sempre o número verificado da empresa** e nunca
>   pedir pagamentos ou documentos por canais não oficiais.

---

<!-- secções 4 e 5 a seguir -->
