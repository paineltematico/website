# 07 — Onde se aprende isto: eventos, entrevistas, comunidades, skills e MCP servers

> Capítulo de pesquisa para o Painel Temático (construção e promoção imobiliária, Braga).
> Eixo: onde o setor discute IA, CRM e novas formas de vender; que *skills* de análise criar
> para o Claude Code; que MCP servers ligar. Pesquisa feita a **23/11/2026**.

## Notas de método (ler antes de citar)

- **O que funcionou:** cerca de 60 pesquisas web (motor de pesquisa em modo standard e extended), a
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
| **SIMA** (IFEMA, Madrid) | maio/2026 (abertura c. 20/05; datas exatas não confirmadas) | **SIMA Tech** e Proptech Expo (IA, *big data*, digitalização; >70 *proptech* na edição anterior). A Homming lançou um "Agente IA" integrado no seu software de gestão de arrendamento (merca2, 19/05/2026). Portugal foi também **país convidado do The District** (IFEMA, 22–24/09/2026) | mai/2027 (não confirmado) |
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
| **Miguel Silva**, Head of IT da Porta da Frente Christie's | idealista/news (c. 2024–25; data não confirmada) | A IA "está a criar oportunidades de negócio". A **Rachel** é apresentada como a primeira assistente virtual imobiliária em Portugal, pensada ~3 anos antes e premiada (Prémios do Imobiliário SIC Notícias/Expresso, Inovação na Mediação) *(excerto)* | [idealista/news](https://www.idealista.pt/news/node/66750) |
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

## 4. Skills de análise a criar (Claude Code / agentes)

### 4.1 O que já existe em repositórios públicos (dados de 23/11/2026)

| Repositório | ★ | Último push | O que tem | Como nos serve |
|---|---|---|---|---|
| [anthropics/skills](https://github.com/anthropics/skills) | 199 046 | 16/11/2026 | Oficial da Anthropic: `skill-creator`, `mcp-builder`, `pdf`, `docx`, `xlsx`, `pptx`, `brand-guidelines`, `webapp-testing`, `frontend-design`, `internal-comms`… | Molde do formato `SKILL.md`. O `skill-creator` serve para escrever as nossas. O `pdf`/`docx` servem para relatórios a compradores |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 47 991 | 22/11/2026 | Diretório oficial de plugins do Claude Code | Distribuir as nossas skills como plugin interno |
| [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | 36 698 | 22/11/2026 | Plugins para trabalho de escritório (vendas, marketing, finanças…) | Muitos estão já carregados neste ambiente (`sales:*`, `marketing:*`, `small-business:*`) |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 62 080 | 20/11/2026 | 50+ skills: `ads`, `ad-creative`, `ai-seo`, `analytics`, `attribution`, `conversion-tracking`, `copywriting`, `cro`, `emails`, `sms`, `schema`, `seo-audit`, `competitors`, `launch`, `lead-magnets`, `referrals`… (MIT) | Base para as skills 3, 7, 12 e 14. **Adaptar a PT-PT e a um promotor** |
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | 37 451 | 15/11/2026 | Lista com 1 000+ skills | Descoberta |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) · [travisvn/awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills) · [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 80 079 · 15 913 · 58 608 | set–nov/2026 | Listas curadas | Descoberta |
| [supabase/agent-skills](https://github.com/supabase/agent-skills) · [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | 3 124 · 34 754 | nov/2026 | Skills oficiais da nossa stack (RLS, migrações, Next.js) | Instalar para o desenvolvimento |
| [zubair-trabzada/ai-realestate-claude](https://github.com/zubair-trabzada/ai-realestate-claude) | 204 | 29/04/2026 | 14 skills: `comps`, `market`, `neighborhood`, `listing`, `mortgage`, `compare`, `report-pdf`… (EUA) | Molde de estrutura para benchmark e visitas |
| [ahacker-1/cre-agent-skills](https://github.com/ahacker-1/cre-agent-skills) | 142 | 02/09/2026 | Imobiliário comercial: *underwriting*, *due diligence*, fecho (Apache-2.0) | Molde para a viabilidade de novos lotes |
| [miron-tech/realtor-claude-skills](https://github.com/miron-tech/realtor-claude-skills) | 16 | 08/10/2026 | 12 skills para agentes: pesquisa de leads, comps, marketing de anúncio, *scripts* de follow-up, pedidos de avaliação | Molde para as skills 2, 11 e 13 |
| [hoangtng/real-estate-agents](https://github.com/hoangtng/real-estate-agents) | 33 | 15/05/2026 | 12 agentes + 12 skills (CMA, estratégia de oferta) | Referência |
| [AlpacaLabsLLC/skills-for-architects](https://github.com/AlpacaLabsLLC/skills-for-architects) | 428 | 11/11/2026 | 60 skills de arquitetura: `site-visit-report`, `master-schedule`, `meeting-minutes`, `zoning-envelope`… | `site-visit-report` é o molde da skill 9 (relatório de obra) |
| [TheProsperityAgent/prosperity-real-estate-skills](https://github.com/TheProsperityAgent/prosperity-real-estate-skills) | 11 | 26/07/2026 | Copy de anúncio com conformidade (*Fair Housing*, EUA) | A ideia de **conformidade embutida na skill de copy** (para nós: regras de anúncio PT e RGPD) |
| [Sushegaad/Claude-Skills-Governance-Risk-and-Compliance](https://github.com/Sushegaad/Claude-Skills-Governance-Risk-and-Compliance) | 1 098 | 15/11/2026 | ISO 27001, SOC 2, RGPD… | Base para a skill 6 (RGPD) |
| [getbrevo/brevo-skills](https://github.com/getbrevo/brevo-skills) | 6 | 17/11/2026 | Skills oficiais da Brevo, ligadas ao MCP da Brevo | Se escolhermos a Brevo para *nurturing* |

**Já existe no próprio repositório** a skill `/vendas` (`.claude/skills/vendas/SKILL.md`), o
"diretor comercial virtual". Lê projetos, unidades e leads via REST, só leitura e só
agregados, e escreve em `docs/comercial/INPUTS-AAAA-MM.md`. **As skills propostas seguem o
mesmo padrão** (só leitura, agregados, PT-PT, output num ficheiro datado) e **alimentam** o
`/vendas` em vez de o duplicar.

**Segurança das skills de terceiros:** uma skill é código e instruções que o agente executa.
Antes de instalar uma skill pública, passá-la por um *scanner*:
[NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) (★27 310) ou
[snyk/agent-scan](https://github.com/snyk/agent-scan) (★3 274, também para MCP servers).

### 4.2 As 15 skills propostas

Os dados vêm das tabelas do site (`projetos`, `unidades`, `imoveis`, `contactos_imoveis`,
`lead_atividades`, `visitas`, `atualizacoes_obra`, `videos_obra`, `testemunhos`, `oportunidades`)
e, onde dito, do CARRINHO (mesma base Supabase; **nunca expor custos**).

| # | Nome | Objetivo | Dados / inputs | Output | Frequência | Métrica que melhora | Prioridade |
|---|---|---|---|---|---|---|---|
| 1 | `/funil-semanal` | Relatório de funil e **speed-to-lead** | `contactos_imoveis` (criação, fonte, estado, temperatura, comercial), `lead_atividades` (1.ª atividade), `visitas`, `unidades` | `docs/comercial/FUNIL-AAAA-Sww.md`: tempo mediano até à 1.ª resposta por fonte e por comercial, % de leads respondidos em menos de 5 min e de 1 h, conversão lead → visita → reserva, leads quentes parados há mais de 5 dias | Semanal (2.ª feira) + alerta diário | Tempo até 1.ª resposta; conversão lead → visita | **Alta** |
| 2 | `/auditar-anuncio` | Auditoria antes de publicar (copy, fotos, dados, menções legais) | Linha de `imoveis`/`unidades` + fotos no Storage + texto proposto | *Checklist* com pontuação 0–100: fotos (n.º, resolução, ordem, renders identificados como tal), dados obrigatórios (área, tipologia, preço, certificado energético — confirmar a lista no cap. 06), coerência com a BD, PT-PT, frases proibidas | A cada publicação ou alteração | % de anúncios ≥ 90; leads por anúncio | **Alta** |
| 3 | `/descricao-ptpt` | Gerar descrições de frações e moradias em PT-PT (mais EN/FR) na voz da marca | Ficha da unidade + projeto + diretrizes de marca (`DESIGN-SYSTEM.md`) | Versões para o site, portais, WhatsApp (curta, com link) e Instagram. Sem superlativos vazios nem promessas que não se verificam. Assinala os campos em falta em vez de inventar | Por unidade nova | Tempo de produção; consistência; CTR | **Alta** |
| 4 | `/benchmark-precos` | Preço por zona: onde estão as nossas frações face ao mercado | INE e BPstat via `portugal-mcp`; **Casafari** (`comparables`, `area-insights`) com conta; preços próprios | Tabela €/m² por freguesia e tipologia (Braga: Esporões, Merelim, Trandeiras) e percentil de cada fração | Mensal (o INE é trimestral) | Desvio preço pedido vs mercado; dias até reserva | **Alta** (lançamento de Trandeiras) |
| 5 | `/radar-concorrencia` | Obra nova concorrente na zona | Casafari (`agentgraph`, `comparables`); pesquisa web (Exa/Firecrawl) só de páginas públicas dos promotores; **sem scraping de portais** sem parecer jurídico | Lista de empreendimentos concorrentes: preço, tipologias, tempo em mercado, quem comercializa, qualidade de media | Mensal | Posicionamento de preço e argumento | Média |
| 6 | `/rgpd-campanha` | Rever campanhas (email, SMS, WhatsApp, públicos Meta) antes de enviar | Origem da lista, consentimentos registados, texto, *opt-out*, retenção | Parecer semáforo com correções. Regras do cap. 06 (RGPD, Lei 41/2004 — **confirmar com jurista**) | Por campanha | 0 queixas à CNPD; taxa de *opt-out* | **Alta** (antes das campanhas SMS previstas no `/vendas`) |
| 7 | `/campanhas-ads` | Desempenho Meta/Google por projeto | GA4 MCP e Google Ads MCP (oficiais), Meta Ads (export CSV ou MCP comunitário), UTMs → `contactos_imoveis.fonte` | CPL, custo por visita, custo por reserva, criativos vencedores, recomendações de orçamento | Semanal | Custo por visita e por reserva | Média–Alta (quando houver campanhas) |
| 8 | `/absorcao` | Prever quando cada projeto esgota | Histórico de estados de `unidades` (**não existe tabela de histórico: criar log**), leads e visitas por unidade, tempo de venda do INE/Casafari | Data prevista de esgotar por projeto, em três cenários; alerta de preço ou de stock parado | Mensal | Erro da previsão; decisões de preço a tempo | Média |
| 9 | `/relatorio-obra` | **Relatório de obra para quem reservou ou assinou CPCV** | `atualizacoes_obra` e `videos_obra` (site); fases e estado do CARRINHO (`obra_plano.estado`, timeline de atividade real) — **só progresso, nunca custos nem fornecedores**, por vista dedicada só de leitura | PDF/email/WhatsApp por projeto, PT-PT: fotos datadas, o que se fez, próximo marco, data estimada com intervalo | Mensal | Menos chamadas "como vai a obra?"; testemunhos e referências | **Alta** (diferenciador de promotor) |
| 10 | `/preparar-visita` | Briefing antes de cada visita | Timeline do lead, unidades de interesse, objeções registadas, comparáveis (skill 4), prestação estimada (Euribor do BPstat), envolvente (escolas InfoEscolas, horários TUB — `portugal-mcp`), agenda (Google Calendar) | Uma página para o comercial + mensagem de confirmação para o cliente | Por visita (dia anterior) | Visita → reserva; *no-show* | **Alta** |
| 11 | `/resumo-conversa` | Resumir chamadas e conversas de WhatsApp para o CRM | Transcrição colada ou exportada (só canais oficiais), lead associado | Nota em `lead_atividades`, próximo passo e temperatura **sugerida** (o humano confirma) | Diário | % de leads com próximo passo; tempo administrativo | Média–Alta (consentimento para gravar chamadas: ver cap. 06) |
| 12 | `/visibilidade-ia` | Como aparecemos nos assistentes de IA e na pesquisa | Prompts-teste em PT ("moradias novas em Braga", "apartamentos T2 Trandeiras"), app do idealista no Claude/ChatGPT, `schema.org` do site, Search Console, Google Business Profile | Quota de presença nas respostas, falhas de dados estruturados, anúncios incompletos no idealista | Mensal | Leads orgânicos; presença em respostas de IA | Média–Alta |
| 13 | `/reputacao` | Avaliações e queixas | Google Business Profile, Portal da Queixa (leitura manual ou MCP), `testemunhos` | Rascunhos de resposta; pedidos de testemunho depois da escritura | Semanal | N.º de avaliações, nota média, tempo de resposta | Média |
| 14 | `/nurturing` | Sequências para pré-registos ("em breve" de Merelim), leads perdidos e pós-venda | `contactos_imoveis` por estado, unidades "em breve", `testemunhos` | Rascunhos de email/SMS (Resend ou Brevo) **para aprovação**, nunca envio automático | Semanal | Pré-registo → visita; reativação | Média |
| 15 | `/qa-agente-ia` | Controlo de qualidade do agente de IA que fala com clientes | Amostra de conversas, BD de unidades (preço, área, estado) | Erros factuais (o agente disse um preço ou área errados?), *disclosure* de IA (AI Act art. 50.º — cap. 03), passagens a humano em falta, tom PT-PT | Semanal (desde o 1.º dia do agente) | Taxa de erro factual; % de passagens corretas | **Alta** (quando o agente for lançado) |

### 4.3 Especificação curta das 5 prioritárias

**`/funil-semanal`**
- Lê só agregados (o mesmo método do `/vendas`: REST com a *service key* do `.env.local`, só leitura).
- Calcula `primeira_resposta = min(lead_atividades.created_at) − contactos_imoveis.created_at`
  por lead. Se o CRM não regista a hora de uma chamada, **diz isso** em vez de assumir.
- Separa horário de expediente de fora de horas: o agente de IA cobre o segundo, os comerciais
  o primeiro.
- Nunca escreve nomes, telefones ou emails no relatório.

**`/auditar-anuncio`**
- Corre antes do `publicar` no admin, ou à mão com o id.
- Cruza o texto com a BD: o preço, a área e a tipologia do texto batem com a linha? Uma foto
  que é render diz que é render?
- Devolve a lista de correções e **não corrige sozinha** a BD.

**`/relatorio-obra`**
- Fonte de verdade: o CARRINHO já desenha a **timeline do que aconteceu** (troncos de atividade
  real, estado por fase — convenção #21 do CARRINHO). A skill traduz isso para linguagem de
  comprador ("a estrutura do piso 1 ficou concluída em outubro").
- **Barreira obrigatória:** uma vista Postgres com fase, estado, datas e fotos, sem colunas
  de valor, fornecedor ou UT, e RLS própria. A base é partilhada e um erro aqui expõe custos.
- Saída revista por uma pessoa antes de seguir.

**`/preparar-visita`**
- Disparo: evento de visita no Google Calendar (conector já ligado nesta sessão) ou registo em `visitas`.
- Inclui 3 perguntas de descoberta por fazer e as 2 objeções mais prováveis, tiradas do histórico do lead.

**`/qa-agente-ia`**
- Corpus: 30 conversas por semana, aleatórias e sem PII no relatório.
- Teste fixo de regressão: 20 perguntas-padrão ("Qual o preço do T2 do 1.º andar?", "Posso
  visitar sábado?") com resposta esperada tirada da BD. Corre antes de cada alteração ao prompt.

> **O que isto significa para o Painel Temático**
> - **Inferência:** as skills de **dados próprios** (1, 9, 10, 15) são as que nenhum
>   concorrente copia, porque dependem do nosso stock e da nossa obra. As de **conteúdo** (3, 12,
>   14) são ganhos de produtividade. Copiá-las de `marketingskills` e adaptar é mais barato do
>   que escrevê-las de raiz.
> - **Ordem sugerida:** 1 → 2 → 3 → 10 → 9 → 15 → 6. O funil primeiro, porque mede tudo o resto.
> - Duas lacunas de dados travam skills e convém resolvê-las já: **histórico de estados das
>   unidades** (para a 8) e **hora exata do 1.º contacto** (para a 1).

---

## 5. MCP servers e integrações

### 5.1 O panorama (23/11/2026)

- **Registo oficial** ([registry.modelcontextprotocol.io](https://registry.modelcontextprotocol.io),
  repo [modelcontextprotocol/registry](https://github.com/modelcontextprotocol/registry) ★7 493):
  mais de **40 000** servidores na versão mais recente (a contagem parou às 400 páginas). Muitos
  são remotos e **pagos à chamada** (x402/USDC), e há muito ruído.
- **Listas:** [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) (★98 397,
  ativo), [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) (★92 168,
  servidores de referência), [wong2/awesome-mcp-servers](https://github.com/wong2/awesome-mcp-servers)
  (★4 417), [appcypher/awesome-mcp-servers](https://github.com/appcypher/awesome-mcp-servers)
  (**arquivado**). A Smithery, a Glama e a PulseMCP **não abriram** nesta sessão, por isso não as avaliei.
- **Já ligados neste ambiente** como conectores (observado na sessão): **Supabase, Vercel,
  GitHub, Gmail, Google Drive, Google Calendar, Canva**.
- **Novidade com impacto direto:** o **idealista tem app oficial no Claude e no ChatGPT**, com
  Portugal e português. Ferramentas `search_properties`, `property_detail`, `get_howto`; só
  leitura, sem login. Diz textualmente que **não serve** para "relatórios, exportações,
  automações, estatísticas, análise de mercado ou recolha em massa"
  ([idealista/mcp-app-docs](https://github.com/idealista/mcp-app-docs), criado a 12/08/2026,
  atualizado a 16/10/2026).
- **Sites com o seu próprio MCP server** para serem encontrados por agentes de IA: o
  `pt.flatin/property-taxes` (flatin.pt: obra nova em Portugal, guias de onde viver, IMT/IMI;
  registo a 08/11/2026). Há também sites que publicam um MCP com uma ferramenta de **pedido de
  contacto que passa a um humano** (ex.: `com.maltapropertytax/site`).

### 5.2 Tabela de MCPs

Maturidade = estrelas e último push no GitHub, ou data de publicação no registo oficial
(23/11/2026). O custo só aparece quando está verificado.

| Área | Nome | Link | Oficial? | Para quê (nós) | Maturidade | Risco | Prioridade |
|---|---|---|---|---|---|---|---|
| BD | **Supabase MCP** | [supabase/mcp](https://github.com/supabase/mcp) · remoto `mcp.supabase.com/mcp` | Sim | Consultas, *advisors* (RLS), migrações em *branch*, tipos TS | ★3 023, push 21/11/2026; registo v0.19.0 (20/11/2026) | **Alto**: a base é **partilhada com o CARRINHO** (custos). Usar só no copiloto interno, em modo só de leitura e limitado ao projeto; nunca num agente virado ao cliente | **Alta** (interna) |
| Deploy | **Vercel MCP** | remoto `mcp.vercel.com` ([overview](https://github.com/vercel/vercel-mcp-overview)) | Sim | Logs, erros em produção, deploys, *Web Analytics* | registo 14/01/2026 | Médio (variáveis de ambiente) | **Alta** (já ligado) |
| Código | **GitHub MCP** | [github/github-mcp-server](https://github.com/github/github-mcp-server) | Sim | Issues, PRs | ★34 673, push 21/11/2026 | Médio: injeção de instruções via issues públicas | Média |
| QA | **Playwright MCP** | [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) | Sim (Microsoft) | Revisão visual a 375/1280 px, testar formulários, auditar páginas de anúncio | ★40 019, push 18/11/2026 | Baixo–médio: páginas externas podem conter injeção | **Alta** (desenvolvimento) |
| Analítica | **Google Analytics (GA4)** | [googleanalytics/google-analytics-mcp](https://github.com/googleanalytics/google-analytics-mcp) | Sim (Google) | Funil do site, eventos de lead, fontes | ★3 851, push 16/11/2026 | Baixo (leitura) | **Alta** (quando o GA4 estiver instalado — ainda pendente, ver `CLAUDE.md`) |
| Ads | **Google Ads MCP** | [googleads/google-ads-mcp](https://github.com/googleads/google-ads-mcp) | Sim (Google) | Desempenho de campanhas por projeto | ★1 207, push 17/11/2026 | Médio (mexe em orçamento, se tiver escrita) | Média |
| SEO | **Search Console** (comunitário) | [AminForou/mcp-gsc](https://github.com/AminForou/mcp-gsc) · [ahonn/mcp-server-gsc](https://github.com/ahonn/mcp-server-gsc) | Não | Consultas, CTR, páginas a meio da tabela | ★2 268 (push 20/11/2026) · ★287 | Baixo (leitura); confirmar *scopes* OAuth | Média |
| Google | **Gmail / Calendar / Drive** | Conectores oficiais já ligados; alternativa comunitária [taylorwilsdon/google_workspace_mcp](https://github.com/taylorwilsdon/google_workspace_mcp) | Sim (conectores) | Agenda de visitas (skill 10), documentos de projeto | ★3 566 (comunitário) | **Alto no email**: injeção a partir de emails recebidos, exfiltração. Exigir confirmação humana para enviar | **Alta** (Calendar) |
| Mapas | **Google Maps (grounding)** | remoto `mapstools.googleapis.com/mcp` (registo `com.googleapis.mapstools`) | Sim (Google) | POIs e tempos de deslocação para páginas de projeto e visitas | registo 19/04/2026 | Baixo; APIs pagas (preço não verificado) | Média |
| Mapas | **OpenStreetMap** | [jagan-shanmugam/open-streetmap-mcp](https://github.com/jagan-shanmugam/open-streetmap-mcp) | Não | Alternativa gratuita para POIs | ★237, **push 12/07/2025 (parado)** | Médio (sem manutenção) | Baixa |
| Dados PT | **portugal-mcp** (INE, BPstat/Euribor, IPMA, TUB Braga, InfoEscolas, E-REDES, ANACOM, Diário da República…) | [ThiagoJacobLannes/portugal-mcp](https://github.com/ThiagoJacobLannes/portugal-mcp) | Não | Benchmark (INE), prestação (Euribor), envolvente (escolas, transportes de Braga, fibra) | ★2, push 16/11/2026; 72 ferramentas, só leitura, sem chaves | Baixo–médio: mantenedor único. **Instalar localmente** (`pypi: portugal-mcp`) em vez do endpoint alojado | **Média–Alta** |
| Dados mercado | **Casafari MCPs** (`comparables`, `area-insights`, `agentgraph`, `locations`) | remotos em `platform.casafari.com/mcp/*` | Sim (Casafari) | Comparáveis e avaliações; tendências por zona; **análise de agências e agentes** (concorrência) | registo 18/10/2026 (o antigo `com.casafari/mcp` está *deprecated*) | Médio: dados licenciados (custo do plano **não verificado**; o registo diz "sign up free") | **Alta** (skills 4 e 5) |
| Portal | **idealista app** (Claude/ChatGPT) | [idealista/mcp-app-docs](https://github.com/idealista/mcp-app-docs) | Sim | **Canal**: os compradores pesquisam aqui. Auditar como aparecem os nossos anúncios. **Não** é fonte de dados de mercado | out/2026 | Baixo | **Alta** (como canal e auditoria) |
| Portal | `dev.cotlet/idealista` ("list/update/renew my listings") | [cotlet-connect/idealista-mcp](https://github.com/cotlet-connect/idealista-mcp) | **Não** (terceiro) | Gerir anúncios por agente | ★0, push 11/11/2026 | **Alto**: credenciais da conta idealista entregues a um terceiro | **Evitar** |
| Portal (concorrente) | **flatin.pt MCP** | registo `pt.flatin/property-taxes` · [gitlab](https://gitlab.com/flatin-pt-group/mcp) | Sim (flatin) | Ver o que um portal de obra nova PT expõe aos agentes de IA | registo 08/11/2026 | — | Observar |
| Scraping | **Apify MCP** | [apify/apify-mcp-server](https://github.com/apify/apify-mcp-server) · `mcp.apify.com` | Sim (Apify); os *actors* são de terceiros (há *actors* para Imovirtual, ex. `yugenox` no registo) | Monitorizar páginas públicas | ★17 460, push 22/11/2026 | **Alto legal**: termos dos portais e direito *sui generis* das bases de dados — ver cap. 06; qualidade variável dos *actors* | Baixa (condicionada a parecer) |
| Pesquisa | **Firecrawl** | [firecrawl/firecrawl-mcp-server](https://github.com/firecrawl/firecrawl-mcp-server) | Sim | Ler sites de promotores e notícias (não portais) | ★7 884, push 22/11/2026 | Médio (injeção em páginas; créditos pagos) | Média |
| Pesquisa | **Exa** | [exa-labs/exa-mcp-server](https://github.com/exa-labs/exa-mcp-server) · `mcp.exa.ai` | Sim | Pesquisa e investigação | ★5 260, push 21/11/2026 | Médio | Média |
| Pesquisa | **Brave Search** | [brave/brave-search-mcp-server](https://github.com/brave/brave-search-mcp-server) | Sim | Pesquisa web simples | ★1 585, push 20/11/2026 | Baixo | Baixa |
| Design | **Canva MCP** | remoto `mcp.canva.com/mcp` (registo `com.canva.mcp`, 25/09/2026) | Sim | Criativos sociais, brochuras, *mockups* (já previsto no `BRIEFING.md`) | já ligado | Baixo | **Alta** |
| Design | **Figma MCP** | remoto `mcp.figma.com/mcp` · [figma/mcp-server-guide](https://github.com/figma/mcp-server-guide); comunitário [GLips/Figma-Context-MCP](https://github.com/GLips/Figma-Context-MCP) | Sim / Não | Passar o design system para código | ★2 226 · ★16 285 | Baixo | Média |
| Email | **Resend MCP** | [resend/resend-mcp](https://github.com/resend/resend-mcp) | Sim | Emails transacionais e *nurturing* (Resend já previsto no BRIEFING) | ★587, push 22/11/2026 | Médio: envio em nome da empresa; exigir aprovação | Média–Alta |
| Email/SMS | **Brevo** | [getbrevo/brevo-skills](https://github.com/getbrevo/brevo-skills) (skills + MCP Brevo) | Sim | Alternativa para campanhas e SMS | ★6, push 17/11/2026 | Médio (RGPD) | Média (se for a escolha) |
| WhatsApp | MCPs da conta **pessoal** (ex. [lharries/whatsapp-mcp](https://github.com/lharries/whatsapp-mcp); dezenas de alojados no registo) | — | **Não** | — | ★6 942, **push 13/07/2025** | **Muito alto**: viola os termos (risco de banimento do número), lê todo o histórico, alvo de *tool poisoning* (ver §5.3) | **Não usar** |
| WhatsApp | MCPs sobre a **WhatsApp Business Cloud API** de terceiros (wassenger, whatsync-business, pequenos repos) | registo | Não (a API é oficial; o MCP não é) | — | variados, recentes | Alto (o token da conta comercial fica num terceiro) | Baixa |
| WhatsApp | **Integração própria** com a Cloud API (via BSP), dentro do nosso backend, exposta ao agente através do **nosso** CRM | — | — | O canal principal do funil ("link enviado por WhatsApp") | — | Controlado por nós | **Alta** (construir) |
| Meta | **Meta Ads** (comunitário) | [pipeboard-co/meta-ads-mcp](https://github.com/pipeboard-co/meta-ads-mcp) · [brijr/meta-mcp](https://github.com/brijr/meta-mcp) | Não (não encontrei MCP oficial da Meta) | Leitura de campanhas | ★1 386 (licença NOASSERTION; serviço alojado) · ★202 | Alto (token com acesso ao gasto) | Média (preferir export CSV no início) |
| Social | **trypost** (agendador *open source* para agentes) | [trypostit/trypost](https://github.com/trypostit/trypost) | Não | Agendar Instagram/Facebook | ★1 498 | Médio | Baixa |
| LinkedIn | [stickerdaniel/linkedin-mcp-server](https://github.com/stickerdaniel/linkedin-mcp-server) | — | Não | — | ★4 282 | **Alto**: usa a sessão do utilizador (termos do LinkedIn) | Não usar |
| Reputação | **Google Business Profile** (comunitário: [synectus/OpenGMB](https://github.com/synectus/OpenGMB)) | — | Não (oficial não confirmado) | Avaliações (skill 13) | ★23 | Médio | Baixa–média |
| Produtividade | **Notion** | [makenotion/notion-mcp-server](https://github.com/makenotion/notion-mcp-server) · `mcp.notion.com` | Sim | Só se a equipa usar o Notion | ★4 720 | Baixo | Baixa |
| Produtividade | **Linear** | remoto `mcp.linear.app/mcp` (tem endpoint `/readonly`) | Sim | *Tickets* (sugerido no BRIEFING) | registo 22/10/2026 | Baixo | Baixa–média |
| Chat | **Slack** (comunitário [korotovsky/slack-mcp-server](https://github.com/korotovsky/slack-mcp-server)) | — | Não (oficial não confirmado nesta sessão) | — | ★1 900 ("sem requisitos de permissões": um sinal de alerta) | Alto | Baixa |
| CRM | **HubSpot** | comunitário [baryhuang/mcp-hubspot](https://github.com/baryhuang/mcp-hubspot) (★129) | MCP oficial **não confirmado nesta sessão** | Não usamos (CRM próprio) | — | — | Não aplicável |
| CRM (molde) | **Follow Up Boss MCP** | [mindwear-capitian/followupboss-mcp-server](https://github.com/mindwear-capitian/followupboss-mcp-server) | Não (feito por um *broker*) | **Molde** para o nosso próprio MCP do CRM (160 ferramentas, linguagem natural) | ★34, push 13/11/2026 | — | Referência |
| Pagamentos | **Stripe** | [stripe/ai](https://github.com/stripe/ai) · `mcp.stripe.com` | Sim | Sinal de reserva online (futuro) | ★2 080 | Alto (dinheiro) | Baixa |
| Assinatura | **Docusign** | Oficial em developers.docusign.com/platform/mcp-server (segundo a nota de *deprecation* do [thisdot/docusign-navigator-mcp](https://github.com/thisdot/docusign-navigator-mcp)); Dropbox Sign só por terceiros (`io.usefulapi/dropbox-sign`) | Sim / Não | Documentos de reserva | — | Alto (valor jurídico) | Baixa |
| Assinatura PT | **Chave Móvel Digital / Autenticação.Gov** | [amagovpt/doc-CMD-assinatura](https://github.com/amagovpt/doc-CMD-assinatura) · [amagovpt/autenticacao.gov](https://github.com/amagovpt/autenticacao.gov) | Sim (AMA) | Assinatura qualificada (CPCV, reservas) | ★14 · ★244, push nov/2026 | **Não há MCP**, e não deve haver: a assinatura é um ato do cliente, fora do agente | Integração web, não MCP |
| 3D | **Matterport** | Não encontrei MCP. Alternativa: [lukehollis/spacery](https://github.com/lukehollis/spacery) (★2) | — | — | — | — | Baixa |
| Voz | **Twilio** | [twilio-labs/mcp](https://github.com/twilio-labs/mcp) | Sim (labs) | SMS e voz | ★114, push 14/02/2026 | Médio | Baixa–média |
| Voz | **ElevenLabs** | remoto `api.us.elevenlabs.io/v1/mcp` (registo `io.elevenlabs/mcp`); o repo antigo está arquivado | Sim | Agente de voz (futuro) | registo 08/09/2026 | Médio (consentimento de gravação) | Baixa |
| Segurança | **Snyk agent-scan** · **NVIDIA SkillSpector** | [snyk/agent-scan](https://github.com/snyk/agent-scan) · [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | Sim | Auditar MCPs e skills antes de os instalar | ★3 274 · ★27 310 | — | **Alta** |

### 5.3 Segurança — o que já correu mal (casos públicos)

> Os casos seguintes são conhecidos do investigador mas **não foram reabertos nesta sessão**
> (domínios bloqueados). Confirmar os links antes de citar.

- **WhatsApp MCP (abril/2025):** a Invariant Labs mostrou que um MCP malicioso ligado ao
  mesmo cliente conseguia levar o agente a **exfiltrar o histórico de mensagens** através do
  MCP do WhatsApp (*tool poisoning*). <https://invariantlabs.ai/blog/whatsapp-mcp-exploited>
- **GitHub MCP (maio/2025):** uma issue num repositório público com instruções escondidas
  levou o agente a expor dados de repositórios privados.
  <https://invariantlabs.ai/blog/mcp-github-vulnerability>
- **Supabase MCP (julho/2025):** um *ticket* de suporte com instruções injetadas levou um
  agente com chave `service_role` a ler e publicar tabelas privadas.
  <https://www.generalanalysis.com/blog/supabase-mcp-blog>
- **"Lethal trifecta"** (Simon Willison, 16/06/2025): o perigo nasce quando um agente junta
  **dados privados + conteúdo não confiável + capacidade de comunicar para fora**.
  <https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/>

**Regras para nós (inferência a partir destes casos):**
1. **O agente virado ao cliente nunca tem MCP de BD nem de email.** Fala com uma API nossa,
   estreita (`unidades disponíveis`, `marcar visita`, `passar a humano`), com RLS e limites.
2. **O copiloto interno** usa o Supabase MCP **só de leitura**, limitado ao projeto, e de
   preferência sobre **vistas** sem colunas de custo do CARRINHO.
3. **Nunca juntar a trifecta na mesma sessão:** leitura de emails ou WhatsApp recebidos + BD +
   envio. Separar em passos com confirmação humana.
4. **Auditar** cada MCP e cada skill de terceiros com `agent-scan` ou SkillSpector. Preferir
   servidores **oficiais** e **remotos com OAuth** a pacotes npm de autores desconhecidos.
5. **Nada de MCPs da conta pessoal do WhatsApp nem do LinkedIn** (termos de uso e risco de
   banimento).

### 5.4 O nosso próprio MCP — duas oportunidades

| | MCP interno (copiloto da equipa) | MCP público (canal de aquisição) |
|---|---|---|
| Para quem | Comerciais e direção, no Claude Code e no Claude | Assistentes de IA dos compradores (Claude, ChatGPT…) |
| Ferramentas | `leads_por_estado`, `timeline_lead`, `unidades_disponiveis`, `agenda_visitas`, `resumo_funil` | `projetos`, `fracoes_disponiveis` (tipologia, área, piso, preço, estado), `pedir_contacto` (passa a humano, com consentimento RGPD), `marcar_visita` (pedido, não confirmação) |
| Dados | CRM (só leitura, agregados por defeito) | Só o que já está público no site |
| Molde | Follow Up Boss MCP; `/vendas` | `flatin.pt`, app do idealista, sites com "enquiry → human handoff" |
| Publicação | Privado | Registo oficial de MCP + documentação pública, como o idealista fez |
| Prioridade | **Alta** | **Média–Alta**: barato (Next.js na Vercel) e ainda raro entre promotores portugueses |

> **O que isto significa para o Painel Temático**
> - **Ligar já:** Supabase (só leitura, interno), Vercel, Playwright, Canva, Google Calendar,
>   GA4 (quando instalado) e Casafari (avaliar o plano).
> - **Construir em vez de instalar:** a integração com o WhatsApp Business e o **MCP interno
>   do CRM**. São o coração do funil e não devem depender de terceiros pequenos.
> - **Tratar o idealista-no-Claude/ChatGPT como um canal:** anúncios completos (todas as
>   frações de Trandeiras com área, piso, preço e estado) e uma auditoria mensal (skill 12).
> - **Não fazer scraping dos portais** para benchmark: usar a Casafari (licenciada) e o INE. A
>   própria app do idealista exclui análise de mercado.

---

## Tabela-resumo das skills

| Nome | Objetivo | Dados | Output | Frequência | Prioridade |
|---|---|---|---|---|---|
| `/funil-semanal` | Funil e speed-to-lead | contactos, atividades, visitas, unidades | `FUNIL-AAAA-Sww.md` + alertas | Semanal + diário | Alta |
| `/auditar-anuncio` | Rever anúncio antes de publicar | imóvel/unidade, fotos, texto | Checklist 0–100 | Por publicação | Alta |
| `/descricao-ptpt` | Descrições PT-PT/EN/FR | ficha + marca | Textos por canal | Por unidade | Alta |
| `/benchmark-precos` | €/m² vs mercado | INE, BPstat, Casafari | Tabela e percentis | Mensal | Alta |
| `/radar-concorrencia` | Obra nova concorrente | Casafari, web pública | Lista comparativa | Mensal | Média |
| `/rgpd-campanha` | Conformidade das campanhas | listas, consentimentos, textos | Parecer semáforo | Por campanha | Alta |
| `/campanhas-ads` | Desempenho Meta/Google | GA4, Google Ads, Meta | CPL e custo por visita/reserva | Semanal | Média–Alta |
| `/absorcao` | Previsão de esgotar | histórico de unidades, leads | Cenários e alertas | Mensal | Média |
| `/relatorio-obra` | Obra para compradores | atualizações, vídeos, CARRINHO (sem custos) | PDF/email/WhatsApp | Mensal | Alta |
| `/preparar-visita` | Briefing de visita | lead, unidades, envolvente, agenda | 1 página + confirmação | Por visita | Alta |
| `/resumo-conversa` | Chamadas e WhatsApp → CRM | transcrições | Nota e próximo passo | Diário | Média–Alta |
| `/visibilidade-ia` | Presença em IA e SEO | prompts-teste, idealista app, GSC | Relatório de presença | Mensal | Média–Alta |
| `/reputacao` | Avaliações e queixas | GBP, Portal da Queixa | Respostas e pedidos | Semanal | Média |
| `/nurturing` | Sequências de email/SMS | leads por estado, "em breve" | Rascunhos para aprovar | Semanal | Média |
| `/qa-agente-ia` | QA do agente cliente | conversas + BD | Erros e regressão | Semanal | Alta |

## Tabela-resumo dos MCPs

| Nome | Link | Oficial? | Para quê | Risco | Prioridade |
|---|---|---|---|---|---|
| Supabase | https://github.com/supabase/mcp | Sim | Copiloto interno (leitura) | Alto (BD partilhada) | Alta |
| Vercel | https://mcp.vercel.com | Sim | Operação do site | Médio | Alta |
| Playwright | https://github.com/microsoft/playwright-mcp | Sim | QA visual, testes | Baixo–médio | Alta |
| Canva | https://mcp.canva.com/mcp | Sim | Criativos | Baixo | Alta |
| Google Calendar/Gmail/Drive | conectores oficiais | Sim | Visitas, documentos | Alto (email) | Alta (Calendar) |
| GA4 | https://github.com/googleanalytics/google-analytics-mcp | Sim | Funil do site | Baixo | Alta |
| Casafari | https://platform.casafari.com/mcp/comparables (e outros) | Sim | Benchmark, concorrência | Médio | Alta |
| idealista app | https://github.com/idealista/mcp-app-docs | Sim | Canal e auditoria | Baixo | Alta |
| Snyk agent-scan / SkillSpector | https://github.com/snyk/agent-scan · https://github.com/NVIDIA/SkillSpector | Sim | Auditoria de segurança | — | Alta |
| WhatsApp (integração própria) | — | — | Canal principal | Controlado | Alta (construir) |
| portugal-mcp | https://github.com/ThiagoJacobLannes/portugal-mcp | Não | INE, Euribor, envolvente | Baixo–médio | Média–Alta |
| Resend | https://github.com/resend/resend-mcp | Sim | Email | Médio | Média–Alta |
| Google Ads | https://github.com/googleads/google-ads-mcp | Sim | Campanhas | Médio | Média |
| Search Console (mcp-gsc) | https://github.com/AminForou/mcp-gsc | Não | SEO | Baixo | Média |
| Google Maps grounding | https://mapstools.googleapis.com/mcp | Sim | POIs | Baixo | Média |
| Figma | https://mcp.figma.com/mcp | Sim | Design → código | Baixo | Média |
| Firecrawl / Exa | https://github.com/firecrawl/firecrawl-mcp-server · https://github.com/exa-labs/exa-mcp-server | Sim | Pesquisa web | Médio | Média |
| Meta Ads (pipeboard) | https://github.com/pipeboard-co/meta-ads-mcp | Não | Campanhas Meta | Alto | Média |
| GitHub | https://github.com/github/github-mcp-server | Sim | Desenvolvimento | Médio | Média |
| Linear | https://mcp.linear.app/mcp | Sim | Tickets | Baixo | Baixa–média |
| Apify | https://github.com/apify/apify-mcp-server | Sim (actors não) | Scraping | Alto legal | Baixa |
| WhatsApp pessoal (lharries e afins) | https://github.com/lharries/whatsapp-mcp | Não | — | Muito alto | Não usar |
| LinkedIn (stickerdaniel) | https://github.com/stickerdaniel/linkedin-mcp-server | Não | — | Alto | Não usar |
| idealista via cotlet | https://github.com/cotlet-connect/idealista-mcp | Não | — | Alto | Evitar |

---

## Fontes

### Eventos
- SIL 2026 abre portas de 23 a 25 de abril — idealista/news — 19/11/2025 — https://www.idealista.pt/news/imobiliario/empresas/2025/11/19/72656-sil-2026-abre-portas-do-imobiliario-em-lisboa-de-23-a-25-de-abril
- "Portugal continua a manter-se no radar dos investidores internacionais" (SIL 2026) — idealista/news — 23/04/2026 — https://www.idealista.pt/news/imobiliario/habitacao/2026/04/23/75084-portugal-continua-a-manter-se-no-radar-dos-investidores-internacionais
- SIL 2026 cresce e reforça peso no imobiliário ibérico (inclui datas de 2027) — idealista/news — 2026 — https://www.idealista.pt/news/node/75316
- iad Portugal leva debate sobre futuro do imobiliário ao SIL 2026 — Diário Imobiliário — 2026 — https://diarioimobiliario.pt/iad-Portugal-leva-debate-sobre-futuro-do-imobiliario-ao-SIL-2026
- SIL 2026: a market more confident than the context suggests — The Portugal News — 24/04/2026 — https://www.theportugalnews.com/news/2026-04-24/sil-2026-a-market-more-confident-than-the-context-suggests/1012492
- SIL 2025 confirma "dinamismo no setor imobiliário" — idealista/news — 16/04/2025 — https://www.idealista.pt/news/imobiliario/habitacao/2025/04/16/69263-sil-2025-confirma-dinamismo-no-setor-imobiliario
- SIL 2025 — Exposição, debates e inovação (comunicado) — FIL — abr/2025 — https://imobiliario.fil.pt/wp-content/uploads/2025/04/SIL-2025-EXPOSICAO-DEBATES-E-INOVACAO-MARCAM-A-28a-EDICAO-DO-MAIOR-SALAO-IMOBILIARIO-DO-PAIS.pdf
- Futuro da habitação vai marcar o debate no APEMIP Imocionate deste ano — idealista/news — jun/2026 — https://www.idealista.pt/news/node/76181
- IMPIC e AT vão cruzar dados para combater mediação imobiliária ilegal — idealista/news — 2026 — https://www.idealista.pt/news/node/76312
- Mediação imobiliária: APEMIP pede mais qualificação profissional — idealista/news — 2026 — https://www.idealista.pt/news/node/76323
- Mediação imobiliária: nova lei prevê formação obrigatória — idealista/news — 2026 — https://www.idealista.pt/news/node/76286
- António Queiroz Martins e João Fitas na Convenção APEMIP 2026 — MLGTS — 2026 — https://www.mlgts.pt/en/knowledge/news/Antonio-Queiroz-Martins-and-Joao-Fitas-speak-at-the-2026-APEMIP-Convention/26984/
- Nova Mediação Imobiliária reuniu o setor no Algarve — The Portugal News — 02/06/2026 — https://www.theportugalnews.com/news/2026-06-02/nova-mediacao-imobiliaria-brought-together-the-sector-in-the-algarve/1032576
- Portugal Real Estate Summit returns… sold out / Minister Pinto Luz to open PRES 2026 — Iberian Property — 2026 — https://iberian.property/news/market-updates/portugal-real-estate-summit-returns-in-less-than-two-weeks-and-is-now-sold-out/ · https://iberian.property/news/market-updates/minister-miguel-pinto-luz-will-open-the-portugal-real-estate-summit-2026/
- Investimento imobiliário em debate no Estoril (PRES 2025) — idealista/news — set/2025 — https://www.idealista.pt/news/node/71564
- Hugo Santos Ferreira reeleito líder da APPII — idealista/news — jun/2025 — https://www.idealista.pt/news/node/70438
- APPII aposta em renovação executiva — idealista/news — 2025/26 — https://www.idealista.pt/news/node/71952
- Web Summit 2025 — Growth expo: Tomorrow's big players (Avendo) — Web Summit — nov/2025 — https://websummit.com/summaries/lis25/growth-expo-tomorrows-big-players/
- Web Summit 2025: AI agents… industrial age — SQLI — nov/2025 — https://www.sqli.com/int-en/insights/web-summit-2025
- Web Summit returns to Lisbon in 2026 — Web Summit — 2026 — https://websummit.com/web-summit-2026
- AI comes into focus at Inman Connect New York 2026 — Inman — 03/03/2026 — https://www.inman.com/2026/03/03/ai-comes-into-focus-at-inman-connect-new-york-2026/
- Brad Inman: We're entering the 5th industry revolution — Inman — 03/02/2026 — https://www.inman.com/2026/02/03/brad-inman-were-entering-the-5th-industry-revolution/
- What is agentic AI and why does it matter for real estate — Inman — 04/02/2026 — https://www.inman.com/2026/02/04/what-is-agentic-ai-and-why-does-it-matter-for-real-estate/
- Staying authentic while getting found in the new era of AI search — Inman — 05/02/2026 — https://www.inman.com/2026/02/05/staying-authentic-while-getting-found-in-the-new-era-of-ai-search/
- AI resets and everything else you missed in San Diego (The Download) — Inman — 02/08/2026 — https://www.inman.com/2026/08/02/ai-resets-and-everything-else-you-missed-in-san-diego-the-download/
- Brad Inman to agents: AI will eliminate the great Clear Cooperation debate — Inman — 31/07/2025 — https://www.inman.com/2025/07/31/brad-inman-to-agents-ai-will-eliminate-the-great-clear-cooperation-debate/
- Inman opens applications for Inman Community Leaders (datas ICNY 2027) — Inman — 19/10/2026 — https://www.inman.com/2026/10/19/inman-opens-applications-for-inman-community-leaders/
- Dispatches from NAR NXT as real estate grapples with AI — Inman — 21/11/2025 — https://www.inman.com/2025/11/21/dispatches-from-nar-nxt-as-real-estate-grapples-with-ai/
- NAR NXT takeaways — Inman — 09/11/2026 — https://www.inman.com/2026/11/09/nar-nxt-takeaways/
- What you can and shouldn't put into AI — NAR — 2025/26 — https://www.nar.realtor/news/real-estate-news/technology/what-you-can-and-shouldnt-put-into-ai
- Global REMAX R4 conference introduces bold ideas, new products — Barchart/comunicado — fev/2026 — https://www.barchart.com/story/news/457085/global-remax-r4-conference-introduces-bold-ideas-new-products-to-advance-world-s-most-productive-real-estate-network
- CEO touts new direction as REMAX aims to lead every single market — Real Estate News — 27/02/2026 — https://www.realestatenews.com/2026/02/27/ceo-touts-new-direction-as-remax-aims-to-lead-every-single-market
- What REMAX showed at R4 could change the way agents compete — RE/MAX — 2026 — https://join.remax.ca/whats-new/
- After a year of change, KW is turning the spotlight on AI — Real Estate News — 09/08/2025 — https://www.realestatenews.com/2025/08/09/after-a-year-of-change-kw-is-turning-the-spotlight-on-ai
- Keller Williams opens Command as investor ties deepen — Real Estate News — 23/02/2026 — https://www.realestatenews.com/2026/02/23/keller-williams-opens-command-as-investor-ties-deepen
- Gary Keller on … the big circle of AI — RISMedia — 24/02/2026 — https://www.rismedia.com/2026/02/24/gary-keller-on-thinly-veiled-private-listing-pitches-the-fed-and-the-big-circle-of-ai/
- Keller Williams names Patrick Ferry to drive AI- and online brand-first growth — Business Wire — 17/12/2025 — https://www.businesswire.com/news/home/20251217183327/en/
- Mega Camp 2026 — KW Outfront — 2026 — https://outfront.kw.com/?p=6029 · https://events.kw.com/event/mega-camp-2026
- MIPIM 2026: AI meets Real Estate — neext (Drees & Sommer) — mar/2026 — https://neext.dreso.com/de/real-estate/neext-real-estate-at-mipim-in-cannes
- AI expectations outpace adoption in luxury real estate (MIPIM 2026) — Zawya — mar/2026 — https://www.zawya.com/en/press-release/events-conferences/ai-expectations-outpace-adoption-in-luxury-real-estate-marygold-studio-finds-at-mipim-2026-394533
- MIPIM 2026 key takeaway — HyperIn — mar/2026 — https://blog.hyperin.com/mipim-2026-key-takeaway-stabilisation-isnt-enough-transformation-is-the-new-baseline/
- MIPIM 2026: Middle East conflict, AI… — CoStar — mar/2026 — https://www.costar.com/article/1490067181/mipim-2026-middle-east-conflict-ai-and-the-race-for-global-capital-to-lead-agenda-at-worlds-biggest-property-conference
- MIPIM — When is MIPIM (2027) — MIPIM — 2026 — https://www.mipim.com/practical-information
- Homming presenta su Agente IA en SIMA 2026 — merca2 — 19/05/2026 — https://www.merca2.es/2026/05/19/homming-presenta-agente-ia-en-sima-2026-2382061/
- Portugal é o país convidado do maior evento imobiliário europeu (The District) — idealista/news — 2026 — https://www.idealista.pt/news/node/76111
- AI won't replace the real estate agent. It will expose the unprepared one — HousingWire AI Summit 2026 — https://www.housingwire.com/events/ai-summit-2026/ai-wont-replace-the-real-estate-agent-it-will-expose-the-unprepared-one/
- How Agentic AI stole the spotlight at the Tom Ferry Summit — Luxury Presence — data n/c — https://www.luxurypresence.com/?p=29612

### Entrevistas, imprensa e inquéritos
- O impacto da Inteligência Artificial no mercado imobiliário (Beatriz Rubio) — Executive Digest — data n/c — https://executivedigest.sapo.pt/?p=600599
- RE/MAX põe IA no primeiro contacto com clientes — Marketeer — 11/09/2026 — https://marketeer.sapo.pt/?p=422216
- RE/MAX lança chatbot para agilizar primeiro contacto — Echoboomer — 2026 — https://echoboomer.pt/remax-lanca-chatbot-site-oficial/
- 5 minutos de marketing com Patrícia Costa, da RE/MAX — Marketeer — 23/07/2026 — https://marketeer.sapo.pt/5-minutos-de-marketing-com-patricia-costa-da-re-max/
- Saturação, digitalização, exigência e confiança: marketing imobiliário em Portugal — Marketeer — 01/07/2026 — https://marketeer.sapo.pt/mais-dados-mais-ruido-mais-exigencia-como-o-marketing-imobiliario-evoluiu-em-portugal/
- A Odisseia do consultor imobiliário — Marketeer — 2026 — https://marketeer.sapo.pt/?p=424065
- Century 21 espera atingir 1.000 M€ em 2026 em crédito intermediado — RTP/Lusa — 2026 — https://www.rtp.pt/noticias/economia/century-21-espera-atingir-1000-me-em-2026-em-credito-a-habitacao-intermediado_n1674957
- IA na mediação: "Nenhuma máquina criará os laços…" (Predimed) — idealista/news — 2025 — https://www.idealista.pt/news/node/69926
- IA na mediação imobiliária: "Portugal começa a acompanhar a evolução" (Porta da Frente Christie's) — idealista/news — c. 2024–25 — https://www.idealista.pt/news/node/66750
- Portuguese real estate agent inks $100M in sales. The twist? It's a bot — Inman — 13/03/2025 — https://www.inman.com/2025/03/13/portuguese-real-estate-agent-inks-100m-in-sales-the-twist-its-a-bot/
- First-ever AI real estate agent generates $100M in sales in Portugal — Fox Business — mar/2025 — https://www.foxbusiness.com/real-estate/first-ever-ai-real-estate-agent-generates-100m-sales-portugal
- Casafari case study — Porta da Frente Christie's agentic AI — Casafari — data n/c — https://casafari.com/case-studies/casafari-agentic-ai-luxury-real-estate-porta-frente-christies/
- Zome.pt integra ChatGPT na pesquisa de imóveis — Executive Digest — data n/c — https://executivedigest.sapo.pt/?p=409626
- Zome — CEO Talk — Executive Digest — data n/c — https://executivedigest.sapo.pt/?p=508180
- Como a IA vai transformar o setor imobiliário (Caetano de Bragança) — JLL — data n/c — https://www.jll.com/pt-pt/insights/como-a-inteligencia-artificial-vai-transformar-o-setor-imobiliario-e-as-cidades-portuguesas-nos-proximos-anos
- Real estate brokerage AI adoption hits a tipping point — HousingWire — 2026 — https://www.housingwire.com/articles/real-estate-brokerage-ai-adoption-hits-a-tipping-point-as-holdouts-disappear/
- Brokerages expand AI plans beyond marketing — Florida Realtors — out/2026 — https://www.floridarealtors.org/news-media/news-articles/2026/10/brokerages-expand-ai-plans-beyond-marketing
- AI use now the norm among real estate agents — Real Estate News — 29/01/2026 — https://realestatenews.com/2026/01/29/ai-use-now-the-norm-among-real-estate-agents
- Small indie brokerages are industry's last AI holdouts — Real Estate News — 14/08/2026 — https://www.realestatenews.com/2026/08/14/small-indie-brokerages-are-industrys-last-ai-holdouts
- Portal da Queixa — RE/MAX: pessoas a fingirem-se de agentes em plataformas digitais — data n/c — https://portaldaqueixa.com/brands/remax-portugal/complaints/remax-pessoas-a-fingirem-se-de-agentes-imobiliarios-em-plataformas-digitais-164011126

### Podcasts
- 30 Best Portugal Real Estate Podcasts — Feedspot — 2026 — https://podcast.feedspot.com/portugal_real_estate_podcasts/
- Aproximocast — Imovirtual — https://www.imovirtual.com/noticias/imoblog/aproximocast-o-podcast-que-procura-conectar-profissionais-do-setor-imobiliario-id222.html
- Let's Get Real Estate (iad) — Audible — https://www.audible.in/podcast/Lets-Get-Real-Estate-powered-by-iad/episodes/B0CT1HDXLN
- Expresso Imobiliário — iHeart — https://www.iheart.com/podcast/1300-expresso-imobiliario-111362333/
- Hall de Entrada (CNN/CBRE) — Audible — 2026 — https://www.audible.co.uk/podcast/Hall-de-Entrada/B0GWJC7RLX
- Palavra de CEO — Ricardo Sousa — EY — https://www.ey.com/pt_pt/media/podcasts/ey-tv/palavra-de-ceo-ricardo-sousa
- Industry Relations — "Can the MLS keep up with AI?" — 18/02/2026 — https://radioandpodcast.com/podcast/industry-relations-with-rob-hahn-and-greg-robertson/episode/can-the-mls-keep-up-with-ai-9613061 · "AI Octagon" — https://industryrelations.libsyn.com/ai-octagon
- Tom Ferry — 3 Mega-Trends in Real Estate AI (Jason Pantana) — 22/01/2026 — https://www.skool.com/boldtrailacademy/3-mega-trends-in-real-estate-ai-every-agent-must-know-in-2026 · Growth Mode — https://www.tomferry.com/growth-mode/ep01-forecasting-with-ai/
- 15 Best Real Estate Podcasts for Agents in 2026 — Luxury Presence — 2026 — https://www.luxurypresence.com/blogs/best-real-estate-podcasts/
- Playmakers with Tom Ferry — Real Estate News — 29/12/2025 — https://www.realestatenews.com/2025/12/29/playmakers-the-most-underutilized-opportunity-for-agents

### Skills e MCP (GitHub e registo — lidos a 23/11/2026)
- API do registo oficial de MCP — https://registry.modelcontextprotocol.io/v0/servers (consultas por `search=` a 23/11/2026)
- idealista AI integrations (Claude/ChatGPT) — GitHub idealista — 12/08–16/10/2026 — https://github.com/idealista/mcp-app-docs
- portugal-mcp — README — 16/11/2026 — https://github.com/ThiagoJacobLannes/portugal-mcp
- Todos os repositórios citados nas tabelas das §4 e §5, com estrelas e datas de push lidas via `gh api search/repositories` a 23/11/2026.
- Casos de segurança (não reabertos nesta sessão): Invariant Labs, WhatsApp MCP (abr/2025) — https://invariantlabs.ai/blog/whatsapp-mcp-exploited · Invariant Labs, GitHub MCP (mai/2025) — https://invariantlabs.ai/blog/mcp-github-vulnerability · General Analysis, Supabase MCP (jul/2025) — https://www.generalanalysis.com/blog/supabase-mcp-blog · Simon Willison, The lethal trifecta (16/06/2025) — https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/

### Pendentes desta pesquisa
1. Ler threads reais (Reddit, BiggerPockets, HN, grupos PT) com o protocolo da §3.3.
2. Confirmar num browser as citações marcadas *(excerto)*, sobretudo as do idealista/news e da Marketeer.
3. Vídeos de *keynotes* (SIL, ICNY, R4, FR).
4. Confirmar se existem MCPs **oficiais** da HubSpot, do Slack, da Meta/WhatsApp e do Google Business Profile.
5. Preços dos planos Casafari com acesso MCP.
6. Datas de 2027 da APEMIP, do PRES e do SIMA.
