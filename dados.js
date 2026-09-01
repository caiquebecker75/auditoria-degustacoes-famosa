/* Registro de ocorrências — Auditoria Degustações Agrícola Famosa × BeMore
   Fonte primária: export do grupo de WhatsApp "GESTÃO DEGUSTAÇÕES AGRÍCOLA FAMOSA & BEMORE"
   (25/06/2026 a 01/09/2026, 1.150 mensagens) + relatórios .xlsx da BeMore + PDFs do projeto.
   Cada item traz citação literal com data/hora, exatamente como consta no export. */

const OCORRENCIAS = [
  {n:1, data:"2026-07-21", loja:"Treinamento (agência BeMore)", tipo:"Sistema", grav:"Alta", resp:"BeMore",
   fato:"Degustadoras não conseguiram instalar o aplicativo no dia do treinamento presencial, apesar do módulo “Operação — Treinamento de Sistema” previsto no cronograma das 14h30 às 15h.",
   cit:"Como ontem não deu certo delas baixarem o sistema na hora, hoje vocês entram em contato com elas e já resolvem?", quem:"Vanessa Morelli (75LAB)", hora:"22/07 07:57"},

  {n:2, data:"2026-07-22", loja:"Todos os PDVs", tipo:"Sistema", grav:"Alta", resp:"BeMore",
   fato:"No 1º dia de operação o sistema não refletia roteiro, nomes corretos das promotoras nem a pesquisa de campo.",
   cit:"Entrei no sistema e não está espelhado as informações abaixo: - Roteiro das promotoras - Nomes das promotoras corretas", quem:"Vanessa Morelli (75LAB)", hora:"22/07 07:57"},

  {n:3, data:"2026-07-22", loja:"Todos os PDVs", tipo:"Uniforme/EPI", grav:"Média", resp:"75LAB / BeMore",
   fato:"Aventais entregues fora do padrão da marca no 1º dia de operação.",
   cit:"precisamos trocar os aventais das degustadoras, o que foi entregue ontem foi o incorreto. Vocês conseguem trocar hoje por favor?", quem:"Vanessa Morelli (75LAB)", hora:"22/07 10:55"},

  {n:4, data:"2026-07-22", loja:"Extra Ricardo Jafet", tipo:"Falta", grav:"Crítica", resp:"BeMore",
   fato:"Degustadora não compareceu. A 75LAB só tomou conhecimento às 14h50 — e pelo cliente, que foi à loja e não encontrou ninguém. Ausência de 8h sem qualquer comunicação.",
   cit:"O cliente me ligou, foi na loja e disse que a degustadora não apareceu e eu não tinha a informação", quem:"Vanessa Morelli (75LAB)", hora:"22/07 14:53"},

  {n:5, data:"2026-07-22", loja:"Extra Ricardo Jafet", tipo:"Comunicação", grav:"Crítica", resp:"BeMore",
   fato:"A justificativa apresentada pela BeMore (acidente de trânsito + degustadora “incomunicável”) é contraditada pelo próprio registro do grupo: a mesma degustadora enviou mensagem às 11h.",
   cit:"Micael, tem algo estranho a degustadora Raquel que é a da Ricardo Jafet as 11 da manhã mandou mensagem no grupo normalmente", quem:"Vanessa Morelli (75LAB)", hora:"22/07 15:30"},

  {n:6, data:"2026-07-22", loja:"Cliente — Agrícola Famosa", tipo:"Comunicação", grav:"Crítica", resp:"BeMore",
   fato:"O cliente formaliza exigência de reporte de ausências até as 10h. Exigência descumprida de forma recorrente nas semanas seguintes.",
   cit:"Amanhã me passe as ocorrências até às 10h caso alguém falte. Ausência de comunicação é terrível", quem:"Cliente Agrícola Famosa (reproduzido por Vanessa)", hora:"22/07 15:41"},

  {n:7, data:"2026-07-22", loja:"CRF Imigrantes · Vila das Frutas · Atacadão V. Maria · Sonda Água Branca", tipo:"Falta", grav:"Crítica", resp:"BeMore",
   fato:"Fechamento do 1º dia: 3 degustadoras sem check-in algum e 1 com entrada às 10h41 (jornada inicia 09h). Somadas ao posto vazio do Extra, as 5 posições do piloto ficaram comprometidas no dia de estreia.",
   cit:"Daiane - CRF IMIGRANTES - Sem check in / Hilda - Vila das Frutas - Sem check in / Marilu - Sonda Agua Branca - Chegou na lojas as 10:41? / Pamela - Atacadão Vila Maria - Sem Check in", quem:"Vanessa Morelli (75LAB)", hora:"22/07 17:17"},

  {n:8, data:"2026-07-23", loja:"Todos os PDVs", tipo:"Atraso", grav:"Alta", resp:"BeMore",
   fato:"Status Day do dia: 2 degustadoras sem check-in e 3 com entrada às 09h15, 09h30 e 09h59 — nenhuma no horário contratual de 09h.",
   cit:"9:59 não é atraso? 9:30?", quem:"Vanessa Morelli (75LAB)", hora:"23/07 10:52", prova:"status-day-23-07.jpg"},

  {n:9, data:"2026-07-23", loja:"Extra Ricardo Jafet", tipo:"Falta", grav:"Crítica", resp:"BeMore",
   fato:"Posto encontrado vazio em visita presencial da 75LAB. A BeMore havia reportado normalidade minutos antes.",
   cit:"Estamos na Ricardo jafet / Cadê a degustadora? / Inclusive estamos na loja e a degustadora não está", quem:"Vanessa Morelli (75LAB)", hora:"23/07 11:40", prova:"pdv-sem-degustadora-23-07.jpg"},

  {n:10, data:"2026-07-23", loja:"Extra Ricardo Jafet", tipo:"Conduta", grav:"Alta", resp:"BeMore",
   fato:"Degustadora obteve o contato do cliente com o encarregado da loja e passou a acioná-lo diretamente, furando o canal de gestão e expondo a falha de material ao contratante final.",
   cit:"A degustadora Raquel está mandando mensagem direto para o cliente falando que não tem copinho", quem:"Vanessa Morelli (75LAB)", hora:"23/07 11:41"},

  {n:11, data:"2026-07-23", loja:"Extra Ricardo Jafet", tipo:"Uniforme/EPI", grav:"Média", resp:"BeMore",
   fato:"Degustadora em operação com avental fora do padrão, 2º dia consecutivo.",
   cit:"Extra Ricardo Jafet avental errado", quem:"Vanessa Morelli (75LAB)", hora:"23/07 11:52"},

  {n:12, data:"2026-07-23", loja:"Vila das Frutas (Cerro Corá)", tipo:"Falta", grav:"Crítica", resp:"BeMore",
   fato:"O gerente da loja confirmou à 75LAB que não houve degustadora nem em 22/07 nem em 23/07 — dois dias inteiros de posto descoberto que não constam do relatório oficial da BeMore.",
   cit:"Fui no vila das frutas não tinha ninguém e o gerente disse que não foi nem ontem e nem hoje", quem:"Vanessa Morelli (75LAB)", hora:"23/07 12:48"},

  {n:13, data:"2026-07-23", loja:"Todos os PDVs", tipo:"Treinamento", grav:"Alta", resp:"BeMore",
   fato:"Degustadoras declararam não saber operar o aplicativo, dois dias após o treinamento presencial que incluía módulo específico de sistema.",
   cit:"Exato! Todas me falando que não sabiam mexer no app", quem:"Vanessa Morelli (75LAB)", hora:"23/07 12:49"},

  {n:14, data:"2026-07-23", loja:"Governança do projeto", tipo:"Comunicação", grav:"Alta", resp:"BeMore",
   fato:"Primeira advertência formal de governança: a BeMore opera de forma reativa às constatações de campo da 75LAB, em vez de antecipá-las.",
   cit:"nosso tempo de reação tem que ser mais ágil... é importante termos visibilidade de que a Bemore está à frente das demandas e não sendo reativa as visões de campo", quem:"Cláudio Silveira (Promotores)", hora:"23/07 12:57"},

  {n:15, data:"2026-07-24", loja:"Todos os PDVs", tipo:"Sistema", grav:"Alta", resp:"BeMore",
   fato:"Às 10h13, apenas 2 das 5 degustadoras haviam registrado check-in no sistema.",
   cit:"olhando no sistema somente 2 meninas que deram check in / pode verificar por favor", quem:"Vanessa Morelli (75LAB)", hora:"24/07 10:13", prova:"status-day-24-07.jpg"},

  {n:16, data:"2026-07-24", loja:"Extra Ricardo Jafet", tipo:"Material", grav:"Crítica", resp:"BeMore",
   fato:"Degustadora em loja sem nenhum material: a profissional do dia anterior abandonou bandeja, avental e kit na área de vendas e ninguém localizava. O cliente estava na loja no momento.",
   cit:"Degustadora está na loja sem material pois a menina que foi ontem largou na área de loja e ninguém encontra — Bandeja, Avental, E tudo", quem:"Vanessa Morelli (75LAB)", hora:"24/07 13:18"},

  {n:17, data:"2026-07-24", loja:"Extra Ricardo Jafet", tipo:"Turnover", grav:"Alta", resp:"BeMore",
   fato:"1ª desistência do projeto. A BeMore admite lacuna de cobertura na troca, informada à 75LAB apenas na metade do dia.",
   cit:"Esse caso específico foi uma desistência da degustadora, e a vaga foi reposta de imediato... Houve apenas essa lacuna entre essa troca", quem:"Cauã Batista (BeMore)", hora:"24/07 14:23"},

  {n:18, data:"2026-07-24", loja:"PDV em operação", tipo:"Uniforme/EPI", grav:"Alta", resp:"BeMore",
   fato:"Degustadora atuando sem a touca branca obrigatória do padrão sanitário. A reposição foi resolvida orientando a colaboradora a comprar em farmácia — sem os 3 orçamentos exigidos pela Cláusula Quarta “b” do contrato.",
   cit:"Pessoal cadê a touca branca da degustadora / Este é o padrão / Cadê o padrão?", quem:"Vanessa Morelli (75LAB)", hora:"24/07 15:58", prova:"uniforme-fora-padrao-24-07.jpg"},

  {n:19, data:"2026-07-25", loja:"Sonda Vila Guilherme", tipo:"Comunicação", grav:"Alta", resp:"BeMore",
   fato:"O cliente questiona se houve degustadora na véspera e a 75LAB não tem a informação — ausência de base diária de presença.",
   cit:"O cliente esta me perguntando se ontem a degustadora do Vila Guilherme esteve la", quem:"Vanessa Morelli (75LAB)", hora:"25/07 09:43"},

  {n:20, data:"2026-07-25", loja:"Todos os PDVs", tipo:"Relatório", grav:"Média", resp:"BeMore",
   fato:"Book fotográfico do dia entregue incompleto.",
   cit:"Mas cadê a foto dela? faltou a foto de uma das degustadoras", quem:"Vanessa Morelli (75LAB)", hora:"25/07 09:41"},

  {n:21, data:"2026-07-27", loja:"Relatório semanal", tipo:"Relatório", grav:"Média", resp:"BeMore",
   fato:"O relatório da 1ª semana foi entregue com um dia inteiro ausente da base; foi necessário devolvê-lo para correção.",
   cit:"Faltou dia 25", quem:"Vanessa Morelli (75LAB)", hora:"27/07 18:05"},

  {n:22, data:"2026-07-28", loja:"Sonda Vila Guilherme", tipo:"Uniforme/EPI", grav:"Média", resp:"BeMore",
   fato:"Degustadora em operação com uniforme incompleto, uma semana após o início.",
   cit:"Sonda - Vila Guilherme está com o uniforme incompleto, por favor verificar", quem:"Diego Monteiro (75LAB)", hora:"28/07 15:24"},

  {n:23, data:"2026-07-28", loja:"Sonda", tipo:"Falta", grav:"Crítica", resp:"BeMore",
   fato:"O próprio cliente permaneceu 1 hora na loja sem localizar a degustadora; a loja chegou a chamá-la no alto-falante. Reporte da BeMore só no dia seguinte, com justificativa de almoço fora de escala e celular descarregado.",
   cit:"consegue checar com a pessoa que está no sonda pra degustação? Fiquei 1h aqui no mercado e ngm sabia dela, quando fui embora estavam chamando ela no auto falante", quem:"Cliente Agrícola Famosa", hora:"28/07 17:31", prova:"cliente-reclamacao-28-07.jpg"},

  {n:24, data:"2026-07-28", loja:"Atacadão V. Maria / Sonda V. Guilherme", tipo:"Turnover", grav:"Alta", resp:"BeMore",
   fato:"2ª desistência do projeto em 5 dias úteis.",
   cit:"Pamela desistiu? — Sim! no lugar da Pamela está a Jeniffer", quem:"Vanessa Morelli (75LAB) / Cauã Batista (BeMore)", hora:"28/07 16:18"},

  {n:25, data:"2026-07-29", loja:"Sonda", tipo:"Comunicação", grav:"Alta", resp:"BeMore",
   fato:"A explicação para o posto vazio flagrado pelo cliente na véspera chegou só na manhã seguinte — 15 horas depois do fato.",
   cit:"Ela aguardava o recebimento de um material no período da tarde, o que acabou atrasando o horário de sua refeição... Além disso, o dispositivo dela descarregou", quem:"Cauã Batista (BeMore)", hora:"29/07 08:53"},

  {n:26, data:"2026-07-29", loja:"Todos os PDVs", tipo:"Relatório", grav:"Média", resp:"BeMore",
   fato:"Book fotográfico do dia não entregue no prazo pactuado, com o cliente cobrando a 75LAB.",
   cit:"preciso urgente das fotos para enviar agora ate as 11 / o cliente esta me cobrando muito", quem:"Vanessa Morelli (75LAB)", hora:"29/07 10:13", prova:"status-day-29-07.jpg"},

  {n:27, data:"2026-07-29", loja:"Carrefour Imigrantes", tipo:"Turnover", grav:"Alta", resp:"BeMore",
   fato:"3ª desistência em 6 dias úteis — motivo declarado: insatisfação com o projeto.",
   cit:"a colaboradora Daiane manifestou o desejo de desligamento por não estar contente com o projeto", quem:"Cauã Batista (BeMore)", hora:"29/07 17:42"},

  {n:28, data:"2026-07-29", loja:"Todos os PDVs", tipo:"Material", grav:"Média", resp:"BeMore / 75LAB",
   fato:"Estoque de palitos e copos esgotado em campo por dimensionamento incorreto da distribuição.",
   cit:"A remessa enviada ontem não foi suficiente; distribuímos para as colaboradoras, mas o estoque já se esgotou", quem:"Cauã Batista (BeMore)", hora:"29/07 11:17"},

  {n:29, data:"2026-07-30", loja:"Sonda Água Branca", tipo:"Abandono de posto", grav:"Alta", resp:"BeMore",
   fato:"Degustadora deixou a loja no meio do expediente. A 75LAB precisou perguntar duas vezes, sob urgência, para obter a informação.",
   cit:"promotora do água Branca não foi nem Hj e nem ontem? / Preciso de uma resposta urgente pessoal", quem:"Vanessa Morelli (75LAB)", hora:"30/07 15:29"},

  {n:30, data:"2026-07-31", loja:"Sonda Vila Guilherme", tipo:"Abandono de posto", grav:"Média", resp:"BeMore",
   fato:"Saída antecipada da loja sem cumprimento da escala de almoço definida.",
   cit:"a promotora Jeniffer está se dirigindo para casa. Ela não retirou o horário de almoço", quem:"Cauã Batista (BeMore)", hora:"31/07 17:13"},

  {n:31, data:"2026-07-31", loja:"Todos os PDVs", tipo:"Relatório", grav:"Média", resp:"BeMore",
   fato:"Comprovação fotográfica diária cumprida por apenas 3 das 5 degustadoras.",
   cit:"Somente 3 mandaram fotos", quem:"Vanessa Morelli (75LAB)", hora:"31/07 12:02"},

  {n:32, data:"2026-08-01", loja:"Sonda Vila Guilherme", tipo:"Falta", grav:"Crítica", resp:"BeMore",
   fato:"Posto descoberto a manhã inteira em dia de visita presencial. Três tentativas de cobertura falharam em sequência: a titular não foi, a 1ª substituta não conseguiu ir e a 2ª desistiu de última hora. Cobertura só a partir das 13h20.",
   cit:"Ainda não Vanessa, a degustadora que iria desistiu de última hora, estou prospectando uma nova degustadora", quem:"Cauã Batista (BeMore)", hora:"01/08 11:04", prova:"pdv-sem-degustadora-01-08-vila-guilherme.jpg"},

  {n:33, data:"2026-08-01", loja:"Vila das Frutas (Cerro Corá)", tipo:"Atraso", grav:"Alta", resp:"BeMore",
   fato:"Posto vazio às 10h29 durante rota de auditoria da 75LAB com o supervisor do cliente. Chegada da degustadora registrada às 11h25 — 2h25 após o horário contratual.",
   cit:"A degustadora não está no vila das frutas cero cora", quem:"Vanessa Morelli (75LAB)", hora:"01/08 10:29", prova:"pdv-sem-degustadora-01-08-cerro-cora.jpg"},

  {n:34, data:"2026-08-01", loja:"Carrefour Imigrantes", tipo:"Falta", grav:"Alta", resp:"BeMore",
   fato:"Terceiro PDV encontrado sem ninguém na mesma rota. Quando localizada, a degustadora estava sem touca — a própria 75LAB precisou pegar uma emprestada com a loja.",
   cit:"Não tem ninguém aqui no imigrantes / Carrefour imigrantes ela está sem a touca / Eu peguei uma para ela da loja", quem:"Vanessa Morelli (75LAB)", hora:"01/08 14:40"},

  {n:35, data:"2026-08-01", loja:"Governança do projeto", tipo:"Comunicação", grav:"Crítica", resp:"BeMore",
   fato:"Escalada formal da diretoria da 75LAB: a operação só produz informação quando fiscalizada presencialmente, e o cliente já questiona a entrega da agência.",
   cit:"Todos os dias estamos com problemas desde quando começamos o piloto. Se não tem a Vanessa para ficar fiscalizando (o que eu particularmente odeio isso) não teríamos a respostas de vocês. O cliente está me colocando e colocando a 75 em check de todo o trabalho que estamos fazendo por conta das degustadoras", quem:"Caique Becker (75LAB)", hora:"01/08 11:16"},

  {n:36, data:"2026-08-04", loja:"Todos os PDVs", tipo:"Atraso", grav:"Alta", resp:"BeMore",
   fato:"Status Day com 5 de 5 check-ins após o horário (09h21 a 09h50) e todos classificados como “Em loja” sem justificativa. O cabeçalho do relatório traz 30/07 enquanto as linhas trazem 04/08 — inconsistência do próprio instrumento de controle.",
   cit:"Ressalto que o atraso ocorreu devido à paralisação das linhas de metrô", quem:"Cauã Batista (BeMore)", hora:"04/08 10:58", prova:"status-day-04-08.jpg"},

  {n:37, data:"2026-08-04", loja:"Sonda Água Branca", tipo:"Abandono de posto", grav:"Alta", resp:"BeMore",
   fato:"Saída da loja sem comunicação, com reincidência relatada pelo próprio cliente — inclusive um episódio anterior em que a degustadora saiu e não retornou.",
   cit:"a Famosa me ligou aqui, informando que já não e a primeira vez que ela sai da loja e eles falam que “não avisa”, semana passada que saiu e não voltou, que eles foram verificar e ela não estava no ponto", quem:"Vanessa Morelli (75LAB)", hora:"04/08 14:52"},

  {n:38, data:"2026-08-05", loja:"Extra Ricardo Jafet", tipo:"Material", grav:"Média", resp:"BeMore",
   fato:"Degustadora em loja sem copinho e sem palito — impossibilitada de executar a degustação.",
   cit:"A demonstradora do Extra está sem copinho e palito. Tem previsão de entrega ainda hoje?", quem:"Vanessa Morelli (75LAB)", hora:"05/08 12:06"},

  {n:39, data:"2026-08-06", loja:"Vila das Frutas (Cerro Corá)", tipo:"Atraso", grav:"Crítica", resp:"BeMore",
   fato:"No dia da visita dos sócios/diretores da Agrícola Famosa — comunicado com 12 horas de antecedência e reforçado por todas as partes — o PDV de abertura da rota estava vazio às 09h46. Chegada confirmada às 10h06.",
   cit:"eles estao la no Vila das frutas cero cora / cade a menina? / São quase 10 da manhã. Eu pedi para que hoje pelo menos chegasse no horário. O horário de entrada e as 9 da manhã. Muita falta de comprometimento", quem:"Vanessa Morelli (75LAB)", hora:"06/08 09:46"},

  {n:40, data:"2026-08-06", loja:"Vila das Frutas (Cerro Corá)", tipo:"Concorrência", grav:"Alta", resp:"BeMore / Famosa",
   fato:"Com o posto Famosa sem produto e sem operação, havia degustação da concorrência ativa no mesmo PDV, no dia da visita da diretoria do cliente.",
   cit:"Pois está tendo degustação da concorrência!", quem:"Cauã Batista (BeMore)", hora:"06/08 11:41"},

  {n:41, data:"2026-08-07", loja:"Sonda Água Branca", tipo:"Comunicação", grav:"Média", resp:"BeMore",
   fato:"Aviso de ruptura de estoque comunicado com atraso pela degustadora, impedindo ação preventiva junto à indústria.",
   cit:"ela me informou com atraso que o estoque em loja estava baixo. A orientei para que, nas próximas vezes, me avise com antecedência", quem:"Cauã Batista (BeMore)", hora:"07/08 10:54"},

  {n:42, data:"2026-08-07", loja:"Sonda Vila Guilherme", tipo:"Abandono de posto", grav:"Média", resp:"BeMore",
   fato:"Segunda saída antecipada da mesma degustadora, novamente sem cumprir a escala de almoço.",
   cit:"não tirou o horário de almoço e me solicitou a saída mais cedo", quem:"Cauã Batista (BeMore)", hora:"07/08 16:38"},

  {n:43, data:"2026-08-14", loja:"Sonda Água Branca", tipo:"Falta", grav:"Crítica", resp:"BeMore",
   fato:"No dia da gravação institucional, com equipe de produção e cliente aguardando, a degustadora chegou às 11h — 2 horas atrasada — e comunicou o motivo diretamente ao supervisor do cliente, não à gestão.",
   cit:"Sonda água Branca a promotora mandou mensagem pro supervisor da famosa falando que acordou tarde / Poxa, no dia da gravação todos esperando ela / Chegou 11 da manhã", quem:"Vanessa Morelli (75LAB)", hora:"14/08 11:27"},

  {n:44, data:"2026-08-14", loja:"Sonda Água Branca", tipo:"Relatório", grav:"Alta", resp:"BeMore",
   fato:"A BeMore contestou o relato de campo alegando monitoramento via Involves às 09h, atribuindo a informação a “reporte errôneo” — sem apresentar o extrato do sistema que sustentasse a versão.",
   cit:"observamos que realmente ela estava indo para loja, monitorada via Involves às 09hrs... algo que foi reportado de forma errônea para nós", quem:"Micael Oliveira (BeMore)", hora:"14/08 11:55"},

  {n:45, data:"2026-08-18", loja:"Carrefour Imigrantes", tipo:"Abandono de posto", grav:"Alta", resp:"BeMore",
   fato:"Saída da loja sem comunicação prévia, com reincidência expressa da mesma justificativa e da mesma falha de reporte.",
   cit:"Complicado, já não é a primeira vez que ela sai da loja com a informação de dor de dente e não estavamos sabendo", quem:"Vanessa Morelli (75LAB)", hora:"18/08 13:33"},

  {n:46, data:"2026-08-19", loja:"Sonda Vila Guilherme", tipo:"Cobertura", grav:"Média", resp:"BeMore",
   fato:"Afastamento por emergência de saúde durante o expediente, com posto descoberto no restante do dia.",
   cit:"A promotora Jeniffer me avisou que passou mal em loja e está no Hospital... estou acompanhando a promotora", quem:"Cauã Batista (BeMore)", hora:"19/08 16:41"},

  {n:47, data:"2026-08-21", loja:"Todos os PDVs", tipo:"Pagamento", grav:"Crítica", resp:"BeMore",
   fato:"Degustadoras deixaram de comparecer por falta de pagamento de vale-transporte. Obrigação exclusiva da BeMore como única empregadora (Cláusula Sétima, §1º).",
   cit:"Chegou ao meu conhecimento que algumas meninas não estão em loja devido a falta de pagamento de VT, isso procede?", quem:"Vanessa Morelli (75LAB)", hora:"21/08 10:02"},

  {n:48, data:"2026-08-21", loja:"Todos os PDVs", tipo:"Falta", grav:"Crítica", resp:"BeMore",
   fato:"Segundo relato das próprias degustadoras, apenas 1 das 5 compareceu ao trabalho nesta sexta-feira — 4 postos descobertos em um único dia.",
   cit:"Sexta passada somente uma menina foi ao local de trabalho", quem:"Degustadoras (print encaminhado por Caique Becker)", hora:"28/08 09:08", prova:"pagamento-nao-caiu-28-08.jpg"},

  {n:49, data:"2026-08-22", loja:"CRF Imigrantes / Sonda V. Guilherme", tipo:"Relatório", grav:"Média", resp:"BeMore",
   fato:"Ausência de registro fotográfico de dois PDVs; a comprovação de presença dependeu de cobrança da 75LAB.",
   cit:"Não vimos registro dela no grupo / E nem do sonda vila Guilherme", quem:"Vanessa Morelli (75LAB)", hora:"22/08 14:08"},

  {n:50, data:"2026-08-25", loja:"Extra Ricardo Jafet", tipo:"Falta", grav:"Alta", resp:"BeMore",
   fato:"O encarregado da loja informou que a degustadora não estava no PDV; nenhuma das 5 enviou comprovação fotográfica no dia.",
   cit:"O encarregado do Extra disse que ela não está na loja / e hoje nenhuma mandou foto no grupo também", quem:"Vanessa Morelli (75LAB)", hora:"25/08 13:12"},

  {n:51, data:"2026-08-25", loja:"Governança do projeto", tipo:"Comunicação", grav:"Crítica", resp:"BeMore",
   fato:"Após 5 semanas, a 75LAB precisou instituir uma “senha da semana” a ser exibida nas fotos para atestar que o registro é do dia. Medida antifraude que evidencia a perda de confiabilidade da comprovação de presença fornecida pela BeMore.",
   cit:"A senha da semana é “Famosa” / Todos os dias para elas mandarem fotos e mandar foto tbm com a senha da semana", quem:"Vanessa Morelli (75LAB)", hora:"25/08 13:13"},

  {n:52, data:"2026-08-26", loja:"Todos os PDVs", tipo:"Relatório", grav:"Média", resp:"BeMore",
   fato:"Às 10h30 nenhuma comprovação fotográfica havia sido enviada, um dia após o alinhamento formal do protocolo.",
   cit:"São 10:30 e nenhuma foto", quem:"Vanessa Morelli (75LAB)", hora:"26/08 10:32"},

  {n:53, data:"2026-08-28", loja:"Todos os PDVs", tipo:"Pagamento", grav:"Crítica", resp:"BeMore",
   fato:"Salário das degustadoras não creditado. Segunda ocorrência de inadimplência trabalhista em 8 dias, com as colaboradoras cobrando publicamente nos grupos do projeto.",
   cit:"As degustadoras estão dizendo que o salário não caiu, podem verificar por favor", quem:"Vanessa Morelli (75LAB)", hora:"28/08 08:27", prova:"pagamento-degustadoras-28-08.jpg"},

  {n:54, data:"2026-08-28", loja:"Todos os PDVs", tipo:"Falta", grav:"Crítica", resp:"BeMore",
   fato:"Apenas 1 das 5 degustadoras esteve em loja — 4 postos descobertos, no mesmo dia em que a diretoria do cliente cobrou explicações à 75LAB.",
   cit:"Ontem somente a Marilu esteve", quem:"Vanessa Morelli (75LAB)", hora:"29/08 09:55"},

  {n:55, data:"2026-08-28", loja:"Cliente — Agrícola Famosa", tipo:"Comunicação", grav:"Crítica", resp:"BeMore",
   fato:"Escalada ao nível de diretoria do cliente, envolvendo simultaneamente falta de pagamento das colaboradoras e ausência coletiva em loja.",
   cit:"Acabei de receber a mensagem do diretor da famosa.. Além do pagamento, realmente não teve ninguém na sexta feira?", quem:"Caique Becker (75LAB)", hora:"28/08 09:08"},

  {n:56, data:"2026-08-29", loja:"Sonda Água Branca", tipo:"Abandono de posto", grav:"Alta", resp:"BeMore",
   fato:"O coordenador do cliente reporta padrão semanal de ausências da mesma profissional, sem tratativa efetiva da BeMore desde o primeiro registro em 04/08.",
   cit:"o coordenador da Famosa me relatou que toda semana ela tem um problema e precisa se ausentar", quem:"Vanessa Morelli (75LAB)", hora:"29/08 09:50"},

  {n:57, data:"2026-08-29", loja:"Todos os PDVs", tipo:"Pagamento", grav:"Crítica", resp:"BeMore",
   fato:"Confirmação de que a falha de pagamento se repetiu por duas semanas consecutivas.",
   cit:"Esperamos que próxima semana não ocorra novamente, foi a segunda semana seguida", quem:"Vanessa Morelli (75LAB)", hora:"29/08 09:55"},

  {n:58, data:"2026-09-01", loja:"Atacadão Vila Maria", tipo:"Turnover", grav:"Alta", resp:"BeMore",
   fato:"4ª desistência do projeto. A substituta foi barrada na loja por falta de liberação prévia junto ao encarregado — falha de cadastro/documentação que deveria anteceder a alocação.",
   cit:"a Jeniffer acabou desistindo da ação. A nova degustadora me informou que foi barrada de iniciar o trabalho e está no aguardo do encarregado da loja", quem:"Cauã Batista (BeMore)", hora:"01/09 11:05"},

  {n:59, data:"2026-09-01", loja:"Todos os PDVs", tipo:"Relatório", grav:"Alta", resp:"BeMore",
   fato:"Divergência aberta entre a contagem de comprovações da 75LAB (2 a 3 degustadoras) e a da BeMore (4 degustadoras) no mesmo dia — o instrumento de controle não é conciliável.",
   cit:"Raissa / Bruna / Mary — somente elas mandaram", quem:"Vanessa Morelli (75LAB) × Cauã Batista (BeMore)", hora:"01/09 13:30"},

  {n:60, data:"2026-09-01", loja:"Sonda Água Branca", tipo:"Material", grav:"Baixa", resp:"BeMore / 75LAB",
   fato:"Bandeja de degustação com avaria estrutural (trinca), encontrada em loja no início do expediente.",
   cit:"Marilu me informou que hoje quando chegou em loja ela encontrou a bandeja com algumas avarias", quem:"Cauã Batista (BeMore)", hora:"01/09 14:03", prova:"material-avariado-01-09.jpg"},

  {n:61, data:"2026-07-22", loja:"Relatórios oficiais BeMore", tipo:"Relatório", grav:"Crítica", resp:"BeMore",
   fato:"Nos três relatórios formais entregues pela BeMore, a categoria “Falta / ausência” aparece com quantidade ZERO e a base de atendimentos registra invariavelmente 5 linhas “09:00 às 18:00 — Realizada”, independentemente do que ocorreu em campo. O instrumento não reflete a operação: é um modelo preenchido, não um registro.",
   cit:"Tipo de Intercorrência — Falta / ausência: 0 (0%)", quem:"Relatório BeMore, aba Dashboard (27/07/2026)", hora:"27/07 17:59"}
];

/* Comparativo relatório oficial × campo */
const RELATORIOS = [
  {arq:"RELATÓRIO AGRICOLA FAMOSA..xlsx", entrega:"27/07/2026 17:59", periodo:"21/07 a 25/07",
   declarado:9, faltasDeclaradas:0, campo:14,
   obs:"Devolvido pela 75LAB por omitir o dia 25/07. Registra 0 faltas apesar de 4 ausências documentadas na semana."},
  {arq:"RELATÓRIO AGRICOLA FAMOSA..xlsx (v2)", entrega:"27/07/2026 18:10", periodo:"21/07 a 25/07",
   declarado:10, faltasDeclaradas:0, campo:14,
   obs:"Versão corrigida. Reclassifica a ausência integral de 22/07 no Extra Ricardo Jafet como “Atraso / deslocamento”."},
  {arq:"RELATÓRIO AGRICOLA FAMOSA.xlsx", entrega:"03/08/2026 17:41", periodo:"30/07 a 01/08",
   declarado:5, faltasDeclaradas:0, campo:12,
   obs:"Não registra os três PDVs encontrados vazios na rota presencial de 01/08."},
  {arq:"RELATORIO_AGRICOLA_FAMOSA.xlsx", entrega:"10/08/2026 18:07", periodo:"até 10/08",
   declarado:2, faltasDeclaradas:0, campo:11,
   obs:"Apenas 2 intercorrências para 9 dias de operação. Não registra o atraso crítico de 06/08, na visita da diretoria do cliente."}
];

/* Cláusulas contratuais tensionadas */
const CLAUSULAS = [
  {id:"Cláusula Quinta, “b”", txt:"“dar ciência ao Cliente, imediatamente e por escrito, de qualquer anormalidade na execução dos serviços, que possa vir a comprometer o processo ou a qualidade do objeto do contrato”",
   status:"Descumprida de forma reiterada",
   evid:"Ausência de 22/07 comunicada 7h depois e pelo cliente; posto vazio de 28/07 explicado só no dia seguinte; saídas de loja de 04/08 e 18/08 descobertas pelo cliente. Em 22/07 o próprio cliente formalizou o prazo das 10h para reporte de faltas — não cumprido."},
  {id:"Cláusula Quarta, “b”", txt:"“Respeitar a exigência de apresentar 03 (três) orçamentos à Cliente, nos casos de compra de materiais e contratação de serviços pertinentes à presente contratação, sob pena de não aprovação das despesas por parte da Cliente”",
   status:"Não observada",
   evid:"Compras de copos, palitos e touca (farmácia) realizadas em campo e repassadas para reembolso — R$ 177,43 acumulados nas abas “Valores envio de material” — sem apresentação prévia de 3 orçamentos. Em 05/08 a BeMore solicita aprovação de faturamento no mesmo dia."},
  {id:"Cláusula Sétima, §1º", txt:"“A Bemore será considerada como única gestora e empregadora da equipe utilizada pela Cliente, se responsabilizando pelo pagamento dos salários dos colaboradores e recolhimento de todos os encargos”",
   status:"Descumprida — 2 semanas consecutivas",
   evid:"21/08: vale-transporte não pago, com impacto direto no comparecimento. 28/08: salário não creditado, cobrado publicamente pelas colaboradoras. A inadimplência gerou ausência coletiva em loja e escalada à diretoria do cliente."},
  {id:"Cláusula Sétima, §5º", txt:"“Fica a Bemore obrigada a enviar, quando solicitado, a situação dos pagamentos... Caso não sejam apresentadas à Cliente as devidas comprovações, os pagamentos poderão ser retidos até que os documentos solicitados sejam enviados”",
   status:"Instrumento disponível — ainda não acionado",
   evid:"Alavanca contratual expressa para condicionar o faturamento à comprovação de quitação de salários e VT das 5 degustadoras. Recomenda-se acionamento imediato para o mês 2."},
  {id:"Cláusula Décima Primeira", txt:"“A Bemore obriga-se a reparar os danos diretos que a Cliente ou terceiros eventualmente possam suportar, em razão do seu descumprimento de obrigações contratuais”",
   status:"Base para pleito de glosa",
   evid:"Fundamento contratual para o abatimento dos dias-degustadora não entregues e dos custos de mitigação absorvidos pela 75LAB (rotas presenciais de fiscalização, reposição de materiais em campo, gestão de crise com o cliente)."},
  {id:"Lacuna contratual", txt:"Cláusula de substituição de profissionais e SLA operacional — solicitada formalmente pela 75LAB em 26/06/2026, antes da assinatura.",
   status:"Solicitada e não confirmada",
   evid:"“sugerimos prever que, em caso de ausência, atraso, conduta inadequada ou solicitação justificada da 75LAB, a Bemore deverá providenciar substituição em prazo compatível com a operação, sem custo adicional quando a necessidade decorrer de falha da equipe alocada” — Daniel 75LAB, 26/06 11:27. A minuta em anexo não contém a cláusula. Sem SLA e sem multa, a operação ficou sem mecanismo automático de correção — exatamente o risco antecipado pela 75LAB."}
];
