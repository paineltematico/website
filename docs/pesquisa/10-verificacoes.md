# 10 — Verificações de factos (pontos "a verificar" dos capítulos 01–07)

> Verificação feita a **23/11/2026**. A rede deste ambiente bloqueia a leitura direta da maioria das
> páginas: quase tudo foi lido **a partir dos excertos** devolvidos pelo motor de pesquisa, e isso vai
> assinalado em cada fonte com "(lido em excerto)". Onde os excertos não chegaram para fechar a
> questão, o veredicto é **NÃO CONFIRMADO** — não se preencheu com memória.
>
> Veredictos: **CONFIRMADO** (o capítulo estava certo) · **CORRIGIDO** (o capítulo tinha um valor
> errado ou incompleto; segue o certo) · **NÃO CONFIRMADO** (as fontes encontradas não chegam).
>
> Antes de pôr qualquer destes valores num texto para clientes (site, agente, contratos), abrir a
> fonte primária indicada — preços e regras mudam, e os excertos podem estar cortados.

## 1. Preços da WhatsApp Business Platform (Cloud API) para Portugal — 2026

**Veredicto: CORRIGIDO** (o modelo por mensagem está certo; a gratuitidade da janela de 24 h **deixou
de ser verdade a 01/10/2026**, e o "1 000 grátis/mês" que o cap. 03 dava como não confirmado é, afinal,
o que os parceiros da Meta publicam).

| Pergunta | Valor | Estado |
|---|---|---|
| Modelo de cobrança | **Por mensagem entregue, desde 01/07/2025** (substituiu o modelo por conversa de 24 h). A Meta cobra por **categoria × mercado**, e só as mensagens empresa → utilizador; as do utilizador para a empresa não se cobram | CONFIRMADO |
| Portugal tem linha própria? | **Não.** Portugal cai no mercado regional **"Rest of Western Europe"** do rate card da Meta | confirmado em 2 fontes de terceiros (Whapier, Formbeep) |
| Marketing (Portugal) | **≈ 0,049 € por mensagem entregue** (≈ 0,0592 US$ na tabela em dólares) | valores de terceiros, **coerentes entre si**; não li o rate card oficial em EUR |
| Utility (Portugal) | **≈ 0,0142 €** (≈ 0,0171 US$); há **descontos por volume** só em utility e authentication | idem |
| Authentication (Portugal) | **≈ 0,0142 €** (mesmo valor que utility nesta região) | idem |
| Mudanças a 01/07/2026 | Subidas de marketing em Itália, Espanha e Reino Unido; **nenhuma referida para Portugal** | lido em excerto |
| **Mensagens de serviço na janela de 24 h** | **Já NÃO são gratuitas desde 01/10/2026.** As respostas em texto livre dentro da janela passaram a ser cobradas por mensagem, **ao preço de utility/authentication do mercado**, sem descontos por volume. Os **utility templates dentro da janela** (grátis desde jul/2025) também passaram a pagar | CORRIGIDO — várias fontes concordantes (Twilio, respond.io, YCloud, Zoho, Zendesk) |
| Franquia gratuita | **1 000 mensagens de serviço grátis por mês, por número de telefone da empresa** (Twilio: *"the first 1000 Service messages per month per business number will be free"*). Uma tabela da Zoho diz 1 200; um artigo nota que a página da Meta sobre mensagens sem template **não menciona** a franquia | **NÃO CONFIRMADO na fonte primária** — é o número dos parceiros |
| Janela de 72 h (*free entry point*, anúncios Click-to-WhatsApp / botão da página) | Segundo a respond.io, **continua gratuita**. Só uma fonte o diz | NÃO CONFIRMADO |
| Meta Business Agent | Lançado a 01/07/2026 (agente de IA da própria Meta), com **faturação à parte, por tokens** | lido em excerto |

**O que isto muda para o produto (fase 2, WhatsApp):** um agente de IA que responde a leads **paga cada
resposta** a partir da 1 001.ª do mês, por número. A ~0,014 € por resposta é barato (10 000 respostas
≈ 142 €/mês), mas deixa de ser zero — o custo por conversa entra na conta, e o agente deve responder em
**menos mensagens mais completas** em vez de muitas curtas. O ponto do cap. 03 sobre o README do
`whatsapp-agentkit` ("1 000 respostas de serviço grátis/mês por número desde out/2026") **estava certo**.

Fontes:
- Meta — *Pricing on the WhatsApp Business Platform* — <https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing> — página viva, consultada a 23/11/2026 (lido em excerto; a leitura direta falhou: o host está bloqueado neste ambiente)
- Twilio Help Center — *Notice: Changes to WhatsApp's Pricing (October 2026)* — <https://help.twilio.com/articles/53100480177819> — 2026 (lido em excerto)
- Twilio Changelog — *Meta is updating WhatsApp pricing on July 1, 2025* — <https://www.twilio.com/en-us/changelog/meta-is-updating-whatsapp-pricing-on-july-1--2025?tab=suite> — 24/06/2025 (lido em excerto)
- respond.io — *WhatsApp Pricing Change 2026* — <https://respond.io/blog/whatsapp-pricing-change-2026> — 2026 (lido em excerto)
- YCloud — *WhatsApp API Pricing Update: Effective October 1, 2026* — <https://www.ycloud.com/blog/whatsapp-api-message-pricing-update-effective-october-1-2026> (lido em excerto)
- Zoho — *WhatsApp Business Pricing Update: Service Messages Will Be Charged Starting October 2026* — <https://help.zoho.com/portal/de/community/topic/whatsapp-business-platform-message-pricing-guide> (lido em excerto)
- Whapier — *WhatsApp Business API pricing in Portugal (2026)* — <https://whapier.com/pricing/pt> (lido em excerto)
- Formbeep — *WhatsApp Business API Pricing (Nov 2026)* — <https://formbeep.com/whatsapp-api-pricing/> — nov/2026 (lido em excerto)
- Omdia — *The WhatsApp free lunch is over…* — <https://omdia.tech.informa.com/om146764/the-whatsapp-free-lunch-is-over-and-meta-is-also-coming-for-the-ai-layer> (lido em excerto)

**Antes de orçamentar:** abrir o rate card oficial em EUR (link da Meta acima, "Rate cards") e
confirmar a linha *Rest of Western Europe* e a franquia de 1 000.

## 2. Política da Meta para chatbots de IA no WhatsApp Business

**Veredicto: CONFIRMADO no essencial, com o estado atual CORRIGIDO** (a proibição existe e um bot de
empresa sobre o seu próprio negócio nunca foi abrangido; mas, **no EEE, a proibição está suspensa**
desde junho de 2026 por medidas cautelares da Comissão Europeia).

| Pergunta | Valor | Estado |
|---|---|---|
| O que diz a cláusula | Secção **"AI Providers"** acrescentada aos *WhatsApp Business Solution Terms*: proíbe fornecedores de modelos/assistentes de IA de usar a WhatsApp Business Solution para disponibilizar essas tecnologias **quando são a funcionalidade principal** — o texto diz *"the primary (rather than incidental or ancillary) functionality being made available"*, *"as determined by Meta in its sole discretion"* | CONFIRMADO (lido em excerto) |
| Datas | Termos alterados a **15/10/2025**, com entrada em vigor para os fornecedores de IA a **15/01/2026** (o cap. 03 e o cap. 06 dizem 15/01/2026 — certo para a aplicação; a alteração dos termos é de outubro de 2025) | CONFIRMADO |
| Um bot de empresa sobre os seus produtos? | **Permitido.** A Meta disse que a mudança *"doesn't affect businesses that are using AI to serve customers on WhatsApp"* (exemplo dado: o bot de apoio de uma agência de viagens). O agente da Painel Temático sobre os seus imóveis é IA **acessória** ao negócio — do lado permitido | CONFIRMADO (TechCrunch, 18/10/2025, lido em excerto) |
| Itália | A AGCM impôs medidas cautelares que **suspendem os termos em Itália** a **24/12/2025** | lido em excerto (fonte secundária) |
| Comissão Europeia | Comunicação de objeções a **09/02/2026**; **medidas cautelares adotadas a 09/06/2026**: a Meta tem de repor, no EEE, as condições de acesso anteriores a 15/10/2025 para assistentes de IA de terceiros, em 5 dias úteis, até ao fim da investigação ou **jun/2029**; coima possível até 10% do volume de negócios. Antes disso a Meta oferecera aceitar chatbots generalistas na Europa durante 12 meses **mediante cobrança** ("New pricing policy for AI Providers") | CONFIRMADO em várias fontes (CNBC, Decrypt, Cybernews, Neowin), lido em excerto |
| Recurso da Meta | Um blog diz que a Meta recorreu para o Tribunal Geral em ago/2026 | **NÃO CONFIRMADO** (fonte secundária única) |
| Versão dos termos | A página dos *Business Solution Terms* mostra "Last Modified: **March 6, 2026**" | lido em excerto |

**O que isto muda para o produto:** nada no desenho. O agente é atendimento comercial da própria
empresa e está fora da cláusula em qualquer cenário (proibição ativa ou suspensa). A recomendação do
cap. 03 mantém-se por outras razões: **recusar conversa fora do âmbito** (custo por mensagem — ver
ponto 1 — e risco de a Meta, "at its sole discretion", ler o bot como assistente generalista).

Fontes:
- TechCrunch — *WhatsApp changes its terms to bar general-purpose chatbots from its platform* — <https://techcrunch.com/2025/10/18/whatssapp-changes-its-terms-to-bar-general-purpose-chatbots-from-its-platform> — 18/10/2025 (lido em excerto)
- WhatsApp — *Business Solution Terms* — <https://www.whatsapp.com/legal/business-solution-terms> — última modificação 06/03/2026 (lido em excerto)
- Meta for Developers — *New pricing policy for AI Providers leveraging the WhatsApp Business Platform* — <https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/ai-providers.md> — 2026 (lido em excerto)
- CNBC — *Meta warned EU plans to impose measures on tech giant to reverse WhatsApp AI policy* — <https://www.cnbc.com/2026/02/09/eu-interim-measures-meta-whatsapp-ai-policy-antritrust.html> — 09/02/2026 (lido em excerto)
- Decrypt — *EU Orders Meta to Open WhatsApp to Rival AI Chatbots* — <https://decrypt.co/370580/eu-orders-meta-open-whatsapp-rival-ai-chatbots> — jun/2026 (lido em excerto)
- Cybernews — *EU orders Meta to open WhatsApp to rival AI chatbots* — <https://cybernews.com/privacy/eu-meta-whatsapp-ai-chatbots-assistant/> — jun/2026 (lido em excerto)
- Hansberry Tomkiel — *European Commission orders interim measures against Meta's exclusion of rival AI chatbots from WhatsApp* — <https://hansberrytomkiel.com/en/european-commission-orders-interim-measures-against-metas-exclusion-of-rival-ai-chatbots/> (lido em excerto)
- learnmind.ai — *WhatsApp Business AI Chatbot Policy 2026, Clause by Clause* — <https://www.learnmind.ai/blog-post/whatsapp-business-ai-chatbot-2026-policy-guide> (fonte secundária; lido em excerto)

## 3. AI Act (Regulamento (UE) 2024/1689) — art. 50.º, art. 4.º e o "Digital Omnibus"

**Veredicto: CORRIGIDO** (o calendário do cap. 06 estava certo; o Omnibus **foi aprovado e
publicado** — é o **Regulamento (UE) 2026/1744** — e, ao contrário do que a proposta fazia esperar,
**não adiou o dever de dizer "isto é uma IA"** nem retirou o dever de literacia às empresas).

| Pergunta | Valor | Estado |
|---|---|---|
| Art. 4.º (literacia em IA) — data | Aplica-se desde **02/02/2025** | CONFIRMADO |
| Art. 4.º depois do Omnibus | **Continua a obrigar fornecedores e responsáveis pela implantação** (*deployers* — a Painel Temático é um). A proposta da Comissão passava o dever para a Comissão e os Estados-Membros; o texto final **rejeitou isso** e acrescentou-lhes um papel de apoio. O padrão **suavizou-se**: em vez de "assegurar um nível suficiente de literacia", pede-se que se tomem medidas para a apoiar, e o texto diz que não obriga a garantir um nível específico de literacia de cada pessoa | CORRIGIDO (o cap. 06 dizia "suaviza o art. 4.º" — certo, mas **não o elimina**); várias fontes (CDT, IAPP, CMS), lido em excerto |
| Art. 50.º (transparência) — data | **02/08/2026**, já em aplicação | CONFIRMADO |
| Art. 50.º, n.º 1 (informar que se fala com uma IA) e n.ºs 3 e 4 (reconhecimento de emoções, *deep fakes*, texto de interesse público) | **Não foram adiados**: aplicam-se desde 02/08/2026, sem período de graça | CONFIRMADO em várias fontes (aiactblog.nl, Usercentrics, FPF), lido em excerto |
| Art. 50.º, n.º 2 (marcação legível por máquina do conteúdo sintético) | Período transitório **até 02/12/2026**, só para sistemas colocados no mercado **antes** de 02/08/2026 | lido em excerto (FPF, aiactblog.nl) |
| Omnibus — estado | **Aprovado.** Parlamento a 16/06/2026; Conselho em fim de jun./início de jul. de 2026 (as fontes divergem: 29/06 ou 08/07); **publicado no JOUE a 24/07/2026, em vigor desde 27/07/2026**, como Regulamento (UE) 2026/1744 | CONFIRMADO em várias fontes secundárias; **não li o JOUE** |
| Alto risco (contexto) | Anexo III adiado para **02/12/2027**; Anexo I para **02/08/2028** | lido em excerto |

**O que isto muda para o produto:** o chat do site e o WhatsApp **têm de dizer desde a primeira
mensagem que é uma IA** — obrigação em vigor hoje, sem adiamento. E a empresa tem de ter **alguma
medida de literacia** para quem usa a IA (formação curta, registo de quem a fez) — dever mais leve
do que em 2024, mas existente.

Fontes:
- aiactblog.nl — *Article 50 transparency obligations: the AI Act deadline of 2 August 2026 that has not been postponed* — <https://www.aiactblog.nl/en/posts/article-50-transparency-deadline-2-august-2026> — 2026 (lido em excerto)
- Future of Privacy Forum — *The AI Act implementation timeline: What changes under the AI Omnibus?* — <https://fpf.org/blog/the-ai-act-implementation-timeline-what-changes-under-the-ai-omnibus/> — 2026 (lido em excerto)
- Usercentrics — *EU AI Act Deal: Digital Omnibus Now in Force* — <https://usercentrics.com/knowledge-hub/eu-ai-act-high-risk-delay-article-50-transparency-consent/> (lido em excerto)
- Gibson Dunn — *EU AI Act Omnibus Agreement — Postponed High-Risk Deadlines and Other Key Changes* — <https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/> (lido em excerto)
- Lewis Silkin — *Council of the EU gives AI Omnibus final green light* — <https://lewissilkin.com/insights/2026/07/09/council-of-the-eu-gives-ai-omnibus-final-green-light-102nbb1> — 09/07/2026 (lido em excerto)
- Cuatrecasas — *Digital Omnibus on AI has been published* — <https://www.cuatrecasas.com/en/spain/intellectual-property/art/digital-omnibus-ai-has-been-published> — jul/2026 (lido em excerto)
- CDT — *Final AI Omnibus Text Dilutes Fundamental Rights Protections* — <https://cdt.org/?p=11417> — 2026 (lido em excerto)
- IAPP — *EU AI Act literacy changes may complicate more than simplify compliance* — <https://iapp.org/news/a/eu-ai-act-literacy-changes-may-complicate-more-than-simplify-compliance> (lido em excerto)
- CMS — *Guide on AI Omnibus (July 2026)* — <https://cms.law/en/content/download/886967/file/Guide%20on%20AI%20Omnibus_July%202026.pdf> (lido em excerto)

**Antes de citar:** abrir o Regulamento (UE) 2026/1744 no EUR-Lex (não consegui chegar ao texto
oficial) e confirmar a nova redação do art. 4.º.

## 4. CNPD — orientações sobre chatbots/IA, marketing direto e cookies

**Veredicto: CONFIRMADO quanto ao marketing direto; CORRIGIDO quanto a IA e cookies** (não existe,
nos resultados encontrados, **nenhuma orientação própria da CNPD sobre chatbots ou IA**, nem uma
**diretriz da CNPD sobre cookies** — o que há são documentos do CEPD que a CNPD divulga, e uma nota de
2021 sobre cookies em sites de entidades públicas).

| Tema | O que existe | Estado |
|---|---|---|
| **Marketing direto** | **Diretriz/2022/1 sobre comunicações eletrónicas de marketing direto**, aprovada em **janeiro de 2022** (o cap. 06 diz 25/01/2022; o mês confirma-se no Relatório de 2022, o dia não o li). Diz que email, SMS/MMS e chamadas a pessoas singulares caem na **Lei 41/2004** (lei especial), com o RGPD no resto; que só há **duas bases**: interesse legítimo (cliente já existente, produtos análogos) e **consentimento**; e que o consentimento tem de ser **expresso, prévio** ao envio e precedido da informação do art. 13.º do RGPD | CONFIRMADO (lido em excerto) |
| **Chatbots / IA** | **Nenhuma orientação nacional específica.** A CNPD divulgou o guia do CEPD *"AI Privacy Risks & Mitigations – Large Language Models"* (abril de 2025, só em inglês); emitiu em **maio de 2025** um alerta sobre o uso de dados pessoais pela Meta para treino de IA; aderiu em **fev/2026** a uma declaração conjunta de 61 autoridades sobre imagens geradas por IA; e o Plano de Atividades 2026 prevê coordenar o grupo de IA generativa da Rede Ibero-americana. A referência europeia útil é o **Parecer 28/2024 do CEPD** (modelos de IA e dados pessoais, dez/2024), que existe em PT | CORRIGIDO — não há "orientações da CNPD sobre chatbots" a citar |
| **Cookies** | **Não há diretriz da CNPD sobre cookies.** O Relatório de 2022 diz que a aprovação de uma diretriz de cookies foi **adiada** enquanto o CEPD analisava o tema; a página de diretrizes da CNPD lista a Diretriz/2022/1 (marketing) e a Diretriz/2023/1 (medidas de segurança), sem cookies. Existe uma **"Nota da CNPD sobre cookies" de 25/06/2021**, sobre sites de **entidades públicas**. Para o desenho do banner, a referência é europeia (CEPD: orientações sobre consentimento e sobre *dark patterns*; Comissão: retirar o consentimento tem de ser tão fácil como dá-lo) | CORRIGIDO |
| Volume de queixas | A CNPD refere **mais de 2 500 queixas** sobre comunicações promocionais não solicitadas em 2023–2024 | lido em excerto |

**O que isto muda para o produto:** para o marketing por email/WhatsApp, a Diretriz/2022/1 é a regra
a seguir (consentimento expresso e prévio para quem não é cliente). Para a IA, as orientações a
seguir são as do **CEPD**, não da CNPD. No banner de cookies, botões **Aceitar / Rejeitar / Configurar
com o mesmo destaque** — é o que o CEPD pede, ainda que a CNPD não o tenha escrito numa diretriz.

Fontes:
- CNPD — *DIRETRIZ/2022/1 sobre comunicações eletrónicas de marketing direto* (PDF) — <https://www.cnpd.pt/umbraco/surface/cnpdDecision/download/121958> — jan/2022 (lido em excerto)
- CNPD — página *Diretrizes* — <https://www.cnpd.pt/decisoes/diretrizes/> — consultada a 23/11/2026 (lido em excerto)
- CNPD — *Relatório de atividades de 2022* — <https://www.cnpd.pt/media/tutpevyh/relato-rio_2022.pdf> (lido em excerto)
- CNPD — *Nota da CNPD sobre cookies* — <https://www.cnpd.pt/comunicacao-publica/noticias/nota-da-cnpd-sobre-cookies/> — 25/06/2021 (data via DataGuidance: <https://www.dataguidance.com/news/portugal-cnpd-issues-note-use-cookies-announcing>; lido em excerto)
- CNPD — *Comunicações promocionais não solicitadas e cookies destacados em conferência de marketing direto* — <https://www.cnpd.pt/comunicacao-publica/noticias/comunicacoes-promocionais-nao-solicitadas-e-cookies-destacados-em-conferencia-de-marketing-direto/> (lido em excerto)
- CNPD — *Guia do Comité Europeu apresenta metodologia para gerir riscos de privacidade em sistemas de IA* — <https://www.cnpd.pt/comunicacao-publica/noticias/guia-do-comite-europeu-apresenta-metodologia-para-gerir-riscos-de-privacidade-em-sistemas-de-ia/> — 2025 (lido em excerto)
- CNPD — *Relatório de Atividades 2025* (aprovado a 24/03/2026) — <https://www.cnpd.pt/media/v50frkwy/relatorio-atividades-de-2025.pdf> (lido em excerto)
- CNPD — *Plano Anual de Atividades 2026* — <https://www.cnpd.pt/media/hvoac3wj/cndp_paa_2026_versao_digital.pdf> (lido em excerto)
- CNPD — *CNPD assina declaração internacional sobre riscos de privacidade da IA* — <https://www.cnpd.pt/comunicacao-publica/noticias/cnpd-assina-declaracao-internacional-sobre-riscos-de-privacidade-da-ia/> — fev/2026 (lido em excerto)
- CEPD — *Parecer 28/2024 sobre modelos de IA* (PT) — <https://www.edpb.europa.eu/system/files/documents/2025-05/edpb_opinion_202428_ai-models_pt.pdf> (lido em excerto)
- Comissão Europeia, A sua Europa — *Privacidade em linha* — <https://europa.eu/youreurope/business/growing/digitalising/online-privacy/index_pt.htm> (lido em excerto)

## 5. Licença AMI 25031 — de que entidade é?

**Veredicto: NÃO CONFIRMADO.** Nenhuma fonte pública indexada liga o número 25031 a uma entidade,
e o registo oficial (pesquisa de empresas de mediação no IMPIC / gov.pt) não é legível a partir deste
ambiente. O que se apurou:

| Pergunta | Valor | Estado |
|---|---|---|
| Quem emite e onde se confirma | O **IMPIC** emite a licença AMI (Lei 15/2013); confirma-se no serviço público **"Pesquisar uma empresa de mediação imobiliária"** (gov.pt / IMPIC) | CONFIRMADO (lido em excerto) |
| Há alguma página que associe "AMI 25031" a uma entidade? | **Não** — três pesquisas com o número em vários formatos não devolveram nenhum registo, lista ou anúncio com ele, além do próprio site da empresa | NÃO CONFIRMADO |
| O que mostra o site público atual da empresa | O site **paineltematico.pt** mostra **"AMI 25031"** no rodapé e nos contactos — ou seja, é a própria empresa a declará-lo, não um registo independente | lido em excerto |
| Dados da empresa (registos comerciais de terceiros) | **Painel Temático, Lda.**, NIF/NIPC **510053807**, sede em Braga, constituída em fins de 2011; CAE principal **68100** (compra e venda de bens imobiliários) | lido em excerto (Racius, Empresite/Jornal de Negócios, imoveisportugal.info) — fontes coerentes entre si |
| A "Painel Temático" tem licença AMI publicada? | **Não foi possível confirmar** em fonte oficial | NÃO CONFIRMADO |
| Nota de contexto | Uma lista de imobiliárias de Braga (out/2026) dá a outra agência o n.º **25040** — números desta ordem existem e são atribuídos a agências de Braga, mas isto **não prova** a quem pertence o 25031 | lido em excerto |

**Observação que pesa na decisão:** o CAE principal registado (68100, compra e venda de imóveis) não é
o da mediação (68311). Isso não impede ter licença AMI (o CAE secundário pode cobrir a mediação), mas
reforça a necessidade da verificação P0 já pedida no cap. 06: **abrir a pesquisa do IMPIC com o NIPC
510053807** e confirmar (a) que a licença 25031 existe e está ativa, (b) que está em nome deste NIPC.
Se não estiver, o número sai do rodapé até haver licença própria.

Fontes:
- gov.pt — *Guia: Mediação imobiliária* — <https://www.gov.pt/guias/mediacao-imobiliaria> (lido em excerto)
- Doutor Finanças — *Licença de mediação imobiliária: como obter e quais os requisitos* — <https://www.doutorfinancas.pt/imobiliario/licenca-de-mediacao-imobiliaria-como-obter-e-quais-os-requisitos/> (lido em excerto)
- Painel Temático — site público — <https://www.paineltematico.pt/> — consultado em excerto a 23/11/2026
- Racius — *Painel Temático – Lda* — <https://www.racius.com/painel-tematico-lda/> (lido em excerto)
- Empresite (Jornal de Negócios) — *Painel Temático, Lda* — <https://empresite.jornaldenegocios.pt/PAINEL-TEMATICO.html> (lido em excerto)
- imoveisportugal.info — *Painel Temático – Lda.* — <https://imoveisportugal.info/empresa-painel-tematico-em-braga-17479> (lido em excerto)
- Viver em Braga — *Imobiliárias em Braga: lista 2026* — <https://www.viverembraga.com/post/lista-de-imobiliarias-em-braga/38/> — out/2026 (lido em excerto)

## 6. Comunicação ao IMPIC das transações imobiliárias (Lei 83/2017; Regulamento IMPIC 603/2021)

**Veredicto: CONFIRMADO** (trimestral desde a Lei 58/2020; os promotores que vendem imóveis próprios
**estão abrangidos**), e **fecha-se o prazo** que o cap. 06 deixou "não confirmado".

| Pergunta | Valor | Estado |
|---|---|---|
| Periodicidade | **Trimestral.** A Lei 58/2020 alterou o **art. 46.º, n.º 1, al. b)** da Lei 83/2017, de semestral para trimestral; o **art. 20.º, n.º 1, do Regulamento n.º 603/2021** (02/07/2021) prevê a comunicação trimestral de cada transação | CONFIRMADO (Aviso n.º 739/2021 no DR; IMPIC), lido em excerto |
| Prazo de cada comunicação | **Até ao fim do trimestre seguinte** àquele em que o negócio foi celebrado: 1.º trim. → 30/06; 2.º → 30/09; 3.º → 31/12; 4.º → 31/03 do ano seguinte. Conta a data da **escritura / DPA / contrato**, não a do pagamento | **CONFIRMADO** — o cap. 06 marcava como "não confirmado"; o exemplo dele (4.º trim. 2022 até 31/03/2023) bate com esta regra. Fontes de apoio (ComunicaPro, expediente.pt), coerentes com o exemplo do idealista |
| Promotor que vende imóveis próprios está abrangido? | **Sim.** A Lei 83/2017 conta como atividade imobiliária a **mediação, a compra, venda, compra para revenda ou permuta de imóveis, o arrendamento e a promoção imobiliária**. A promoção define-se (Reg. 276/2019, em resumo) como impulsionar, programar, dirigir e financiar obras de construção **para posterior transmissão ou cedência**. O IMPIC identifica as entidades obrigadas também pelo **CAE — 41100 (promoção imobiliária) e 68100 (compra e venda de bens imobiliários)** | CONFIRMADO (Banco de Portugal reproduz a lista; apresentação IMPIC/AICOPA com os CAE), lido em excerto |
| O que se comunica | **Anexo A** — início de atividade, **uma vez, em 60 dias** (art. 46.º, n.º 1, al. a)); **Anexo B** — cada venda, **mesmo que tenha passado por uma mediadora** | lido em excerto (fonte de apoio) |
| Conservação | **7 anos** | lido em excerto (fonte de apoio) — o cap. 06 tinha "provavelmente 7 anos"; **não li o art. 51.º** |

**O que isto muda para o produto:** a Painel Temático (CAE 68100, ponto 5) é entidade obrigada
**pelas vendas dos seus próprios lotes**, independentemente da licença AMI. O CRM deve guardar, por
venda, os dados do Anexo B e a data da escritura, e avisar no fim de cada trimestre seguinte.

Fontes:
- Diário da República — *Aviso n.º 739/2021, de 12 de janeiro* — <https://diariodarepublica.pt/dr/detalhe/aviso/739-2021-153663117> — 12/01/2021 (lido em excerto)
- IMPIC — *Comunicações obrigatórias de atividades imobiliárias (Lei n.º 83/2017)* — <https://www.impic.pt/impic/pt-pt/comunicacoes-obrigatorias/comunicacoes-obrigatorias-de-atividades-imobiliarias-lei-no-832017-de-18-de-agosto> (lido em excerto)
- IMPIC — *Orientação Genérica n.º 1/IMPIC/2021* — <https://www.impic.pt/impic/assets/misc/img/OG_2021IMPIC01.pdf> — 2021 (lido em excerto)
- IMPIC — *Perguntas frequentes: combate ao branqueamento de capitais* — <https://www.impic.pt/impic/pt-pt/perguntas-frequentes/combate-ao-branqueamento-de-capitais-e-ao-financiamento-do-terrorismo_4> (lido em excerto)
- CRS Advogados — *Legal alert: comunicação de transações imobiliárias ao IMPIC* — <https://crs-advogados.com/legal-alert-comunicacao-de-transacoes-imobiliarias-ao-impic/> (lido em excerto)
- ComunicaPro — *Comunicações Obrigatórias ao IMPIC: guia, prazos e coimas* — <https://comunicapro.pt/pt/comunicacoes-impic/> (fonte de apoio; lido em excerto)
- Banco de Portugal — texto da Lei 83/2017 (PDF) — <https://www.bportugal.pt/sites/default/files/anexos/legislacoes/275425933_1.doc.pdf> (lido em excerto)
- AICOPA — apresentação IMPIC sobre BCFT — <https://www.aicopa.pt/anexos/seminario/IMPICBCFT.pdf> (lido em excerto)
- Millennium bcp — *Novas obrigações para imobiliárias* — <https://ind.millenniumbcp.pt/pt/geral/fiscalidade/Pages/Novas-obrigacoes-para-imobiliarias.aspx> (lido em excerto)
- Imojuris — *Reporte de transações imobiliárias ao IMPIC* — <https://imojuris.vidaimobiliaria.com/actualidade/not%C3%ADcias/Reporte-de-transacoes-imobiliarias-ao-IMPIC-I-P-pa> (lido em excerto)

