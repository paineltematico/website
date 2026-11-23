# 08 — Síntese: o que a pesquisa diz e o que decidir

> 23/11/2026. Junta os capítulos 00–07 desta pasta. Cada número abaixo tem fonte no capítulo
> indicado entre parênteses. Os números de empresas sem auditoria aparecem como «diz a empresa».
>
> **Limites desta pesquisa.**
> - A rede da sessão bloqueava a leitura direta da maioria dos sites (imprensa, portais, Reddit,
>   Diário da República), por isso muito do que se afirma vem dos excertos do motor de pesquisa.
>   Os capítulos marcam cada caso.
> - A quota de pesquisas web esgotou-se a meio de vários capítulos. Os pontos que pesam nas
>   decisões estão a ser verificados no capítulo 10.

## 1. As 10 descobertas que mais contam

1. **O Painel Temático tem o que as redes não têm: produto próprio e obra própria.**
   - As cinco maiores redes faturaram +24,4% em 2025, mas por efeito do preço. As angariações
     caíram (ERA −5,4%, RE/MAX −0,4%) (cap. 01).
   - Quem tem casas para vender tem o que elas procuram.
   - Nenhuma rede consegue mostrar ao comprador a obra, os marcos e os prazos em primeira mão
     (cap. 01, 04, 07).

2. **O concorrente mais direto está em Braga.**
   - A ZOME tem sede em Braga e faturou 53,1 M€ em 2025, com 11 320 transações (cap. 01).
   - Tem pesquisa com ChatGPT no site desde 2023 e avaliação por IA (Zome Go!) (cap. 01).
   - Por isso, «temos IA» e «avalie a sua casa» já não diferenciam o Painel Temático (cap. 04).

3. **A obra nova é um negócio grande dentro das redes, e a Área Metropolitana do Porto lidera.**
   - O departamento de obra nova da ERA ganhou 20 M€ em comissões (+51%) (cap. 01).
   - As redes são um canal de venda possível, desde que o cliente fique registado no nosso CRM.

4. **O comprador é português, jovem e depende de crédito.**
   - 72–78% das compras são de portugueses, e 58% do crédito à habitação de 2025 foi para pessoas
     entre 18 e 35 anos (cap. 05).
   - Em 2026 mudaram três regras que mexem no preço que o comprador consegue pagar (cap. 05,
     a confirmar no cap. 10):
     - taxa de esforço máxima de 45% desde 1/8/2026;
     - garantia pública para jovens em imóveis até 450 000 €;
     - IMT Jovem com isenção total até 330 539 €.
   - Estes limiares devem ser tidos em conta ao fixar a tabela de preços.

5. **Responder depressa é o que mais pesa, e quase ninguém o faz.**
   - Contactar na primeira hora torna a qualificação cerca de 7 vezes mais provável (HBR 2011)
     (cap. 05).
   - Num teste de 2024, mais de 1 em cada 3 pedidos online ficou sem resposta (DelPrete) (cap. 05).
   - 47% dos compradores ficaram com o primeiro agente que lhes respondeu (Zillow 2025) (cap. 05).
   - **No nosso site, dois dos quatro formulários não criam lead, e nenhum lead fica atribuído a
     um comercial** (cap. 00).

6. **Os CRMs à venda em Portugal são feitos para mediadoras, não para promotores.**
   - eGO, HCPro, Inmovilla e Casafari CRM não gerem stock de frações com reserva a prazo, plano de
     pagamentos nem CPCV (cap. 02).
   - Os CRMs para promotores que existem lá fora seguem todos o mesmo ciclo da fração:
     **disponível → opção com prazo → reservada → CPCV → vendida → entregue** (cap. 02, 05).
   - Daqui sai a recomendação de **construir** o CRM em vez de o comprar.

7. **Os agentes de IA que funcionam fazem o primeiro minuto da conversa, não a venda.**
   - Os casos mais parecidos com o nosso são de promotoras: Metrovacesa, MRV e Tecnisa (cap. 03).
   - Os três seguem o mesmo padrão: respondem 24 horas por dia, acompanham o cliente durante
     semanas e passam-no a um comercial já qualificado.
   - Os produtos falham sobretudo na passagem a uma pessoa (cap. 03).
   - O custo do modelo de linguagem é baixo: cerca de US$ 0,10–0,15 por conversa de 10 turnos
     (cap. 03).

8. **Os portais e os dados de mercado já entram nos assistentes de IA.**
   - O idealista tem uma app oficial dentro do Claude e do ChatGPT, em português (cap. 07).
   - A Casafari publicou servidores MCP oficiais com comparáveis e dados por zona (cap. 02, 07).
   - O comprador já procura casa dentro destes assistentes, e já há uma forma licenciada de pôr
     dados de mercado no nosso agente.

9. **A lei obriga a três coisas antes de crescer** (cap. 06):
   - **Mediação:** angariar imóveis de terceiros e anunciar arrendamentos é mediação e exige
     licença AMI ativa. O AMI que aparece no rodapé (25031) é o valor por defeito no código e
     falta confirmar de quem é.
   - **Branqueamento de capitais:** o promotor tem obrigações mesmo sem mediar (KYC antes do CPCV,
     comunicação ao IMPIC).
   - **Consentimentos:** é preciso consentimento por canal para marketing e política de
     privacidade e de cookies. Desde 02/08/2026, o agente de IA tem de dizer que é uma IA.
   - **Hoje o site não tem política de privacidade nem de cookies, e o CRM não regista
     consentimentos.**

10. **Há problemas a resolver antes de qualquer campanha** (cap. 00, 04):
    - **Acesso ao admin:** o painel deixa entrar com um cookie forjado, e o detalhe de um lead
      mostra dados pessoais sem verificar a sessão.
    - **Conteúdo de teste público:** uma moradia em Cascais de 1,25 M€ em destaque e sem fotos,
      um artigo de blog chamado «teste» e parceiros fictícios.
    - **Anúncios principais com erros:** o de Merelim tem a morada de Esporões.
    - **Cron:** o follow-up das avaliações nunca corre em produção.

## 1-A. O que a verificação (cap. 10) confirmou ou corrigiu

| Ponto | Resultado | Consequência |
|---|---|---|
| **Licença AMI 25031** | **Não confirmada.** Nenhuma fonte pública a liga a uma entidade. O registo comercial dá à Painel Temático, Lda. (NIPC 510053807) o CAE 68100, compra e venda, e não o 68311 da mediação | Confirmar no IMPIC **antes** de continuar a angariar imóveis de terceiros ou a anunciar arrendamentos |
| **Comunicação ao IMPIC** | Confirmada: é **trimestral**, e os promotores que vendem imóveis próprios **estão abrangidos** | O CRM tem de guardar o KYC e exportar as transações (fase 1.6 da proposta) |
| **AI Act art. 50.º, n.º 1** («sou uma IA») | Aplica-se desde 02/08/2026, **sem adiamento**. O Omnibus (Reg. (UE) 2026/1744) só deu transição ao n.º 2 | O aviso tem de existir no agente desde o primeiro dia |
| **CNPD** | Diretriz/2022/1 confirmada: quem não é cliente tem de dar consentimento prévio e expresso para marketing. **Não há** orientação sobre chatbots nem sobre cookies | Seguir as orientações do CEPD para os cookies e para a IA |
| **WhatsApp Cloud API** | Cobra-se por mensagem. **Desde 01/10/2026 as mensagens de serviço na janela de 24 h também são pagas**, ao preço de utility (Portugal está em «Rest of Western Europe», ≈ 0,014 € por utility e ≈ 0,049 € por marketing, segundo terceiros) | O custo é baixo mas não é zero. Conta-se no orçamento da fase 4 |
| **Meta e chatbots de IA** | A proibição atinge só a IA de uso geral. **Um bot da empresa sobre o próprio negócio é permitido**, e no EEE a proibição está suspensa por medidas cautelares | O agente do Painel Temático pode ir para o WhatsApp |
| **Crédito** | Taxa de esforço de 45% desde 01/08/2026; garantia pública para jovens até 31/12/2026 com imóvel até 450 000 € (prorrogação não confirmada); IMT Jovem com isenção total até 330 539 € | Ter estes limiares em conta na tabela de preços |
| **Garantia de obra nova** (DL 84/2021) | 10 anos para defeitos estruturais e 5 anos para o resto | Usar como argumento de venda; ninguém o destaca (cap. 01) |

## 1-B. Promotores de referência (cap. 01 §12–13, segunda volta)

- **No Porto, a obra nova vende-se antes de existir.** Entre 40% e 60% vende-se em planta ou no
  início da obra (Dinheiro Vivo), em lançamentos com data. Exemplos:
  - Pleno (VIZTA): 46% vendido ou reservado no lançamento;
  - PURE (Fercopor): 30 de 34 casas em duas semanas;
  - Terrazza Park: 26% em três dias de feira.
- **Os promotores de referência não vendem sozinhos.**
  - Bonjardim (Avenue): JLL, Predibisa e LUXIMOS, em co-exclusivo; 80% vendido em 7 meses, com
    stand no local.
  - Mereces 718 (DST, Barcelos): vendido pela RE/MAX e pela Predimed.
- **O espaço digital está, ao que parece, por ocupar.** A imprensa não mostra nenhum promotor com
  mapa de frações em tempo real, reserva online, diário de obra ou área de cliente. Os sites deles
  não abriram nesta sessão, por isso isto falta confirmar.
- **O preço de entrada tornou-se um produto.** A marca CORE da VIZTA vende a casa «essencial» e
  põe os extras com preço à parte.
- **Braga custa cerca de 60% do Porto em €/m²** (2 173 €/m² pedidos em Braga contra 3 700 €/m²
  vendidos no Porto, de fontes diferentes). A DST é o promotor local com escala.
- **Há um prémio regional ao alcance:** o Prémio Nacional do Imobiliário tem a categoria «Habitação
  Norte». Ganhou o Bonjardim em 2025 e o Greenstone em 2026.

## 2. As 5 decisões que recomendo

| # | Decisão | Porquê | Custo de não decidir |
|---|---|---|---|
| 1 | **Duas semanas de «casa arrumada» antes de qualquer campanha:** segurança do admin, licença AMI, privacidade, cookies e consentimentos, limpeza do conteúdo de teste, crons | São riscos legais e de credibilidade que se resolvem depressa (cap. 00, 04, 06) | Dados pessoais expostos; coimas; anúncios pagos a trazer clientes para conteúdo de teste |
| 2 | **Construir o CRM de promotor, sem comprar um CRM de mediação.** O núcleo é o ciclo da fração, a ligação lead ↔ fração, a reserva com prazo, o CPCV e o plano de pagamentos | Nenhum CRM português o faz e o nosso já tem metade (cap. 02, 05) | Dois sistemas e stock sem dono |
| 3 | **Medir e garantir a resposta rápida a cada lead.** Todos os formulários criam lead, há atribuição e aviso imediato ao comercial, e grava-se `first_response_at` | É a alavanca mais barata e mais bem documentada (cap. 05) | Perder clientes para a ZOME e para quem responde primeiro |
| 4 | **A obra à vista como marca:** diário de obra quinzenal, relatório de obra para quem reservou, mapa de frações em tempo real. Os dados vêm do CARRINHO através de uma vista sem custos | Nenhuma rede consegue fazer isto (cap. 01, 04, 07) | Competir só no preço e na fotografia |
| 5 | **Introduzir a IA por esta ordem:** primeiro o copiloto da equipa, depois o assistente na página da fração e por fim o WhatsApp Cloud API oficial. As regras de segurança ficam no código | Menor risco primeiro; o funil real é a placa → a chamada → o link por WhatsApp (cap. 03, skill `vendas`) | Um bot que inventa preços, ou nenhum agente |

## 3. O que não fazer

- **Não comprar** um CRM de mediação (eGO, Inmovilla, etc.) para gerir obra nova (cap. 02).
- **Não usar MCPs de WhatsApp pessoal** (por exemplo `lharries/whatsapp-mcp`), nem bibliotecas
  de ligação por QR (WAHA, Baileys): há risco de banimento do número e de *tool poisoning*
  (cap. 07).
- **Não fazer scraping** do idealista nem do Imovirtual. Para dados de mercado, usar a Casafari
  (licenciada) e o INE (cap. 02, 07).
- **Não ligar o GA4 nem o Meta Pixel** antes de haver gestão de consentimento de cookies (cap. 06).
- **Não pôr à frente uma «avaliação online» genérica.** Para um promotor, as portas de entrada são
  «tem um terreno?» e «retoma da sua casa» (cap. 01, 04).
- **Não deixar o agente responder sobre crédito**: é uma atividade regulada (cap. 03, 06).

## 4. Onde está cada coisa

| Precisa de… | Está em |
|---|---|
| O que o site e o CRM fazem hoje, ficheiro a ficheiro | `00-estado-atual.md` |
| Redes, promotores, números do mercado | `01-concorrencia-portugal.md` |
| CRMs, portais e feeds, dados e AVM, tabela de funcionalidades | `02-software-crm-portais-dados.md` |
| Arquitetura do agente, 15 casos de uso, faseamento, repositórios GitHub | `03-agentes-ia-imobiliario.md` |
| Auditoria do site (25 melhorias), galeria de 21 exemplos, biblioteca de copy PT-PT | `04-design-copy-conteudo.md` |
| Pipeline e estados (tabelas C.1–C.4), KPIs com fórmula, venda em planta | `05-gestao-clientes-produto.md` |
| Checklist legal de 44 itens com prioridade | `06-legal-compliance.md` §8 |
| 15 skills propostas e tabela de MCPs | `07-eventos-comunidade-skills-mcp.md` §4–5 |
| Proposta de projeto | `09-proposta-projeto.md` |
| Verificação dos pontos que pesam nas decisões | `10-verificacoes.md` |
