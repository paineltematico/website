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

