/* =====================================================================
   Percurso CAMUL — banco de perguntas (só as lições do MOOC:
   a avaliação faz-se no fim de cada lição, não nas outras páginas)
   ---------------------------------------------------------------------
   Como editar:
   - type: "single"   → só UMA opção correta (botões de rádio)
     type: "multiple" → várias corretas («selecione todas»)
   - Cada opção: { text, correct: true/false, feedback: "porquê" }
   - scenario é opcional (aparece antes das opções)
   Origem: Lições 1 e 2 — perguntas e justificações dos storyboards do
   MOOC (MOOC_Group2.xlsx). Lições 3 e 5 — perguntas dos storyboards,
   justificações redigidas a partir dos conteúdos da lição.
   Lição 4 — perguntas redigidas a partir das legendas e do manual da
   lição (A VALIDAR pela autora da lição).
   ===================================================================== */
window.QUIZZES = {

  /* ------------------------------------------------------------------ */
  licao1: {
    title: 'Teste — Primeiro contacto',
    intro: 'Três perguntas de cenário. Cada opção, certa ou errada, tem uma justificação ligada às 5 regras da lição.',
    questions: [
      {
        type: 'single',
        scenario: 'Uma pessoa cega está à entrada do centro de acolhimento, no meio da fila de pessoas evacuadas, com ar de quem não sabe o que fazer. Está com um amigo.',
        prompt: 'O que faz primeiro?',
        options: [
          { text: 'Pergunta ao amigo o que a pessoa precisa.', correct: false, feedback: 'Falar com o acompanhante ignora a pessoa e retira-lhe o controlo. Dirija-se sempre diretamente a ela (Regra 1).' },
          { text: 'Dirige-se à pessoa cega, diz o seu nome e função e pergunta se gostaria de ajuda.', correct: true, feedback: 'Apresentar-se e perguntar dá-lhe informação e deixa a decisão nas suas mãos (Regras 1 e 2).' },
          { text: 'Pega-lhe no braço e leva-a para dentro.', correct: false, feedback: 'Agarrar sem perguntar é invasivo e pode assustar, sobretudo depois de uma evacuação (Regra 2).' }
        ]
      },
      {
        type: 'single',
        scenario: 'A pessoa cega diz que precisa de chegar ao balcão de registo.',
        prompt: 'O que faz?',
        options: [
          { text: 'Pega-lhe no braço e leva-a.', correct: false, feedback: 'Mesmo com boa intenção, pegar sem perguntar tira-lhe a escolha. Ofereça o braço e deixe que seja a pessoa a pegar (Regra 2).' },
          { text: 'Diz «Posso acompanhá-la. Quer pegar no meu braço?» e avisa-a de degraus ou portas pelo caminho.', correct: true, feedback: 'Oferece ajuda, deixa a pessoa decidir e dá informação concreta sobre o percurso (Regras 2 e 4).' },
          { text: 'Pega na bengala e puxa-a para irem mais depressa.', correct: false, feedback: 'A bengala é um auxiliar de mobilidade e faz parte do espaço pessoal. Nunca lhe toque nem a puxe (Regra 2).' }
        ]
      },
      {
        type: 'single',
        scenario: 'Oferece ajuda e a pessoa cega responde: «Não, obrigado/a, estou bem.» A entrada está cheia e há muito ruído.',
        prompt: 'O que faz?',
        options: [
          { text: 'Insiste: «Está muito movimentado, deixe-me ajudar.»', correct: false, feedback: 'Insistir desrespeita a decisão da pessoa. «Não» é uma resposta completa: pergunte e respeite a resposta (Regra 2).' },
          { text: 'Respeita a resposta, diz que está por perto e que pode pedir ajuda a qualquer momento.', correct: true, feedback: 'Respeita a decisão e mantém-se disponível, sem pressionar (Regras 2 e 5).' },
          { text: 'Ajuda na mesma, porque é mais seguro.', correct: false, feedback: 'Ajudar contra a vontade da pessoa anula a sua autonomia e presume que não consegue sozinha (Regras 2 e 3).' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  licao2: {
    title: 'Teste — Receção e registo',
    intro: 'Três perguntas de escolha múltipla e uma de seleção múltipla. Veja a justificação de cada opção.',
    questions: [
      {
        type: 'single',
        prompt: 'Uma pessoa cega chega ao balcão de registo do centro. O que faz primeiro?',
        options: [
          { text: 'Entrega-lhe o formulário e pede-lhe que o preencha.', correct: false, feedback: 'Sem saber quem é, o que é o documento e para que serve, a pessoa perde o controlo do processo.' },
          { text: 'Apresenta-se, explica o processo e pergunta como prefere receber a informação.', correct: true, feedback: 'Reduz a incerteza e deixa a pessoa escolher o formato: explicar antes de pedir.' },
          { text: 'Pede ao acompanhante que responda por ela.', correct: false, feedback: 'A pessoa cega deve ser sempre a principal interlocutora.' }
        ]
      },
      {
        type: 'single',
        prompt: 'Está a fazer as perguntas de saúde do registo e há uma fila atrás da pessoa. O que faz?',
        options: [
          { text: 'Lê a pergunta em voz alta.', correct: false, feedback: 'Expõe dados de saúde, que são dados sensíveis, às pessoas que estão na fila.' },
          { text: 'Convida-a para um espaço reservado, explicando porquê.', correct: true, feedback: 'É a melhor resposta. Protege a privacidade e garante que a pessoa responde com tranquilidade, sem a pressão da fila. Explicar o motivo evita que ela sinta que a estão a afastar ou a tratar de forma diferente.' },
          { text: 'Salta a pergunta.', correct: false, feedback: 'A pessoa fica sem acesso ao apoio de que pode precisar. O problema é o local, não a pergunta.' }
        ]
      },
      {
        type: 'single',
        prompt: 'Antes de a pessoa assinar o contrato de acolhimento, o que faz?',
        options: [
          { text: 'Diz «assine aqui».', correct: false, feedback: 'A pessoa não sabe o que está a assinar.' },
          { text: 'Lê o documento completo, pergunta se quer assinar e indica a linha de assinatura, se ela o pedir.', correct: true, feedback: 'A pessoa decide com informação completa e só recebe ajuda física se a pedir.' },
          { text: 'Diz «é o procedimento normal, assine».', correct: false, feedback: 'Pressiona a pessoa e não lhe dá informação para decidir.' }
        ]
      },
      {
        type: 'multiple',
        prompt: 'Que atitudes são boas práticas ao acolher uma pessoa cega?',
        options: [
          { text: 'Dizer o seu nome e a sua função antes de começar.', correct: true, feedback: 'Sem identificação visual, a pessoa não sabe quem lhe fala nem se é a ela que se dirigem. Identificar-se cria confiança e orienta-a desde o início.' },
          { text: 'Pegar-lhe no braço para a conduzir ao balcão, sem avisar.', correct: false, feedback: 'O toque inesperado assusta e retira-lhe o controlo sobre o seu corpo. Pergunte primeiro se quer ajuda e como prefere ser acompanhada, normalmente oferecendo o seu braço para ela se apoiar.' },
          { text: 'Descrever brevemente o espaço e indicar onde ficam o balcão, a zona reservada e as saídas.', correct: true, feedback: 'Num centro cheio e desconhecido, uma descrição simples dá-lhe orientação e segurança para se mover com mais autonomia.' },
          { text: 'Falar mais alto e mais devagar, como se não percebesse bem.', correct: false, feedback: 'Ser cega não implica ter dificuldade em ouvir ou compreender. Falar assim é condescendente e desrespeita a sua dignidade. Use um tom normal e claro.' },
          { text: 'Perguntar se precisa de ajuda e como prefere recebê-la, antes de a prestar.', correct: true, feedback: 'Respeita a autonomia: cada pessoa sabe o que lhe faz falta. Presumir o que precisa pode ser tão desrespeitoso como não ajudar.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  licao3: {
    title: 'Teste — Decisões de percurso',
    intro: 'Quatro perguntas sobre como guiar uma pessoa recém-evacuada num centro que ainda não conhece.',
    questions: [
      {
        type: 'single',
        prompt: 'Uma pessoa recém-evacuada parece insegura sobre como chegar à zona de distribuição de bens. O que faz?',
        options: [
          { text: 'Pega-lhe no braço e começa a andar.', correct: false, feedback: 'Agarrar sem perguntar retira-lhe o controlo e pode assustá-la. Primeiro pergunte se quer ajuda e como prefere ser guiada.' },
          { text: 'Apresenta-se, pergunta se quer ajuda e como prefere ser guiada.', correct: true, feedback: 'É assim que começa um bom acompanhamento: a pessoa sabe quem lhe fala e decide se quer ser guiada e como (por exemplo, apoiando a mão no seu braço ou no seu ombro).' },
          { text: 'Aponta e diz «é por ali».', correct: false, feedback: 'Apontar e dizer «ali» não transmite qualquer informação a quem não vê. As indicações têm de ser verbais e concretas.' }
        ]
      },
      {
        type: 'single',
        prompt: 'Chegam a um cruzamento de corredores. O que faz?',
        options: [
          { text: 'Diz «vá por ali».', correct: false, feedback: '«Ali» depende de um gesto que a pessoa não vê. Use a orientação da própria pessoa (esquerda/direita) e pontos de referência.' },
          { text: 'Dá uma indicação específica, usando esquerda/direita, um ponto de referência e qualquer obstáculo relevante.', correct: true, feedback: 'Por exemplo: «O corredor para a distribuição começa à sua esquerda; a porta fica depois do balcão.» Referências estáveis tornam o percurso previsível.' },
          { text: 'Segue à frente sem verificar se a pessoa percebeu.', correct: false, feedback: 'Guiar inclui confirmar a compreensão e adaptar o ritmo. Avançar sem verificar pode deixar a pessoa desorientada ou em risco.' }
        ]
      },
      {
        type: 'single',
        prompt: 'Ao chegar ao destino, o que faz?',
        options: [
          { text: 'Afasta-se de imediato.', correct: false, feedback: 'Sair sem avisar deixa a pessoa sozinha num espaço que não conhece. Anuncie sempre que se vai afastar.' },
          { text: 'Anuncia o destino, descreve a disposição imediata do espaço e pergunta se quer mais ajuda.', correct: true, feedback: 'A pessoa fica orientada no novo espaço e decide se precisa de mais apoio: o acompanhamento termina com uma passagem de testemunho clara.' },
          { text: 'Presume que a pessoa sabe o que fazer a seguir.', correct: false, feedback: 'Presumir é um dos erros mais comuns. Confirme a chegada e os passos seguintes com a própria pessoa.' }
        ]
      },
      {
        type: 'multiple',
        prompt: 'Quais destas práticas ajudam a orientar uma pessoa cega num espaço desconhecido?',
        options: [
          { text: 'Indicar referências fixas do espaço (balcão principal, casas de banho, saídas de emergência).', correct: true, feedback: 'Pontos de referência estáveis ajudam a pessoa a construir um mapa mental do centro e a voltar a encontrar os serviços sozinha.' },
          { text: 'Ao chegar a uma cadeira, e depois de perguntar, guiar a mão da pessoa até ao encosto ou ao braço da cadeira.', correct: true, feedback: 'Permite que a pessoa se situe pelo tato e se sente com autonomia. Pergunte sempre antes de tocar.' },
          { text: 'Avisar antecipadamente sobre mudanças no piso, degraus, portas ou obstáculos.', correct: true, feedback: 'Anunciar antes de lá chegar dá tempo para a pessoa se preparar. Avisar em cima do obstáculo já é tarde.' },
          { text: 'Caminhar lado a lado e dar um ligeiro puxão sempre que for preciso virar.', correct: false, feedback: 'O guia deve caminhar meio passo à frente: o movimento do corpo indica naturalmente as mudanças de direção, sem puxões.' },
          { text: 'Gritar «cuidado!» quando surgir um degrau.', correct: false, feedback: 'Um aviso genérico não diz qual é o perigo nem onde está. Descreva: «Há um degrau a descer à sua frente.»' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  licao4: {
    title: 'Teste — Acesso a apoios essenciais',
    intro: 'Cinco perguntas sobre filas, senhas e acesso à alimentação, à saúde e ao apoio social.',
    questions: [
      {
        type: 'single',
        prompt: 'Num ponto de distribuição, a vez é anunciada apenas num ecrã de senhas. Qual é a solução mais adequada?',
        options: [
          { text: 'Não é preciso mudar nada: a pessoa pode pedir ajuda a quem estiver na fila.', correct: false, feedback: 'Deixar a pessoa dependente da boa vontade de desconhecidos não é acessibilidade. O serviço tem de garantir alternativas.' },
          { text: 'Oferecer alternativas: aviso sonoro, botões físicos com braille ou uma pessoa designada para ajudar.', correct: true, feedback: 'É a primeira regra de acessibilidade da lição. A vez tem de ser indicada também de forma sonora, por um sistema dedicado ou por um ajudante.' },
          { text: 'Colocar automaticamente a pessoa no início da fila.', correct: false, feedback: 'Pode parecer boa vontade, mas decide pela pessoa e presume uma incapacidade. Pergunte primeiro que tipo de atendimento prefere.' }
        ]
      },
      {
        type: 'single',
        prompt: 'É a pessoa designada para ajudar e uma pessoa cega aproxima-se da fila. Deve encaminhá-la diretamente para o primeiro balcão disponível?',
        options: [
          { text: 'Sim, é a forma mais rápida de a ajudar.', correct: false, feedback: 'Encaminhar sem consultar retira o controlo à pessoa e presume uma incapacidade que ela pode não sentir.' },
          { text: 'Não: apresenta-se, pergunta se precisa de ajuda e se prefere atendimento geral ou prioritário, respeitando a resposta.', correct: true, feedback: 'É o que se vê no exemplo correto: a pessoa mantém o controlo, escolhe o tipo de senha e decide se quer ser acompanhada.' },
          { text: 'Pergunta ao acompanhante o que a pessoa prefere.', correct: false, feedback: 'A pessoa cega é sempre a principal interlocutora (Lição 1).' }
        ]
      },
      {
        type: 'single',
        prompt: 'Num posto médico do centro, qual é a boa prática?',
        options: [
          { text: 'A mesma pessoa guia o utente e faz a avaliação clínica, para ser mais rápido.', correct: false, feedback: 'Misturar papéis gera confusão sobre quem é quem e sobre a confidencialidade. Sempre que possível, o apoio logístico e o clínico devem ser prestados por pessoas diferentes.' },
          { text: 'Dar instruções de mobilidade precisas e separar claramente o apoio logístico do apoio clínico.', correct: true, feedback: 'Os postos médicos são muitas vezes pequenos, lotados e stressantes. Instruções precisas reduzem o risco e a separação de papéis protege a pessoa.' },
          { text: 'Deixar a pessoa à porta e chamá-la pelo nome quando for a vez.', correct: false, feedback: 'Chamar a vez de forma sonora é necessário, mas não basta. A pessoa deve saber onde esperar, quanto tempo falta e como chegar ao gabinete.' }
        ]
      },
      {
        type: 'multiple',
        prompt: 'Nos serviços de apoio social, que práticas são adequadas?',
        options: [
          { text: 'Ler os formulários sem expor dados pessoais, de preferência numa sala privada.', correct: true, feedback: 'Protege a confidencialidade dos dados, um dos erros mais comuns identificados na lição.' },
          { text: 'Ler de forma imparcial e sem infantilizar.', correct: true, feedback: 'Um tom infantil ou parcial desrespeita a pessoa e pode influenciar as suas respostas.' },
          { text: 'Ser compreensivo com a falta de documentos de quem acabou de ser evacuado.', correct: true, feedback: 'Numa evacuação, os documentos ficam muitas vezes para trás. A falta deles não deve impedir o apoio.' },
          { text: 'Ler os documentos em voz alta ao balcão, para despachar a fila.', correct: false, feedback: 'Expõe dados confidenciais a quem está à volta e põe a pressão da fila à frente da pessoa.' },
          { text: 'Recusar o apoio até a pessoa apresentar todos os documentos.', correct: false, feedback: 'Exigir tudo de imediato pode negar um apoio essencial a quem fugiu sem os seus documentos.' }
        ]
      },
      {
        type: 'single',
        prompt: 'Uma pessoa com cão-guia quer entrar na cantina do centro. O que faz?',
        options: [
          { text: 'Pede que o cão fique à porta, por razões de higiene.', correct: false, feedback: 'As pessoas com deficiência visual têm direito a aceder a locais públicos, incluindo estabelecimentos de restauração, acompanhadas pelo cão-guia, sem lhes ser barrada a entrada nem cobrado qualquer valor adicional.' },
          { text: 'Deixa entrar o cão, não lhe toca nem lhe dá comida e pergunta à pessoa se quer ajuda.', correct: true, feedback: 'O cão-guia está a trabalhar: distraí-lo pode pôr a pessoa em risco. Respeite também a bengala e os outros apoios.' },
          { text: 'Faz festas ao cão para o acalmar antes de entrar.', correct: false, feedback: 'Tocar no cão-guia ou dar-lhe comida distrai-o do seu trabalho. Dirija-se sempre à pessoa, não ao cão.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  licao5: {
    title: 'Teste — Decisões de segurança',
    intro: 'Três perguntas de cenário sobre riscos, alertas acessíveis e evacuação.',
    questions: [
      {
        type: 'single',
        prompt: 'Aparece um cabo no chão do corredor que a pessoa costuma usar no centro de acolhimento. O que faz?',
        options: [
          { text: 'Grita «Cuidado!».', correct: false, feedback: '«Cuidado!» indica que há um problema, mas não diz qual é o perigo, onde está nem o que fazer, e pode assustar a pessoa.' },
          { text: 'Dá um alerta preciso e retira, isola ou comunica o perigo, se for seguro e permitido.', correct: true, feedback: 'Perigo + localização + ação segura: «Pare, por favor. Há um cabo no chão à sua frente.» Depois, identificar, reduzir ou isolar e comunicar, para que mais ninguém tropece.' },
          { text: 'Puxa a pessoa para o lado sem a avisar.', correct: false, feedback: 'Um puxão inesperado desorienta e pode provocar uma queda. Avise primeiro, com palavras.' }
        ]
      },
      {
        type: 'single',
        prompt: 'Uma passagem foi encerrada e o único aviso é um cartaz impresso. O que faz?',
        options: [
          { text: 'Aponta para o aviso.', correct: false, feedback: 'Um aviso apenas visual não chega a quem não o pode ler, e apontar também não ajuda.' },
          { text: 'Explica verbalmente o encerramento e indica a alternativa segura, depois de a confirmar.', correct: true, feedback: 'Por exemplo: «A passagem habitual está encerrada. O percurso alternativo indicado pela equipa de segurança começa pelo corredor à sua direita.» Nunca indique uma alternativa sem confirmar que é segura.' },
          { text: 'Presume que outra pessoa o vai explicar.', correct: false, feedback: 'Se todos presumirem o mesmo, ninguém avisa. Quem vê o risco deve comunicá-lo.' }
        ]
      },
      {
        type: 'single',
        prompt: 'O alarme de evacuação toca e a pessoa, que já passou por uma evacuação, está a seu lado. O que faz?',
        options: [
          { text: 'Agarra-lhe o braço e corre.', correct: false, feedback: 'Agarrar e correr aumenta o stress e o risco de queda, sobretudo em quem já viveu uma evacuação.' },
          { text: 'Apresenta-se, explica o alarme, pergunta como pode ajudar e segue o plano de emergência.', correct: true, feedback: 'São os cinco passos da lição: identificar-se, explicar a situação, oferecer ajuda, respeitar as preferências e seguir o plano. Por exemplo: «Sou voluntário deste centro. Está a tocar o alarme de evacuação. Posso ajudá-la a chegar à saída?»' },
          { text: 'Diz-lhe que siga a multidão.', correct: false, feedback: 'Seguir a multidão não é um percurso acessível nem seguro para quem não vê. Siga o plano de emergência e as indicações da equipa de segurança.' }
        ]
      }
    ]
  }
};
