# 05 — Gestão de clientes e gestão de produto

> Capítulo de pesquisa · Painel Temático (construção e promoção imobiliária, Braga)
> Redigido a 23/11/2026 · Eixo: gestão de clientes (comprador e vendedor) e gestão de produto
> (promoção própria: Esporões, Merelim, Lomar, Trandeiras).

## Como ler este capítulo

Cada afirmação leva uma marca de confiança:

| Marca | Significado |
|---|---|
| **[V]** | Verificado nesta sessão por pesquisa web. Quando a fonte é um resumo secundário de um estudo primário, diz-se. |
| **[C]** | Conhecimento prévio do autor, **não reverificado nesta sessão**. Vai com um link para confirmar antes de citar fora de casa. |
| **[I]** | Inferência ou recomendação minha. Não é um facto. |
| **não confirmado** | Procurei e não encontrei fonte fiável. O número fica por medir. |

**Limitações desta pesquisa (ler antes de usar os números):**
- O WebFetch estava bloqueado pela rede da sessão (`hbr.org`, `real-estate.ca` e `ine.pt` não
  resolvem). Por isso os números dos estudos HBR/MIT e do INE vêm de **resumos secundários** que
  concordam entre si, e não da leitura do original.
- A quota de pesquisas web (partilhada com outros agentes) esgotou-se a meio do trabalho. As
  secções 8 (garantias), 10 (exemplos de portais de cliente) e parte da 11 apoiam-se mais em [C]
  e [I] do que as outras. Estão assinaladas.
- Os benchmarks de conversão por etapa, de visitas por venda e de dias no mercado para obra nova
  em Braga **não foram encontrados** em fonte fiável. Proponho que sejam medidos internamente
  (secção D).

---

## Resumo

_(ver no fim do documento a versão consolidada em 10 descobertas; aqui o essencial)_

1. **A rapidez da primeira resposta é a alavanca mais barata e mais provada.** Os estudos clássicos
   (MIT/InsideSales 2007, HBR 2011) e um teste de 2024 em imobiliário (DelPrete) apontam na mesma
   direção: responder em minutos, e não em horas, multiplica a probabilidade de falar com o
   cliente e de o qualificar, e a maior parte do mercado responde mal ou não responde. **[V]**
2. **Quem responde primeiro tende a ficar com o cliente:** 47% dos compradores e 59% dos
   vendedores norte-americanos contrataram o primeiro agente com quem falaram (Zillow 2025). **[V]**
3. **A base de clientes é a maior fonte de negócio a prazo:** 43% dos compradores nos EUA
   escolheram o agente por referência (NAR 2025), e o mediador típico tira 41–50% do negócio de
   clientes repetidos e de referências (NAR Member Profile 2025/2026). **[V]**
4. **Em Portugal, qualificar é sobretudo qualificar o financiamento**, e as regras mudaram em
   2026: taxa de esforço máxima de **45%** desde 1/8/2026 (era 50%), LTV de 90% na habitação
   própria e permanente, garantia pública para quem tem até 35 anos (imóvel ≤ 450 mil €, contratos
   até 31/12/2026) e IMT Jovem com isenção total até **330.539 €**. **[V]**
5. **O comprador típico é nacional, jovem e financiado:** 72–78% das compras são de portugueses,
   58% do crédito à habitação de 2025 foi para pessoas entre 18 e 35 anos, e metade dos empréstimos
   ficou abaixo de 170 mil €. **[V]**
6. **Braga está acima da média em crescimento e abaixo em preço:** mediana de 2.417 €/m² no
   2.º trimestre de 2026 (+21,6% num ano), contra 2.445 €/m² no país (+18,4%). A casa nova custa
   mais do que a usada em 23 dos 24 maiores municípios, mas o preço dela está a subir menos. **[V]**
7. **Vender em planta assenta em três peças jurídicas:** reserva (sem regime próprio), CPCV com
   sinal (arts. 410.º, 442.º e 830.º do Código Civil) e escritura. Desde 1/1/2024 a escritura já
   não exige que se mostre a autorização de utilização. **[V]** Ao contrário de Espanha, não
   encontrei em Portugal uma obrigação geral de garantir os sinais (**não confirmado**, [C]).
8. **A ponte custo→preço é a vantagem rara do Painel Temático:** o custo real de cada obra já é
   registado (sistema de custos, **na mesma base Supabase**), o que permite um preço mínimo por
   fração calculado e não estimado a olho. **[I]**

---

## A. Gestão de clientes

### 1. Funil e etapas

#### 1.1 O que existe hoje no CRM do Painel Temático (lido no código)

- `contactos_imoveis.estado`: `novo → contactado → qualificado → visita_agendada → negociacao →
  reserva → ganho | perdido`, com `temperatura` (frio/morno/quente/muito_quente), `score` 0–100,
  `prioridade`, `fonte` (por omissão `'site'`), `responsavel_id`, `orcamento_min/max` e
  `projeto_interesse` (`supabase-schema-completo.sql`).
- `lead_atividades.tipo`: `nota | chamada | email | visita | mudanca_estado`.
- `oportunidades` (pré-leads, só super_admin): `tipo` venda/compra/arrendamento; `estado`
  `nova | em_analise | convertida | arquivada`; follow-up com data e email/evento no Google
  Calendar; conversão em lead ou em imóvel (`supabase-oportunidades.sql`).
- Frações: `disponivel | reservado | vendido | em_breve` (`src/types/database.ts`).

**Diagnóstico [I]:** o funil atual mistura num só estado (`ganho`) dois momentos jurídicos que em
Portugal têm consequências muito diferentes, o **CPCV** e a **escritura**. Também não distingue
"visita marcada" de "visita feita", não guarda o motivo da perda nem a hora da primeira resposta,
e não tem uma etapa de pós-venda. Sem estes quatro dados não se consegue calcular os KPIs da
secção D.

#### 1.2 Etapas do lado comprador: definições operacionais

As redes e os CRMs de mediação usam nomes diferentes, mas a sequência é a mesma: lead → contacto →
qualificado → em visitas → proposta → contrato → fecho → pós-venda / cliente antigo ([C]; é o
modelo por omissão de CRMs como o Follow Up Boss ou o BoldTrail/kvCORE, não reverificado nesta
sessão). Em Portugal o lado jurídico impõe três marcos com efeitos distintos: a **reserva** (um
documento comercial, sem regime legal próprio — [I]), o **CPCV com sinal** (arts. 410.º, 442.º e
830.º do Código Civil — [V], ver secção 8) e a **escritura** ou documento particular autenticado
([C]).

A regra que faz um funil servir para medir é esta: **cada etapa tem um critério de entrada
verificável**, e não uma impressão do comercial **[I]**.

| Etapa | Entra quando… (critério verificável) | Prova no CRM |
|---|---|---|
| **Novo** | Lead criado (formulário, telefone, portal, WhatsApp, presencial). Ainda não houve conversa nos dois sentidos. | `created_at`, `fonte`, `campanha` |
| **Contactado** | Houve **conversa nos dois sentidos** (chamada atendida, resposta por WhatsApp ou email). Uma tentativa falhada não conta: fica como atividade "chamada sem resposta". | `first_contact_at` |
| **Qualificado** | Conhecem-se pelo menos 4 das 6 dimensões LPMAMA-PT (secção 3) **e** há produto compatível em stock ou previsto. | checklist de qualificação |
| **Em nutrição** *(estado paralelo)* | O cliente está qualificado mas não tem prazo (compra a ≥ 6 meses) ou espera por produto. | cadência longa ativa |
| **Visita marcada** | Há data e hora confirmadas pelo cliente. | evento no calendário |
| **Visita feita** | A visita aconteceu (obra, andar-modelo, fração ou visita virtual). Separar das marcadas permite medir as faltas. | atividade `visita` com resultado |
| **Proposta** | Proposta escrita sobre uma **fração concreta**: preço, plano de pagamentos, prazos. | `fracao_id`, PDF da proposta |
| **Reserva** | Documento de reserva assinado **e** valor de reserva recebido. A fração fica bloqueada. | comprovativo, data-limite do CPCV |
| **CPCV** | CPCV assinado (com reconhecimento presencial das assinaturas) **e** sinal recebido. | data do CPCV, plano de reforços |
| **Escritura (ganho)** | Escritura ou DPA celebrados; propriedade transmitida. | data, valor de fecho |
| **Entregue / pós-venda** | Chaves entregues. O cliente entra no programa de pós-venda (secção 5). | auto de entrega |
| **Perdido** | Fechado sem negócio. **O motivo é obrigatório**, escolhido de uma lista fechada: preço, financiamento recusado, comprou noutro lado, prazo da obra, tipologia/área, localização, sem resposta, desistiu de comprar, duplicado/spam. | `motivo_perda` |

#### 1.3 Etapas do lado vendedor (captação / angariação)

**Factos [V]** — Lei n.º 15/2013, de 8 de fevereiro (alterada pelo DL 102/2017), lida através da
jurisprudência que a aplica:
- O contrato de mediação tem **forma escrita obrigatória**; sem ela o contrato é nulo, e a
  nulidade não pode ser invocada pela própria mediadora (art. 16.º).
- A **exclusividade** só vale se constar do contrato **com a especificação dos seus efeitos**;
  sem essa especificação, o contrato pode ser nulo (art. 16.º, n.º 2, al. g)). Um dos acórdãos
  que o diz é do Tribunal da Relação do Porto, de 9/11/2023 (proc. 2142/20.7T8BRG.P1, com origem
  em Braga).
- A remuneração só é devida com **a conclusão e a perfeição do negócio** (art. 19.º, n.º 1). Em
  exclusividade, é devida mesmo sem negócio se este não se concretizar por **causa imputável ao
  cliente** — e os tribunais leem essa causa de forma ampla, incluindo a desistência (art. 19.º,
  n.º 2).
- Em Portugal o **regime aberto domina, numa proporção estimada de 80/20**. Nos EUA, no Canadá, na
  Austrália e na Nova Zelândia, ~90% dos contratos seriam em exclusividade. É uma estimativa de um
  autor num artigo do Imovirtual, não um estudo. Numa sondagem informal no Instagram (Out of the
  Box), 83% dos mediadores disseram preferir a exclusividade — também não mede resultados.

**Etapas propostas [I]:**
`oportunidade (pré-lead) → contacto com o proprietário → visita de avaliação → estudo de mercado
entregue → proposta de angariação → contrato de mediação (exclusivo | aberto) → em comercialização
→ proposta recebida → CPCV → escritura → pós-venda` e `perdida (motivo)`.

Há um segundo caminho, próprio de um promotor, que a tabela `oportunidades` já prevê com o tipo
`compra`: **terreno ou imóvel para promover** → análise de viabilidade (secção 11) → proposta → CPCV
de compra → escritura.

⚠️ **Ponto jurídico a confirmar [C]:** angariar imóveis de terceiros e vendê-los a troco de
remuneração é mediação imobiliária, e essa atividade exige licença do IMPIC (a licença AMI), nos
termos da Lei 15/2013 (ver o guia "Mediação imobiliária" em gov.pt). Vender frações dos **próprios**
projetos não é mediação. Se o Painel Temático não tiver licença AMI, a página `/avaliacao` e os
imóveis de segunda mão precisam de uma mediadora parceira ou de licença própria. **Confirmar com um
jurista.**

#### O que isto significa para o Painel Temático
- Partir o `ganho` em **`cpcv`** e **`escritura`**, separar `visita_agendada` de `visita_feita`,
  acrescentar `pos_venda` e um estado paralelo `nutricao`. Tornar o `motivo_perda` obrigatório.
  São mudanças pequenas no CHECK de `contactos_imoveis.estado`, e são elas que tornam o funil
  mensurável.
- Escrever as definições da tabela 1.2 no próprio ecrã do Kanban (um "i" por coluna). Um funil
  em que cada comercial interpreta "qualificado" à sua maneira não se compara entre pessoas.
- O lado da captação já tem casa nas `oportunidades`. Falta-lhe dar etapas ao contrato de mediação
  (ver C.2) — mas só depois de esclarecida a questão da licença AMI.

---

### 2. Speed-to-lead e SLAs

#### 2.1 O que dizem os estudos

| Estudo | Data | Amostra | Resultado | Ressalvas |
|---|---|---|---|---|
| **Lead Response Management Study** (James Oldroyd, MIT Sloan, com a InsideSales.com) | 2007 | ~3 anos, ~100 mil tentativas de chamada, ~15 mil leads, 6 empresas (segundo resumos) | Ligar aos **5 minutos** em vez de aos **30 minutos**: a probabilidade de **contactar** o lead cai **100 vezes** e a de o **qualificar** cai **21 vezes**. | **[V, secundário]** É um *odds ratio*, não "100x mais vendas". Não mediu fechos. Os dados são de 2007 e não são de imobiliário. |
| **"The Short Life of Online Sales Leads"** — Oldroyd, McElheran e Elkington, *Harvard Business Review* | março de 2011 | Auditoria a **2.241 empresas** dos EUA (com um lead de teste) + análise de **1,25 milhões de leads** em 42 empresas | **37%** responderam em menos de 1 hora; 16% em 24 horas; **24% levaram mais de 24 horas**; **23% nunca responderam**. Média de **42 horas** (entre as que responderam em 30 dias). Quem tentou contactar na 1.ª hora teve **~7 vezes** mais probabilidade de qualificar do que quem tentou na hora seguinte, e **mais de 60 vezes** mais do que quem esperou 24 horas ou mais. | **[V, secundário]** O original não estava acessível. Há quem cite "47 horas"; o número certo será 42. Mistura B2B e B2C. |
| **"Secret Shopping: 47% of Online Property Inquiries Are Ignored"** — Mike DelPrete | 13/08/2024 | 100 contactos de cliente-mistério a agentes nos EUA (Inman: 30 *brokerages*) | Descontando as respostas automáticas, **mais de 1 em cada 3** pedidos feitos por formulário **nunca teve resposta**. A resposta típica chegou **mais de 8 horas** depois. Em 42% das *open houses* o agente nem pediu o contacto. | **[V]** É imobiliário residencial, o mais próximo do nosso caso. Uma fonte refere uma mediana de 39 minutos ao lado da média, o que sugere uma distribuição muito assimétrica. |
| Estudo da WAV Group a 384 *brokers* | 2014 | — | Média de 917 minutos; 48% nunca responderam. | **Não confirmado** (só citado em segunda mão). Não usar. |
| Estudo da Pied Piper sobre tratamento de leads | 2026 | — | 68% dos pedidos feitos pelo site sem resposta em 24 horas. | **[V, secundário]** Só o vi citado num resumo (e numa notícia da Florida Realtors de out/2026). Usar com cautela. |

#### 2.2 Porque é que isto conta mais no imobiliário

- **47% dos compradores e 59% dos vendedores contrataram o primeiro agente com quem falaram**
  (Zillow Consumer Housing Trends Report 2025, EUA). Para 2026 há quem cite 54% nos compradores
  (fonte secundária). **[V]**
- **50% dos compradores que usaram um agente preferem mensagens escritas** (SMS ou apps de
  mensagens) e só 33% preferem chamadas (Zillow, comunicado de 30/12/2025). **[V]** Em Portugal o
  equivalente prático é o **WhatsApp** **[I]**.
- Entre quem compra casa pela primeira vez, 46% falam com o agente todos os dias e 44% todas as
  semanas (Zillow 2025). **[V]**
- A conclusão de DelPrete é que a oportunidade está em acertar no básico: fazer o
  acompanhamento de forma consistente e estruturada. **[V]**

**Leitura crítica [I]:** os estudos são norte-americanos e, os clássicos, antigos. Mostram
correlações, não provam causalidade. Mas apontam todos para o mesmo lado, de 2007 a 2026, e o custo
de agir sobre eles é quase nulo. Num mercado em que uma parte grande dos concorrentes demora horas
ou nem responde, responder em minutos é uma vantagem competitiva barata.

#### 2.3 SLA proposto para o Painel Temático [I]

| Tipo de lead | Exemplo | Resposta automática | Primeiro contacto humano | Escalonamento |
|---|---|---|---|---|
| **Nível 1 — intenção alta** | Pergunta sobre uma fração concreta, pedido de visita, chamada perdida, simulação de prestação feita | < 1 min: email + WhatsApp (modelo aprovado) com ficha da fração e link de agenda | **≤ 5 min** em horário comercial (seg–sáb, 9h–20h). Fora de horas: até às **9h30** do dia útil seguinte | Sem `first_contact_at` aos 15 min → alerta ao diretor; aos 60 min → reatribuição automática |
| **Nível 2 — intenção média** | Download de brochura, "avisa-me" de uma fração em breve, formulário genérico | < 1 min: email | **≤ 2 horas úteis** | Sem contacto em 24 horas → alerta |
| **Nível 3 — informativo** | Newsletter, blog | Email de boas-vindas | Sem chamada; entra na nutrição | — |
| **Captação (vendedor)** | Pedido de avaliação | < 1 min: email com os próximos passos | **≤ 1 hora útil** | Sem contacto em 4 horas → alerta |

Regras associadas:
- **Persistência:** no mínimo 6 tentativas em 10 dias úteis, alternando chamada, WhatsApp e email,
  antes de dar o lead como "não contactável" **[I]**. Não encontrei um número de tentativas com
  fonte fiável para o imobiliário (**não confirmado**).
- **Medir duas horas diferentes:** `first_response_at` (o primeiro toque, mesmo automático) e
  `first_contact_at` (a primeira conversa nos dois sentidos). O KPI que conta é o segundo.
- **O alerta tem de chegar ao telemóvel.** A notificação por email ao comercial ainda não está
  implementada (BRIEFING §7, "Resend pendente"). Sem ela, nenhum SLA de minutos é cumprível.

#### O que isto significa para o Painel Temático
- O primeiro passo com mais retorno é **ligar a notificação imediata** (email + push/WhatsApp ao
  responsável) e **a resposta automática ao cliente**, que estão pendentes. Tudo o resto vem depois.
- Gravar `first_response_at` e `first_contact_at` em `contactos_imoveis` e mostrar no painel a
  percentagem de leads contactados em menos de 5 minutos, por comercial e por fonte.
- Numa equipa pequena, 5 minutos sem cobertura não é realista: é preciso **escala de serviço**
  (quem tem o telefone em cada turno) e uma regra de reatribuição automática.

---

### 3. Qualificação e scoring

#### 3.1 Frameworks

- **BANT** — *Budget, Authority, Need, Timeline*. Framework clássico de vendas B2B, normalmente
  atribuído à IBM **[C]**. É útil como lembrete, mas pensado para compras empresariais.
- **LPMAMA** — *Location, Price, Motivation, Agent, Mortgage, Appointment*. É o padrão das
  equipas de mediação norte-americanas para qualificar compradores nas primeiras uma ou duas
  conversas. **[V]** Um guia de fornecedor (Sierra Interactive) sugere exigir um mínimo de pontos
  (por exemplo, 3) antes de marcar visita; outro dá 30–40% de leads convertidos em consulta como
  meta (é a referência de um fornecedor, não um padrão da indústria). **[V]**

#### 3.2 LPMAMA adaptado a Portugal e à promoção própria [I, sobre factos V]

O "A" de *Agent* (o cliente já tem agente?) quase não se aplica a um promotor que vende o que é
seu. Troca-se por **Autoridade** (quem decide) e acrescenta-se a **dependência de uma venda**.

| Dimensão | Pergunta | Porque importa (factos) | Campo no CRM |
|---|---|---|---|
| **L — Local / produto** | Que zona? Que tipologia, que área, exterior, garagem? | Diz se há produto compatível (Esporões, Merelim, Lomar, Trandeiras). | `projeto_interesse`, `tipologias[]` |
| **P — Preço** | Qual o intervalo total, incluindo impostos e escritura? | Tem de bater com a tabela de preços. | `orcamento_min/max` |
| **M — Motivação e prazo** | Porque compra agora? Para quando precisa da casa? | Numa compra em planta, **o prazo da obra tem de caber no prazo do cliente**. | `prazo_compra`, `motivo` |
| **F — Financiamento** | Precisa de crédito? Já tem simulação ou aprovação de princípio? Quanto tem de capitais próprios? Que idade tem (≤ 35)? | Desde 1/8/2026 a taxa de esforço máxima é **45%** (era 50%); o LTV máximo é **90%** na habitação própria e permanente e **80%** nas restantes finalidades (Recomendação macroprudencial n.º 1/2026 do Banco de Portugal; por agora é uma recomendação, e os bancos podem desviar-se dela com justificação). **[V]** | `financiamento_estado` (dinheiro / pré-aprovado / simulado / por ver), `capitais_proprios`, `elegivel_jovem` |
| **J — Jovem (≤ 35)** | O comprador, ou todos os compradores, tem 35 anos ou menos? É a primeira habitação? | **Garantia pública:** entre 18 e 35 anos, domicílio fiscal em Portugal, primeira habitação própria e permanente, imóvel **≤ 450 mil €**; o Estado garante até **15%** do capital por 10 anos, o que permite financiar até **100%**; contratos **até 31/12/2026** (prorrogação não confirmada); não cobre crédito à construção. **IMT Jovem 2026:** isenção total de IMT e Imposto do Selo até **330.539 €**, parcial até **660.982 €**; conta a idade à data da escritura; a isenção cai para 50% se um dos compradores não for elegível; não cobre o Imposto do Selo do crédito. **[V]** | `idade_compradores`, `primeira_habitacao` |
| **V — Venda dependente** | Precisa de vender a casa atual para comprar? | É o risco clássico de uma reserva que não chega a CPCV (idealista, 10/04/2026: "É melhor vender uma casa antes de comprar outra ou o contrário?"). Se precisar, é também uma **oportunidade de captação**. **[V, título]** | `venda_dependente` → cria `oportunidade` |
| **A — Autoridade** | Quem decide? Cônjuge, pais (que muitas vezes dão a entrada), sócio? | Visitas sem quem decide estão perdidas à partida. | `decisores` |
| **R — Residência** | Vive em Portugal ou no estrangeiro? Em que país? | Quem é emigrante com domicílio fiscal fora conta como "estrangeiro" no INE e **não é elegível para a garantia pública**, que exige domicílio fiscal em Portugal. **[V]** | `pais_residencia` |

#### 3.3 Scoring: proposta de modelo [I]

O CRM tem hoje um `score` automático de 0–100 e uma temperatura, mas **sem comportamento no site**
(BRIEFING §7). Proponho um score em duas partes, com a fórmula visível para o comercial:

- **Fit (0–60)** — financiamento (dinheiro ou pré-aprovado 20; simulado 10; por ver 0) + prazo
  compatível com a obra (15) + orçamento compatível com uma fração disponível (15) + decisores
  identificados (5) + sem venda dependente (5).
- **Envolvimento (0–40, decai 25% a cada 14 dias sem atividade)** — respondeu (10), visitou (15),
  pediu proposta (10), voltou ao site e viu a mesma fração mais de 2 vezes (5).
- **Temperatura** passa a ser derivada (por exemplo, ≥ 70 = muito quente), em vez de escrita à
  mão. A temperatura manual pode ficar como *override* com justificação.

⚠️ Seguir o comportamento no site (páginas vistas, regressos) exige **consentimento de cookies**
(RGPD e Lei 41/2004) **[C]**. Para os leads sem consentimento, o score usa só os dados declarados.

#### O que isto significa para o Painel Temático
- O primeiro telefonema deve fechar sempre as dimensões **F, J e M**: são elas que decidem se há
  negócio num prazo de obra e a que preço.
- **A garantia pública e o IMT Jovem são argumentos de venda.** Para um comprador elegível,
  "a sua entrada pode ser 0%" (sujeito à aprovação do banco) e "não paga IMT nem Imposto do Selo
  até 330.539 €" valem mais do que qualquer render. Mas a garantia só está confirmada para
  contratos até 31/12/2026, e uma obra que só faça escritura em 2027 pode já não a ter — é um risco
  a comunicar com honestidade.
- Para a qualificação ser preenchida, os campos novos (financiamento, idade, residência, venda
  dependente) devem ser poucos e de escolha rápida no telemóvel.

---

### 4. Nurturing e follow-up

#### 4.1 Factos disponíveis
- O que separa as boas equipas das outras é **o acompanhamento estruturado e consistente**, e não
  uma tática especial (DelPrete, 2024). **[V]**
- Os canais preferidos são as mensagens escritas: 50% contra 33% para as chamadas (Zillow, 2025).
  **[V]**
- O número "8 a 12 contactos até converter", repetido em blogs de vendas, **não foi confirmado**
  em fonte primária. Não usar.
- Os portais portugueses (idealista, Imovirtual, Casa Sapo, SuperCasa) oferecem alertas de pesquisa
  por email e app aos compradores **[C]**. Não consegui verificar que programas de nutrição as
  redes portuguesas (RE/MAX, KW, ERA, Century 21, Zome) usam (**não confirmado**).
- Enviar comunicações de marketing por email ou SMS a pessoas singulares exige **consentimento
  prévio**, com exceção para clientes que já compraram (sobre produtos análogos), nos termos do
  art. 13.º-A da Lei 41/2004 e do RGPD **[C]**.

#### 4.2 Cadências propostas [I]

| Cadência | Para quem | Sequência | Sai quando |
|---|---|---|---|
| **A — Lead novo de nível 1** | Pergunta sobre uma fração ou um projeto | **D0:** chamada ≤ 5 min + WhatsApp com ficha da fração + email. **D1:** chamada + WhatsApp ("conseguiu ver a planta?"). **D3:** email com simulação de prestação e calendário da obra. **D5:** chamada. **D7:** WhatsApp com um vídeo da obra. **D10:** chamada. **D14:** email de "fecho de ciclo" ("devo continuar a enviar-lhe novidades?") | Contactado → passa a qualificação; sem resposta ao D14 → "não contactável" + nutrição mensal (se houver consentimento) |
| **B — Qualificado sem prazo** (nutrição) | Compra a ≥ 6 meses, ou espera por um projeto | **Mensal, durante 12 meses:** atualização de obra (fotos/vídeo) + uma nota de mercado de Braga (INE trimestral) + frações que encaixam no perfil. Chamada a cada 90 dias. | Responde ou pede visita → volta ao funil |
| **C — Lista de espera / "em breve"** | Inscritos numa fração ou num projeto ainda por lançar | Confirmação imediata com a posição na lista → notícia a cada marco (licença, início de obra) → **acesso antecipado de 48 horas** à tabela de preços antes do público | Reserva ou desistência |
| **D — Depois da visita** | Fez uma visita | **≤ 2 horas:** mensagem de agradecimento + resumo da fração vista + proposta, se tiver sido pedida. **D2:** chamada de esclarecimento. **D7:** ponto de situação | Proposta, reserva ou perda |
| **E — Reativação** | Perdidos por preço, prazo ou financiamento | **90 e 180 dias:** "houve uma alteração" (fração nova, preço revisto, mudança nas regras do crédito, a garantia pública) | Volta ao funil |
| **F — Emigrantes / fora do país** | `pais_residencia` ≠ PT | Contacto em horário compatível; videochamada e visita virtual; reforço antes de **agosto e do Natal**, quando costumam vir a Portugal | Visita presencial marcada |

A cadência F é uma hipótese sobre o Minho sem dados confirmados nesta sessão (**não confirmado**).
Vale a pena testá-la e medi-la.

#### O que isto significa para o Painel Temático
- A "sequência de 3 emails em 10 dias" do BRIEFING é um bom começo, mas só cobre a cadência A e só
  por email. **O WhatsApp deve ser o canal principal**, e a chamada o segundo.
- A newsletter de obra já tem matéria-prima: `atualizacoes_obra` e `videos_obra`. Usá-la na
  nutrição custa pouco e é o conteúdo que distingue um promotor de uma mediadora.
- Gravar o consentimento de marketing (com data e origem) em cada lead, antes de automatizar
  qualquer envio.

---

### 5. Pós-venda e referências

#### 5.1 Factos

- **NAR Profile of Home Buyers and Sellers 2025** (transações de jul/2024 a jun/2025): **43%** dos
  compradores escolheram o agente por recomendação de um amigo, vizinho ou familiar (**49%** entre
  os que compravam pela primeira vez); 18% dos que já tinham comprado antes voltaram ao mesmo
  agente; entre os vendedores, **66%** usaram um agente recomendado ou um com quem já tinham
  trabalhado. **[V, via resumos do relatório]** As taxas de satisfação e de recomendação que
  aparecem nos resumos (92% satisfeitos; 91% recomendariam) **não foram confirmadas** no PDF.
- **NAR 2026** (jul/2025 a jun/2026): 90% dos compradores e 92% dos vendedores usaram um agente,
  ambos máximos históricos; a idade mediana de quem compra pela primeira vez é de 40 anos. **[V]**
- **NAR Member Profile:** o mediador típico tirou **20%** do negócio de clientes repetidos e
  **21%** de referências (edição de 2025); **28% + 22%** na edição de 2026. Entre os que têm 16 ou
  mais anos de experiência, 40% dizem que os clientes repetidos são mais de metade do negócio.
  **[V]**
- **Avaliações online (BrightLocal Local Consumer Review Survey):** 97% dos consumidores leem
  avaliações de negócios locais (2026); o Google é usado por 83% para as ler (2025), que descem a
  71% em 2026; em 2024, 71% não considerariam um negócio com média abaixo das 3 estrelas (fonte
  secundária). **[V]**
- **NPS (Net Promoter Score):** percentagem de promotores (notas 9–10) menos percentagem de
  detratores (0–6), à pergunta "de 0 a 10, qual a probabilidade de nos recomendar?" (Bain &
  Company / Reichheld) **[C]**.
- **Garantia legal dos imóveis:** com o DL 84/2021, o prazo de garantia de imóveis vendidos por um
  profissional passou a ser de **10 anos** para faltas de conformidade em elementos construtivos
  estruturais e de **5 anos** para as restantes **[C]**. A **ficha técnica da habitação** (DL
  68/2004) acompanha a casa nova **[C]**. Confirmar prazos e regras de denúncia com um jurista.

#### 5.2 Programa de pós-venda proposto [I]

| Momento | Ação | Quem | Mede |
|---|---|---|---|
| Escritura | Presente simbólico + "o que acontece a seguir" (calendário até à entrega) | Comercial | — |
| Entrega de chaves | Vistoria conjunta com lista de pendentes; **manual do proprietário** (garantias, manutenção, contactos); fotografia da entrega (com autorização) | Gestor de projeto + comercial | Pendentes abertos |
| +7 dias | Inquérito curto: **NPS** + "o que melhoraria?" | Automático | NPS da entrega |
| +30 dias | Fecho dos pendentes da vistoria; **pedido de avaliação no Google** (só a quem deu 9–10) | Gestor de projeto | Pendentes fechados; avaliações |
| +6 meses | Visita ou chamada de manutenção ("como está a casa?") | Gestor de projeto | Pedidos de assistência |
| +12 meses | Inquérito NPS anual + **programa de referências** | Automático + diretor | NPS a 1 ano; referências |
| Sempre | Pedidos de assistência com SLA (urgente ≤ 24 horas; normal ≤ 5 dias úteis) e registo do histórico | Gestor de projeto | Tempo de resolução |

**Referências (atenção jurídica [I]):** recompensar com dinheiro um particular que "angaria" um
comprador pode ser lido como mediação não licenciada. É mais seguro recompensar em espécie e com
transparência (por exemplo, um *upgrade* de acabamentos ao novo comprador, ou um vale ao cliente que
indicou). **Confirmar com um jurista.**

#### O que isto significa para o Painel Temático
- Num promotor, o cliente raramente volta a comprar a curto prazo, mas **recomenda família, amigos
  e colegas**. E em projetos pequenos e locais (Esporões, Merelim, Lomar), os vizinhos de um
  comprador são o público-alvo do projeto seguinte.
- A tabela `testemunhos` já existe. Falta o processo que a alimenta: o NPS como filtro (só os
  promotores são convidados a deixar avaliação no Google e testemunho).
- A assistência pós-entrega é responsabilidade legal durante 5 a 10 anos. Tê-la no mesmo sistema
  que os custos de obra permite ver **quanto custa cada obra depois de entregue** — um dado que
  quase nenhum promotor pequeno tem.

---

### 6. Métricas, KPIs e benchmarks

#### 6.1 Benchmarks com fonte

| Métrica | Valor externo | Fonte | Aplicabilidade |
|---|---|---|---|
| % de empresas que respondem a um lead web em menos de 1 hora | 37% (23% nunca respondem) | HBR, 2011 **[V, secundário]** | Linha de base geral (EUA, 2011) |
| Pedidos imobiliários online sem resposta | > 1 em 3; resposta típica > 8 horas | DelPrete, 2024 **[V]** | Imobiliário residencial (EUA) |
| Compradores que contratam o primeiro agente contactado | 47% (2025), ~54% (2026) | Zillow **[V]** | Mostra o valor de chegar primeiro |
| Compradores que escolhem o agente por referência | 43% | NAR, 2025 **[V]** | Mediação (EUA) |
| Negócio do mediador vindo de repetidos + referências | 41% (2025) → 50% (2026) | NAR Member Profile **[V]** | Mediação (EUA) |
| Quota de compradores nacionais | 72,4% (mercado, 2025); 78,3% das transações RE/MAX Portugal (2025) | idealista; Dinheiro Vivo **[V]** | Portugal |

#### 6.2 O que não encontrei (medir internamente)
- Conversão por etapa (lead → visita → reserva → escritura) em Portugal: **não confirmado**.
- Visitas por venda em obra nova: **não confirmado**.
- Dias no mercado e desconto entre o preço pedido e o de fecho em Braga, em obra nova: **não
  confirmado**. A Confidencial Imobiliário (SIR) publica indicadores de desconto e de tempo de venda
  para assinantes **[C]**; o INE publica preços de **transação** e o idealista preços **pedidos**
  — a diferença entre os dois é uma aproximação grosseira do desconto **[I]**.

A tabela completa de KPIs, com fórmulas, está na **secção D**.

#### O que isto significa para o Painel Temático
- Com o volume de uma equipa pequena, os benchmarks americanos servem para dar direção, não para
  comparar. **A comparação que conta é com o próprio Painel Temático do trimestre anterior.**
- Os 90 dias depois de os campos novos entrarem em produção (`first_contact_at`, `motivo_perda`,
  `visita_feita`, `cpcv`) são a linha de base. Só a partir daí faz sentido fixar metas.

---

### 7. Comportamento do comprador em Portugal (2024–2026)

#### 7.1 Mercado e preços [V]
- **2025 foi um ano recorde em vendas** — cerca de 165 a 170 mil casas vendidas (as fontes que
  citam o INE diferem entre 164.677 e "quase 170 mil") — e os preços subiram: mediana nacional de
  **2.076 €/m²**, mais 16,8%.
- **2.º trimestre de 2026:** mediana nacional de **2.445 €/m²** (+18,4% num ano; +4,6% face ao
  1.º trimestre). **Braga: 2.417 €/m², mais 21,6%** — acima de Guimarães (2.060 €/m²) e de
  Barcelos (2.000 €/m²) em preço, embora estes cresçam mais depressa (+28,6% e +28,7%). (Valor
  municipal citado pela Forbes Portugal a partir do INE; confirmar no quadro oficial.)
- **Preços pedidos em Braga (idealista):** 2.173 €/m² em fevereiro de 2026 (+11,3% num ano) e cerca
  de 2.379 €/m² em outubro de 2026. São preços **pedidos** e não se comparam diretamente com as
  medianas de **transação** do INE.
- **Casa nova contra casa usada:** a casa nova é mais cara em **23 dos 24 municípios** com mais de
  100 mil habitantes. Mas o preço dela sobe menos: no 2.º trimestre de 2026 o índice do INE dá
  **+12,3% nas novas e +18,0% nas existentes**; em 2025, +14,2% contra +18,9%. Num resumo do
  idealista, as casas novas venderam-se em média **40% mais caras** do que as existentes (preço
  médio final, não preço por m²).
- A oferta de casa nova à venda **mais do que duplicou em 5 anos**, e a procura está a absorvê-la
  (idealista, título de 2026). **[V, título]**

#### 7.2 Quem compra [V]
- **Nacionais:** 72,4% das casas vendidas em 2025; 78,3% das transações da RE/MAX Portugal em
  2025, em que os brasileiros foram o primeiro mercado externo (7% do volume). A RE/MAX fechou 2025
  com **8,7 mil milhões de euros** (+21,7%) e mais 7,7% de transações.
- **Compradores com domicílio fiscal no estrangeiro:** **8.471 casas** em 2025 (−13,3%, o terceiro
  ano seguido a cair), **3,4 mil milhões de euros**, cerca de **5,1%** das transações. Valor médio
  por compra: **234.120 €** para residentes, **335.640 €** para domiciliados noutro país da UE e
  **470.277 €** para os restantes. O INE mede **domicílio fiscal, não nacionalidade** — um emigrante
  com domicílio fiscal em França conta como "estrangeiro".
- **Quem pede crédito (Banco de Portugal, através do idealista):** **105 mil** contratos de crédito
  para habitação própria e permanente em 2025 (+27%); metade **até 170 mil €**; 83% trabalham por
  conta de outrem; 54% têm ensino superior; **58% têm entre 18 e 35 anos** (+11 p.p. face a 2024).
- **A garantia pública está a ser usada a fundo:** cerca de 7.800 contratos e 1,7 mil milhões de
  euros no 2.º trimestre de 2026; segundo o Correio da Manhã, **quase 90%** dos créditos com
  garantia financiam 100% da compra.
- **Comprador "mais informado e exigente"** (idealista, 14/04/2026). E, nos EUA, a investigação
  online já molda a maior parte das relações com o agente antes do primeiro contacto (Zillow,
  30/12/2025).

#### 7.3 O que não ficou confirmado
- Um inquérito português aos canais e critérios dos compradores (2024–2026), da APEMIP, do
  idealista ou do Imovirtual, com metodologia publicada: **não confirmado** nesta sessão.
- Dados sobre emigrantes do Minho como compradores (peso, origem, sazonalidade): **não
  confirmado**. É uma hipótese forte para Braga, mas tem de ser medida.

#### O que isto significa para o Painel Temático
- **O comprador central é um jovem, ou um casal jovem, nacional e financiado**, que procura um
  produto de gama média. A tabela de preços, a comunicação e a qualificação devem partir dele: a
  simulação de prestação, a garantia pública e o IMT Jovem na página de cada fração.
- **O emigrante é um segundo segmento a medir:** acrescentar `pais_residencia` ao formulário e ao
  CRM, e ler os dados ao fim de seis meses antes de investir numa campanha.
- Num mercado com mais casa nova a chegar, o argumento "é novo" já não basta. **O que
  diferencia é o processo** (resposta, transparência da obra, pós-venda), que é exatamente o eixo
  deste capítulo.

---
