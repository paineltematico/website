# 04 — Design, experiência, media, copywriting e conteúdo

> Capítulo de pesquisa para o site do Painel Temático (construção e promoção imobiliária, Braga).
> Eixo: como desenham, fotografam, escrevem e atraem público os melhores sites imobiliários — e o que
> isso pede ao `painel-tematico.vercel.app`.
>
> **Redigido a 23/11/2026.** Só leitura: não se criou conta, não se preencheu formulário, não se
> contactou ninguém, não se alterou código nem dados.

## Como ler este documento

- **[Facto]** = dito por uma fonte (link e data ao lado). **[Inferência]** = leitura nossa a partir dos
  factos. **[Não confirmado]** = fonte fraca, só uma fonte, ou números que se contradizem.
  **[Boa prática]** = recomendação de ofício (design/copy) que não depende de uma estatística — não
  tem número porque não há número honesto para lhe pôr.
- **[Interno]** = observado no código (`/home/user/website/src`) ou na base de dados de produção
  (leitura `SELECT`, 23/11/2026). É o que o site público mostra hoje.
- Mesma convenção dos capítulos irmãos `01-concorrencia-portugal.md` e `05-gestao-clientes-produto.md`;
  quando um facto vem de lá, digo "via cap. 01/05" e mantenho o link original.

## ⚠️ Limitações desta pesquisa (ler antes de citar)

1. **A leitura direta de páginas estava bloqueada pela rede** nesta sessão (WebFetch e `curl`
   devolveram "host não permitido" — incluindo `painel-tematico.vercel.app` e `remax.pt`). A pesquisa
   externa fez-se por motor de busca, a partir de títulos, excertos e resumos das páginas indexadas.
2. **O orçamento de pesquisas da sessão (partilhado por todos os agentes a trabalhar em paralelo)
   esgotou-se ao fim de 8 consultas deste capítulo.** O pedido era "dezenas de pesquisas"; não foi
   possível. Por isso:
   - a recolha de **10–20 anúncios reais citados com link** (secção 3) e os **benchmarks de Meta/Google
     Ads** (secção 4) ficaram **por fazer** — estão no *Backlog de verificação* no fim, com as
     pesquisas exatas a correr;
   - os exemplos reais analisados na secção 3 são os **do próprio Painel Temático** (lidos na base de
     dados), mais os padrões confirmados de Zillow, Rightmove, idealista, RE/MAX e ZOME;
   - nomes de ferramentas e sites que conheço mas não consegui verificar nesta sessão vão marcados
     **[De memória, verificar]** e nunca carregam números.
3. **A auditoria do site (secção 5) não depende da web**: fez-se ao código-fonte e à base de dados de
   produção — é a fonte mais fiável deste capítulo.

---

## Resumo

<!-- RESUMO -->

---

## 1. Design e UX — o que fazem os melhores e o que copiar

### 1.1 O que as fontes confirmam

**Zillow (EUA) — a ficha organizada por perguntas, não por campos**
- **[Facto]** Em outubro de 2023 a Zillow anunciou o maior redesenho das páginas de imóvel em cinco
  anos: a ficha passou a agrupar a informação em secções como **"What's Special"**, **"Market Value"**,
  **"Monthly Cost"** e **"Neighborhood"**, com o objetivo declarado de reduzir o scroll no computador —
  comunicado de 23/10/2023
  <https://zillow.mediaroom.com/2023-10-23-Zillow-unveils-a-new-look-for-property-pages,-their-biggest-redesign-in-5-years>;
  análise em Online Marketplaces <https://onlinemarketplaces.com/articles/zillows-listing-pages-get-biggest-overhaul-in-five-years>
  (data não visível no excerto).
- **[Facto]** Em 2025 a Zillow lançou o **BuyAbility** (Zillow Home Loans): uma estimativa
  personalizada, em tempo real, do preço de casa e da **prestação mensal** que o comprador consegue
  pagar, e da probabilidade de aprovação do crédito — Zillow Group, "most innovative launches of the
  year" (2025) <https://www.zillowgroup.com/news/zillow-innovation-2025>. Lançou também o **SkyTour**
  (vista aérea 3D do imóvel) no pacote de verão de 2025
  <https://www.zillow.com/agents/summer-product-launch-skytour>;
  <https://s25.q4cdn.com/975009107/files/doc_news/Summer-just-got-hotter-Zillow-debuts-five-powerful-new-features-2025.pdf>.
- **[Facto]** Em 2026 anunciou um "hub" personalizado que acompanha o comprador "da primeira pesquisa à
  escritura" <https://s25.q4cdn.com/975009107/files/doc_news/Zillow-launches-a-personalized-hub-that-guides-home-buyers-from-first-search-to-closing-2026.pdf>
  (conteúdo não lido na íntegra).
- **[Facto]** No arrendamento, a Zillow passou a mostrar o **preço total** (renda + encargos
  obrigatórios) — <https://www.zillow.com/rentals-network/pricing-transparency> (data não visível).
- **[Não confirmado]** Não encontrei fonte que confirme um botão de contacto *fixo* (sticky) na ficha
  da Zillow em 2025. Não uso a Zillow como prova desse padrão.

**Rightmove (Reino Unido) — galeria primeiro, e a planta como argumento de contacto**
- **[Facto]** Em 2020 a Rightmove acabou com os separadores da ficha (Descrição, Planta, Mapa, Vídeo,
  Escolas, Mercado): o conteúdo passou a ler-se num só scroll, **vídeos e visitas virtuais passaram para
  dentro da galeria de fotografias**, e **ícones por cima da foto principal** dizem logo se o anúncio tem
  planta, vídeo ou tour — PaTMa, outubro de 2020 <https://www.patma.co.uk/blog/2020/10/the-new-rightmove-page-layout/>.
  Os **contactos do anunciante passaram a aparecer dentro das galerias** de imagens e de plantas (julho
  de 2020, segundo o mesmo excerto); ver também <https://hub.rightmove.co.uk/weve-been-working-on-a-new-look-property-details-page/>.
- **[Facto]** Investigação da própria Rightmove: **mais de um terço dos compradores** disse ser menos
  provável contactar sobre um imóvel **sem planta** — "Maximise the chances of finding a buyer with a
  floorplan" <https://www.rightmove.co.uk/news/articles/property-news/maximise-chances-finding-buyer-floorplan/>
  (data do estudo não visível no excerto).
- **[Facto]** A Rightmove anunciou fotografias maiores na pesquisa <https://www.rightmove.co.uk/news/?p=77383>;
  em 2025 renomeou os microsites de empreendimentos para **Development Profiles**
  <https://hub.rightmove.co.uk/development-profiles>, e testa um **estimador de custo de obras** que lê
  a planta com IA <https://www.rightmove.co.uk/press-centre/?p=4705>.

**NAR (EUA) — o que os compradores dizem que é útil**
- **[Facto]** No *2025 Profile of Home Buyers and Sellers* (transações de julho/2024 a junho/2025), entre
  os compradores que pesquisaram online, **81%** classificaram as **fotografias** como "muito úteis" —
  cópias do relatório distribuídas por associações estaduais:
  <https://www.rirealtors.org/clientuploads/documents/NAR/Homebuyers_and_sellers_trend_2025.pdf>;
  <https://www.greaterbergenrealtors.com/clientuploads/Broker_Page/2025_Profile_of_Home_Buyers_and_Sellers.pdf>;
  resumo NAR <https://www.nar.realtor/news/economists-outlook/top-10-takeaways-from-nars-2025-profile-of-home-buyers-and-sellers>.
- **[Não confirmado]** As **plantas** aparecem com **57%** numa das cópias; "informação detalhada" e
  "visitas virtuais" têm números que **não batem entre as duas cópias** (38% combinado numa, 77% só para
  informação detalhada noutra). Não citar sem abrir o PDF oficial.

**idealista (Portugal) — multimédia e visita guiada**
- **[Facto]** Artigos do idealista/news de dezembro de 2020 e fevereiro de 2021 dizem que os anúncios com
  serviços multimédia (fotografia profissional, vídeo, visita virtual) recebem **cerca de +92% de
  contactos** — num artigo face a anúncios sem esses serviços, noutro face ao período pré-Covid (as bases
  de comparação não coincidem; ler como ordem de grandeza) —
  <https://www.idealista.pt/news/financas/negocios/2021/02/05/46159-a-importancia-das-visitas-virtuais-na-mediacao-imobiliaria>
  (05/02/2021); <https://www.idealista.pt/news/imobiliario/habitacao/2020/12/23/45710-dicas-para-distinguir-o-imovel-da-concorrencia-e-conseguir-uma-venda-de-sucesso>
  (23/12/2020). Um artigo de 07/12/2020 diz que anúncios **com planta têm mais contactos**, sem
  percentagem <https://www.idealista.pt/news/imobiliario/habitacao/2020/12/07/45526-como-criar-um-bom-anuncio-para-vender-uma-casa-na-internet>.
- **[Facto]** O idealista tem uma ferramenta de **visita guiada virtual** (videochamada guiada pelo
  anunciante, dentro do portal) — centro de ajuda <https://www.idealista.com/tools/centrodeayuda/pt-pt/articulos/sala-virtual-de-visitas/>.
- **[Não confirmado]** "Anúncios com tour virtual recebem 40–60% mais contactos segundo o idealista" —
  aparece num blogue espanhol de dicas (Inmolovers, 2026) <https://inmolovers.com/portales/como-optimizar-anuncios-idealista>
  sem link para o estudo original.
- **[Não confirmado]** Não consegui confirmar se a ficha do idealista.pt mostra um simulador de prestação
  embebido; o serviço de crédito (idealista/hipotecas) existe à parte <https://www.idealista.com/hipotecas/>.

**Redes portuguesas — captação e primeiro contacto (via cap. 01)**
- **[Facto]** A RE/MAX tem no remax.pt um **assistente** que pergunta se o visitante quer comprar,
  vender, arrendar ou avaliar, pede nome/telefone/email/localização e encaminha para a agência e o
  consultor "mais adequados" — Marketeer, 11/09/2026 <https://marketeer.sapo.pt/re-max-poe-inteligencia-artificial-no-primeiro-contacto-com-clientes-e-promete-encontrar-o-consultor-certo/>;
  e uma ferramenta pública **"Quanto vale a sua casa"** — referida pelo Doutor Finanças
  <https://www.doutorfinancas.pt/vida-e-familia/habitacao/quanto-vale-a-minha-casa/> (consultado a 23/11/2026).
- **[Facto]** A ZOME (sede em Braga) lançou em 2023 um site com **ChatGPT integrado na pesquisa** de
  imóveis — Diário Imobiliário <https://www.diarioimobiliario.pt/Zome-pt-e-o-primeiro-site-de-uma-rede-imobiliaria-com-integracao-de-ChatGPT-na-pesquisa-de-imoveis>;
  Creative News, 03/07/2023 <https://creativenews.pt/2023/07/03/zome-lanca-novo-site-para-melhorar-experiencia-dos-visitantes/>;
  e o **Zome Go!**, que estima o valor de mercado para pôr a casa à venda depressa
  <https://www.diarioimobiliario.pt/Actualidade/Zome-lanca-ferramenta-digital-que-agiliza-a-colocacao-de-imoveis-a-venda-no-mercado>.

### 1.2 Padrões por superfície (o que copiar, adaptado a um promotor)

> As referências acima confirmam a direção; o detalhe de cada padrão abaixo é **[Boa prática]** de
> desenho de sites imobiliários, e várias peças já estão desenhadas nos mockups internos de julho de 2026
> (`docs/design/mockups/`). Indico qual.

**Homepage — dizer em 5 segundos o que a empresa é**
- Uma frase que **só o Painel pode dizer**: o mockup de julho já a tem — *"Construímos o que
  vendemos."* (`mockups/homepage.html`). É melhor do que a atual *"Cada imóvel conta uma história!"*,
  que qualquer imobiliária assina (secção 5).
- Logo abaixo, **o produto à venda com estado real**: "Merelim — 3 moradias disponíveis", "Esporões —
  última moradia", "Escudeiros — lote de 700 m²". Um promotor com poucos produtos ganha mais com 3
  cartões grandes e honestos do que com um contador de "8+ imóveis".
- **Prova de construtor**, não de mediador: obras entregues, anos, famílias que já lá vivem, fotos da
  obra recente. (A auditoria de julho, F-08, já o dizia.)
- Dois caminhos explícitos: **Comprar** (imóveis + projetos) e **Vender/avaliar terreno ou casa**
  (captação). Hoje o menu não tem nenhum dos dois como item (secção 5).

**Pesquisa e listagem — poucos imóveis pedem outra pesquisa**
- Com menos de 20 imóveis, a "pesquisa" deve ser uma **vitrine filtrável** (Moradias · Apartamentos ·
  Lotes · Lançamentos), não um motor com 6 filtros vazios. Os filtros por preço (até 1 M€+) e as 8
  línguas sugerem um portal que o Painel não é. **[Inferência]**
- Ordenação (recentes / preço), **freguesia** como filtro (é assim que se procura em Braga: Merelim,
  Esporões, Lomar, Nogueira…), e **"Avise-me quando houver um T3 em Merelim"** (alerta por email/WhatsApp)
  — o equivalente honesto de "pesquisas guardadas" para um stock pequeno.
- Cartão: foto, **preço**, tipologia, área, freguesia, **estado** (Disponível / Última / Reservado /
  Em construção — entrega [mês/ano]). O estado vende mais do que o "Destaque".

**Ficha do imóvel — responder às quatro perguntas da Zillow, em português**
- Estrutura em quatro blocos, pela ordem da Zillow (2023): **O que tem de especial** (3 frases, não 27
  linhas) · **Quanto vale** (preço, €/m², comparação com a mediana da freguesia — dados INE via cap. 05)
  · **Quanto fica por mês** (prestação indicativa com pressupostos visíveis e aviso de que não é
  proposta de crédito — o mockup `imovel.html` já tem a secção *"Quanto fica por mês?"*) · **A zona**
  (minutos ao centro, escola, supermercado, acessos — medidos, não "perto de tudo").
- **Galeria primeiro, com o vídeo e a planta lá dentro** (padrão Rightmove 2020) e **ícones na foto de
  capa** ("12 fotos · Planta · Vídeo"). Hoje a galeria do Painel vem depois da descrição.
- **Planta sempre** — é a peça que a Rightmove associa à decisão de contactar. Para obra nova, planta
  por piso com áreas por divisão.
- **CTA persistente em mobile** (Ligar · WhatsApp · Agendar), com a **mensagem de WhatsApp
  pré-preenchida com a referência do imóvel**. Hoje o WhatsApp da ficha abre sem texto (secção 5).
- **"Da visita à chave"**: o processo em 4 passos (visita → reserva → CPCV/crédito → escritura) —
  já desenhado no mockup `imovel.html`. Para quem compra a um promotor, saber o que acontece a seguir é
  meio caminho para avançar.
- **"Também lhe pode interessar"** + ligação ao projeto-mãe (F-07 da auditoria de julho, ainda aberto).

**Página de empreendimento — o produto é o projeto, as frações são opções**
- **Guia de frações**: filtros por tipologia/estado, cartão por fração com área, piso, preço e CTA
  próprio ("Quero saber mais sobre a ML8"), **"Avisar-me quando estiver disponível"** para as
  "em breve", e comparador de até 3 frações — tudo já desenhado em `mockups/projeto-fracoes.html`
  (*"Encontre a sua opção"*, *"Comparar frações"*, *"Avisar-me quando disponível"*).
- **Implantação clicável** (planta do loteamento com cada lote colorido pelo estado). O
  `MerelimShowcase` já mostra o mapa de implantação como imagem; o passo seguinte é torná-lo um SVG
  com os lotes clicáveis. **[Boa prática]**
- **Acabamentos com nome e marca** ("Materiais escolhidos um a um", mockup) — o argumento que uma rede
  de mediação não consegue dar.
- **Obra à vista**: cronograma por fase + fotos datadas + próxima etapa. É o equivalente, para um
  promotor, das "reviews" de um hotel. (Ver secção 5: as 8 atualizações de Merelim estão todas datadas de
  05/06/2026 e sem fotos.)
- **Reserva**: em Portugal não encontrei, nesta sessão, um promotor com reserva 100% online
  **[Não confirmado]**; o passo realista é "Pedir reserva" com sinal combinado por telefone e CPCV
  depois. Promotores espanhóis cotados (AEDAS, Neinor, Metrovacesa) costumam ter área de cliente e pedido
  de reserva online **[De memória, verificar]**.

**Captação de proprietários ("Quanto vale a sua casa?")**
- As redes fazem-no em escala (RE/MAX "Quanto vale a sua casa", Zome Go!). Para o Painel, a pergunta
  mais rentável não é "quanto vale a sua casa" — é **"Tem um terreno? Nós compramos ou construímos
  consigo"** e **"Troque a sua casa por uma nova"** (retoma). A página `/avaliacao` atual é genérica de
  mediador. **[Inferência]**
- O formulário multi-passo que já existe (mockup `avaliacao.html`: *"O que quer avaliar?" → "Conte-nos os
  detalhes" → "Qual é o seu objetivo?"*) deve ganhar a opção **Terreno** com área, artigo/localização e
  "tem PIP/projeto?" — é o dado que um promotor precisa para decidir.

**Prova social**
- O que conta para quem compra obra nova: **quem já comprou** (vídeo de 30 s de um morador de
  Esporões), **o que já foi entregue** (fotos "antes/depois" do mesmo ângulo), e **reviews no Google**
  (o cap. 05 cita a BrightLocal: o Google é a plataforma de reviews mais usada — 83% em 2025
  <https://www.brightlocal.com/research/local-consumer-review-survey-2025/>).
- Licenças à vista e verificáveis (AMI, IMPIC/alvará) — o site já mostra AMI 25031 e IMPIC 69636.

**Mobile**
- O cliente do Painel recebe o link no WhatsApp e abre no telemóvel (auditoria de julho). Regras:
  hero que cabe em `100svh`, CTA sticky, alvos ≥ 44 px, texto informativo com contraste AA, nada
  invisível sem JavaScript. Tudo já identificado em julho (F-03, F-09, F-10, F-12, F-15) e ainda por fazer.

### O que isto significa para o Painel Temático

1. **O desenho já existe; falta construí-lo.** Os mockups de julho cobrem quase todos os padrões
   confirmados (custo mensal, planta, guia de frações, processo, cross-sell). O atraso face às
   referências é de **execução e conteúdo**, não de ideias.
2. **Copiar da Zillow a estrutura por perguntas** e da Rightmove a **galeria com planta e vídeo dentro**
   — são baratos de implementar e confirmados por fontes.
3. **Não copiar a escala dos portais** (filtros vazios, 9 línguas automáticas, contadores): num stock
   pequeno, isso mostra o que falta em vez do que há.
4. **A página de projeto é a que mais distancia o Painel das redes** — nenhuma rede tem a planta de
   implantação, os acabamentos e a obra semana a semana de cada fração.

---

## 2. Media — fotografia, vídeo, tours, staging, renders e brochuras

### 2.1 O que a evidência diz (e o que não diz)

| Formato | Evidência | Força |
|---|---|---|
| Fotografias | **81%** dos compradores que pesquisaram online classificam-nas como "muito úteis" (NAR 2025, jul/24–jun/25) — links na secção 1.1 | **[Facto]** inquérito grande, EUA |
| Planta | Rightmove: **mais de 1/3** dos compradores menos propensos a contactar sem planta; idealista (07/12/2020): anúncios com planta têm mais contactos; NAR 2025: 57% numa cópia | **[Facto]** (Rightmove, idealista) / **[Não confirmado]** (57%) |
| Multimédia (foto profissional, vídeo, tour) | idealista: **~+92% de contactos** (artigos de 12/2020 e 02/2021, bases de comparação diferentes) | **[Facto]** do portal, ordem de grandeza |
| Tour 3D | Zillow: anúncios com tour 3D **favoritados +75%** e **vistos +65%** por dia (mar/2020–fev/2021) <https://www.zillow.com/research/3d-tours-virtual-tools-popular-29650> | **[Facto]** do vendedor da ferramenta |
| Tour 3D e rapidez de venda | Zillow (marketing): vendem **10%** (2020) <https://www.zillow.com/research/3d-home-tours-coronavirus-26568> a **14%** (2021) <https://www.zillow.com/learn/virtual-tours-home-sell-faster> mais depressa; Matterport (fabricante): até **31%** mais rápido e **9%** mais caro <https://matterport.com/es/blog/3d-tours-properties-sell-31-faster-and-higher-price> | **[Não confirmado]** — conflito de interesses |
| Tour 3D, estudo independente | Harvard Business School (Working Knowledge): **75 178 vendas Redfin em Los Angeles** (mar/2019–mar/2021) — os tours 3D **não aumentam significativamente o preço** e **podem até alongar** o tempo no mercado <https://www.library.hbs.edu/working-knowledge/are-virtual-tours-still-worth-it-in-real-estate-evidence-from-75000-home-sales> (data do artigo não visível) | **[Facto]** estudo académico, um mercado |

**[Inferência]** A leitura honesta: **fotografia e planta são obrigatórias** (prova forte e consistente);
**vídeo e tour aumentam a atenção** (vistas, favoritos, contactos) mas **não há prova independente de que
vendam mais caro**. Num promotor, o tour serve sobretudo para **qualificar** à distância (o emigrante, o
comprador de Lisboa) e poupar visitas inúteis — não para justificar preço.

### 2.2 Plano de media por tipo de produto **[Boa prática]**

| Produto | Indispensável | Diferenciador | Evitar |
|---|---|---|---|
| **Lote / terreno** (Escudeiros, Vale S. Cosme) | Foto aérea com o limite marcado; planta de implantação com "o que pode construir"; mapa com tempos | Vídeo drone de 30 s: chegar de carro ao lote; render de volumetria "a sua casa aqui" | Fotos ao nível do chão de mato |
| **Moradia em planta / em construção** (Merelim, Trandeiras) | Renders exteriores e interiores **marcados como ilustrativos**; plantas por piso com áreas; mapa | **Diário de obra** quinzenal (mesmo ângulo, datado); timelapse; vídeo "o que está por trás da parede" (ETICS, isolamento, ITED) | Render sem aviso; render que não corresponde ao acabamento contratado |
| **Moradia acabada** (Esporões, Merelim lote 6) | 20–30 fotos profissionais (luz natural, divisão a divisão, exterior, envolvência); planta | Vídeo walkthrough de 60–90 s com o construtor a explicar 3 detalhes; tour 360/3D | Grande angular que deforma; fotos com obras/lixo; HDR exagerado |
| **Revenda / arrendamento** (Frossos, Maximinos, Lomar) | 12–20 fotos, planta (mesmo que simples), certificado energético | Staging virtual **assinalado** num quarto vazio | Anúncio sem fotos (hoje há 4 assim — secção 5) |

**Vídeo — formatos que um promotor pequeno consegue produzir com regularidade**
- *Reel/short* vertical 20–40 s: "Esta semana na obra de Merelim" (3 planos, legenda, data).
- *Walkthrough* horizontal 60–120 s para YouTube e para a ficha: entrada → sala → cozinha → quartos →
  exterior, com a voz de quem construiu.
- *Explainer* 45 s: um detalhe técnico por vídeo (bomba de calor 270 L, caixilharia, capoto).
- Formato horizontal + vertical na mesma filmagem (enquadrar ao centro). **[Boa prática]**

**Tours 3D — ferramentas**
- Matterport é a referência; alternativas que conheço mas **não avaliei nesta sessão**: Kuula, 3DVista,
  CloudPano, Zillow 3D Home (só EUA) **[De memória, verificar]**. Para obra nova, um **percurso em render**
  (Lumion/Twinmotion/Enscape) antes de a casa existir vale mais do que um 3D da casa acabada quando já
  está quase vendida. **[Inferência]**

**Home staging virtual — com transparência**
- **[Boa prática]** Assinalar na própria imagem "Decoração virtual" / "Imagem ilustrativa" e mostrar a
  foto real ao lado. Uma imagem que faça o comprador acreditar num estado que o imóvel não tem é
  publicidade enganosa — enquadramento legal português (Código da Publicidade; práticas comerciais
  desleais) **por confirmar com jurista**; não li os diplomas nesta sessão.

**Drone**
- Em Portugal, operar drones segue o regulamento europeu de UAS (Reg. de Execução (UE) 2019/947) com
  registo do operador junto da ANAC; há zonas com restrições (perto de aeródromos, hospitais) **[De
  memória, verificar requisitos atuais na ANAC]**. Na prática: contratar operador registado e pedir o
  comprovativo.

**Brochuras e booklets**
- **[Interno]** O booklet de Escudeiros (`public/booklets/escudeiros.html`, 20/11/2026) é **o melhor
  conteúdo do site**: 5 páginas A4 na marca, referência (`ESC-700`), ficha factual (área, PDM, "sem RAN
  nem REN", topografia), localização com coordenadas, esquema "o que pode construir" (14 × 10 m, 2 pisos,
  ≈ 280 m²), página de mercado **com fontes** (INE 2 090 €/m², anúncios 1 770–2 400 €/m²) e aviso legal
  ("sem valor contratual… a confirmar junto da Câmara"). É o tom certo: factos, números, prudência.
- O que falta ao booklet (ver melhorias na secção 5): **QR** para a página e para o WhatsApp com a
  referência; **email do domínio** (hoje `paineltematico@gmail.com`); e o *cross-sell* que só um
  construtor pode fazer — **"E construímos a sua casa neste lote: prazo e custo indicativos"**.
- Molde para todos os produtos: *capa → o produto em números → localização → o que pode ser/tem → mercado
  com fontes → próximo passo*. Serve de PDF para WhatsApp, de página partilhável e de impresso para a
  visita.

### O que isto significa para o Painel Temático

1. **Primeiro, fotografias e plantas em todos os anúncios.** Hoje 4 dos 8 imóveis públicos não têm
   uma única fotografia e nenhum tem planta (secção 5). Nenhum tour compensa isto.
2. **O ativo de media mais barato e mais diferenciador é a obra**: o Painel tem acesso diário a um
   estaleiro que as redes não têm. Uma rotina de 15 minutos por quinzena (6 fotos do mesmo ângulo + 1
   vídeo vertical) alimenta o site, o Instagram, a newsletter e o booklet.
3. **Tour 3D só no fim**, nas moradias acabadas e para compradores à distância — apresentado como
   ferramenta de conveniência, nunca como promessa de "vender mais caro" (a evidência independente não
   o sustenta).
4. **O booklet de Escudeiros é o molde** a replicar para Merelim, Esporões e cada lote.

---

## 3. Copywriting — anúncios, CTAs, emails e redes

### 3.1 Anatomia de um anúncio que converte **[Boa prática]**

| Peça | Função | Regra prática |
|---|---|---|
| **Título** | Fazer parar o scroll e filtrar | Tipologia + 1 diferenciador concreto + sítio. 45–70 caracteres. Nada de adjetivos sem prova. |
| **1.ª frase** | É o que aparece no cartão, na pré-visualização do WhatsApp e no Google | Responder a "porque é que esta casa e não outra?" com um facto. |
| **Corpo** | Fazer imaginar a vida lá dentro, e tirar dúvidas | 3 blocos curtos: *a casa* (percurso pelos pisos), *os materiais* (com nome), *a zona* (minutos e metros). 120–250 palavras. |
| **Ficha** | Comparar sem ler | Campos estruturados, não texto: áreas (útil/bruta/terreno), pisos, quartos, WC, garagem, ano/entrega, **classe energética**, orientação, referência. |
| **CTA** | Dizer o passo seguinte e baixar o custo de o dar | Verbo + objeto + facilidade: "Marque uma visita — respondemos hoje". |
| **Aviso** | Proteger e dar confiança | "Imagens 3D ilustrativas. Áreas a confirmar no projeto aprovado." |

**Regras de estilo para o Painel** (coerentes com o `BRIEFING.md`: "direto, confiante, sem floreado,
PT-PT correto, nunca pomposo"):
- **Número > adjetivo.** "Jardim de 45 m² virado a sul" em vez de "agradável zona exterior".
- **Mostrar quem constrói.** "Construída por nós, com capoto em toda a fachada" — nenhuma rede pode
  escrever isto.
- **Uma ideia por frase, frases curtas.** Os anúncios lêem-se no telemóvel.
- **Sem maiúsculas a gritar** ("A SUA", "VIDA e MOVIMENTO", "2 QUARTOS") e sem pontos de exclamação.
- **Tratamento**: terceira pessoa de cortesia ("a sua casa", "marque a sua visita"), sem "você" explícito
  — é o registo neutro em PT-PT.

### 3.2 Frameworks adaptados ao imobiliário português **[Boa prática]**

| Framework | Estrutura | Onde usar no Painel | Exemplo curto |
|---|---|---|---|
| **AIDA** | Atenção → Interesse → Desejo → Ação | Descrição de ficha, página de projeto | *A:* "A última moradia de Esporões." *I:* "T4 de gaveto, 400 m², garagem dupla." *D:* "Jardim em dois lados e espaço para piscina." *A:* "Marque a visita esta semana." |
| **PAS** | Problema → Agitação → Solução | Anúncios para quem arrenda; captação de terrenos | "Paga 900 € de renda em Braga? Em 30 anos são 324 000 € que não ficam seus. Uma moradia T3 em Merelim fica [X] €/mês com crédito a 90%¹." *(¹ pressupostos visíveis)* |
| **BAB** | Antes → Depois → Ponte | Posts de obra, antes/depois, lotes | "Em março era um terreno com mato. Hoje é a fundação da casa da família S. Daqui a [n] meses, a chave." |
| **FAB** | Característica → Vantagem → Benefício | Lista de acabamentos (substitui a lista de 27 itens) | "Bomba de calor de 270 L → água quente sem caldeira a gás → conta de energia mais baixa todo o ano." |
| **4U** | Útil · Urgente · Único · Ultra-específico | Títulos de anúncio e assuntos de email | "Merelim: 3 moradias T3 por vender, entrega [mês/ano]" |
| **Lugar · Casa · Prova · Pedido** (proposta própria) | Onde é (com tempos) → o que é (com números) → porque acreditar (construtor, obra, licenças) → o que fazer agora | Molde por defeito de todos os anúncios do Painel | Ver biblioteca no fim |

> ⚠️ PAS com números de crédito: a simulação tem de dizer taxa, prazo, entrada e que não é uma proposta
> de crédito. A publicidade a crédito tem regras próprias (Banco de Portugal) **[verificar com jurista
> antes de publicar valores de prestação]**.

### 3.3 PT-PT vs PT-BR — o que denuncia um texto "importado"

| PT-PT (usar) | PT-BR (evitar) | Nota |
|---|---|---|
| connosco | conosco | **Aparece num anúncio do Painel hoje** ("Invista diretamente conosco") |
| casa de banho / WC | banheiro | |
| rés-do-chão | térreo | |
| arrendamento, arrendar, renda | aluguel, alugar | |
| fração, T3, T3+1 | unidade, 3 quartos, 3 dormitórios | O "+1" (escritório/quarto extra) é convenção portuguesa |
| logradouro, quintal | quintal | "logradouro" é o termo das cadernetas e dos projetos |
| lugar de garagem, box | vaga de garagem | |
| arrecadação, arrumos | depósito | |
| cave, sótão | porão | |
| cozinha equipada | cozinha planejada | |
| CPCV, sinal, escritura | compromisso, entrada | |
| IMT, IMI, Imposto do Selo | ITBI, IPTU | |
| estamos a construir | estamos construindo | gerúndio é marca de PT-BR |
| marque a sua visita | agende sua visita | PT-PT usa o artigo antes do possessivo |
| contacto, facto | contato, fato | grafias pós-Acordo em PT-PT |
| equipa, ginásio, autocarro, comboio | time, academia, ônibus, trem | úteis nos textos de "a zona" |

### 3.4 Clichés e o que pôr no lugar

| Cliché | Problema | Substituir por |
|---|---|---|
| "Excelente oportunidade" / "a não perder" / "imperdível" | Todos os anúncios o dizem; soa a stock parado | O facto que faz a oportunidade: "€/m² abaixo da mediana da freguesia (INE)", "última de 7" |
| "Bem localizado" / "localização privilegiada" / "perto de tudo" | Não diz onde nem a quê | "8 min de carro ao centro, 400 m da escola básica, 2 km da N309" (medido) |
| "Acabamentos de luxo / de qualidade" | Não verificável | Nome e marca: "caixilharia de alumínio com vidro duplo, estores elétricos térmicos" |
| "Muita luz" / "solarengo" | Vago | "Sala virada a sul com janelas de [x] m" |
| "Fantástica moradia" / "casa de sonho" | Adjetivo de vendedor | O que a torna rara: "gaveto, jardim em dois lados" |
| "Zona calma" | Pode querer dizer "isolada" | "Rua sem saída, só moradias" |
| "Venha conhecer!" | CTA sem facilidade | "Visitas ao sábado de manhã — escolha a hora" |
| "Ótimo investimento" | Promessa financeira | Dados: renda média da zona, procura (com fonte) — ou não dizer |

**[Interno]** O próprio site usa vários: "localização privilegiada" e "acabamentos criteriosamente
selecionados" (`/construcao`), "Oportunidades selecionadas" (homepage), "Fantástica moradia Gaveto",
"Moradia de luxo com vista panoramica" (anúncios).

### 3.5 O que um anúncio em Portugal tem de dizer — lista de verificação

> **[De memória, verificar com jurista e no Diário da República]** — não consegui ler os diplomas nesta
> sessão. A lista serve para não esquecer; a redação final deve ser validada.

- **Classe energética** no anúncio de venda ou arrendamento (regime do Sistema de Certificação
  Energética, DL 101-D/2020). **O modelo de dados do Painel não tem este campo** (secção 5).
- **Número de licença AMI** do mediador na publicidade (Lei 15/2013, mediação imobiliária) — o site
  mostra-o no rodapé; deve estar também nos anúncios em portais e redes.
- **Ficha Técnica da Habitação** para habitação nova (DL 68/2004) — deve estar disponível ao comprador;
  oferecê-la para descarga na página do projeto é um argumento de confiança.
- **Renders e decoração virtual assinalados** como ilustrativos (publicidade enganosa).
- **Preço**: decidir uma política e cumpri-la (o `BRIEFING` diz "reservado → sem preço"; o código mostra
  o preço das reservadas, esbatido).
- Rodapé: **Livro de Reclamações Eletrónico** e informação sobre **resolução alternativa de litígios**;
  política de privacidade e consentimento RGPD nos formulários (F-17 da auditoria de julho, ainda aberto).

### 3.6 Exemplos reais analisados

> O pedido era 10–20 anúncios de redes e promotores com link. Com o orçamento de pesquisa esgotado,
> **não os recolhi** (ver Backlog). Analiso, em vez disso, os textos **reais** que o Painel tem hoje no
> ar — que são os que contam — e o booklet, que é o exemplo positivo.

**Exemplo A — "Moradia T3+1 com Jardim - Merelim"** · 405 000 € · 276 m²
<https://painel-tematico.vercel.app/imoveis/moradia-t3-jardim-merelim> (lido na base de dados a 23/11/2026)
- Descrição: *"Moradia de 3 pisos com jardim privativo, garagem e arrumos."* — uma frase, sem prova.
- "Especificidades": **27 entradas** que misturam um texto de marketing em quatro parágrafos ("…um estilo
  Dinâmico 'à Americana'…", "…no interior da VIDA e MOVIMENTO que a cidade de Braga oferece…"), uma
  assinatura ("Hugo CARRINHO"), a lista técnica ("- 2 QUARTOS (15m2) + 1 SUITE (25m2)", "- Instalação
  completa de Bomba de Calor 270lts"…) e uma despedida ("Até já!") — tudo renderizado como pontos de uma
  lista de características.
- **O texto fala da "Rua das Camélias - Loteamento da Fontela"**, que é a morada do empreendimento de
  **Esporões** (subtítulo do projeto: "Moradias da Fontela") — não de Merelim.
- PT-BR: "conosco". Unidades sem formatação: "15m2", "270lts", "±45m2".
- **Porque não funciona:** a informação boa (bomba de calor, pré-instalações, garagem para 2 carros,
  escritório junto ao jardim) está lá, mas enterrada, em maiúsculas, e com a localização errada.

**Exemplo B — "Moradia T4 com Piscina"** · 525 000 € · 400 m² · Esporões
<https://painel-tematico.vercel.app/imoveis/moradia-t4-braga-esporoes>
- Descrição: *"Fantástica moradia Gaveto com possibilidade de piscina, jardim e garagem dupla."* — o
  título promete "com Piscina", a descrição diz "possibilidade de piscina". **Título e corpo
  contradizem-se.**
- As 27 "especificidades" são **as mesmas do Exemplo A**, incluindo "2 QUARTOS + 1 SUITE" e "1 ESCRITÓRIO"
  — para um T4. **Pelo menos um dos dois anúncios tem a tipologia ou a localização errada.**
- Localidade escrita "Esporoes" (sem til).

**Exemplo C — demonstrações ainda no ar**
- "Moradia V4 Vista Mar Cascais" — 1 250 000 €, **em destaque, sem fotografias**: *"Moradia de luxo com
  vista panoramica para o mar."* Um promotor de Braga com uma moradia em Cascais em destaque, sem foto, é
  o tipo de detalhe que faz um comprador duvidar do resto.
- "Apartamento T1 Arrendamento" (Lisboa, Arroios) e "Studio T0 Moderno" (Lisboa, Intendente) — sem
  fotografias, texto genérico ("design contemporaneo", sem acento).

**Exemplo D — projetos**
- Subtítulos: "Viver perto da cidade" (Merelim), "Natureza e tranquilidade" (Lomar), "Moradias da
  Fontela" (Esporões). Os dois primeiros servem a qualquer projeto em qualquer cidade; o terceiro tem
  nome próprio — é o caminho.
- Um "projeto" chamado **"Empreendimentos"** com o texto *"Conheca os nossos proximos empreendimentos."*
  (sem cedilha nem acento) está ativo e aparece na listagem.

**Exemplo E — homepage**
- Hero: *"Cada imóvel conta uma história!"* / *"A SUA comeca aqui."* — gralha ("comeca"), maiúsculas,
  exclamação, e uma ideia que serve a qualquer imobiliária do país.
- Cartões "Porquê nós": *"…porque conhecemos todos os canto do distrito"* (gralha: "cantos");
  *"Estratégias de marketing e networking para vender bem, sem riscos…"* — é a promessa de um mediador,
  não de um construtor.

**Exemplo F (positivo) — booklet de Escudeiros** <https://painel-tematico.vercel.app/booklets/escudeiros.html>
- *"Lote plano para moradia isolada · 700 m² · Plano pronto a projetar · ≈ 280 m² de construção · 99 000 €
  · Ref. ESC-700"*; *"Sendo plano, poupa em muros e terras."*; tabela de mercado com fonte INE.
- **Porque funciona:** cada frase é um facto útil para a decisão; o benefício vem colado à
  característica ("plano → poupa em muros e terras" — é FAB sem o nome); os números trazem fonte; o
  aviso legal dá confiança em vez de a tirar. **Este é o tom de referência para tudo o resto.**

### 3.7 Emails, newsletters e redes sociais **[Boa prática]**

**Emails — o que um promotor deve enviar (e quando)**

| Momento | Email | Objetivo |
|---|---|---|
| Pedido de informação (minuto 0) | Resposta automática **+ WhatsApp humano em minutos**: booklet em PDF, 2 horários de visita, nome de quem vai responder | Ganhar o primeiro contacto — ver evidência de velocidade na secção 4 |
| D+2 | "As 3 perguntas que nos fazem sempre sobre [projeto]" (prazo de entrega, o que inclui, como se reserva) | Tirar objeções por escrito |
| D+7 | "Esta semana na obra" — 3 fotos e a próxima etapa | Provar que a obra anda |
| D+14 | "Ainda faz sentido para si?" — com 1 alternativa (outra fração/projeto) | Requalificar ou encerrar com elegância |
| Lista de espera ("em breve") | Confirmação com o que vai receber e quando; **acesso 48 h antes do público** ao lançamento | Recompensar quem se registou cedo |
| Newsletter mensal | "Diário de obra" de todos os projetos + 1 número do mercado de Braga (INE) + 1 produto | Manter a base quente sem pedir nada |

**Redes — formatos por plataforma**
- **Instagram**: carrossel "5 coisas que não vê numa visita" (o que está dentro das paredes); reel
  semanal de obra; "antes/depois" do mesmo ângulo; stories com sondagem ("T3 ou T3+1?").
- **Facebook**: as mesmas peças para um público mais velho e local; grupos de Braga e da freguesia
  (sem spam: diário de obra e notícias do loteamento).
- **LinkedIn**: a empresa como construtora — processo, segurança, ETICS, contratação; serve a
  recrutamento, a parceiros (redes, bancos) e a investidores.
- **TikTok/Shorts**: o construtor a explicar um detalhe em 30 s ("porque é que pomos capoto").
  Pessoas reais > animações.
- **Google Business Profile**: um post por semana com foto da obra e ligação ao projeto.

### O que isto significa para o Painel Temático

1. **Antes de escrever novo, corrigir o que está errado**: os dois anúncios mais caros do site
   (405 000 € e 525 000 €) partilham um bloco de texto que troca localização e tipologia. É o primeiro
   trabalho de copy, e não leva mais de uma hora.
2. **Separar texto de dados**: descrição em 3 blocos curtos + ficha com campos estruturados (incluindo
   classe energética). A lista de 27 linhas deve passar a 6 destaques FAB + uma ficha técnica.
3. **O tom do booklet é a voz da marca**: factual, com números e fontes, prudente. Usá-lo como guia de
   estilo.
4. **Revisão PT-PT obrigatória** antes de publicar (acentos, "connosco", maiúsculas, unidades "m²").

<!-- CONTINUA -->
