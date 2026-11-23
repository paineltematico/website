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

O essencial em oito pontos (as recomendações estão no fim de cada secção e nas secções C e D).

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

## B. Gestão de produto (promoção imobiliária)

### 8. Pré-vendas: vender em planta

#### 8.1 O enquadramento jurídico português

**Factos [V]** (Código Civil, lido através da jurisprudência; confirmar a redação em vigor):
- **Forma do CPCV (art. 410.º, n.º 3):** quando a promessa é sobre um prédio urbano ou uma fração
  autónoma, **construído, em construção ou a construir**, o documento exige o **reconhecimento
  presencial das assinaturas** e a **certificação**, pela entidade que faz o reconhecimento, da
  existência da **licença de construção** (ou de utilização). O Supremo trata o reconhecimento
  presencial como formalidade essencial à validade do contrato.
- **Sinal (art. 442.º):** se quem não cumpre é o comprador, perde o sinal; se é o vendedor, o
  comprador pode exigir **o sinal em dobro**. Os tribunais exigem **incumprimento definitivo**, e
  não mero atraso (mora), para a resolução com o sinal em dobro.
- **Execução específica (art. 830.º):** em regra, o sinal afasta-a. **Mas há uma exceção para as
  promessas de transmissão sobre edifícios**: o comprador pode escolher entre o sinal em dobro e
  pedir ao tribunal que a venda se faça.
- **Simplex Urbanístico (DL 10/2024):** desde **1/1/2024** a escritura já **não exige que se mostre
  a autorização de utilização nem a ficha técnica da habitação**. Mas todos os intervenientes
  passaram a ter o **dever de avisar** o comprador se o imóvel não tiver o título urbanístico
  necessário. Os juristas aconselham pedir a documentação toda **antes do CPCV**. A revogação total
  do RGEU estava prevista para 1/6/2026; **não confirmei** se aconteceu.

**[C] — não reverificado nesta sessão (pesquisa esgotada):**
- **Espanha** obriga o promotor a garantir as quantias recebidas antes da entrega (seguro ou aval
  bancário, e conta especial), pela disposição adicional primeira da Lei de Ordenação da
  Edificação, na redação da Lei 20/2015. **Não encontrei uma obrigação geral equivalente em
  Portugal** (**não confirmado**). Na prática, a proteção do comprador português assenta no regime
  do sinal e na execução específica.
- **Branqueamento de capitais (Lei 83/2017):** as entidades que exercem atividade imobiliária,
  promotores incluídos, são entidades obrigadas: identificação e diligência sobre o cliente,
  origem dos fundos e comunicações periódicas ao IMPIC.
- **IMT no CPCV:** o IMT pode tornar-se devido antes da escritura se houver *tradição* (entrega do
  imóvel ao promitente-comprador) ou se o CPCV permitir ceder a posição contratual. Confirmar com
  um contabilista antes de redigir as cláusulas.

#### 8.2 Estrutura comercial recomendada [I]

| Peça | O que é | Boas práticas |
|---|---|---|
| **Pré-lançamento** | Lista de espera com interesse registado, antes da tabela pública | Pede só nome, contacto, tipologia e prazo. Dá **48 horas de acesso antecipado** à tabela. Mede a procura antes de fixar o preço (secção 11). |
| **Reserva** | Documento comercial: bloqueia uma fração por um prazo curto, contra um valor | Valor fixo e baixo face ao preço. **Prazo para o CPCV de 15 a 30 dias.** Regras escritas sobre a devolução: por exemplo, devolve-se se o crédito for recusado com prova do banco dentro do prazo. A fração sai do mercado no site no instante da reserva. |
| **CPCV** | Contrato-promessa com sinal | Reconhecimento presencial e certificação da licença. **Sinal + reforços ligados a marcos verificáveis da obra** (por exemplo: assinatura; estrutura concluída; cobertura; antes da escritura), e não a datas fixas. Prazo para a escritura indexado à licença de utilização, com tolerância definida. Mapa de acabamentos e memória descritiva em anexo. |
| **Personalização** | Escolhas de acabamentos dentro de uma gama, com prazo-limite | Catálogo fechado com preços dos *upgrades*; **data-limite de escolha por fase de obra**; cada escolha confirmada por escrito (aditamento). |
| **Escritura** | Transmissão de propriedade | O crédito do comprador é desembolsado aqui. A avaliação bancária é feita perto do fim da obra **[I]**. |

**O que limita o sinal [I, sobre factos V]:** com um LTV máximo de 90%, um comprador sem garantia
pública precisa de pelo menos 10% de capitais próprios, mais os impostos e a escritura. Um sinal
mais reforços que passe disso exclui precisamente o comprador típico (jovem, metade dos empréstimos
abaixo de 170 mil €). Para quem tem garantia pública, o banco pode financiar até 100%, mas **só na
escritura**, e **o dinheiro do sinal sai do bolso dele** antes disso. Um plano de pagamentos que
não caiba nisto parte o funil entre a reserva e o CPCV.

**Garantia como diferenciação [I]:** como (aparentemente) a lei portuguesa não obriga a garantir
os sinais, oferecer **garantia bancária ou seguro-caução sobre as quantias entregues**, ou mantê-las
numa conta separada até um marco, é um argumento de confiança forte para quem compra em planta.
O custo deve ser comparado com o efeito na conversão reserva → CPCV.

#### O que isto significa para o Painel Temático
- **Normalizar três documentos-modelo** (reserva, CPCV, aditamento de acabamentos), revistos por um
  jurista, e um **plano de pagamentos por marcos** igual em todos os projetos.
- Os marcos de pagamento devem ser os **mesmos marcos que o sistema de custos já regista** (ver
  10.3): assim "estrutura concluída" é um facto registado na obra, e não uma declaração do
  comercial.
- Um CPCV com reforços é **tesouraria previsível**. O sistema de custos já projeta as entradas
  das prestações dos clientes de obra (`entradasDePrestacoes` na Tesouraria). Os reforços dos
  CPCV de promoção própria são o mesmo tipo de dinheiro e podem entrar no mesmo mapa **[I]**.

---

### 9. Stock de frações

#### 9.1 Estados: o que existe e o que falta

Hoje: `disponivel | reservado | vendido | em_breve`. O BRIEFING regista que a sincronização com
`projetos.unidades_disponiveis` **ainda não está feita**.

Proposta **[I]** — o estado interno é mais fino do que o que se mostra no site:

| Estado interno | Definição | O site mostra | Transições permitidas | Automático |
|---|---|---|---|---|
| `em_breve` | Ainda sem tabela pública (pré-lançamento) | "Em breve" + "Avisa-me" | → `disponivel`, `bloqueada` | Ao passar a disponível: avisa a lista de espera, por ordem e com 48 horas de exclusividade |
| `disponivel` | À venda, com preço publicado | Preço + botão de contacto | → `opcao`, `reservada`, `bloqueada` | — |
| `opcao` | **Pré-reserva de 48–72 horas** dada por um comercial a um cliente concreto (à espera do valor da reserva) | "Reservada" | → `reservada`, `disponivel` (ao expirar) | **Expira sozinha**; avisa o comercial 6 horas antes |
| `reservada` | Documento de reserva assinado + valor recebido | "Reservada" | → `cpcv`, `disponivel` (desistência, com motivo) | Alerta quando o prazo para o CPCV está a 5 dias de acabar |
| `cpcv` | CPCV assinado + sinal recebido | "Vendida" | → `vendida`, `disponivel` (resolução, raro) | Plano de reforços com alertas por marco |
| `vendida` | Escritura feita | "Vendida" | → `entregue` | Abre o pós-venda |
| `entregue` | Chaves entregues | "Vendida" | — | Inicia o calendário de garantias |
| `bloqueada` | Fora do mercado por razão interna: **permuta** com o dono do terreno, uso do promotor, *showroom*, litígio | Não aparece, ou aparece como "Indisponível" | → `disponivel` | Motivo obrigatório |

**Regras [I]:**
- **Uma fração, um lead dono.** `opcao`, `reservada` e `cpcv` exigem `lead_id` e `responsavel_id`.
  Uma mudança de estado é uma linha de histórico (o mesmo padrão de `lead_atividades.mudanca_estado`).
- **O site lê o estado público derivado**, nunca o interno. `unidades_disponiveis` deixa de ser
  uma coluna escrita à mão e passa a ser uma contagem (vista ou *trigger*) — é o *todo* pendente
  do BRIEFING.
- **A permuta é comum em Portugal** **[I]**: frações entregues ao dono do terreno em pagamento.
  Têm de existir no stock (contam para a obra e para os custos), mas não à venda.

#### 9.2 Mapa de disponibilidade

- **Grelha piso × fração** (o "mapa de vendas"), com cores por estado e, ao passar o rato, a
  tipologia, a área, a orientação, o preço e o comercial responsável. É o ecrã que o diretor
  comercial abre todos os dias **[I]**.
- Para o público, a mesma grelha simplificada é o **Guia Interativo de Frações** que o BRIEFING
  planeia para Trandeiras: filtros, cartões, comparador e planta com sobreposição.

#### 9.3 Gestão de preços por fração [I]

- **Preço base por m² do projeto × coeficientes:** piso (cada piso acima vale mais, o rés-do-chão
  com jardim é um caso à parte), orientação solar, vista, exposição a ruído, áreas exteriores
  (varanda/terraço/jardim a uma fração do m² interior), lugares de garagem e arrumos com preço
  próprio. Os coeficientes ficam numa tabela, não em cada fração, para que uma revisão seja um
  só gesto.
- **A tabela de preços tem versões**, com data, autor e motivo. Cada reserva e cada CPCV guardam
  **o preço e a versão da tabela em vigor**. Sem isto não se responde a "a quanto vendemos o T2 do
  2.º andar, e com que desconto?".
- **Revisão por tranches:** um preço de lançamento para os primeiros, e subidas quando se vende uma
  percentagem do stock (por exemplo, ao chegar a 30% e a 60%) ou quando a absorção supera o plano.
  O inverso (descida) só com o custo real à frente (secção 11).
- **Os limiares do comprador jovem são limiares de preço [I, sobre factos V]:** 330.539 € (fim da
  isenção total do IMT Jovem em 2026) e 450.000 € (teto da garantia pública). Uma fração a 335 mil €
  perde a isenção total para o comprador jovem; uma a 455 mil € perde a garantia. **Rever a tabela
  à luz destes dois números** antes de cada lançamento, e atualizá-los a cada Orçamento do Estado.

#### O que isto significa para o Painel Temático
- Juntar `opcao`, `cpcv`, `entregue` e `bloqueada` aos quatro estados atuais, com histórico e
  expiração automática. É o que permite a uma equipa pequena **não vender a mesma fração duas
  vezes**.
- Trandeiras (8 frações, tipologias e áreas diferentes) é o caso que precisa de preços por
  coeficiente e de tabela versionada. Merelim (5 em breve) é o caso da lista de espera.

---

### 10. Comunicação de obra ao comprador

#### 10.1 O que existe
- `atualizacoes_obra` (com `percentagem_conclusao`) e `videos_obra`; a timeline na página do
  projeto; a página `/construção`, ainda básica.
- Uma área de cliente para quem já comprou **não existe** (não aparece no BRIEFING).

#### 10.2 O que um bom portal de comprador tem [I]

Não consegui verificar nesta sessão exemplos concretos de portais de cliente de promotores
portugueses ou espanhóis (**não confirmado**). A lista que se segue é uma síntese de prática e
não descreve um concorrente em particular:

| Bloco | Conteúdo | Notas |
|---|---|---|
| **A minha fração** | Planta, áreas, mapa de acabamentos escolhidos, preço e plano de pagamentos (pago / por pagar / próximo marco) | Lido do CRM; nunca escrito à mão duas vezes |
| **A obra** | Atualizações com fotografia e vídeo, data e fase; percentagem global; próximo marco | O mesmo conteúdo da página pública, mais o específico do edifício do comprador |
| **Documentos** | CPCV, aditamentos, licenças, pré-certificado e certificado energético, ficha técnica da habitação, manual do proprietário | Ligações assinadas e com prazo, nunca URLs públicos |
| **Escolhas** | Catálogo de acabamentos com prazo-limite, preço dos *upgrades* e confirmação | Fecha automaticamente na data-limite |
| **Visitas à obra** | Marcação de visitas acompanhadas, em datas abertas pela equipa | Regras de segurança: EPI, acompanhamento, sem acesso livre |
| **Entrega** | Marcação da vistoria, lista de pendentes, entrega de chaves | O auto de entrega fica no histórico |
| **Assistência** | Pedido de assistência com fotografia, estado e SLA | Abre o calendário de garantias legais (5/10 anos, [C]) |

#### 10.3 A vantagem do Painel Temático: a obra já é registada ao dia [I]

O sistema de custos (CARRINHO, `/home/user/carrinhoGES`) **usa a mesma base Supabase**, e o
`CLAUDE.md` dele diz que a base é partilhada com o `painel-tematico`. Já regista:
- **Marcos da obra derivados do registo** (`lib/obraMarcos`): por exemplo, "Laje P1 betonada" é o
  primeiro dia com mão de obra em `Estrutura · Lajes · betonar` nessa zona;
- **o estado por fase** (`obra_plano.estado`) e uma timeline do que **aconteceu**;
- e a tabela `atualizacoes_obra` aparece na lista de tabelas que o `renomear_fase` do CARRINHO
  atualiza — ou seja, já tem uma coluna de fase partilhada pelos dois sistemas.

Daqui sai uma automação de baixo custo: **quando nasce um marco no CARRINHO, propor uma
atualização de obra no painel** ("Laje do 1.º piso betonada"), que o gestor de projeto confirma com
duas fotografias antes de ser publicada para os compradores daquele projeto. Os custos **nunca**
atravessam para o lado público: só o marco e a data.

⚠️ Antes de ligar os dois sistemas: são autenticações diferentes (o painel usa JWT próprio e
*service role*; o CARRINHO usa Supabase Auth com RLS), e a correspondência `projetos` ↔ `obras` tem
de ser explícita (um `obra_id` no projeto), nunca adivinhada pelo nome.

#### O que isto significa para o Painel Temático
- O primeiro passo é uma **área de cliente mínima**: a minha fração, o plano de pagamentos, os
  documentos e as atualizações da obra. As escolhas de acabamentos e a assistência vêm a seguir.
- **Cadência fixa:** uma atualização de obra por mês, no mínimo, e uma em cada marco. A falta de
  notícias é o que gera as chamadas ansiosas.
- Os mesmos conteúdos servem três públicos: o comprador (portal), o lead em nutrição (newsletter)
  e o site (página do projeto). Escreve-se uma vez.

---

### 11. Precificação com base no custo

#### 11.1 O mercado à volta [V]
- **Braga, 2.º trimestre de 2026:** mediana de transação de **2.417 €/m²** (+21,6% num ano).
  Inclui casas usadas. A casa nova costuma estar acima da mediana (23 dos 24 maiores municípios),
  mas o preço dela sobe menos do que o da usada (+12,3% contra +18,0%).
- **A capacidade de compra está a ser apertada por regra:** taxa de esforço máxima de 45% desde
  1/8/2026, em vez de 50%. Ao mesmo tempo, a garantia pública (até 450 mil €) e o IMT Jovem (até
  330.539 €) dão fôlego ao comprador jovem, mas com tetos.

#### 11.2 Método proposto [I]

**(a) Custo total por fração** (sobre a área de construção, ABC):
```
custo_fracao = custo_construcao_m2 × ABC_fracao      # real (obra concluída) ou orçado com o real das anteriores
             + terreno_alocado                        # por permilagem ou por ABC
             + projetos_licencas_taxas_alocados
             + custos_financeiros_alocados            # juros do financiamento à obra
             + custos_comerciais                      # marketing, comissões, cliente-mistério
             + IVA_nao_dedutivel                      # ver nota fiscal abaixo
             + contingencia
```
**(b) Preço mínimo** (a margem é sobre o preço, e não sobre o custo):
`preco_minimo = custo_fracao / (1 − margem_alvo)`. A margem-alvo é uma decisão da administração;
não encontrei um *benchmark* fiável de margem de promoção em Portugal (**não confirmado**).

**(c) Preço de mercado:** comparáveis (INE para transações, idealista/Imovirtual para preços
pedidos, Confidencial Imobiliário se houver assinatura) × os coeficientes da fração (secção 9.3).

**(d) Decisão:** preço de tabela = máx(preço mínimo, preço de mercado ajustado). Se o preço de
mercado ficar **abaixo** do preço mínimo, o problema é do projeto, não da tabela — e é melhor
sabê-lo no estudo de viabilidade do que na última fração.

**(e) Método residual para comprar terreno:** `valor_max_terreno = receita_prevista −
custos_sem_terreno − margem_alvo × receita_prevista`. Vive nas `oportunidades` de tipo `compra`
(o campo `estimativa` jsonb já guarda linhas de receita e custo).

**(f) Absorção e revisão:**
`absorcao_mensal = frações em CPCV no mês / frações disponíveis no início do mês`. Se a absorção
real superar o plano em dois meses seguidos, sobe-se a tranche seguinte. Se ficar abaixo, olha-se
primeiro para o funil (há leads? visitam? onde se perdem?) e só depois para o preço, e sempre com
o custo real à vista.

**Nota fiscal [C] — confirmar com o contabilista:** a venda de imóveis habitacionais é, em regra,
isenta de IVA (art. 9.º, n.º 30, do CIVA), e por isso o IVA suportado na construção destinada a
venda de habitação tende a **não ser dedutível** e a ser **custo**. O CARRINHO já tem um regime de
IVA por obra (`obras.regime_iva`) e a função `custoComRegime` (dedutível = sem IVA; não dedutível =
com IVA e com o IVA da autoliquidação). **Para a promoção de habitação, o regime certo à partida é
"não dedutível"**. Houve anúncios de uma taxa reduzida de IVA na construção para habitação a
preços controlados, que **não confirmei** nesta sessão.

#### 11.3 A ligação ao custo real [I]

O que o CARRINHO já sabe e o painel comercial pode ler (só leitura, só `super_admin`/`diretor`):
- **Custo real acumulado por obra e por fase**, com a mão de obra incluída;
- **custo por m² de obras concluídas comparáveis** (o `/rendimento` e as composições medem €/m² por
  unidade de obra);
- **o orçamento contra o real** (`obra_orcamento`), que diz se a obra em curso vai derrapar antes de
  se fixar a tranche seguinte de preços.

Isto permite três ecrãs no painel:
1. **Ficha de rentabilidade do projeto:** receita vendida (CPCV + escrituras) + receita por vender
   (a preço de tabela) − custo real − custo por incorrer = **margem prevista**, atualizada à semana.
2. **Preço mínimo por fração** ao lado do preço de tabela, visível só para a direção. Nenhum
   comercial dá um desconto que passe a linha sem aprovação.
3. **Alerta de margem:** quando o custo real por m² ultrapassa o orçado em X%, a direção é avisada
   antes de rever a tabela.

#### O que isto significa para o Painel Temático
- A maioria dos promotores pequenos fixa preços olhando para o vizinho. O Painel Temático pode
  fixá-los **olhando para o vizinho e para o próprio custo**, ao cêntimo. É a vantagem mais rara
  deste capítulo e a que pede menos dados novos: os dois sistemas já existem e partilham a base.
- **Primeiro passo:** a correspondência projeto ↔ obra, e uma vista de leitura com o custo real
  por obra. Sem expor custos ao site, nem a papéis comerciais.

---

## C. Proposta de pipeline e estados para o CRM do Painel Temático [I]

Princípio: **o mínimo de estados novos que torna o funil mensurável**, aproveitando o que existe
(`contactos_imoveis`, `lead_atividades`, `oportunidades`, frações). Os SLAs pressupõem a escala de
serviço da secção 2.3.

### C.1 Pipeline do comprador (`contactos_imoveis.estado`)

| Etapa (estado) | Definição | Ação automática | SLA | Quem |
|---|---|---|---|---|
| `novo` | Lead criado, sem conversa nos dois sentidos | Resposta ao cliente (email + WhatsApp) em < 1 min; push/email ao responsável; `first_response_at` | Nível 1: conversa ≤ 5 min em horário (≤ 9h30 do dia útil seguinte fora de horas); nível 2: ≤ 2h úteis | Comercial de serviço (atribuição por escala) |
| `contactado` | Primeira conversa nos dois sentidos | Grava `first_contact_at`; abre a checklist de qualificação | Qualificação completa em ≤ 48h | Comercial responsável |
| `qualificado` | ≥ 4 das 6 dimensões LPMAMA-PT + produto compatível | Sugere frações compatíveis (tipologia, orçamento, prazo); envia o dossier da fração | Propor visita em ≤ 24h | Comercial |
| `nutricao` *(paralelo)* | Qualificado, sem prazo (≥ 6 meses) ou à espera de produto | Entra na cadência B (mensal) ou C (lista de espera); chamada a cada 90 dias | Revisão trimestral | Marketing (envios) + comercial (chamadas) |
| `visita_agendada` | Data e hora confirmadas pelo cliente | Convite de calendário; lembrete 24h e 2h antes (WhatsApp); morada/ponto de encontro | Confirmar até 24h antes | Comercial |
| `visita_feita` *(novo)* | A visita aconteceu | Mensagem de agradecimento + resumo em ≤ 2h; tarefa "chamada D2" | Ponto de situação em ≤ 48h | Comercial |
| `negociacao` (proposta) | Proposta escrita sobre uma fração concreta | Gera o PDF da proposta com a versão da tabela; põe a fração em `opcao` (48–72h) | Resposta do cliente em ≤ 72h (expira a opção) | Comercial; desconto acima do limite → diretor |
| `reserva` | Reserva assinada + valor recebido | Fração → `reservada`; tarefa "CPCV até D+15/30"; alerta a 5 dias do fim | CPCV em 15–30 dias | Comercial + diretor (documentos) |
| `cpcv` *(novo)* | CPCV assinado com reconhecimento + sinal recebido | Fração → `cpcv`; cria o plano de reforços por marco; dá acesso à área de cliente | Reforços cobrados ≤ 5 dias úteis após cada marco | Diretor / administrativo |
| `escritura` (`ganho`) | Escritura/DPA feitos | Fração → `vendida`; regista o preço final e o desconto; agenda a entrega | Entrega conforme o CPCV | Diretor |
| `pos_venda` *(novo)* | Chaves entregues | Fração → `entregue`; inicia o programa da secção 5.2 (NPS D+7, Google D+30, 6 e 12 meses) e o calendário de garantias | Assistência: urgente ≤ 24h; normal ≤ 5 dias úteis | Gestor de projeto |
| `perdido` | Fechado sem negócio | **Motivo obrigatório**; se o motivo for preço, prazo ou financiamento → cadência E (90/180 dias) | — | Comercial; o diretor revê os motivos mensalmente |

Regras transversais:
- Qualquer lead sem atividade há 14 dias num estado ativo → tarefa "próximo passo" ao responsável;
  há 30 dias → aparece na revisão semanal do diretor.
- Mudança de estado = linha `mudanca_estado` em `lead_atividades` (já existe), **com a data em que
  o facto aconteceu**, e não só a data do registo.
- Um lead com `venda_dependente = true` cria automaticamente uma `oportunidade` de captação.

### C.2 Pipeline de captação e de compra para promover (`oportunidades`)

Os estados atuais (`nova`, `em_analise`, `convertida`, `arquivada`) passam a ser **macroestados**;
acrescenta-se uma `etapa` fina:

| Macroestado | Etapa | Definição | Ação automática | SLA | Quem |
|---|---|---|---|---|---|
| `nova` | `nova` | Pedido de avaliação, contacto de proprietário, terreno sinalizado | Email ao proprietário com os próximos passos | Contacto ≤ 1h útil | Super_admin / diretor |
| `em_analise` | `avaliacao_marcada` | Visita ao imóvel/terreno com data | Lembrete; checklist de documentos (caderneta, certidão, planta, certificado energético) | Visita ≤ 5 dias úteis | Diretor |
| `em_analise` | `estudo_entregue` | Estudo de mercado entregue (venda) ou **viabilidade** feita (compra para promover: método residual, secção 11.2e) | Follow-up D+3 e D+7 | Estudo ≤ 3 dias úteis após a visita | Diretor |
| `em_analise` | `proposta` | Proposta de angariação (preço, plano de marketing, comissão, exclusividade) **ou** proposta de compra do terreno | Validade da proposta com alerta | Resposta ≤ 7 dias | Diretor |
| `convertida` | `mediacao_assinada` | Contrato de mediação escrito (exclusivo/aberto, com os efeitos especificados) — **só com licença AMI ou com uma parceira** | Converte em `imoveis` (já existe); data de fim do contrato com alerta a 30 dias | — | Diretor |
| `convertida` | `compra_cpcv` → `compra_escritura` | Terreno/imóvel comprado para promover | Cria o projeto e a obra (ligação ao CARRINHO) | — | Super_admin |
| `arquivada` | `perdida` | Com motivo (preço, concorrente, desistência, inviável) | Reativação aos 6 meses se o motivo for preço | — | — |

### C.3 Estados da fração

Ver a tabela 9.1: `em_breve → disponivel → opcao → reservada → cpcv → vendida → entregue`, mais
`bloqueada`. **Quem pode mudar:** comercial até `opcao`; diretor a partir de `reservada`; só
super_admin desfaz `cpcv`/`vendida`. **SLA:** a `opcao` expira às 72h; a `reservada` gera alerta a
5 dias do prazo do CPCV.

### C.4 Campos novos (resumo)

| Tabela | Campo | Para quê |
|---|---|---|
| `contactos_imoveis` | `first_response_at`, `first_contact_at` | Speed-to-lead (KPIs 1–3) |
| | `motivo_perda` (lista fechada) | Saber porque se perde |
| | `fonte` normalizada + `campanha`/`utm_*` | Custo por lead e por venda por fonte |
| | `fracao_id` (interesse principal) | Ligar o lead ao stock |
| | `financiamento_estado`, `capitais_proprios`, `elegivel_jovem`, `prazo_compra`, `venda_dependente`, `pais_residencia`, `decisores` | Qualificação LPMAMA-PT |
| | `consentimento_marketing` (+ data e origem) | Nutrição legal |
| | `proxima_acao_em` | Nada fica sem próximo passo |
| frações | estados novos + `preco_tabela_versao_id`, `preco_fecho`, `lead_id`, `estado_desde`, `motivo_bloqueio` | Stock, desconto e absorção |
| nova: `tabela_precos_versoes` | versão, data, autor, motivo, coeficientes | Revisões de preço auditáveis |
| nova: `planos_pagamento` / `pagamentos_cpcv` | marco, valor, data prevista, data paga | Cobranças e tesouraria |
| nova: `pos_venda_pedidos` | fração, descrição, fotografias, estado, datas | Assistência e garantias |
| nova: `inqueritos_nps` | lead/fração, momento, nota, comentário | NPS |
| `projetos` | `obra_id` (CARRINHO) | Ponte custo↔preço e marcos de obra |

---

## D. Proposta de KPIs com fórmula [I]

As metas são **pontos de partida** a rever depois dos primeiros 90 dias de medição. Onde há um
*benchmark* externo, vai indicado; onde não há, diz-se.

| # | KPI | Fórmula | Meta inicial | Benchmark externo |
|---|---|---|---|---|
| 1 | **Speed-to-lead (≤ 5 min)** | leads de nível 1 com `first_contact_at − created_at ≤ 5 min` (em horário) ÷ leads de nível 1 em horário | ≥ 60% → 80% | LRM 2007: 5 min vs 30 min = odds de contacto 100x [V] |
| 2 | **Tempo mediano até à 1.ª conversa** | mediana(`first_contact_at − created_at`) | < 15 min | Mercado dos EUA: resposta típica > 8h (DelPrete 2024) [V] |
| 3 | **Leads sem contacto em 24h** | leads sem `first_contact_at` às 24h ÷ leads | < 5% | > 1 em 3 nunca respondidos (DelPrete) [V]; 23% nunca (HBR 2011) [V] |
| 4 | **Taxa de contacto** | leads que chegaram a `contactado` ÷ leads (sem spam/duplicados) | medir | não confirmado |
| 5 | **Taxa de qualificação** | `qualificado` ÷ `contactado` | medir | não confirmado |
| 6 | **Visita por qualificado** | `visita_feita` ÷ `qualificado` | medir | Fornecedor: 30–40% de leads → consulta (fraco) [V] |
| 7 | **Faltas a visitas** | (marcadas − feitas) ÷ marcadas | < 15% | não confirmado |
| 8 | **Visitas por venda** | visitas feitas ÷ CPCV, por projeto | medir | não confirmado |
| 9 | **Reserva → CPCV** | CPCV ÷ reservas iniciadas no período (coorte) | ≥ 85% | não confirmado |
| 10 | **Conversão global por fonte** | CPCV da fonte ÷ leads da fonte | medir por fonte | não confirmado |
| 11 | **Ciclo de venda** | mediana(data do CPCV − `created_at`) | medir | não confirmado |
| 12 | **Custo por lead (CPL)** por fonte | gasto da fonte no período ÷ leads da fonte | medir | não confirmado |
| 13 | **Custo por venda (CAC)** por fonte | gasto da fonte ÷ CPCV atribuídos à fonte | medir | não confirmado |
| 14 | **Absorção mensal** | frações que passaram a `cpcv` no mês ÷ frações disponíveis no início do mês | conforme o plano do projeto | não confirmado |
| 15 | **% vendido do projeto** | frações em `cpcv`+`vendida`+`entregue` ÷ frações vendáveis (sem `bloqueada`) | plano por marco de obra | — |
| 16 | **Dias em stock** | mediana(data `cpcv` − data `disponivel`) por fração | medir | não confirmado |
| 17 | **Desconto médio** | Σ(preço de tabela da versão − preço de fecho) ÷ Σ preço de tabela | ≤ 3% | não confirmado (CI/SIR publica, [C]) |
| 18 | **€/m² de fecho vs mercado** | preço de fecho ÷ área ÷ mediana INE de Braga do trimestre | acompanhar | INE Braga 2T2026: 2.417 €/m² [V] |
| 19 | **Margem prevista do projeto** | (receita vendida + receita por vender a preço de tabela − custo real − custo por incorrer) ÷ receita total | ≥ margem-alvo | não confirmado |
| 20 | **Desvio de custo** | (custo real €/m² − orçado €/m²) ÷ orçado | ≤ 5% | — |
| 21 | **Avaliação → angariação** (captação) | contratos de mediação ÷ avaliações feitas | medir | não confirmado |
| 22 | **% de exclusivas** | angariações em exclusivo ÷ angariações | ≥ 50% | PT ~20% em exclusivo (estimativa de autor, Imovirtual) [V] |
| 23 | **NPS da entrega / a 12 meses** | % promotores (9–10) − % detratores (0–6) | ≥ 50 | definição Bain [C]; sem *benchmark* PT |
| 24 | **Avaliações no Google** | nº e média por trimestre | +1 por entrega; média ≥ 4,7 | 71% não consideram < 3 estrelas (BrightLocal 2024, secundário) [V] |
| 25 | **% de negócio por referência** | CPCV com `fonte = referência/cliente` ÷ CPCV | ≥ 25% a 2 anos | NAR: 43% dos compradores por referência; 41–50% do negócio do mediador [V] |
| 26 | **Tempo de resolução da assistência** | mediana(fecho − abertura) por gravidade | urgente ≤ 24h; normal ≤ 5 dias úteis | — |
| 27 | **Higiene de dados** | leads perdidos com `motivo_perda` ÷ perdidos; leads ativos com `proxima_acao_em` ÷ ativos | 100% / ≥ 95% | — |

**Painel semanal mínimo [I]:** KPIs 1, 3, 9, 14, 17 e 27, por comercial e por projeto. O resto vai
para a revisão mensal.

---

## Fontes

Datas: publicação da fonte quando conhecida; "s/d" quando não foi possível confirmá-la. Marca:
[V] verificada por pesquisa nesta sessão · [C] conhecimento prévio, por reverificar.

### Speed-to-lead e comportamento face ao agente
- [V] Oldroyd, J. / InsideSales.com — *Lead Response Management Study* (2007). Resumos:
  https://pt.slideshare.net/slideshow/insidesales-mit/1809952 (s/d) ·
  https://www.insidesales.com/rethinking-our-lrm-study-about-lead-response-management/ (s/d)
- [V] Oldroyd, McElheran e Elkington — "The Short Life of Online Sales Leads", *Harvard Business
  Review*, março de 2011: https://scholarsarchive.byu.edu/facpub/9711 (registo do artigo). Resumos:
  https://www.expertise.ai/stats/speed-to-lead-statistics (s/d) ·
  https://kaivix.com/en/insights/lead-response-time-evidence (s/d)
- [V] Mike DelPrete — "Secret Shopping: 47% of Online Property Inquiries Are Ignored", 13/08/2024:
  https://www.mikedp.com/articles/2024/8/13/secret-shopping-47-of-online-property-inquiries-are-ignored
- [V] Inman — "DelPrete 'Secret Shopper' Sting Reveals Agents Lose Hosts Of Leads", 30/07/2024:
  https://inman.com/2024/07/30/delprete-secret-shopper-sting-reveals-agents-lose-hosts-of-leads
- [V] HousingWire — "Almost half of listing inquiries don't receive a response from an agent", 2024:
  https://housingwire.com/articles/almost-half-of-listing-inquiries-dont-receive-a-response-from-an-agent-delprete
- [V] Florida Realtors — "Real estate inquiries often fail to reach agents", out/2026:
  https://www.floridarealtors.org/news-media/news-articles/2026/10/real-estate-inquiries-often-fail-reach-agents
- [V] Zillow — *Buyers: Results from the Zillow Consumer Housing Trends Report 2025*, 2024/2025:
  https://www.zillow.com/research/buyers-housing-trends-report-2025-35688
- [V] Zillow — comunicado "Online research now shapes how most agent relationships begin",
  30/12/2025: https://zillow.mediaroom.com/2025-12-30-Zillow-report-Online-research-now-shapes-how-most-agent-relationships-begin
- [V] Inman — "5 takeaways from Zillow's 2025 Consumer Housing Trends Report", 07/10/2024:
  https://inman.com/2024/10/07/5-takeaways-from-zillows-2025-consumer-housing-trends-report

### Qualificação
- [V] The Close — "LPMAMA" (s/d): https://theclose.com/lpmama/
- [V] Sierra Interactive — "Qualifying buyer leads with the LPMAMA conversation framework" (s/d):
  https://help.sierrainteractive.com/helpcenter/qualifying-buyer-leads-with-the-lpmama-conversation-framework
- [V] Keller Ink — "Qualify clients with LPMAMA" (s/d):
  https://kellerink.com/blogs/news/qualify-clients-with-lpmama-the-mother-of-all-conversation-frameworks
- [V] HousingWire — "LPMAMA" (s/d): https://www.housingwire.com/articles/lpmama/
- [C] BANT (*Budget, Authority, Need, Timeline*), normalmente atribuído à IBM — sem fonte
  primária verificada nesta sessão; não citar a origem fora de casa sem a confirmar.

### Referências, avaliações e pós-venda
- [V] NAR — *2025 Profile of Home Buyers and Sellers*, nov/2025:
  https://www.rirealtors.org/clientuploads/documents/NAR/Homebuyers_and_sellers_trend_2025.pdf
- [V] Virginia REALTORS — "Key Takeaways from NAR's 2025 Profile of Home Buyers and Sellers",
  08/12/2025: https://virginiarealtors.org/2025/12/08/key-takeaways-from-nars-2025-profile-of-home-buyers-and-sellers/
- [V] NAR — "First-time home buyer share inches up to 22%; median age remains at record high of
  40", nov/2026: https://www.nar.realtor/newsroom/first-time-home-buyer-share-inches-up-to-22-median-age-remains-at-record-high-of-40
- [V] Real Estate News — "Share of buyers, sellers using agents hits record high", 11/11/2026:
  https://www.realestatenews.com/2026/11/11/share-of-buyers-sellers-using-agents-hits-record-high
- [V] NAR — "Income steady even as market slows: 2025 Member Trends", 2025:
  https://www.nar.realtor/news/real-estate-news/sales-marketing/income-steady-even-as-market-slows-2025-member-trends
- [V] HousingWire — "NAR 2026 Member Profile", 2026:
  https://www.housingwire.com/articles/nar-2026-member-profile-experience/
- [V] BrightLocal — *Local Consumer Review Survey 2025*, jan/2025:
  https://www.brightlocal.com/research/local-consumer-review-survey-2025/
- [C] Bain & Company — Net Promoter System (definição do NPS; por reverificar). Portal:
  https://www.netpromotersystem.com/
- [C] Decreto-Lei n.º 84/2021, de 18 de outubro (garantias na venda de bens, imóveis incluídos) —
  por reverificar; pesquisar o diploma em https://diariodarepublica.pt/
- [C] Decreto-Lei n.º 68/2004, de 25 de março (ficha técnica da habitação) — por reverificar;
  pesquisar em https://diariodarepublica.pt/

### Mediação, CPCV e enquadramento jurídico
- [V] Lei n.º 15/2013, de 8 de fevereiro (mediação imobiliária) — Diário da República:
  https://diariodarepublica.pt/dr/detalhe/lei/15-2013-257806
- [V] gov.pt — Guia prático "Mediação imobiliária" (s/d): https://www.gov.pt/guias/mediacao-imobiliaria
- [V] Tribunal da Relação do Porto, acórdão de 09/11/2023, proc. 2142/20.7T8BRG.P1 (vLex):
  https://vlex.pt/vid/acordao-n-2142-20-1032046429
- [V] Tribunal da Relação de Coimbra — "Contrato de mediação imobiliária. Remuneração.
  Exclusividade" (s/d): https://trc.pt/?p=35947
- [V] Imovirtual — "Os desafios do regime aberto na mediação imobiliária" (s/d):
  https://www.imovirtual.com/noticias/imoblog/os-desafios-do-regime-aberto-na-mediacao-imobiliaria/
- [V] Doutor Finanças — "Em tempo de escassez, partilhar" (s/d):
  https://www.doutorfinancas.pt/imobiliario/em-tempo-de-escassez-partilhar/
- [V] Doutor Finanças — "Mediação imobiliária com ou sem exclusividade" (s/d):
  https://www.doutorfinancas.pt/vida-e-familia/mediacao-imobiliaria-com-ou-sem-exclusividade/
- [V] Decreto-Lei n.º 236/80 (alteração do art. 410.º do Código Civil) — Diário da República:
  https://diariodarepublica.pt/dr/detalhe/decreto-lei/236-1980-472484
- [V] Decreto-Lei n.º 379/86 (alterações aos arts. 442.º e 830.º do Código Civil) — Diário da
  República: https://diariodarepublica.pt/dr/detalhe/decreto-lei/379-1986-220772
- [V] Jurisprudência sobre sinal e reconhecimento presencial (PGDL/STJ, s/d):
  https://www.pgdlisboa.pt/jurel/stj_mostra_doc.php?codarea=1&nid=1826 ·
  https://trc.pt/ap1482090tbgrdc1/
- [V] idealista — "Simplex permite venda de casa sem licença: os riscos para quem compra", jan/2024:
  https://www.idealista.pt/news/node/60989
- [V] idealista — "Comprar casa sem apresentar licença: tudo o que muda no simplex", jan/2024:
  https://www.idealista.pt/news/node/61073
- [V] Ordem dos Advogados — "Há novas regras para o licenciamento no âmbito do urbanismo",
  22/02/2024: https://portal.oa.pt/comunicacao/imprensa/2024/2/22/ha-novas-regras-para-o-licenciamento-no-ambito-do-urbanismo/
- [V] Cuatrecasas — "Guia Simplex Urbanístico" (s/d):
  https://www.cuatrecasas.com/pt/portugal/imobiliario/art/guia-simplex-urbanistico-1
- [C] Lei n.º 83/2017, de 18 de agosto (branqueamento de capitais; o IMPIC supervisiona o setor
  imobiliário) — por reverificar; pesquisar em https://diariodarepublica.pt/ e https://www.impic.pt/
- [C] Lei n.º 41/2004, art. 13.º-A (comunicações não solicitadas) — por reverificar; pesquisar em
  https://diariodarepublica.pt/
- [C] Espanha — Ley 20/2015 (disposição adicional primeira da Ley 38/1999, de Ordenación de la
  Edificación: garantia das quantias antecipadas) — por reverificar; pesquisar em https://www.boe.es/

### Financiamento e fiscalidade
- [V] ECO — "Banco de Portugal aperta regras do crédito a partir de agosto", 02/07/2026:
  https://eco.sapo.pt/2026/07/02/banco-de-portugal-aperta-regras-do-credito-a-partir-de-agosto/
- [V] ECO — "Banco de Portugal reduz para 45% taxa de esforço máxima no crédito à habitação",
  20/05/2026: https://eco.sapo.pt/2026/05/20/banco-de-portugal-reduz-para-45-taxa-de-esforco-maxima-no-credito-a-habitacao/
- [V] RTP — "Banco de Portugal aperta regras para quem pede crédito à habitação ou ao consumo",
  2026: https://www.rtp.pt/noticias/economia/banco-de-portugal-aperta-regras-para-quem-pede-credito-a-habitacao-ou-ao-consumo_n1750930
- [V] DECO Proteste — "Novas regras do crédito à habitação: o que muda em agosto", 2026:
  https://www.deco.proteste.pt/dinheiro/comprar-vender-casa/noticias/novas-regras-credito-habitacao-muda-agosto
- [V] Governo de Portugal — "Garantia Pública: o que é e como funciona?" (s/d):
  https://portugal.gov.pt/pt/gc24/comunicacao/noticias/garantia-publica-o-que-e-e-como-funciona
- [V] Governo de Portugal — "Garantia pública reforçada em 750 milhões de euros" (2025/2026):
  https://portugal.gov.pt/gc25/comunicacao/noticias/garantia-publica-reforcada-em-750-milhoes-de-euros
- [V] Renascença — "Garantia pública faz disparar empréstimos a 100%", 30/03/2026:
  https://rr.pt/noticia/economia/2026/03/30/habitacao-garantia-publica-faz-disparar-emprestimos-a-100-pagos-ate-a-reforma/465000/
- [V] Correio da Manhã — "Quase 90% dos créditos à habitação com garantia pública financiam 100%
  da compra" (2026): https://www.cmjornal.pt/sociedade/amp/quase-90-dos-creditos-a-habitacao-com-garantia-publica-financiam-100-da-compra
- [V] idealista — "Crédito jovem: 56% da garantia pública foi usada para comprar casa" (2026):
  https://www.idealista.pt/news/node/76808
- [V] Doutor Finanças — "Escalões do IMT sobem 2% em 2026 e jovens ficam isentos até 330.539
  euros" (2026): https://www.doutorfinancas.pt/impostos/escaloes-do-imt-sobem-2-em-2026-e-jovens-ficam-isentos-ate-330-539-euros/
- [V] Montepio — "IMT Jovem: guia para ter isenção até aos 35 anos" (s/d):
  https://www.montepio.org/blog/casa/imt-jovem-guia-para-ter-isencao-ate-aos-35-anos/
- [V] DECO Proteste — "Isenção de IMT: como funciona o benefício para jovens até 35 anos" (s/d):
  https://www.deco.proteste.pt/dinheiro/comprar-vender-casa/noticias/isencao-imt-como-funciona-beneficio-para-jovens-ate-35-anos
- [C] Código do IVA, art. 9.º, n.º 30 (isenção na transmissão de imóveis) — por reverificar;
  códigos tributários em https://info.portaldasfinancas.gov.pt/

### Mercado e compradores em Portugal
- [V] Observador — "Estrangeiros compram menos casas mas o mercado imobiliário teve outro ano
  recorde em 2025", 2026: https://observador.pt/especiais/estrangeiros-compram-menos-casas-mas-o-mercado-imobiliario-teve-outro-ano-recorde-em-2025-precos-subiram-quase-18/
- [V] Observador — "Casas compradas por estrangeiros são quase 50% mais caras", 23/10/2026:
  https://observador.pt/2026/10/23/casas-compradas-por-estrangeiros-em-lisboa-sao-quase-50-mais-caras/
- [V] Dinheiro Vivo — "Preços das casas em Portugal sobem 16,8% em 2025 para 2.076 €/m²", 2026:
  https://dinheirovivo.dn.pt/economia/preos-das-casas-sobem-168-em-2025-para-2076-eurosm2
- [V] INE — *Estatísticas de Preços da Habitação ao Nível Local, 4.º trimestre de 2025*, 2026:
  https://www.ine.pt/ngt_server/attachfileu.jsp?look_parentBoui=789055201&att_display=n&att_download=y
- [V] Forbes Portugal — "Preço das casas subiu 18% no segundo trimestre, mas transações
  diminuíram", 2026: https://www.forbespt.com/?p=197896
- [V] RTP — "Preços da habitação desaceleram entre abril e junho pelo 2.º trimestre consecutivo",
  2026: https://www.rtp.pt/noticias/economia/precos-da-habitacao-desaceleram-entre-abril-e-junho-pelo-2o-trimestre-consecutivo_n1766952
- [V] idealista — "Casas vendidas em Portugal atingem preço histórico após subir 19,8%", 2026:
  https://www.idealista.pt/news/node/76623
- [V] idealista — "Casas novas à venda mais que duplicam em 5 anos, mas procura absorve", 2026:
  https://www.idealista.pt/news/node/74198
- [V] idealista — "Preço das casas em Braga atinge novo máximo em fevereiro de 2026", mar/2026:
  https://www.idealista.pt/news/node/74628
- [V] Braga TV — "Preços das casas em Braga sobem 10,2% num ano", 2026:
  https://bragatv.pt/precos-das-casas-em-braga-sobem-102-num-ano/
- [V] idealista — "Compradores de casas estão mais informados e exigentes", 14/04/2026:
  https://www.idealista.pt/news/imobiliario/habitacao/2026/04/14/74837-falta-de-casas-ha-um-interesse-crescente-em-reconverter-imoveis
- [V] idealista — "Venda de casas e subida de preços atingem recordes em 2025", 23/03/2026:
  https://www.idealista.pt/news/imobiliario/habitacao/2026/03/23/74572-venda-de-casas-e-subida-de-precos-atingem-maximos-historicos-em-2025
- [V] idealista — "É melhor vender uma casa antes de comprar outra ou o contrário?", 10/04/2026:
  https://www.idealista.pt/news/imobiliario/habitacao/2026/04/10/74677-e-melhor-vender-uma-casa-antes-de-comprar-outra-ou-o-contrario
- [V] Dinheiro Vivo — "Volume de transações da Remax sobe 21,7% em 2025 para 8,7 mil milhões de
  euros", 2026: https://dinheirovivo.dn.pt/empresas/volume-de-transaes-da-remax-sobe-217-em-2025-para-87-mil-milhes-de-euros
- [V] ECO — "Faturação das 5 maiores imobiliárias aumenta 24,4%…" (s/d):
  https://eco.sapo.pt/especiais/faturacao-das-5-maiores-imobiliarias-aumenta-244-a-boleia-de-um-exercito-de-quase-25-mil-vendedores-de-casas/

### Fontes internas (código lido)
- `/home/user/website/supabase-schema-completo.sql` — `contactos_imoveis`, `lead_atividades`,
  `unidades`, `atualizacoes_obra` (com `fase`).
- `/home/user/website/supabase-oportunidades.sql` — `oportunidades`.
- `/home/user/website/src/types/database.ts` — estados da fração (`em_breve` incluído).
- `/home/user/website/BRIEFING.md` — estado do CRM, pendentes (Resend, sincronização das frações,
  nutrição).
- `/home/user/carrinhoGES/CLAUDE.md` — base Supabase partilhada; marcos da obra; `regime_iva` e
  `custoComRegime`; recebimentos e Tesouraria.
- `/home/user/carrinhoGES/supabase/migrations/20260828100000_renomear_fase.sql` — o
  `renomear_fase` atualiza `atualizacoes_obra.fase`.
