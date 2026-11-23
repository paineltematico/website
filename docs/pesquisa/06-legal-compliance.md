# 06 — Legal e compliance (Portugal e UE)

> Capítulo de pesquisa para o Painel Temático (Braga). Eixo: o que a lei portuguesa e europeia
> exige a um promotor imobiliário que vende lotes, moradias e frações próprias, que já tem
> **angariações de terceiros** no CRM, e que quer pôr um **agente de IA** a falar com clientes
> (site, WhatsApp, email) e automatizar marketing.
> Pesquisa feita a **23/11/2026**. Gravado de forma incremental.

> **AVISO — ISTO NÃO É ACONSELHAMENTO JURÍDICO.** É uma análise informativa, feita a partir de
> fontes públicas, para preparar decisões e conversas com advogado. Leis mudam, a numeração de
> artigos muda com as republicações, e a aplicação a um caso concreto depende de factos que este
> documento não conhece. Tudo o que estiver marcado **[advogado]** deve ser validado por um
> advogado com prática em imobiliário/proteção de dados antes de ser posto em produção.

## Resumo

1. **Vender o que é seu não exige licença AMI; mediar o alheio exige.** A Lei 15/2013 define
   mediação como procurar destinatários **em nome dos clientes** (art. 2.º), e isso inclui
   divulgar/publicitar imóveis de clientes. O CRM e o site **já fazem angariações e anúncios "Para
   Arrendamento"** — logo o regime da mediação aplica-se, e o AMI mostrado no rodapé (25031, defeito
   em `settings.ts`) tem de ser confirmado como licença **ativa e da entidade certa**.
2. **O promotor é entidade obrigada no branqueamento de capitais mesmo sem mediar** (Lei 83/2017,
   art. 4.º: compra, venda e promoção imobiliária). Supervisão do IMPIC; regulamento em vigor é o
   **603/2021** (não o 276/2019); as transações comunicam-se ao IMPIC **trimestralmente** desde a
   Lei 58/2020. KYC antes do CPCV; nada em numerário ≥ 3 000 € (LGT, art. 63.º-E).
3. **Marketing a leads precisa de consentimento por canal** (Lei 41/2004, art. 13.º-A; CNPD,
   Diretriz/2022/1). O soft opt-in só cobre **clientes** e produtos análogos; WhatsApp e SMS
   estão abrangidos. O site não tem política de privacidade, cookies, nem campos de consentimento,
   e o `Analytics.tsx` carregaria GA4/Meta Pixel sem consentimento.
4. **AI Act: o art. 50.º aplica-se desde 02/08/2026** — o agente tem de dizer que é IA; imagens de
   staging virtual de imóveis reais são *deep fakes* a rotular; a literacia em IA (art. 4.º) está
   em vigor desde 02/02/2025. O agente não é alto risco, salvo se avaliar solvabilidade.
   (Datas do texto publicado; **verificar** se o "Digital Omnibus" de 19/11/2025 já foi aprovado e
   o que mudou.)
5. **Anúncios**: classe energética obrigatória (SCE, DL 101-D/2020), veracidade de áreas e preços
   (DL 57/2008), rotulagem de renders, e no site: identificação legal, Livro de Reclamações
   Eletrónico e RAL. O link para a plataforma europeia ODR já não deve ser necessário (encerrada
   em 2025 — a verificar). Quase toda a secção 5 ficou por reconfirmar em fonte primária.
6. **A secção 8 tem uma checklist de 44 itens** com a norma de base e a prioridade; os P0 são o
   AMI, o registo/reporte IMPIC, o KYC no CRM, a política de privacidade/cookies, o consentimento
   por canal, a classe energética e a identificação legal no rodapé.

## Notas de método — ler antes de citar qualquer coisa daqui

- **Limitações desta sessão.** Os sites `diariodarepublica.pt` e `gov.pt` **não abriram** a
  partir deste ambiente (domínio fora da rede permitida da sessão), e o orçamento de pesquisas
  web da sessão esgotou-se a meio. Por isso:
  - o que vem de **excertos devolvidos pelo motor de pesquisa** (DR, IMPIC, CNPD, sociedades de
    advogados, imprensa) está marcado **[confirmado]**, com o link de onde veio o excerto;
  - o que vem do **conhecimento prévio do redator** (normas que conheço bem mas não consegui
    reabrir hoje) está marcado **[a verificar]**, com a fonte primária onde se confirma. Não
    inventei normas: quando não sei o número do artigo ou o montante, digo "não confirmado";
  - **[advogado]** = ponto onde a resposta depende de interpretação ou de factos da empresa.
- **Numeração de artigos.** Várias leis aqui citadas foram republicadas (ex.: Lei 83/2017 pela
  Lei 58/2020). Antes de citar um artigo num documento para clientes, abrir o **texto
  consolidado** no Diário da República.
- **O que olhei no código** (`/home/user/website`, só leitura) para ancorar as conclusões:
  `src/components/Footer.tsx`, `src/lib/settings.ts`, `src/components/Analytics.tsx`,
  `src/components/avaliacao/AvaliacaoForm.tsx`, `src/lib/email.ts`,
  `src/app/admin/dashboard/page.tsx`, `supabase-schema-completo.sql`. As caixas
  "O que isto significa para o Painel Temático" são **inferências** a partir disso.

### Três factos do próprio site que mudam a análise

1. **O CRM já tem "angariações"** (`imoveis.angariador_id`, `angariacao_perdida`, KPI
   "Angariações ativas · imóveis em carteira" no dashboard) e o site lista imóveis **"Para
   Arrendamento"**. Angariar imóveis de terceiros para vender/arrendar **é** mediação
   imobiliária (secção 1).
2. **O rodapé mostra "AMI {ami_numero} · IMPIC {impic_numero}"**, com o defeito
   `ami_numero: '25031'` em `src/lib/settings.ts`. Não consegui confirmar nesta sessão a que
   entidade pertence a licença AMI 25031 — **tem de ser verificado** na pesquisa pública do IMPIC
   (ver 1.6). Mostrar um número AMI que não é da entidade que opera o site seria grave.
3. **O fluxo `/avaliacao`** pede dados e fotografias do imóvel de um proprietário "para a
   estratégia de venda" (`src/lib/email.ts`) e o aviso do formulário diz apenas "em conformidade
   com o RGPD. Não partilhamos informações com terceiros". Isto é captação de angariações
   (mediação) **e** um tratamento de dados sem política de privacidade ligada.

---

## 1. Mediação imobiliária (Lei n.º 15/2013)

### 1.1 O diploma e as alterações

- **Lei n.º 15/2013, de 8 de fevereiro** — regime jurídico da atividade de mediação imobiliária;
  publicada no DR n.º 28, 1.ª série. **[confirmado]**
  [DR — Lei 15/2013](https://diariodarepublica.pt/dr/detalhe/lei/15-2013-257806) ·
  [IMPIC — PDF do DR](https://www.impic.pt/impic/assets/misc/pdf/legislacao/Lei201315.pdf)
- **Decreto-Lei n.º 102/2017, de 23 de agosto** — primeira alteração; mexeu nos **arts. 16.º e
  32.º** e passou a validação/depósito dos modelos de contrato com cláusulas contratuais gerais
  da DGC para o **IMPIC**; o mesmo DL alterou também deveres de informação ao consumidor (Lei
  144/2015). **[confirmado]**
  [DR — DL 102/2017](https://diariodarepublica.pt/dr/detalhe/decreto-lei/102-2017-108041482) ·
  [informador.pt](https://informador.pt/legislacao/diploma/decreto-lei-n-o-102-2017/)
- **Portaria n.º 228/2018** — aprova o **modelo de contrato de mediação** com cláusulas
  contratuais gerais; exige identificar a empresa **incluindo o número da licença AMI junto do
  IMPIC**. **[confirmado]**
  [informador.pt — Portaria 228/2018](https://informador.pt/legislacao/diploma/portaria-n-o-228-2018/) ·
  [PLMJ — nota sobre CCG nos contratos de mediação](https://www.plmj.com/en/know-how/informative-notes/general-contractual-terms-and-conditions-in-estate-agency-contracts/19091)
- **Regulamentação associada**: Portaria n.º 199/2013 (taxas de licenciamento) e Regulamento n.º
  16/2014 (procedimentos administrativos). **[confirmado]** (via excerto de pesquisa sobre o
  [DR — Portaria 199/2013](https://diariodarepublica.pt/dr/detalhe/portaria/199-2013-513608)).
- O guia oficial **gov.pt "Mediação imobiliária"** (atualizado a **09/06/2026**, segundo o
  excerto) confirma que o exercício da atividade exige **licença do IMPIC**.
  [gov.pt — guia](https://www.gov.pt/guias/mediacao-imobiliaria) **[confirmado — excerto]**
- **Não encontrei** nesta sessão alterações à Lei 15/2013 posteriores a 2017. **Não confirmado**
  que não existam — verificar o texto consolidado no DR.

### 1.2 O que é mediação (art. 2.º) — e porque vender o que é seu não é

- O art. 2.º define a atividade como a **procura, pela empresa, em nome dos seus clientes, de
  destinatários** para negócios sobre imóveis (constituição/aquisição de direitos reais, permuta,
  trespasse, arrendamento, cessão de posição contratual); o n.º 2 acrescenta ações como a
  **prospeção** de imóveis pretendidos pelos clientes e a **promoção** dos imóveis dos clientes,
  **designadamente pela sua divulgação e publicitação**. O n.º 5 define "destinatário" como quem
  celebra com o cliente da empresa o negócio mediado. **[confirmado — excertos]**
  ([DR](https://diariodarepublica.pt/dr/detalhe/lei/15-2013-257806);
  [TRC — acórdão](https://trc.pt/mediacao-imobiliaria-proibicao-de-receber-remuneracao-de-clientes-e-destinatarios-do-mesmo-negocio/)).
  A redação literal completa do n.º 1 **não** foi reaberta hoje.
- **Promotor a vender imóveis próprios.** A definição assenta em atuar **por conta de outrem**
  ("em nome dos seus clientes"). Quem vende o que é seu (o promotor que constrói e vende as
  frações do seu projeto) é **parte** no negócio, não intermediário — logo, pela letra da lei,
  **não precisa de licença AMI para isso**. É a leitura corrente no setor, mas **não encontrei
  fonte oficial que o diga expressamente** — é inferência a partir da definição. **[advogado]**
  - Reforço histórico: o antigo DL 77/99 proibia às mediadoras a compra e venda de imóveis por
    conta própria, o que mostra que o legislador sempre tratou as duas atividades como
    distintas. [DR — DL 77/99](https://diariodarepublica.pt/dr/detalhe/decreto-lei/77-1999-144988)
    **[confirmado — excerto; norma revogada]**
  - Cuidado com as zonas cinzentas: **vender frações de um projeto em que a empresa é só sócia
    minoritária, ou de uma sociedade-veículo do grupo**, ou **vender lotes de um terreno de um
    parceiro** em troca de comissão, pode já ser "por conta de outrem". **[advogado]**
- **Imóveis de terceiros** (angariações, arrendamentos de proprietários, revenda de clientes) **=
  mediação**: exige licença AMI da entidade que o faz. A licença é concedida pelo **IMPIC**
  (art. 3.º, n.º 1). **[confirmado]**
  [gov.pt — licença](https://www.gov.pt/servicos/mediacao-imobiliaria-licenca-para-o-exercicio-da-atividade)

### 1.3 Requisitos da licença AMI

- Requisitos indicados pelo gov.pt (excerto): **idoneidade comercial** (da pessoa singular ou
  coletiva e dos representantes legais) e **seguro de responsabilidade civil** com condições e
  capital mínimo fixados no **art. 7.º, n.º 1, e Anexo I** da lei. **[confirmado — excerto]**
  [gov.pt — guia](https://www.gov.pt/guias/mediacao-imobiliaria)
- Há uma **taxa anual de regulação** e **comprovação anual dos requisitos** junto do IMPIC.
  **[confirmado — título do serviço]**
  [gov.pt — taxa anual](https://www.gov.pt/servicos/mediacao-imobiliaria-pagamento-da-taxa-anual-de-regulacao-e-comprovacao-dos-requisitos-da-licenca-ou-do-registo)
- O capital mínimo do seguro e o montante das taxas **não foram confirmados** nesta sessão.
- **Fiscalização em curso**: a imprensa noticia que o **IMPIC e a AT cruzam dados** para detetar
  mediação ilegal ("mediadores clandestinos").
  [idealista — IMPIC e AT vão cruzar dados](https://www.idealista.pt/news/node/76312) ·
  [idealista — Fisco e IMPIC apertam cerco](https://www.idealista.pt/news/node/61389)
  **[confirmado — títulos; datas dos artigos não confirmadas]**

### 1.4 O contrato de mediação (arts. 16.º e 19.º)

- **Forma escrita, sob pena de nulidade** (art. 16.º) — a doutrina trata-a como requisito de
  validade. Entre os elementos obrigatórios: identificação das partes e da empresa (com nº AMI),
  identificação do negócio e do imóvel, **condições de remuneração**, e a **referência ao regime
  de exclusividade, quando acordado, com especificação dos efeitos para a empresa e para o
  cliente** (al. g)). **[confirmado — excertos]**
  [Pedro Vasconcelos — Contratos de mediação imobiliária (PDF)](https://pedro-vasconcelos-sn5l.squarespace.com/s/2020-26-1401-1462.pdf) ·
  [jurisprudencia.pt — exclusividade](https://jurisprudencia.pt/acordao/219719/)
- Se a empresa usar **cláusulas contratuais gerais** (o normal), o modelo tem de seguir a Portaria
  228/2018 e estar validado/depositado no IMPIC (regime do DL 102/2017). **[confirmado]**
- **Remuneração (art. 19.º)** **[confirmado — excertos]**:
  - n.º 1: devida com a **conclusão e perfeição do negócio** visado, ou com o **contrato-promessa**
    se assim se estipular;
  - n.º 2: em **exclusividade**, também é devida se o negócio não se concretizar por **causa
    imputável ao cliente** proprietário (o STJ exige prova dessa causa imputável);
  - n.º 3: se o cliente for **comprador/arrendatário**, pode haver **adiantamentos** se previstos
    expressamente, a devolver nos termos legais;
  - n.º 4: o exercício de direito legal de preferência **não afasta** a remuneração.
  [jurisprudencia.pt — remuneração](https://jurisprudencia.pt/acordao/244880/) ·
  [STJ — dgsi.pt](https://www.dgsi.pt/jstj.nsf/954f0ce6ad9dd8b980256b5f003fa814/40d299edf7e9dcb880258998002b780f?OpenDocument=)
- **Exclusividade "simples" vs "absoluta"**: na simples, a empresa só tem direito à comissão se o
  negócio resultar de **outro mediador**, não se o proprietário vender por si; a absoluta tem de
  estar clara no contrato. **[confirmado — jurisprudência]**
  [jurisprudencia.pt — acórdão 219719](https://jurisprudencia.pt/acordao/219719/)

### 1.5 Deveres e proibições (art. 17.º) e sanções (art. 32.º)

- **Proibido receber remuneração de clientes e de destinatários no mesmo negócio** (art. 17.º,
  n.º 2, al. a)): não se cobra comissão ao vendedor **e** ao comprador. A Relação de Coimbra
  considerou que até o acordo vendedor–mediadora para a comissão ser cobrada ao comprador viola
  esta proibição. **[confirmado]**
  [TRC](https://trc.pt/mediacao-imobiliaria-proibicao-de-receber-remuneracao-de-clientes-e-destinatarios-do-mesmo-negocio/)
- **Proibido intervir como parte interessada** em negócio sobre imóvel objeto do contrato de
  mediação (ex.: a mediadora comprar o imóvel que angariou). **[confirmado — excerto de
  comentário de sociedade de advogados]**
  [SRS Legal / idealista, 27/12/2023](https://www.srslegal.pt/xms/files/Comunicacao/SRS_na_Imprensa/2023/2023_12_27_AO_Idealista_Responsabilidades_Agencia_Imobiliaria_JPS.pdf)
  — **ponto crítico para um promotor que também medeia**: se a Painel Temático angariar um lote de
  um proprietário e quiser ela própria comprá-lo para construir, tem de **sair da posição de
  mediadora** (ou não a ter assumido) — **[advogado]**.
- Deveres para com os clientes (art. 17.º, n.º 1), segundo comentário: verificar **capacidade e
  legitimidade** dos clientes para contratar; certificar-se da **correspondência entre as
  características do imóvel e as informadas pelo cliente**; propor aos destinatários os termos
  exatos do negócio; comunicar de imediato factos que ponham em causa o negócio.
  **[a verificar — redação exata do art. 17.º não reaberta hoje]**
- **Sanções (art. 32.º)**: o exercício **sem licença** e a violação repetida dos deveres do art.
  17.º, dos n.ºs 1 e 2 do art. 18.º e do n.º 3 do art. 19.º são contraordenações. **Os montantes
  das coimas não foram confirmados** nesta sessão. **[confirmado quanto à tipificação; montante
  não confirmado]** [DR — Lei 15/2013](https://diariodarepublica.pt/dr/detalhe/lei/15-2013-257806)

### 1.6 O que um não-licenciado pode e não pode fazer

- **Pode**: vender e arrendar **o que é seu**; publicitar os seus projetos; ter comerciais
  assalariados a vender as suas frações; pagar a uma **mediadora licenciada** para vender os seus
  imóveis (aí o contrato de mediação é com ela).
- **Não pode** (sem AMI): angariar imóveis de terceiros, publicitá-los, mostrá-los, ou receber
  comissão por "apresentar" compradores a terceiros. A "promoção/divulgação" de imóveis de
  clientes faz parte da própria definição de mediação (art. 2.º, n.º 2). **[confirmado quanto à
  definição; aplicação a casos-limite → advogado]**
- **Pesquisa pública de licenças**: o IMPIC/gov.pt disponibiliza a pesquisa de empresas de
  mediação licenciadas. [gov.pt — pesquisar empresa](https://www.gov.pt/servicos/pesquisar-uma-empresa-de-mediacao-imobiliaria)
- A figura do **angariador imobiliário** com licença própria foi eliminada em 2013 (os
  "consultores" atuam ao abrigo da licença da empresa de mediação). **[a verificar]** — ver
  [idealista — "Agentes imobiliários com licença de mediadoras?"](https://www.idealista.pt/news/node/69107).

### O que isto significa para o Painel Temático (secção 1)

1. **Separar no CRM o que é "próprio" do que é "mediado".** Hoje `imoveis` não distingue. Precisa
   de um campo `regime` (`proprio` | `mediacao`) e, para os mediados, `contrato_mediacao_id`,
   `exclusividade` (simples/absoluta/nenhuma), `comissao`, `validade`, `proprietario_id`. Sem isto
   não há como provar que um anúncio de terceiro tem contrato escrito (art. 16.º).
2. **Confirmar já a licença AMI 25031** (pesquisa pública do IMPIC): está ativa? Em nome de que
   **entidade** (NIPC)? É a mesma que opera o site? Se a mediação é feita por outra sociedade do
   grupo, o site tem de dizer **quem é quem** (quem vende o próprio, quem medeia o alheio). Se não
   houver licença válida, **parar as angariações de terceiros e os anúncios "Para Arrendamento"
   de proprietários** até a situação estar regularizada. **[advogado]**
3. **O agente de IA não pode "mediar" por uma entidade sem licença.** Sugerir imóveis de terceiros,
   marcar visitas a esses imóveis e negociar condições é atividade de mediação — só pode ser feito
   em nome da entidade licenciada, e o agente tem de identificar essa entidade.
4. **Comissão de um só lado** (art. 17.º, n.º 2, a)): o CRM deve impedir registar comissão de
   vendedor e comprador no mesmo negócio.
5. **Conflito promotor/mediador**: se a Painel Temático angariar um terreno e o quiser comprar,
   não pode estar na posição de mediadora desse imóvel. Regra de negócio no CRM: um imóvel em
   `mediacao` não pode ter a própria empresa como compradora.
6. **"Avaliação" ≠ avaliação oficial.** O `/avaliacao` produz uma **estimativa comercial**; não a
   apresentar como avaliação para crédito (essas são feitas por peritos avaliadores registados na
   CMVM para as instituições de crédito — **[a verificar]**, Lei n.º 153/2015).

---

## 2. Branqueamento de capitais (Lei n.º 83/2017 + Regulamento IMPIC)

### 2.1 Quem está abrangido — o promotor está, mesmo sem mediar

- A Lei n.º 83/2017, de 18 de agosto (republicada pela **Lei n.º 58/2020, de 31 de agosto**),
  inclui nas **entidades não financeiras** (art. 4.º) quem exerce **atividade imobiliária**, que
  abrange: **(i) mediação imobiliária; (ii) compra, venda, compra para revenda ou permuta de
  imóveis; (iii) arrendamento; (iv) promoção imobiliária**. **[confirmado — excertos]**
  [DR — Lei 83/2017](https://diariodarepublica.pt/dr/detalhe/lei/83-2017-108021178) ·
  [Portal das Finanças — texto consolidado (PDF)](https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/legislacao/diplomas_legislativos/Documents/Lei_83_2017.pdf) ·
  [DR — Lei 58/2020](https://diariodarepublica.pt/dr/detalhe/lei/58-2020-141382321)
- A **supervisão setorial é do IMPIC**. **[confirmado]**
  [DR — Aviso 739/2021](https://diariodarepublica.pt/dr/detalhe/aviso/739-2021-153663117)
- **Regulamento em vigor: Regulamento n.º 603/2021, de 2 de julho** (IMPIC), em vigor desde
  **05/07/2021**, que **revogou o Regulamento n.º 276/2019**. **[confirmado]**
  [DR — Regulamento 603/2021](https://diariodarepublica.pt/dr/detalhe/regulamento/603-2021-166264672) ·
  [ASMIP](https://www.asmip.pt/pt/asmip/branqueamento-de-capitais_312/) ·
  [Imojuris](https://imojuris.vidaimobiliaria.com/actualidade/novidades/Regulamento-n-o-603-2021-de-2-de-julho/) ·
  [AICCOPN](https://www.aiccopn.pt/combate-ao-branqueamento-de-capitais-no-setor-imobiliario/)
- **Alterações recentes à Lei 83/2017**: a **Lei n.º 70/2025, de 22 de dezembro** é a **sexta
  alteração** (executa o art. 38.º do Regulamento (UE) 2023/1113, transferências de fundos e
  criptoativos); a **Lei n.º 72/2025** (medidas restritivas, Dir. (UE) 2024/1226) não altera
  diretamente a Lei 83/2017, mas acrescenta a violação de medidas restritivas aos crimes
  precedentes do branqueamento (art. 368.º-A do Código Penal). **[confirmado]**
  [DR — Lei 70/2025](https://diariodarepublica.pt/dr/detalhe/lei/70-2025-992098940) ·
  [DR — Lei 72/2025](https://diariodarepublica.pt/dr/detalhe/lei/72-2025-992402106) ·
  [DLA Piper, 25/03/2026](https://www.dlapiper.com/en/insights/publications/2026/03/aml-cft-and-sanctions-in-2026) ·
  [Cuatrecasas](https://www.cuatrecasas.com/pt/portugal/financeiro/art/lei-execucao-regulamento-transferencias-fundos-criptoativos)

### 2.2 Obrigações concretas

| Obrigação | O que é | Fonte | Estado |
|---|---|---|---|
| **Comunicar o início de atividade ao IMPIC** | Data de início + código de acesso à **certidão permanente**, no prazo de **60 dias** | Lei 83/2017 / Regulamento IMPIC; comentário Millennium bcp | [confirmado — excerto] |
| **Comunicar as transações ao IMPIC — trimestralmente** | A Lei 58/2020 alterou o **art. 46.º, n.º 1, al. b)** e passou de semestral para **trimestral** (em vigor 01/09/2020; regulamentado nos arts. 14.º–20.º do Reg. 603/2021). Abrange transmissões de propriedade (escritura ou documento equivalente) e **arrendamentos com renda mensal ≥ 2 500 €** (art. 46.º, n.º 3) | [Aviso 739/2021](https://diariodarepublica.pt/dr/detalhe/aviso/739-2021-153663117) · [idealista](https://www.idealista.pt/news/node/44544) · [IMPIC OG 1/2021](https://www.impic.pt/impic/assets/misc/img/OG_2021IMPIC01.pdf) | [confirmado] |
| Prazo de cada comunicação trimestral | Um exemplo publicado: transações do **4.º trimestre de 2022** a comunicar **até 31/03/2023**. A **regra exata** (fim do trimestre seguinte?) **não foi confirmada** | [idealista — até 31 de março](https://www.idealista.pt/news/node/57312) | **não confirmado** |
| Conteúdo da comunicação | Inclui **identificação clara dos intervenientes**, **montante global** do negócio e **valor de cada imóvel**. Se o **meio de pagamento** é campo obrigatório **não foi confirmado** | [Aviso 739/2021](https://diariodarepublica.pt/dr/detalhe/aviso/739-2021-153663117) | parcial |
| **Identificação e diligência (KYC)** antes do negócio | No regime de 2019 (art. 5.º, n.º 2, Reg. 276/2019), a identificação fazia-se **antes da assinatura do contrato-promessa**, fosse venda ou arrendamento. **Não confirmei** que o Reg. 603/2021 mantém a mesma redação | [PLMJ](https://plmj.com/xms/files/NL_Novo_Regulamento_IMPIC.PDF) · [Imojuris](https://imojuris.vidaimobiliaria.com/actualidade/noticias/Deveres-de-identificacao-e-diligencia-acrescidos-n/) | parcial |
| **Beneficiário efetivo** | Identificar quem está por trás de compradores pessoas coletivas (RCBE + declaração, com condições) | [Imojuris](https://imojuris.vidaimobiliaria.com/actualidade/opinioes/O-regulamento-n-o-603-2021-do-IMPIC-e-as-novidades/) | [confirmado — comentário] |
| Políticas, procedimentos e controlos | Proporcionais à dimensão/natureza; avaliação de risco; formação | Reg. 276/2019 → 603/2021 | [confirmado — comentário] |
| **Conservação** | Dever de conservação de documentos. O prazo de **7 anos** aparece em comentários ao regime de 2019, mas **não confirmei** hoje o art. 51.º da Lei 83/2017 | [ASMIP](https://www.asmip.pt/pt/asmip/branqueamento-de-capitais_312/) | **prazo a verificar** |
| Comunicação de operações suspeitas, abstenção, recusa, PEP, sanções | Deveres gerais da Lei 83/2017 (numeração não reaberta hoje) | Lei 83/2017 | [a verificar] |
| **Coimas** | Comentário refere coimas para entidades não financeiras na ordem de **2 500 € a 1 000 000 €**; a PLMJ fala em coimas que "podem atingir 1 000 000 €" | [Millennium bcp](https://ind.millenniumbcp.pt/pt/geral/fiscalidade/Pages/Novas-obrigacoes-para-imobiliarias.aspx) · [PLMJ](https://plmj.com/xms/files/NL_Novo_Regulamento_IMPIC.PDF) | montantes **a verificar** (arts. 169.º e ss.) |

- **Atenção ao FAQ do IMPIC**: ainda descreve o **regime semestral antigo** (31 de agosto e fim
  de fevereiro). Não confiar nele para prazos. **[confirmado]**
  [IMPIC — FAQ BCFT](https://www.impic.pt/impic/pt-pt/perguntas-frequentes/combate-ao-branqueamento-de-capitais-e-ao-financiamento-do-terrorismo_4)

### 2.3 Pagamentos em numerário

- **Art. 63.º-E da Lei Geral Tributária** (aditado pela **Lei n.º 92/2017**, em vigor desde
  **23/08/2017**): é proibido pagar ou receber em numerário, em **transações de qualquer natureza**,
  montantes **iguais ou superiores a 3 000 €** (10 000 € para pessoas singulares **não
  residentes** que não atuem como empresários); faturas de sujeitos passivos com contabilidade
  organizada acima de **1 000 €** não se pagam em numerário. Coima: art. 129.º do RGIT
  (**180 € a 4 500 €**, segundo o excerto). **[confirmado]**
  [Portal das Finanças — LGT art. 63.º-E](https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/lgt/Pages/lgt63e.aspx) ·
  [DR — Lei 92/2017](https://diariodarepublica.pt/dr/detalhe/lei/92-2017-108030505) ·
  [Garrigues](https://www.garrigues.com/pt/pt-PT/news/lgtrgit-proibicao-de-pagamento-em-numerario) ·
  [OCC](https://www.occ.pt/pt-pt/noticias/lgt-pagamentos-em-numerario)
- Nenhuma fonte encontrada fala **especificamente** de imóveis, mas a norma cobre "transações de
  qualquer natureza" — logo **sinais, reservas e preços** estão abrangidos (inferência).

### 2.4 O que vem a seguir: pacote AML da UE (2027)

- **Regulamento (UE) 2024/1624 (AMLR)** — aplica-se a partir de **10/07/2027**; cria um
  **limite de 10 000 € a pagamentos em numerário** em toda a UE (art. 80.º), com proibição de
  fracionar e possibilidade de os Estados manterem limites **mais baixos** (o de Portugal é 3 000
  €). Uniformiza as regras para os **agentes imobiliários**. **[confirmado — fontes
  secundárias]**; a cobertura exata dos **promotores** no art. 3.º **não foi confirmada**.
  [EUR-Lex — Reg. 2024/1624](https://eur-lex.europa.eu/eli/reg/2024/1624/oj) ·
  [eucrim](https://eucrim.eu/news/the-eu-new-aml-single-rulebook-regulation/) ·
  [fiscal-requirements.com](https://www.fiscal-requirements.com/news/6249-eu-introduces-10000-cash-payment-limit-and-stricter-customer-identification-rules-from-july-2027)
- **Diretiva (UE) 2024/1640 (AMLD6)** — transposição até **10/07/2027**. **Não encontrei** proposta
  de lei portuguesa de transposição. **[confirmado quanto ao prazo]**
  [EUR-Lex — Dir. 2024/1640](https://eur-lex.europa.eu/eli/dir/2024/1640/oj) ·
  [PLMJ — Guia branqueamento 2024 (PDF)](https://plmj.com/xms/files/07_Guias_e_Manuais/2024/Branqueamento_de_capitais.pdf)

### O que isto significa para o Painel Temático (secção 2)

1. **A Painel Temático é entidade obrigada mesmo que nunca medeie** — basta vender/promover os
   seus imóveis. Confirmar: (a) está registada no portal do IMPIC com o início de atividade
   comunicado; (b) está a fazer as **comunicações trimestrais** (cada escritura de lote/moradia/
   fração entra); (c) tem políticas BCFT escritas e um **responsável pelo cumprimento normativo**
   designado. Se alguma destas falhar, é a prioridade n.º 1 deste capítulo. **[advogado]**
2. **O CRM precisa de um "processo KYC" por negócio**, separado do lead e com acesso restrito
   (só direção/compliance): identificação completa dos compradores e beneficiários efetivos,
   cópia dos documentos, verificação PEP/sanções, origem dos fundos quando o risco o justifique,
   **data em que o KYC ficou completo — que tem de ser anterior ao CPCV/reserva paga**, e a
   ligação à comunicação trimestral enviada ao IMPIC. Em `unidades.estado = 'reservado'` o CRM
   deve **bloquear** a passagem a reservado sem KYC concluído.
3. **Registar o meio de pagamento** de cada sinal/reforço/preço (transferência, cheque bancário;
   nunca numerário ≥ 3 000 €) e a conta de origem. Mesmo que o IMPIC não o exija como campo, é o
   que a AT e o DCIAP pedem numa inspeção — e é prova do cumprimento do art. 63.º-E LGT.
4. **Conservação**: guardar o dossiê KYC pelo prazo legal (provavelmente 7 anos — **verificar**)
   **mesmo que o titular peça o apagamento ao abrigo do RGPD** — aqui a base é obrigação legal
   (RGPD art. 6.º, n.º 1, c)) e o direito ao apagamento cede (art. 17.º, n.º 3, b)).
5. **O agente de IA não recolhe KYC.** Pedir cópia do Cartão de Cidadão por WhatsApp/chat é má
   ideia: a política do WhatsApp proíbe pedir identificadores sensíveis (ver secção 7) e a lei do
   Cartão de Cidadão limita a sua reprodução fora dos casos legais (**[a verificar]** Lei n.º
   7/2007, art. 5.º). O agente encaminha para um canal seguro (upload autenticado) e para um humano.
6. **Planear 2027**: rever procedimentos para o AMLR (10/07/2027) — o limite europeu de numerário
   não muda nada em Portugal (o nacional é mais baixo), mas as regras de diligência uniformizadas
   sim.

---

## 3. RGPD, Lei 58/2019, Lei 41/2004 e marketing

### 3.1 O quadro

- **RGPD — Regulamento (UE) 2016/679.** [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
  **[a verificar — texto conhecido, não reaberto hoje]**
- **Lei n.º 58/2019, de 8 de agosto** — execução nacional do RGPD (ex.: art. 16.º, consentimento
  de menores aos 13 anos; art. 21.º, prazo de conservação = o fixado por lei ou, na falta, o
  necessário à finalidade). **[a verificar]** — texto consolidado no DR. Nota: a CNPD deliberou em
  2019 **desaplicar** várias normas desta lei por as considerar contrárias ao RGPD (Deliberação
  2019/494) — **[a verificar]** quais, antes de invocar qualquer artigo dela.
- **Lei n.º 41/2004, de 18 de agosto** (privacidade nas comunicações eletrónicas — transpõe a
  Diretiva ePrivacy), alterada pela **Lei n.º 46/2012**. Continua a ser a lei das **comunicações
  não solicitadas** (art. 13.º-A), da **lista de oposição** (art. 13.º-B), dos **cookies** (art.
  5.º) e da **gravação de comunicações** (art. 4.º). **[confirmado quanto aos arts. 13.º-A/13.º-B;
  restantes a verificar]**
  [DR — Lei 41/2004](https://diariodarepublica.pt/dr/detalhe/lei/41-2004-480710) ·
  [DR — Lei 46/2012](https://diariodarepublica.pt/dr/detalhe/lei/46-2012-174793) ·
  [Universidade de Coimbra — PDF da Lei 41/2004](https://www.uc.pt/site/assets/files/475840/20040818_lei_41_protecao_privacidade_com_eletronicas.pdf)

### 3.2 Marketing direto: opt-in, soft opt-in e opt-out

**A regra (Lei 41/2004, art. 13.º-A, e CNPD, Diretriz/2022/1, aprovada a 25/01/2022)**
**[confirmado — excertos da Diretriz e de comentários]**:

| Destinatário | Canal (email, SMS, MMS, **WhatsApp e "aplicações similares"**, chamadas automáticas) | Base |
|---|---|---|
| **Pessoa singular que ainda não é cliente** (lead que pediu informação, contacto de evento, lista comprada) | **Consentimento prévio e expresso** | Lei 41/2004, art. 13.º-A, n.º 1 |
| **Cliente** (contacto obtido **no contexto de uma venda**), para **produtos/serviços próprios análogos** | **Soft opt-in**: pode enviar sem consentimento, **se** deu a possibilidade de recusar **no momento da recolha** e **em cada mensagem**, de forma fácil e gratuita | Lei 41/2004, art. 13.º-A, n.º 3; Diretriz 2022/1 |
| Cliente, para produtos **diferentes** | Consentimento | Diretriz 2022/1 |
| **Pessoa coletiva** (email de empresa genérico) | **Opt-out**: pode enviar, salvo oposição; consultar a **lista nacional de pessoas coletivas** (DGC) | Lei 41/2004, arts. 13.º-A e 13.º-B |

Pontos da Diretriz 2022/1 que importam aqui **[confirmado — excertos]**:
- **Caixa pré-assinalada não é consentimento** — tem de ser um ato positivo.
- O consentimento é dado **a cada entidade em concreto**, não a "um grupo de empresas parceiras"
  apresentado de forma genérica. (Partilhar leads com parceiros — bancos, mediadoras — exige
  consentimento específico para cada um.)
- **Cada mensagem** tem de permitir recusar de forma fácil e gratuita e **identificar o
  remetente**.
- [CNPD — Diretriz/2022/1 (PDF)](https://www.cnpd.pt/umbraco/surface/cnpdDecision/download/121958) ·
  [NOVA Consumer Lab](https://novaconsumerlab.novalaw.unl.pt/comunicacoes-eletronicas-de-marketing-direto-diretriz-2022-1-da-cnpd/) ·
  [Abreu Advogados — Diretriz (PDF)](https://abreuadvogados.com/wp-content/uploads/2022/02/Diretriz_comunicacoes_eletronicas_de_marketing_direto.pdf) ·
  [Garrigues](https://www.garrigues.com/pl/pt-PT/news/nova-diretriz-da-cnpd-marketing-direto-o-tem-mudar-na-forma-empresas-fazem-marketing.md) ·
  [Lexology](https://www.lexology.com/library/detail.aspx?g=8ee70bce-7bc1-46e8-b6d2-3da16e80abec)

**Um lead que pediu informação é "cliente" para o soft opt-in?** A lei fala em contacto obtido
"no contexto da **venda** de um produto ou serviço". Quem pediu informação sobre uma moradia
**não comprou nada**. A leitura prudente (e a que a CNPD tende a seguir) é que **não** — para
newsletters e campanhas a leads é preciso **consentimento**. **[advogado — interpretação; a
leitura prudente é a recomendada]**

**Responder ao pedido não é marketing.** Enviar a planta e o preço da fração que a pessoa pediu,
marcar a visita que ela pediu, e fazer um seguimento razoável **sobre esse mesmo pedido**
assentam nas diligências pré-contratuais a pedido do titular (RGPD, art. 6.º, n.º 1, b)) e/ou no
interesse legítimo (al. f)). A fronteira está em **mudar de assunto**: "temos um novo projeto em
Lomar" a quem perguntou por Esporões já é marketing. **[a verificar — leitura corrente do RGPD]**

**Lista da DGC ≠ lista do art. 13.º-B**: a DGC mantém também uma lista nacional de pessoas que não
querem publicidade ao abrigo do **art. 22.º do DL n.º 7/2004** (alterado pelo DL 62/2009); a
"Lista Robinson" da DMA Portugal é **voluntária**. **[confirmado — excertos]**
[DR — DL 62/2009](https://diariodarepublica.pt/dr/detalhe/decreto-lei/62-2009-604821) ·
[Legiscope](https://www.legiscope.com/blog/marketing-eletronico-portugal-prova-oposicao.html)

**Chamadas com operador humano**: há fontes comerciais a dizer que seguem um regime de **oposição**
(opt-out), mas **não confirmei** em fonte primária. **[a verificar / advogado]**

**Coimas da Lei 41/2004** (art. 14.º, na redação da Lei 46/2012): **não confirmadas** nesta sessão.

### 3.3 Bases legais para o CRM (proposta de mapa)

| Tratamento | Base RGPD (art. 6.º, n.º 1) | Nota |
|---|---|---|
| Registar o lead e responder ao pedido (preço, planta, visita) | **b)** diligências pré-contratuais a pedido | informar no momento da recolha (art. 13.º) |
| Gerir o funil, atribuir comercial, `score`, `temperatura`, notas | **f)** interesse legítimo | teste de ponderação documentado; notas factuais, nunca opiniões pessoais sobre o cliente |
| Newsletter, campanhas, WhatsApp de marketing, "novos projetos" | **a)** consentimento (+ Lei 41/2004, art. 13.º-A) | registo de prova (art. 7.º, n.º 1) |
| Marketing a quem já comprou (produto análogo) | **f)** + soft opt-in (art. 13.º-A, n.º 3) | oposição em cada mensagem |
| KYC, comunicações ao IMPIC, faturação | **c)** obrigação legal | Lei 83/2017; legislação fiscal |
| CPCV, escritura, pós-venda, garantias | **b)** contrato + **c)** | |
| Públicos personalizados no Meta/Google (carregar emails/telefones de leads) | **a)** consentimento | ver 3.6 |
| Cookies/pixels de analítica e publicidade | **consentimento** (Lei 41/2004, art. 5.º) | ver 3.6 |

### 3.4 Prazos de conservação, direitos dos titulares, registo de consentimentos

- **Não há prazo legal específico para leads.** Aplica-se a limitação da conservação (RGPD, art.
  5.º, n.º 1, e)) e o art. 21.º da Lei 58/2019 (o necessário à finalidade). **[a verificar]**
  Como **referência comparada** (não vinculativa em Portugal), a autoridade francesa (CNIL) aceita
  3 anos após o último contacto vindo do prospeto. Proposta interna: **lead sem interação há 24
  meses → anonimizar** (manter só estatística); lead que comprou → passa a cliente e segue os
  prazos contratuais/fiscais/BCFT. **[decisão interna; validar com advogado]**
- **Direitos** (arts. 15.º–22.º): acesso, retificação, apagamento, limitação, portabilidade e
  **oposição ao marketing, que é absoluta** (art. 21.º, n.ºs 2 e 3). Resposta em **1 mês**
  (art. 12.º, n.º 3). O CRM precisa de: exportar tudo de um titular (lead + `lead_atividades` +
  conversas do agente + consentimentos), apagar/anonimizar em cascata, e uma **lista de supressão**
  mínima (email/telefone com hash) para nunca recontactar quem se opôs. **[a verificar — texto do
  RGPD conhecido]**
- **Registo de consentimentos** (art. 7.º, n.º 1 — o responsável tem de **conseguir demonstrar**
  o consentimento). Campos mínimos: titular, **canal** (email/SMS/WhatsApp/telefone), **finalidade**,
  **texto exato apresentado (versão)**, data/hora, origem (URL/formulário/conversa do agente),
  método (checkbox, double opt-in, "SIM" no WhatsApp), estado, data de retirada.
- **Registo das atividades de tratamento** (art. 30.º), **contratos com subcontratantes** (art.
  28.º — fornecedor de LLM, Supabase, Vercel, email, WhatsApp BSP), **violações de dados** em 72h
  à CNPD (art. 33.º). **[a verificar]**

### 3.5 Transferências para fora da UE (LLMs, Meta, email)

- **EUA**: decisão de adequação **EU-US Data Privacy Framework** — Decisão de Execução (UE)
  **2023/1795**, de 10/07/2023. Só cobre empresas **certificadas** no DPF (verificar a lista
  pública em dataprivacyframework.gov para cada fornecedor). O Tribunal Geral **manteve** a
  decisão no processo *Latombe* (T-553/23, setembro de 2025), mas pode haver recurso. **[a
  verificar — conhecimento prévio]**
  [EUR-Lex — Decisão 2023/1795](https://eur-lex.europa.eu/eli/dec_impl/2023/1795/oj)
- Fora do DPF: **cláusulas contratuais-tipo** (Decisão de Execução (UE) **2021/914**) + avaliação
  de impacto da transferência. [EUR-Lex — Decisão 2021/914](https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj)
  **[a verificar]**
- **LLMs**: exigir contrato de subcontratação (DPA), **sem uso dos dados para treino**, retenção
  mínima/zero, e de preferência **processamento na UE**. O CEPD/EDPB publicou o **Parecer 28/2024**
  (dez/2024) sobre modelos de IA e dados pessoais. **[a verificar]**
  [EDPB — Opinion 28/2024](https://www.edpb.europa.eu/our-work-tools/our-documents/opinion-board-art-64/opinion-282024-certain-data-protection-aspects_en)

### 3.6 Cookies, pixels e públicos personalizados

- Guardar/ler informação no equipamento do utilizador exige **consentimento prévio**, salvo o
  estritamente necessário (Lei 41/2004, art. 5.º); **caixa pré-assinalada não vale** (TJUE,
  *Planet49*, C-673/17, 01/10/2019). Quem embebe o **pixel do Facebook** é **corresponsável** pela
  recolha e transmissão (TJUE, *Fashion ID*, C-40/17, 29/07/2019). **[a verificar —
  jurisprudência conhecida]**
- **Públicos personalizados** (carregar a lista de leads para o Meta/Google): o EDPB, nas
  Diretrizes 8/2020 sobre segmentação de utilizadores de redes sociais, trata-o como tratamento
  que, em regra, exige **consentimento**. **[a verificar]**

### 3.7 DPIA para o agente de IA

- **Art. 35.º do RGPD**: avaliação de impacto obrigatória quando o tratamento for suscetível de
  **elevado risco**, em especial com **novas tecnologias**. As orientações europeias (WP248) dão
  nove critérios e dizem que **dois ou mais** tornam a AIPD provável; a CNPD publicou a sua lista
  de tratamentos sujeitos a AIPD (**Regulamento n.º 1/2018** — **[a verificar]** conteúdo).
- O agente cumpre pelo menos: **tecnologia inovadora** (LLM), **avaliação/pontuação** de pessoas
  (`score`, `temperatura`, qualificação de orçamento), **combinação de fontes** (site + WhatsApp +
  email + CRM) e, potencialmente, **comunicação a grande escala**. **Conclusão: fazer a AIPD
  antes de pôr o agente em produção.** **[advogado/DPO]**
- **Decisões automatizadas** (art. 22.º): pontuar para priorizar o trabalho do comercial não é,
  em regra, decisão com "efeitos significativos". Passaria a sê-lo se o agente **recusasse
  visitas ou excluísse pessoas** sozinho (ex.: por orçamento ou capacidade financeira). Manter um
  humano na decisão. **[a verificar]**
- **Não discriminação**: o acesso à habitação está coberto pela lei portuguesa contra a
  discriminação em razão de origem racial/étnica, cor, **nacionalidade**, ascendência e território
  de origem (**Lei n.º 93/2017** — **[a verificar]**). O agente **nunca** filtra, prioriza ou
  responde de forma diferente por nacionalidade, língua materna ou nome.

### 3.8 Gravação de chamadas

- A Lei 41/2004, art. 4.º, n.º 3, admite gravações **no âmbito de práticas comerciais lícitas,
  para prova de uma transação comercial** ou de comunicação no âmbito de relação contratual,
  **desde que o titular seja informado e dê o seu consentimento**. **[a verificar — redação de
  memória]** A CNPD tem deliberação antiga sobre gravação de chamadas (Deliberação n.º 629/2010 —
  **[a verificar]**).
- Se as chamadas forem **atendidas por uma voz de IA**, somam-se: aviso de que é IA (AI Act, art.
  50.º, n.º 1 — secção 4), aviso de gravação, finalidade, prazo, e a transcrição é dado pessoal
  sujeito a tudo o resto. Análise de "emoções" pela voz é **reconhecimento de emoções** (AI Act,
  art. 50.º, n.º 3 — dever de informar; e **proibido** se aplicado a trabalhadores, art. 5.º).

### O que isto significa para o Painel Temático (secção 3)

1. **Não há política de privacidade nem de cookies no site** (o rodapé não tem ligações legais; o
   formulário de avaliação só diz "em conformidade com o RGPD"). É a lacuna mais visível. Criar
   `/privacidade` e `/cookies`, ligá-las no rodapé e **em cada formulário** (contacto, visita,
   avaliação), com a informação do art. 13.º (responsável, NIPC, contactos, finalidades, bases,
   prazos, destinatários — incluindo **fornecedores fora da UE** —, direitos, reclamação à CNPD).
2. **`Analytics.tsx` carrega GA4 e Meta Pixel `afterInteractive` sem consentimento.** Hoje só não
   corre porque as variáveis não estão definidas na Vercel (o `CLAUDE.md` lista-as como pendentes).
   **Antes de as definir**, instalar uma gestão de consentimento: nada carrega até o visitante
   aceitar, com "Rejeitar" tão visível como "Aceitar".
3. **Tabela `consentimentos`** no CRM (campos em 3.4) e um campo de opt-in **separado por canal**
   nos formulários: "Quero receber novidades por email" / "por WhatsApp" — **desmarcados**. Sem
   isto, nenhuma automação de marketing a leads é lícita.
4. **`contactos_imoveis` não tem nenhum campo de consentimento, origem do consentimento, nem data
   de última interação** para aplicar prazos. Acrescentar `ultima_interacao_em`,
   `anonimizado_em`, e um job mensal de anonimização.
5. **Parceiros** (`/admin/parceiros`): partilhar um lead com um banco ou intermediário de crédito
   exige consentimento **específico para aquele parceiro**. Atenção também a que encaminhar
   clientes para crédito a troco de remuneração pode ser **intermediação de crédito** (DL n.º
   81-C/2017, autorização do Banco de Portugal) — **[a verificar / advogado]**, não investigado
   nesta sessão.
6. **AIPD do agente** antes do lançamento, com o registo de tratamento atualizado.

---

## 4. AI Act — Regulamento (UE) 2024/1689

> Texto: [EUR-Lex — Regulamento (UE) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj)
> (publicado no JO a 12/07/2024; em vigor a 01/08/2024). Os pontos desta secção vêm do
> conhecimento prévio do redator sobre o texto publicado — **[a verificar]** — salvo indicação.
> O capítulo 03 deste dossiê já assinala o art. 50.º a partir de 02/08/2026.

### 4.1 Calendário (art. 113.º)

| Data | O que passa a aplicar-se | Relevância |
|---|---|---|
| **02/02/2025** | Disposições gerais, **literacia em IA (art. 4.º)** e **práticas proibidas (art. 5.º)** | Já em vigor |
| **02/08/2025** | Modelos de IA de finalidade geral (GPAI), governação, sanções | Obrigações dos fornecedores de LLM, não nossas |
| **02/08/2026** | Aplicação geral, incluindo **transparência (art. 50.º)** | **Já em vigor à data desta pesquisa** |
| 02/08/2027 | Alto risco ligado a produtos (art. 6.º, n.º 1) | Não aplicável |

- **Digital Omnibus**: a Comissão propôs a **19/11/2025** um pacote de simplificação que, entre
  outras coisas, **adia** obrigações de alto risco, dá um período de graça ao **art. 50.º, n.º 2**
  (marcação de conteúdo sintético) para sistemas já no mercado, e **suaviza o art. 4.º**
  (literacia). **Não confirmei nesta sessão se foi aprovado e em que termos.** Antes de contar com
  qualquer adiamento, verificar no EUR-Lex. **[a verificar]**
  [Comissão — AI Act](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai)
- **Autoridades nacionais** (fiscalização do AI Act em Portugal) e regime nacional de coimas:
  **não confirmados** nesta sessão.

### 4.2 Classificação de risco do agente comercial

- **Não é alto risco**: qualificar leads, sugerir imóveis e marcar visitas não está no Anexo III.
  **Exceção a vigiar**: avaliar a **solvabilidade** ou atribuir **pontuação de crédito** a pessoas
  singulares é alto risco (Anexo III, ponto 5, al. b)). Se o agente vier a estimar capacidade de
  crédito para decidir quem é atendido, muda de categoria. **[a verificar / advogado]**
- **É "risco limitado"**: aplicam-se as obrigações de **transparência do art. 50.º**.
- **Práticas proibidas (art. 5.º)** relevantes para um agente de vendas: técnicas **subliminares,
  manipuladoras ou enganosas** que distorçam materialmente o comportamento e causem dano
  significativo; **explorar vulnerabilidades** (idade, deficiência, situação socioeconómica). Um
  agente afinado para "fechar" a qualquer custo com urgência falsa cai aqui **e** no DL 57/2008.

### 4.3 Transparência (art. 50.º)

- **N.º 1 — "está a falar com uma IA"**: o **fornecedor** do sistema que interage diretamente com
  pessoas tem de o conceber de forma a que estas **sejam informadas** de que interagem com IA,
  salvo se for óbvio. **Atenção ao papel**: quem desenvolve um sistema e o coloca em serviço **sob
  o seu nome** é "fornecedor" (art. 3.º, ponto 3) — se a Painel Temático montar o seu próprio
  agente sobre a API de um LLM, é muito provavelmente **fornecedora** desse sistema, não só
  "responsável pela implantação". **[advogado]**
- **N.º 2 — marcação do conteúdo sintético** (áudio, imagem, vídeo, texto) em formato legível por
  máquina: obrigação do **fornecedor** do sistema gerador (na prática, quem fornece o modelo de
  imagem/texto). Se a Painel Temático só usa ferramentas de terceiros, confirmar que elas marcam.
- **N.º 3 — reconhecimento de emoções / categorização biométrica**: informar as pessoas expostas.
- **N.º 4 — *deep fakes***: o **responsável pela implantação** de um sistema que gera ou manipula
  imagem, áudio ou vídeo que constitua *deep fake* tem de **divulgar** que o conteúdo foi gerado ou
  manipulado. *Deep fake* (art. 3.º, ponto 60) = conteúdo gerado ou manipulado por IA **que se
  assemelha a pessoas, objetos, locais, entidades ou acontecimentos existentes** e que pareceria
  falsamente autêntico.
  - **Home staging virtual sobre fotografia real de um imóvel real** = imagem manipulada de um
    **local existente** → **rotular** ("Imagem com decoração virtual gerada por IA").
  - **Renders de um edifício ainda por construir**: o edifício não existe, mas a envolvente sim; a
    leitura prudente é rotular sempre ("Imagem ilustrativa, gerada por computador/IA; não
    contratual"). É o que o DL 57/2008 já exige por outra via (secção 5).
  - Retirar defeitos, postes, prédios vizinhos ou "aumentar" a vista numa foto real é, além disso,
    **prática comercial enganosa**.
- **N.º 5 — forma**: informação **clara e distinguível**, o mais tardar na **primeira interação ou
  exposição**, e acessível.
- **Códigos de prática** sobre marcação e rotulagem de conteúdo de IA estavam em preparação na
  Comissão (rascunhos desde dez/2025) — **estado atual não confirmado**.
- **Coimas**: violações do art. 50.º até **15 M€ ou 3 %** do volume de negócios mundial; para
  PME, o **menor** dos dois (art. 99.º). **[a verificar]**

### 4.4 Literacia em IA (art. 4.º)

- Fornecedores e responsáveis pela implantação tomam medidas para assegurar um **nível suficiente
  de literacia em IA** do pessoal que usa os sistemas. Em vigor desde **02/02/2025**. Mesmo que o
  Omnibus o suavize, é barato cumprir: formação curta e **registada** para quem supervisiona o
  agente (o que o agente pode/não pode dizer, como corrigir, quando escalar, riscos de alucinação
  sobre preços e áreas).

### O que isto significa para o Painel Temático (secção 4)

1. **Primeira mensagem do agente, em todos os canais**: "Olá, sou o assistente virtual (IA) da
   Painel Temático. Posso ajudar com… Se preferir falar com uma pessoa, escreva PESSOA." No
   WhatsApp e no email, a assinatura repete-o. Guardar no log que o aviso foi mostrado.
2. **Não dar ao agente nome e foto de pessoa** sem dizer que é IA — personas humanizadas sem aviso
   são exatamente o que o art. 50.º, n.º 1, proíbe.
3. **Rotulagem de imagens**: campo `gerada_ia` / `tipo_imagem` (`foto_real` | `render` |
   `staging_virtual`) nas fotos de `imoveis`/`unidades`, com legenda automática no site e nos
   anúncios.
4. **Agente sem "urgência falsa"**: proibir no *prompt* e nos testes afirmações de escassez ou
   prazo que não venham da base de dados (`unidades.estado`).
5. **Formação registada** (art. 4.º) para direção, comerciais e marketing.

---

## 5. Publicidade e informação ao consumidor

> Nesta secção, quase tudo é **[a verificar]**: as pesquisas esgotaram-se antes de chegar aqui e o
> DR não abriu. As normas são as que conheço; os números de artigo devem ser confirmados no texto
> consolidado antes de serem citados a terceiros.

### 5.1 Código da Publicidade e práticas comerciais desleais

- **Código da Publicidade** (DL n.º 330/90, de 23 de outubro, com várias alterações): princípios
  da **licitude, identificabilidade, veracidade e respeito pelos direitos do consumidor**; a
  publicidade enganosa remete hoje para o regime das práticas comerciais desleais. **[a verificar]**
- **DL n.º 57/2008, de 26 de março** (práticas comerciais desleais; alterado, entre outros, pelo
  **DL n.º 109-G/2021**, que transpôs a Diretiva "Omnibus" 2019/2161): **[a verificar]**
  - **ações enganosas** (informação falsa ou que induza em erro sobre características, preço,
    disponibilidade) e **omissões enganosas** (omitir informação substancial);
  - num **convite a contratar** (anúncio com preço e características que permite decidir), é
    informação substancial: **características principais**, **identidade e endereço do
    profissional**, **preço com impostos**, modalidades de pagamento;
  - **lista negra** (práticas sempre proibidas): ex., afirmar falsamente que o produto só está
    disponível por **período muito limitado** para forçar a decisão;
  - **avaliações de consumidores**: se a empresa as mostra, tem de dizer **se e como verifica** que
    vêm de quem comprou (regra introduzida pelo Omnibus). Relevante para a tabela `testemunhos`.
  - Coimas através do **Regime Jurídico das Contraordenações Económicas** (DL n.º 9/2021).

### 5.2 Certificado energético nos anúncios (SCE)

- **DL n.º 101-D/2020, de 7 de dezembro** (Sistema de Certificação Energética dos Edifícios):
  edifícios/frações **para venda ou arrendamento** têm de ter certificado energético, e os
  **anúncios** têm de indicar a **classe energética**. Para edifícios **em construção/planta**
  existe o **pré-certificado** (certificado SCE de projeto). Artigo exato, conteúdo mínimo do
  anúncio e coimas: **não confirmados**. Entidade gestora: **ADENE**. **[a verificar]**
- **Diretiva (UE) 2024/1275** (reformulação EPBD): reforça a obrigação de indicar o desempenho
  energético nos anúncios; prazo geral de transposição **29/05/2026**. Estado da transposição
  portuguesa **não confirmado**. **[a verificar]**
  [EUR-Lex — Dir. 2024/1275](https://eur-lex.europa.eu/eli/dir/2024/1275/oj)

### 5.3 Ficha técnica da habitação, áreas e preços

- **Ficha Técnica da Habitação (FTH)** — DL n.º 68/2004: documento descritivo das
  características técnicas e funcionais da habitação, a entregar ao comprador pelo promotor.
- **Simplex urbanístico (DL n.º 10/2024, de 8 de janeiro)**: pelo que sabia antes desta sessão,
  **deixou de ser exigida a exibição da autorização de utilização e da FTH nas escrituras** de
  compra e venda. **Não confirmei** hoje (a) a data exata de produção de efeitos dessa parte, (b)
  se a FTH deixou de ser obrigatória como documento ou só deixou de ser exibida, nem (c) se
  alterações de 2025–2026 ao Simplex repuseram alguma exigência. **[a verificar / advogado]**
- **Áreas**: não confirmei norma específica sobre que área anunciar. Boa prática defensiva (e
  coerente com o DL 57/2008): dizer **qual** área é (bruta privativa, útil, dependente, do lote,
  de implantação) e que bate com a **caderneta predial / FTH / alvará de loteamento**; nos lotes,
  indicar a **capacidade construtiva** do alvará, não uma estimativa.
- **Preço**: num anúncio que funcione como convite a contratar, o preço com impostos é
  informação substancial (5.1). "Preço sob consulta" — **não confirmei** se é admissível em
  Portugal para imóveis; risco de omissão enganosa. **[a verificar]**

### 5.4 Livro de reclamações, RAL e identificação no site

- **Livro de Reclamações** — DL n.º 156/2005, alterado pelo **DL n.º 74/2017** (que criou o
  **Livro de Reclamações Eletrónico**): livro físico em estabelecimento aberto ao público (ex.:
  escritório/ponto de venda) e, para quem tem **sítio na Internet**, **ligação visível e destacada
  à plataforma** [livroreclamacoes.pt](https://www.livroreclamacoes.pt). Entidade reguladora a
  indicar (para mediação, o IMPIC; para promoção/venda própria, **não confirmado**). **[a verificar]**
- **Resolução Alternativa de Litígios** — **Lei n.º 144/2015** (alterada pelo DL 102/2017 —
  **[confirmado]** quanto à alteração): o fornecedor tem de informar o consumidor, de forma clara
  e acessível, **no sítio na Internet e nas condições gerais**, das **entidades de RAL** a que
  aderiu ou que são competentes. Em Braga, a entidade regional é o **CIAB — Centro de Informação,
  Mediação e Arbitragem de Consumo** (**[a verificar]** se a compra de imóvel a promotor cabe na
  sua competência).
- **Plataforma europeia de RLL (ODR)**: o Regulamento (UE) 524/2013 foi revogado pelo
  **Regulamento (UE) 2024/3228** e a plataforma foi **descontinuada a 20/07/2025** — já não é
  preciso (nem faz sentido) o link para ela. **[a verificar]**
  [EUR-Lex — Reg. 2024/3228](https://eur-lex.europa.eu/eli/reg/2024/3228/oj)
- **Identificação do prestador no site**: DL n.º 7/2004 (comércio eletrónico, art. 10.º —
  denominação, endereço, email, registo comercial, NIPC, autorização/licença e entidade de
  supervisão) e **Código das Sociedades Comerciais, art. 171.º** (firma, sede, conservatória,
  NIPC e, sendo o caso, capital social também nos sítios na Internet). **[a verificar]**
- **Contratos à distância** (DL n.º 24/2014): excluem os contratos de criação/aquisição de
  imóveis — **não há direito de livre resolução de 14 dias** na compra de uma fração reservada
  online; mas uma **reserva paga online** ou um serviço pago pode ter outro enquadramento.
  **[a verificar / advogado]**

### O que isto significa para o Painel Temático (secção 5)

1. **`imoveis` e `unidades` não têm campo de classe energética** (no `supabase-schema-completo.sql`
   não há; no código só aparece num *placeholder* do formulário de avaliação). Acrescentar
   `classe_energetica`, `certificado_numero`, `certificado_tipo` (`certificado` | `pre_certificado`)
   e **mostrá-los em todos os anúncios** — site, portais, redes e **respostas do agente**.
2. **Rodapé**: falta a **firma/denominação legal, NIPC, sede**, ligação ao **Livro de Reclamações
   Eletrónico**, informação de **RAL**, **política de privacidade** e **cookies**. O "AMI · IMPIC"
   que lá está deve corresponder à entidade identificada (ver 1.6).
3. **Áreas**: o modelo tem um único `area_m2`. Acrescentar o tipo de área (`area_bruta_privativa`,
   `area_util`, `area_lote`) e mostrar a etiqueta junto do número.
4. **Testemunhos**: se se mostram, indicar se/como se verifica que vêm de compradores reais.
5. **Agente**: só diz preços, áreas, classe energética e disponibilidade **lidos da base de
   dados**, nunca "de memória"; se o campo estiver vazio, diz que não sabe. Uma área errada dita
   pelo agente é uma informação enganosa da empresa.

---

## 6. Venda em planta, reservas e contratos

### 6.1 Contrato-promessa (CPCV) — Código Civil

> Normas do Código Civil que conheço bem; **[a verificar]** no texto consolidado.

- **Art. 410.º**: ao contrato-promessa aplicam-se as regras do contrato prometido (n.º 1); se o
  prometido exigir documento, a promessa tem de constar de **documento escrito assinado** (n.º 2).
  **N.º 3**: na promessa de transmissão/constituição de direito real sobre **edifício ou fração
  (construído, em construção ou a construir)**, o documento leva **reconhecimento presencial das
  assinaturas** e **certificação, pela entidade que o faz, da existência da licença de utilização
  ou de construção**; a omissão só pode ser invocada pelo promitente-comprador (salvo culpa
  deste). **Não confirmei** se o DL 10/2024 mexeu nesta certificação. **[a verificar]**
- **Art. 413.º**: **eficácia real** da promessa (por escritura/documento particular autenticado e
  registo) — protege o comprador contra a venda a terceiro.
- **Arts. 440.º–442.º — sinal**: quantia entregue no CPCV de compra e venda **presume-se sinal**
  (art. 441.º). Incumprimento do comprador → perde o sinal; do vendedor → **restitui o dobro**;
  havendo **tradição da coisa**, o comprador pode optar pelo **aumento do valor** (art. 442.º).
- **Art. 755.º, n.º 1, al. f)**: **direito de retenção** do promitente-comprador com tradição
  (o STJ, no AUJ n.º 4/2014, restringiu-o ao **consumidor**).
- **Art. 830.º**: **execução específica**, que **não pode ser afastada** nas promessas do art.
  410.º, n.º 3.

### 6.2 Reservas

- A "reserva" não tem regime legal próprio; é um contrato atípico. A natureza do dinheiro
  entregue (sinal? adiantamento? caução reembolsável?) decide-se pelo que está **escrito** e a
  jurisprudência varia. **[advogado]** Boa prática: documento de reserva com prazo, valor,
  natureza da quantia, condições de devolução, e que **o KYC é feito antes de receber** (secção 2).

### 6.3 Garantias ao comprador

- **DL n.º 84/2021** (venda de bens de consumo, em vigor desde 01/01/2022): para **imóveis**, o
  profissional responde por faltas de conformidade que se manifestem em **10 anos** (elementos
  construtivos **estruturais**) e **5 anos** (restantes). Direitos: reparação/substituição,
  redução do preço, resolução. **[a verificar — artigo exato]**
- **Código Civil, art. 1225.º**: responsabilidade do empreiteiro/vendedor que construiu por
  defeitos em imóveis de longa duração. **[a verificar]**
- **Não conheço** em Portugal obrigação legal geral de **garantia bancária ou seguro** sobre os
  sinais entregues em compra em planta (ao contrário de Espanha). **[a verificar / advogado]** — a
  proteção assenta no sinal em dobro, na eficácia real, no registo provisório de aquisição e no
  direito de retenção. Oferecer uma **garantia sobre os sinais** (ou conta *escrow*) é um
  diferenciador comercial possível, não uma obrigação.

### 6.4 Licenças e escrituras (Simplex urbanístico)

- **DL n.º 10/2024, de 8 de janeiro** — reforma do licenciamento (RJUE, DL 555/99) com
  substituição de licenças por comunicação prévia em vários casos, deferimentos tácitos e
  **dispensa de exibir a autorização de utilização e a FTH nas escrituras** (ver 5.3). Entradas
  em vigor faseadas (2024–2026). Pormenores e alterações posteriores **não confirmados**.
  **[a verificar]**
- Consequência prática: o comprador deixa de ter a escritura como "barreira" que verifica a
  autorização de utilização — o que torna **mais importante** o promotor documentá-la e entregá-la.

### O que isto significa para o Painel Temático (secção 6)

1. **`unidades.estado` tem `reservado`/`vendido` mas o CRM não guarda o contrato**. Acrescentar uma
   entidade `negocios` (unidade, compradores, KYC, reserva, CPCV, sinal(is), meio de pagamento,
   escritura, autorização de utilização, entrega de FTH/telas finais, início da garantia de 5/10
   anos) — é ela que alimenta a comunicação trimestral ao IMPIC e o pós-venda.
2. **Modelos de reserva e CPCV revistos por advogado**, com a natureza do dinheiro clara.
3. **O agente não negoceia nem promete** condições contratuais (prazos de entrega, acabamentos,
   descontos): informa o que está publicado e passa a um humano.
4. **Garantias**: registar a data de entrega de cada unidade para gerir os prazos de 5 e 10 anos
   (pedidos de assistência pós-venda no CRM).

---

## 7. WhatsApp Business e plataformas

> **[a verificar]** em toda a secção: as páginas da Meta não foram abertas nesta sessão e as
> políticas mudam várias vezes por ano. Fontes a reabrir:
> [WhatsApp Business Messaging Policy](https://business.whatsapp.com/policy) ·
> [Meta for Developers — opt-in](https://developers.facebook.com/docs/whatsapp/overview/getting-opt-in).

### 7.1 Regras da Meta (o que sei)

- **Opt-in antes de iniciar conversas**: a empresa só pode enviar mensagens proativas a quem deu
  **opt-in**, que tem de dizer claramente que aceita receber mensagens **daquela empresa pelo
  WhatsApp**. A empresa tem de **respeitar pedidos de paragem**.
- **Janela de 24 horas**: depois de o cliente escrever, a empresa responde livremente durante 24h;
  fora dela só com **modelos (templates) pré-aprovados**, em categorias (**marketing**,
  **utilidade**, **autenticação**). Desde 2025, cobrança **por mensagem/modelo**.
- **Não pedir identificadores sensíveis** pelo WhatsApp (números completos de cartões de
  pagamento, contas financeiras, **números de identificação nacional**) — relevante para o KYC.
- **Assistentes de IA de finalidade geral**: a partir de **15/01/2026** a Meta passou a proibir na
  WhatsApp Business Solution os fornecedores de **chatbots de finalidade geral** como função
  principal; **bots de atendimento de uma empresa sobre o seu próprio negócio continuam
  permitidos**. A Comissão Europeia abriu investigação de concorrência (dez/2025) e a autoridade
  italiana impôs medidas cautelares. **Estado atual não confirmado.** Um agente da Painel Temático
  sobre os seus imóveis está, em princípio, do lado permitido.

### 7.2 Implicações RGPD/Lei 41/2004

- **Mensagens de marketing por WhatsApp a pessoas singulares = comunicação não solicitada**: o
  art. 13.º-A da Lei 41/2004 abrange "**outros tipos de aplicações similares**" (secção 3.2).
  Precisa de **consentimento** (ou soft opt-in para clientes). O **opt-in da Meta não substitui o
  consentimento legal** — desenhar **um só pedido** que satisfaça os dois (texto específico,
  canal WhatsApp, entidade identificada, desmarcado, registado).
- **Papéis**: a Painel Temático é **responsável pelo tratamento**; na **Cloud API** a Meta
  apresenta-se como **subcontratante** nos seus termos de tratamento de dados; um **BSP**
  (fornecedor intermediário) é outro subcontratante. Verificar transferências para os EUA (DPF/
  cláusulas-tipo). **[a verificar]**
- **WhatsApp Business App nos telemóveis dos comerciais** (não a API): sincroniza a agenda e
  mistura contactos pessoais e profissionais — difícil de conciliar com registo de consentimentos,
  exportação/apagamento e controlo de acessos. **Preferir a API** ligada ao CRM.
- **Número**: o site usa **+351 913 440 800** (`WhatsAppButton`, emails). Se esse número passar
  para a API, as conversas antigas não migram; planear a transição.

### O que isto significa para o Painel Temático (secção 7)

1. **Botão WhatsApp do site** (o utilizador inicia) = conversa de serviço dentro da janela de 24h;
   **não** dá consentimento para marketing posterior. No primeiro contacto, o agente diz que é IA
   e pergunta se a pessoa quer **também** receber novidades por WhatsApp (registo em `consentimentos`).
2. **Follow-ups automáticos fora das 24h** sobre o pedido do próprio lead (ex.: "a visita é amanhã")
   = modelo de **utilidade**; "novo projeto em Lomar" = **marketing** → só com consentimento.
3. **Nada de documentos de identificação pelo WhatsApp** — link para upload seguro.
4. **Guardar as conversas no CRM** (com prazo de conservação), não só na Meta, para poder responder
   a pedidos de acesso e provar o que o agente disse.

---

## 8. Checklist operacional

Legenda de prioridade: **P0** = risco legal atual (corrigir já) · **P1** = antes de lançar o
agente/automação · **P2** = boa prática / preparação.

### 8.1 Empresa e licenças

| # | Item | Onde | Norma de base | Prior. |
|---|---|---|---|---|
| 1 | Confirmar licença **AMI 25031**: ativa, de que entidade (NIPC), coincide com quem opera o site | IMPIC (pesquisa pública) | Lei 15/2013, art. 3.º | **P0** |
| 2 | Se não houver licença válida: suspender angariações de terceiros e anúncios de proprietários | CRM/site | Lei 15/2013, arts. 2.º–3.º e 32.º | **P0** |
| 3 | Registo no IMPIC como entidade imobiliária (BCFT) e início de atividade comunicado | IMPIC | Lei 83/2017; Reg. 603/2021 | **P0** |
| 4 | Comunicações **trimestrais** de transações em dia (vendas próprias **e** mediadas; arrendamentos ≥ 2 500 €/mês) | IMPIC | Lei 83/2017, art. 46.º, n.º 1, b), e n.º 3 | **P0** |
| 5 | Políticas BCFT escritas, avaliação de risco, responsável pelo cumprimento, formação | Interno | Lei 83/2017; Reg. 603/2021 | **P0** |
| 6 | Modelo de contrato de mediação conforme Portaria 228/2018 e depositado no IMPIC | Jurídico | Lei 15/2013, art. 16.º; DL 102/2017 | P0 (se medeia) |
| 7 | Seguro de RC da mediação em vigor | Interno | Lei 15/2013, art. 7.º e Anexo I | P0 (se medeia) |

### 8.2 Site público

| # | Item | Norma de base | Prior. |
|---|---|---|---|
| 8 | Rodapé com **firma, NIPC, sede**, AMI (da entidade certa), contactos | DL 7/2004, art. 10.º; CSC, art. 171.º [a verificar] | **P0** |
| 9 | Ligação visível ao **Livro de Reclamações Eletrónico** | DL 156/2005 / DL 74/2017 [a verificar] | **P0** |
| 10 | Informação sobre **entidades de RAL** (ex.: CIAB, Braga) | Lei 144/2015, art. 18.º [a verificar] | **P0** |
| 11 | **Política de privacidade** e **política de cookies**, ligadas no rodapé e em cada formulário | RGPD, arts. 12.º–14.º | **P0** |
| 12 | **Gestão de consentimento de cookies** antes de ativar GA4/Meta Pixel (rejeitar = aceitar em destaque) | Lei 41/2004, art. 5.º; TJUE C-673/17 | **P0** (bloqueia ativar `NEXT_PUBLIC_GA_ID`/`META_PIXEL_ID`) |
| 13 | Formulários (contacto, visita, avaliação): aviso informativo curto + caixas de marketing **desmarcadas, por canal** | RGPD, arts. 7.º e 13.º; Lei 41/2004, art. 13.º-A | **P0** |
| 14 | **Classe energética** (ou pré-certificado) em todos os anúncios | DL 101-D/2020 [a verificar] | **P0** |
| 15 | Tipo de área indicado junto de cada número; capacidade construtiva nos lotes | DL 57/2008 (veracidade) | P1 |
| 16 | Rótulo em **renders** e **staging virtual** | AI Act, art. 50.º, n.º 4; DL 57/2008 | P1 |
| 17 | Distinguir imóveis **próprios** de **mediados** (e por que entidade) | Lei 15/2013 | P1 |
| 18 | Testemunhos: dizer se/como são verificados | DL 57/2008 (após DL 109-G/2021) [a verificar] | P2 |

### 8.3 CRM

| # | Item | Norma de base | Prior. |
|---|---|---|---|
| 19 | Tabela **`consentimentos`** (titular, canal, finalidade, texto/versão, data, origem, método, estado, retirada) | RGPD, art. 7.º, n.º 1 | **P0** antes de qualquer campanha |
| 20 | **Lista de supressão** (oposição ao marketing) consultada por todas as automações | RGPD, art. 21.º, n.º 3; Lei 41/2004 | **P0** |
| 21 | `imoveis.regime` (próprio/mediação) + contrato de mediação (exclusividade, comissão, validade) | Lei 15/2013, arts. 16.º, 17.º, 19.º | P0 (se medeia) |
| 22 | Regra: comissão de **um só lado**; a empresa não compra imóvel que medeia | Lei 15/2013, art. 17.º, n.º 2 | P1 |
| 23 | Entidade **`negocios`** com **KYC** (incl. beneficiário efetivo, PEP/sanções) **concluído antes da reserva/CPCV**, bloqueio de `reservado` sem KYC | Lei 83/2017; Reg. 603/2021 | **P0** |
| 24 | **Meio de pagamento** e conta de origem de cada sinal/preço; alerta se numerário ≥ 3 000 € | LGT, art. 63.º-E | **P0** |
| 25 | Export automático para a **comunicação trimestral** ao IMPIC | Lei 83/2017, art. 46.º | P1 |
| 26 | Dossiê KYC com acesso restrito e conservação pelo prazo legal (7 anos? verificar), imune ao "apagar lead" | Lei 83/2017; RGPD, art. 17.º, n.º 3, b) | P1 |
| 27 | `ultima_interacao_em` + **anonimização automática** de leads parados (proposta: 24 meses) | RGPD, art. 5.º, n.º 1, e); Lei 58/2019, art. 21.º | P1 |
| 28 | Pedido de acesso/portabilidade/apagamento num clique (lead + atividades + conversas + consentimentos) | RGPD, arts. 15.º–20.º | P1 |
| 29 | Registo das atividades de tratamento + DPAs com Supabase, Vercel, email, LLM, WhatsApp/BSP | RGPD, arts. 28.º e 30.º | P1 |
| 30 | Partilha com parceiros só com consentimento específico por parceiro; verificar intermediação de crédito | Diretriz CNPD 2022/1; DL 81-C/2017 [a verificar] | P1 |
| 31 | Notas de comerciais factuais (nada de opiniões sobre o cliente que não se lhe pudesse mostrar) | RGPD, art. 15.º (direito de acesso) | P2 |

### 8.4 Agente de IA (chat, WhatsApp, email, voz)

| # | Item | Norma de base | Prior. |
|---|---|---|---|
| 32 | **AIPD** concluída antes do lançamento | RGPD, art. 35.º; Reg. CNPD 1/2018 [a verificar] | **P1** |
| 33 | **Aviso "sou uma IA"** na 1.ª interação de cada canal, registado no log | AI Act, art. 50.º, n.ºs 1 e 5 (desde 02/08/2026) | **P1** |
| 34 | Botão/palavra para **falar com uma pessoa**; escalamento obrigatório em negociação, reclamações, dados sensíveis | Boa prática; AI Act art. 5.º; RGPD art. 22.º | P1 |
| 35 | Só responde preços/áreas/energia/disponibilidade **a partir da BD**; sem dados → "não sei" | DL 57/2008 | P1 |
| 36 | Proibidas urgência/escassez não verdadeiras e pressão a pessoas vulneráveis | DL 57/2008; AI Act, art. 5.º | P1 |
| 37 | **Sem filtragem por nacionalidade/origem**; testes de enviesamento | Lei 93/2017 [a verificar] | P1 |
| 38 | Não recolhe documentos de identificação; link para upload seguro | WhatsApp Policy; Lei 7/2007 [a verificar] | P1 |
| 39 | Se medeia imóveis de terceiros: identifica a entidade licenciada (AMI) | Lei 15/2013 | P1 |
| 40 | Marketing só a quem tem consentimento ativo no canal; respeita a janela 24h/modelos | Lei 41/2004, art. 13.º-A; política Meta | P1 |
| 41 | LLM com DPA, sem treino com os nossos dados, retenção mínima, de preferência UE; transferências cobertas (DPF/SCC) | RGPD, arts. 28.º, 44.º–46.º | P1 |
| 42 | Logs das conversas (o que o agente disse, versão do *prompt*, fontes de dados) com prazo definido | RGPD, art. 5.º, n.º 2 (responsabilidade); prova | P1 |
| 43 | Voz: aviso de IA + aviso e consentimento de gravação; sem reconhecimento de emoções | Lei 41/2004, art. 4.º, n.º 3 [a verificar]; AI Act, arts. 5.º e 50.º | P2 |
| 44 | **Formação registada** em IA para quem supervisiona | AI Act, art. 4.º | P1 |

### 8.5 Onde é mesmo preciso advogado

1. Se a estrutura do grupo (quem vende o próprio, quem medeia, em que sociedade) está correta e o
   AMI exibido é o certo.
2. Leitura do soft opt-in para leads que só pediram informação (a recomendação aqui é a prudente).
3. Modelos de **reserva**, **CPCV** e **contrato de mediação** (CCG validadas no IMPIC).
4. Papel da Painel Temático no AI Act (fornecedora vs. responsável pela implantação) e a AIPD.
5. Encaminhamento de clientes para crédito (intermediação de crédito).
6. Montantes de coimas e prazos exatos (IMPIC trimestral, conservação BCFT), que não foram
   confirmados aqui.

---

> **AVISO FINAL — não é aconselhamento jurídico.** Este capítulo organiza fontes e levanta
> perguntas; não substitui o parecer de um advogado sobre a situação concreta da Painel Temático.

## Fontes

Consulta a **23/11/2026**. "Excerto" = conteúdo lido através do motor de pesquisa (a página em si
não abriu nesta sessão). As datas são as de publicação quando conhecidas.

### A. Fontes com excerto lido nesta sessão

**Mediação imobiliária**
- Lei n.º 15/2013, de 8 de fevereiro — DR, 1.ª série, n.º 28 (08/02/2013) — https://diariodarepublica.pt/dr/detalhe/lei/15-2013-257806
- Lei n.º 15/2013 (PDF do DR no site do IMPIC) — https://www.impic.pt/impic/assets/misc/pdf/legislacao/Lei201315.pdf
- Decreto-Lei n.º 102/2017, de 23 de agosto — https://diariodarepublica.pt/dr/detalhe/decreto-lei/102-2017-108041482
- informador.pt — DL 102/2017 — https://informador.pt/legislacao/diploma/decreto-lei-n-o-102-2017/
- informador.pt — Portaria n.º 228/2018 — https://informador.pt/legislacao/diploma/portaria-n-o-228-2018/
- Portaria n.º 199/2013 — https://diariodarepublica.pt/dr/detalhe/portaria/199-2013-513608
- Decreto-Lei n.º 77/99 (revogado) — https://diariodarepublica.pt/dr/detalhe/decreto-lei/77-1999-144988
- gov.pt — Guia "Mediação imobiliária" (atualizado 09/06/2026, segundo o excerto) — https://www.gov.pt/guias/mediacao-imobiliaria
- gov.pt — Licença para o exercício da atividade — https://www.gov.pt/servicos/mediacao-imobiliaria-licenca-para-o-exercicio-da-atividade
- gov.pt — Pesquisar uma empresa de mediação imobiliária — https://www.gov.pt/servicos/pesquisar-uma-empresa-de-mediacao-imobiliaria
- gov.pt — Taxa anual de regulação e comprovação de requisitos — https://www.gov.pt/servicos/mediacao-imobiliaria-pagamento-da-taxa-anual-de-regulacao-e-comprovacao-dos-requisitos-da-licenca-ou-do-registo
- PLMJ — General contractual terms in estate agency contracts (data não confirmada, ≈2018) — https://www.plmj.com/en/know-how/informative-notes/general-contractual-terms-and-conditions-in-estate-agency-contracts/19091
- SRS Legal / idealista — Responsabilidades da agência imobiliária (27/12/2023) — https://www.srslegal.pt/xms/files/Comunicacao/SRS_na_Imprensa/2023/2023_12_27_AO_Idealista_Responsabilidades_Agencia_Imobiliaria_JPS.pdf
- TRC — Proibição de receber remuneração de clientes e destinatários do mesmo negócio — https://trc.pt/mediacao-imobiliaria-proibicao-de-receber-remuneracao-de-clientes-e-destinatarios-do-mesmo-negocio/
- jurisprudencia.pt — Mediação imobiliária, cláusula de exclusividade — https://jurisprudencia.pt/acordao/219719/
- jurisprudencia.pt — Contrato de mediação imobiliária, remuneração — https://jurisprudencia.pt/acordao/244880/
- STJ (dgsi.pt) — remuneração e causa imputável ao cliente — https://www.dgsi.pt/jstj.nsf/954f0ce6ad9dd8b980256b5f003fa814/40d299edf7e9dcb880258998002b780f?OpenDocument=
- Pedro Vasconcelos — Contratos de mediação imobiliária: simples e com exclusividade (2020) — https://pedro-vasconcelos-sn5l.squarespace.com/s/2020-26-1401-1462.pdf
- idealista — IMPIC e AT vão cruzar dados para combater mediação imobiliária ilegal (data não confirmada) — https://www.idealista.pt/news/node/76312
- idealista — Fisco e IMPIC apertam cerco aos mediadores "clandestinos" (data não confirmada) — https://www.idealista.pt/news/node/61389
- idealista — Agentes imobiliários com licença de mediadoras? (data não confirmada) — https://www.idealista.pt/news/node/69107

**Branqueamento de capitais**
- Lei n.º 83/2017, de 18 de agosto — https://diariodarepublica.pt/dr/detalhe/lei/83-2017-108021178
- Lei n.º 83/2017, texto consolidado (Portal das Finanças) — https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/legislacao/diplomas_legislativos/Documents/Lei_83_2017.pdf
- Lei n.º 58/2020, de 31 de agosto — https://diariodarepublica.pt/dr/detalhe/lei/58-2020-141382321
- Regulamento n.º 603/2021, de 2 de julho (IMPIC) — https://diariodarepublica.pt/dr/detalhe/regulamento/603-2021-166264672
- Aviso n.º 739/2021 (DR, 2.ª série, 12/01/2021) — https://diariodarepublica.pt/dr/detalhe/aviso/739-2021-153663117 · PDF IMPIC: https://www.impic.pt/impic/assets/misc/pdf/legislacao/Aviso2021739.pdf
- IMPIC — Orientação Genérica n.º 1/IMPIC/2021 — https://www.impic.pt/impic/assets/misc/img/OG_2021IMPIC01.pdf
- IMPIC — Perguntas frequentes BCFT (desatualizado quanto a prazos) — https://www.impic.pt/impic/pt-pt/perguntas-frequentes/combate-ao-branqueamento-de-capitais-e-ao-financiamento-do-terrorismo_4
- ASMIP — Branqueamento de capitais — https://www.asmip.pt/pt/asmip/branqueamento-de-capitais_312/
- AICCOPN — Combate ao branqueamento de capitais no setor imobiliário — https://www.aiccopn.pt/combate-ao-branqueamento-de-capitais-no-setor-imobiliario/
- Imojuris — Regulamento n.º 603/2021 — https://imojuris.vidaimobiliaria.com/actualidade/novidades/Regulamento-n-o-603-2021-de-2-de-julho/
- Imojuris — O regulamento n.º 603/2021 do IMPIC e as novidades — https://imojuris.vidaimobiliaria.com/actualidade/opinioes/O-regulamento-n-o-603-2021-do-IMPIC-e-as-novidades/
- Imojuris — Deveres de identificação e diligência acrescidos — https://imojuris.vidaimobiliaria.com/actualidade/noticias/Deveres-de-identificacao-e-diligencia-acrescidos-n/
- PLMJ — Novo Regulamento IMPIC (2021) — https://plmj.com/xms/files/NL_Novo_Regulamento_IMPIC.PDF
- PLMJ — Guia Branqueamento de capitais (2024) — https://plmj.com/xms/files/07_Guias_e_Manuais/2024/Branqueamento_de_capitais.pdf
- Millennium bcp — Novas obrigações para imobiliárias — https://ind.millenniumbcp.pt/pt/geral/fiscalidade/Pages/Novas-obrigacoes-para-imobiliarias.aspx
- idealista — Imobiliárias obrigadas a comunicar transações ao IMPIC todos os trimestres (2020) — https://www.idealista.pt/news/node/44544
- idealista — Mediação imobiliária: obrigatório comunicar transações até 31 de março (2023) — https://www.idealista.pt/news/node/57312
- Lei n.º 70/2025, de 22 de dezembro — https://diariodarepublica.pt/dr/detalhe/lei/70-2025-992098940
- Lei n.º 72/2025 — https://diariodarepublica.pt/dr/detalhe/lei/72-2025-992402106
- Cuatrecasas — Lei de execução do Regulamento de Transferências de Fundos e Criptoativos — https://www.cuatrecasas.com/pt/portugal/financeiro/art/lei-execucao-regulamento-transferencias-fundos-criptoativos
- DLA Piper — AML/CFT and sanctions in 2026 (25/03/2026) — https://www.dlapiper.com/en/insights/publications/2026/03/aml-cft-and-sanctions-in-2026
- Portal das Finanças — LGT, art. 63.º-E — https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/lgt/Pages/lgt63e.aspx
- Lei n.º 92/2017 — https://diariodarepublica.pt/dr/detalhe/lei/92-2017-108030505
- Garrigues — LGT/RGIT: proibição de pagamento em numerário (2017) — https://www.garrigues.com/pt/pt-PT/news/lgtrgit-proibicao-de-pagamento-em-numerario
- OCC — LGT: pagamentos em numerário — https://www.occ.pt/pt-pt/noticias/lgt-pagamentos-em-numerario
- eucrim — The EU's new AML single rulebook regulation (2024) — https://eucrim.eu/news/the-eu-new-aml-single-rulebook-regulation/
- fiscal-requirements.com — EU 10 000 € cash payment limit from July 2027 — https://www.fiscal-requirements.com/news/6249-eu-introduces-10000-cash-payment-limit-and-stricter-customer-identification-rules-from-july-2027

**Marketing e comunicações eletrónicas**
- CNPD — Diretriz/2022/1 sobre comunicações eletrónicas de marketing direto (aprovada 25/01/2022) — https://www.cnpd.pt/umbraco/surface/cnpdDecision/download/121958
- NOVA Consumer Lab — Diretriz 2022/1 da CNPD — https://novaconsumerlab.novalaw.unl.pt/comunicacoes-eletronicas-de-marketing-direto-diretriz-2022-1-da-cnpd/
- Abreu Advogados — Diretriz (PDF, fev/2022) — https://abreuadvogados.com/wp-content/uploads/2022/02/Diretriz_comunicacoes_eletronicas_de_marketing_direto.pdf
- Garrigues — Nova diretriz da CNPD sobre marketing direto (2022) — https://www.garrigues.com/pl/pt-PT/news/nova-diretriz-da-cnpd-marketing-direto-o-tem-mudar-na-forma-empresas-fazem-marketing.md
- Lexology — Nova diretriz da CNPD sobre marketing direto (2022) — https://www.lexology.com/library/detail.aspx?g=8ee70bce-7bc1-46e8-b6d2-3da16e80abec
- Lei n.º 41/2004, de 18 de agosto — https://diariodarepublica.pt/dr/detalhe/lei/41-2004-480710
- Lei n.º 46/2012 — https://diariodarepublica.pt/dr/detalhe/lei/46-2012-174793
- Decreto-Lei n.º 62/2009 — https://diariodarepublica.pt/dr/detalhe/decreto-lei/62-2009-604821
- Legiscope — Marketing eletrónico em Portugal: prova e oposição — https://www.legiscope.com/blog/marketing-eletronico-portugal-prova-oposicao.html
- Comissão Europeia — Podem dados recebidos de terceiros ser usados para marketing? — https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/legal-grounds-processing-data/can-data-received-third-party-be-used-marketing_pt

### B. Fontes primárias indicadas mas NÃO abertas nesta sessão (conteúdo de conhecimento prévio — verificar)

- RGPD — Regulamento (UE) 2016/679 — https://eur-lex.europa.eu/eli/reg/2016/679/oj
- AI Act — Regulamento (UE) 2024/1689 (JO 12/07/2024) — https://eur-lex.europa.eu/eli/reg/2024/1689/oj
- Comissão Europeia — Regulatory framework for AI (inclui o Digital Omnibus, proposto a 19/11/2025) — https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
- AMLR — Regulamento (UE) 2024/1624 — https://eur-lex.europa.eu/eli/reg/2024/1624/oj
- AMLD6 — Diretiva (UE) 2024/1640 — https://eur-lex.europa.eu/eli/dir/2024/1640/oj
- EU-US Data Privacy Framework — Decisão de Execução (UE) 2023/1795 (10/07/2023) — https://eur-lex.europa.eu/eli/dec_impl/2023/1795/oj
- Cláusulas contratuais-tipo — Decisão de Execução (UE) 2021/914 — https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj
- EDPB — Opinion 28/2024 on AI models (17/12/2024) — https://www.edpb.europa.eu/our-work-tools/our-documents/opinion-board-art-64/opinion-282024-certain-data-protection-aspects_en
- EPBD reformulada — Diretiva (UE) 2024/1275 — https://eur-lex.europa.eu/eli/dir/2024/1275/oj
- Fim da plataforma ODR — Regulamento (UE) 2024/3228 — https://eur-lex.europa.eu/eli/reg/2024/3228/oj
- Livro de Reclamações Eletrónico — https://www.livroreclamacoes.pt
- WhatsApp Business Messaging Policy — https://business.whatsapp.com/policy
- Meta for Developers — Obtaining opt-in for WhatsApp — https://developers.facebook.com/docs/whatsapp/overview/getting-opt-in
- Diplomas nacionais a abrir no **diariodarepublica.pt** (texto consolidado): Lei n.º 58/2019;
  Código Civil (arts. 410.º, 413.º, 440.º–442.º, 755.º, 830.º, 1225.º); DL n.º 330/90 (Código da
  Publicidade); DL n.º 57/2008 e DL n.º 109-G/2021; DL n.º 9/2021 (RJCE); DL n.º 101-D/2020 (SCE);
  DL n.º 68/2004 (FTH); DL n.º 10/2024 (Simplex urbanístico); DL n.º 555/99 (RJUE); DL n.º 84/2021;
  DL n.º 156/2005 e DL n.º 74/2017; Lei n.º 144/2015; DL n.º 7/2004; DL n.º 24/2014; Código das
  Sociedades Comerciais (art. 171.º); Lei n.º 7/2007 (Cartão de Cidadão); Lei n.º 93/2017; DL n.º
  81-C/2017 (intermediários de crédito); Lei n.º 153/2015 (peritos avaliadores); Regulamento CNPD
  n.º 1/2018 (lista de AIPD).
- Jurisprudência do TJUE (curia.europa.eu): *Planet49*, C-673/17 (01/10/2019); *Fashion ID*,
  C-40/17 (29/07/2019). Tribunal Geral: *Latombe c. Comissão*, T-553/23 (set/2025).
