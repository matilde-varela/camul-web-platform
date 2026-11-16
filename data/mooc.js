/* =====================================================================
   Percurso CAMUL — conteúdos do MOOC
   «Crises Humanitárias: Apoio a Pessoas com Deficiência Visual»
   ---------------------------------------------------------------------
   COMO PUBLICAR UM VÍDEO QUE AINDA ESTÁ «A PUBLICAR»
   Os vídeos principais das lições são grandes (90–290 MB). Opções:
     a) Carregar no YouTube como «Não listado», carregar o ficheiro .vtt
        de assets/captions como legendas e preencher  youtube: 'ID'
        (o ID é o código depois de «watch?v=» no endereço do vídeo).
     b) Comprimir (ex.: 720p, H.264) e colocar em assets/video/,
        preenchendo  src: 'assets/video/nome.mp4'.
   Tipos de unidade (kind): 'video' | 'article' | 'interactive' | 'quiz'
   Uma unidade de vídeo pode ter mais vídeos a seguir ao principal:
     moreVideos: [ { heading: 'Título da secção', video: { …como video… } } ]
   Vídeo sem legendas (.vtt)? Acrescente  note: '…'  a dizer onde está a transcrição.
   ===================================================================== */
(function () {
  'use strict';

  function S(dir, file, title, alt, text) {
    return { src: 'assets/slides/' + dir + '/' + file + '.webp', thumb: 'assets/slides/' + dir + '/' + file + '-t.webp', title: title, alt: alt, text: text };
  }
  var MP = 'https://my.matterport.com/show/?m=';

  window.MOOC = {
    course: {
      title: 'Crises Humanitárias: Apoio a Pessoas com Deficiência Visual',
      udemyUrl: null // ex.: 'https://www.udemy.com/course/…' — quando preenchido, aparece o botão «Aceder ao curso»
    },

    lessons: [
      /* =============================== LIÇÃO 1 =============================== */
      {
        n: 1,
        title: 'Primeiro contacto',
        subtitle: 'Comunicação, confiança e autonomia',
        author: 'Ricardo Dias', authorNumber: '1220976',
        cover: 'assets/img/l1-capa.webp',
        coverAlt: 'Ilustração de um homem com bengala junto a um mapa tátil, acompanhado por uma voluntária.',
        duration: 'cerca de 11 minutos',
        question: 'Como iniciar uma interação, num contexto de emergência ou de refúgio forçado, para que uma pessoa cega ou com baixa visão se sinta respeitada, informada e no controlo?',
        summary: 'A mesma chegada a um centro de acolhimento, mostrada duas vezes: primeiro com os erros mais comuns, depois com as cinco regras de um primeiro contacto respeitador.',
        objectives: [
          'Identificar os erros mais comuns no primeiro contacto: não se identificar, falar com o acompanhante, agarrar sem pedir e não descrever o percurso.',
          'Apresentar-se e dirigir-se diretamente à pessoa, em situações de emergência ou de refúgio forçado.',
          'Perguntar antes de ajudar, sem agarrar, puxar ou empurrar, e esperar pela resposta.',
          'Comunicar com clareza e de forma concreta, sem infantilizar e sem presumir.',
          'Manter-se por perto e disponível para ajuda adicional.'
        ],
        units: [
          {
            id: 'u1', kind: 'video', label: 'Unidade 1 · Vídeo', title: 'Regras gerais do primeiro contacto', duration: '3 min 40 s',
            intro: 'A mesma situação em duas versões encenadas (incorreta e correta), seguida da análise dos erros e das cinco regras.',
            video: {
              title: 'Regras gerais do primeiro contacto', duration: '3 min 40 s', src: 'assets/video/l1-u1-regras-primeiro-contacto.mp4', youtube: null,
              poster: 'assets/slides/l1/01.webp', captions: 'assets/captions/l1-u1.vtt',
              chapters: [
                { t: '0:00', label: 'Introdução' }, { t: '0:35', label: 'Exemplo 1 — versão incorreta' },
                { t: '0:56', label: 'Erros cometidos pelo ajudante' }, { t: '1:45', label: 'Exemplo 2 — versão correta, com o ajudante Roberto' },
                { t: '2:26', label: 'Regras 1 e 2' }, { t: '2:53', label: 'Regras 3 a 5' }, { t: '3:18', label: 'Conclusão' }
              ],
              transcript: [
                { head: 'Introdução' },
                'Olá a todos, sejam bem-vindos à primeira lição do curso «Crises Humanitárias: Apoio a Pessoas com Deficiência Visual». Nesta lição iremos falar sobre o primeiro contacto com pessoas com deficiência visual durante situações de emergência ou de refúgio forçado. Para isso, iremos apresentar dois exemplos: um em que um ajudante atua de forma incorreta e outro em que procede corretamente. Terminaremos com algumas dicas e regras a seguir durante este primeiro contacto.',
                { head: 'Exemplo 1 — versão incorreta' },
                { desc: 'Uma pessoa cega chega à entrada do centro de acolhimento com um amigo. O ajudante aproxima-se, não se apresenta e fala com o acompanhante em vez de falar com a pessoa. Depois agarra-a e leva-a para dentro, sem pedir autorização e sem descrever o caminho.' },
                { head: 'Erros cometidos pelo ajudante' },
                'Como foi possível ver no vídeo, o ajudante não se identificou: a pessoa não sabia quem a estava a acompanhar nem qual era a sua função, o que pode gerar insegurança e desconfiança. Dirigiu-se ao acompanhante, ignorando a pessoa que precisava de ajuda. A pessoa cega deve ser sempre a principal interlocutora, respeitando a sua autonomia e capacidade de decisão. Agarrou a pessoa sem pedir autorização nem avisar previamente. O contacto físico inesperado pode provocar desconforto, desorientação e até colocar a pessoa em risco. Não utilizou uma técnica adequada de acompanhamento: não basta deslocar a pessoa; descrever o caminho e comunicar os obstáculos ao longo do percurso é sempre necessário.',
                { head: 'Exemplo 2 — versão correta' },
                { desc: 'A mesma chegada, no mesmo cenário. O ajudante, Roberto, cumprimenta, apresenta-se e pergunta se a pessoa prefere ser acompanhada pelo colega ou por ele, oferecendo o braço esquerdo. Guia-a com indicações verbais («sigam em frente, por favor», «agora à esquerda», «vamos dar dois passinhos») e deixa-a na zona de espera, dizendo que o colega a vai chamar e que fica por perto.' },
                { head: 'As cinco regras' },
                'Neste caso, já foi possível ver alguns dos cuidados que o ajudante teve. Regra 1: apresente-se e dirija-se à pessoa. Aproxime-se de frente, fale primeiro e diga o seu nome e a sua função. Regra 2: pergunte antes de ajudar. Não agarre, não puxe, não empurre: pergunte «Posso ajudar?» e espere pela resposta. Se aceitar, identifique o lado em que estará e estabeleça contacto enquanto comunica. Regra 3: fale com clareza, sem infantilizar e sem presumir. Use um tom de voz normal; não fale mais alto nem mais devagar sem motivo. Regra 4: seja concreto — «a porta fica à sua esquerda, a três passos», em vez de «ali». Regra 5: indique a proximidade, no caso de ajuda adicional. Fique atento e esteja disponível para ajudar mais, caso seja necessário.',
                { head: 'Conclusão' },
                'E assim concluímos este pequeno vídeo sobre o primeiro contacto com pessoas com deficiência visual durante situações de emergência ou de refúgio forçado. Para mais informações, leia o artigo que vem a seguir nesta lição.'
              ]
            },
            slides: {
              title: 'Diapositivos do vídeo da Unidade 1',
              slides: [
                S('l1', '01', 'Primeiro contacto: comunicação, confiança e autonomia', 'Ilustração de um homem com bengala junto a um mapa tátil, acompanhado por uma voluntária, sobre fundo lilás.', 'Lição 1 — Primeiro contacto: comunicação, confiança e autonomia.'),
                S('l1', '02', 'Primeiro contacto: maneira incorreta', 'A mesma ilustração, com o título «Primeiro contacto: maneira incorreta».', 'Exemplo 1: a maneira incorreta de fazer o primeiro contacto.'),
                S('l1', '03', 'Erros cometidos pelo ajudante', 'Diapositivo com título numa faixa vermelha e uma lista numerada de quatro erros sobre fundo laranja.', '1. Não se identificou. A pessoa não sabia quem a estava a acompanhar nem qual era a sua função, o que pode gerar insegurança e desconfiança.\n\n2. Dirigiu-se ao acompanhante, ignorando a pessoa que precisava de ajuda. A pessoa cega deve ser sempre a principal interlocutora, respeitando a sua autonomia e capacidade de decisão.\n\n3. Agarrou a pessoa sem pedir autorização nem avisar previamente. O contacto físico inesperado pode provocar desconforto, desorientação e até colocar a pessoa em risco.\n\n4. Não utilizou uma técnica adequada de acompanhamento. Não basta deslocar a pessoa: é preciso descrever o caminho e comunicar os obstáculos ao longo do percurso.'),
                S('l1', '04', 'Primeiro contacto: maneira correta', 'A ilustração da lição com o título «Primeiro contacto: maneira correta».', 'Exemplo 2: a maneira correta de fazer o primeiro contacto.'),
                S('l1', '05', 'Cuidados que o ajudante teve', 'Diapositivo com título numa faixa verde e a lista das cinco regras.', 'Regra 1: apresente-se e dirija-se à pessoa. Aproxime-se de frente, fale primeiro e diga o seu nome e a sua função.\n\nRegra 2: pergunte antes de ajudar. Não agarre, não puxe, não empurre. Pergunte «Posso ajudar?» e espere pela resposta. Se aceitar, identifique o lado em que estará e estabeleça contacto enquanto comunica.\n\nRegra 3: fale com clareza, sem infantilizar e sem presumir. Use o tom de voz normal. Não fale mais alto nem mais devagar sem motivo.\n\nRegra 4: seja concreto. «A porta fica à sua esquerda, a três passos», em vez de «ali».\n\nRegra 5: identifique a proximidade no caso de ajuda adicional. Fique atento e esteja disponível para ajudar mais, caso seja necessário.'),
                S('l1', '06', 'Para mais informação', 'Miniatura da primeira página do artigo da lição, ao lado de um botão verde «Para mais informação».', 'Leia o artigo que se segue nesta lição para compreender melhor as regras do primeiro contacto.')
              ]
            }
          },
          {
            id: 'u2', kind: 'article', label: 'Unidade 2 · Artigo', title: 'As 5 regras do primeiro contacto, por escrito', duration: '2 min 25 s de leitura',
            html:
              '<h3>Introdução e contexto</h3>' +
              '<p>O primeiro contacto é o momento que define a qualidade de toda a interação que se segue. Para uma pessoa cega ou com visão reduzida, a forma como alguém se aproxima, fala e oferece ajuda pode transmitir segurança e respeito ou, pelo contrário, insegurança e desconfiança.</p>' +
              '<p>Os centros de acolhimento são ambientes particularmente exigentes: costumam ser movimentados e barulhentos, com muitas pessoas e muitos estímulos em simultâneo. Quem chega pode estar cansado, depois de uma viagem longa, e encontra-se num espaço que não conhece. Na entrada e no primeiro ponto de atendimento, a pessoa cega não dispõe das referências visuais que tornam o espaço compreensível à primeira vista. Por isso, aquilo que o ajudante diz e faz tem um peso acrescido.</p>' +
              '<h3>Erros comuns</h3>' +
              '<p>Os erros seguintes correspondem à versão inadequada mostrada no vídeo. São frequentes, quase sempre cometidos com boa intenção, e têm consequências reais.</p>' +
              '<ol class="x-list">' +
                '<li><strong>Não se identificar.</strong> A pessoa não sabe quem a está a acompanhar nem qual é a sua função, o que pode gerar insegurança e desconfiança.</li>' +
                '<li><strong>Dirigir-se ao acompanhante, ignorando a pessoa que precisa de ajuda.</strong> A pessoa cega deve ser sempre a principal interlocutora. Falar com quem a acompanha, como se ela não estivesse presente, retira-lhe o controlo sobre a situação.</li>' +
                '<li><strong>Agarrar a pessoa sem pedir autorização nem avisar previamente.</strong> O contacto físico inesperado pode provocar desconforto, desorientação e até colocar a pessoa em risco.</li>' +
                '<li><strong>Não utilizar uma técnica adequada de acompanhamento.</strong> Não basta deslocar a pessoa: é preciso descrever o caminho e comunicar os obstáculos ao longo do percurso.</li>' +
              '</ol>' +
              '<h3>As cinco regras do primeiro contacto</h3>' +
              '<ol class="num-list">' +
                '<li><strong>Apresente-se e dirija-se à pessoa.</strong> Aproxime-se de frente, fale primeiro e diga o seu nome e a sua função.</li>' +
                '<li><strong>Pergunte antes de ajudar.</strong> Não agarre, não puxe, não empurre. Pergunte «Posso ajudar?» e espere pela resposta. Se a pessoa aceitar, indique o lado em que estará e estabeleça contacto enquanto comunica.</li>' +
                '<li><strong>Fale com clareza, sem infantilizar e sem presumir.</strong> Use o tom de voz normal. Não fale mais alto nem mais devagar sem motivo.</li>' +
                '<li><strong>Seja concreto.</strong> Diga, por exemplo, «A porta fica à sua esquerda, a três passos», em vez de «ali». Expressões como «aqui», «ali» ou «assim» não transmitem qualquer informação a quem não vê para onde se aponta.</li>' +
                '<li><strong>Mantenha-se disponível.</strong> Fique atento e esteja disponível para ajudar mais, caso seja necessário.</li>' +
              '</ol>' +
              '<p class="rule-box">Em conjunto, estas regras assentam num princípio simples: a pessoa cega ou com visão reduzida é quem decide. Cabe ao ajudante informar, perguntar e acompanhar — nunca decidir por ela.</p>'
          },
          {
            id: 'u3', kind: 'interactive', label: 'Unidade 3 · Interação ativa', title: 'Explorar a sala de apoio do centro de acolhimento', duration: '3 min 27 s + exploração livre',
            intro: 'Um vídeo narrado percorre os seis pontos assinalados (Tags) da sala de apoio. Depois, pode explorar o mesmo espaço em 3D, ao seu ritmo. Cada ponto coloca uma pergunta de reflexão e indica os cuidados a ter.',
            video: {
              title: 'Cuidados a ter após o primeiro contacto', duration: '3 min 27 s', src: 'assets/video/l1-u3-cuidados-apos-primeiro-contacto.mp4', youtube: null,
              poster: 'assets/slides/l1/07.webp', captions: 'assets/captions/l1-u3.vtt',
              chapters: [
                { t: '0:00', label: 'Introdução' }, { t: '0:17', label: 'Primeiro contacto' }, { t: '0:41', label: 'Receção e inscrição' },
                { t: '1:13', label: 'Zonas reservadas' }, { t: '1:38', label: 'Zona de espera' }, { t: '2:08', label: 'Mantimentos e necessidades básicas' },
                { t: '2:36', label: 'Barulho e ruído' }, { t: '2:57', label: 'Conclusão e excerto da visita 3D' }
              ],
              transcript: [
                'Olá novamente. Neste vídeo, iremos falar sobre os cuidados a ter após o primeiro contacto. As informações referidas neste vídeo estão também disponíveis em formato interativo, caso pretenda explorar o espaço à sua maneira.',
                { head: 'Primeiro contacto' },
                'Esta é a primeira pessoa que alguém encontra ao entrar. Se a pessoa cega precisar de ajuda, a quem se dirige? Como sabe que há alguém disponível? Cuidados a ter: haver sempre alguém presente neste ponto, que possa ser facilmente chamado e que fale primeiro, identificando-se. Assim, a pessoa não precisa de procurar ajuda: é esta pessoa que a recebe e a encaminha.',
                { head: 'Receção e inscrição' },
                'Aqui a pessoa dá os seus dados e recebe informação importante. Imagine que a pessoa cega chega a esta secretária. Como saberia que chegou ao sítio certo? Como lhe seriam comunicadas as informações e como preencheria ou assinaria os documentos? Cuidados a ter: dizer o que está a fazer e o que vai acontecer; ler em voz alta os documentos e os campos a preencher; oferecer ajuda para assinar, mostrando onde, se a pessoa quiser; não pressupor que a pessoa não consegue fazer sozinha.',
                { head: 'Zonas reservadas' },
                'Algumas conversas não devem acontecer no meio de uma sala cheia. Imagine que é preciso dar uma notícia difícil ou que a pessoa cega se sente sobrecarregada pelo ruído. Que espaço deveria existir? Cuidados a ter: existir sempre a possibilidade de reunir num espaço privado, que facilite a comunicação. Num ambiente tão caótico, algo improvisado chega, mas deve existir sempre.',
                { head: 'Zona de espera' },
                'Esperar é muitas vezes a parte mais longa da visita. Como se orienta uma pessoa cega numa zona de espera cheia? Como sabe onde se pode sentar e quando é a sua vez? Cuidados a ter: reservar alguns lugares para pessoas com necessidades específicas, de preferência perto da entrada e de quem pode ajudar; dizer à pessoa onde estão e acompanhá-la, se ela quiser; avisar de viva voz, e não só em ecrãs, quando chegar a sua vez; perguntar de vez em quando se precisa de alguma coisa.',
                { head: 'Mantimentos e necessidades básicas' },
                'Comida e bebida: dizer à pessoa o que há, onde está e como se serve; perguntar se quer ajuda em vez de servir sem perguntar; não mudar as coisas de sítio sem avisar. Mantas e zonas de descanso: informar onde estão, perguntar se a pessoa quer e dizer-lhe onde ficam os seus pertences, para ela saber sempre onde os encontrar.',
                { head: 'Barulho e ruído' },
                'Muita informação é só visual. Imagine que as notícias, os avisos e as filas passam todos num ecrã. O que ficaria de fora? A informação importante deve ser dita em voz alta. Um som de fundo muito alto também dificulta ouvir quem fala com a pessoa.',
                { head: 'Conclusão' },
                'Concluímos assim mais um vídeo. Como referido no início, as informações deste vídeo estão disponíveis em formato interativo, caso pretenda explorar o espaço à sua maneira. De seguida, deixamos um pequeno excerto do que pode encontrar se entrar no link indicado abaixo.'
              ]
            },
            matterport: MP + '8osidpG5rie',
            matterportTitle: 'Sala de apoio — abrigo para pessoas em refúgio forçado',
            preview: { title: 'Excerto da visita 3D à sala de apoio (sem som)', duration: '13 s', src: 'assets/video/l1-matterport.mp4', note: 'Excerto silencioso que mostra a navegação pelo modelo 3D: a câmara percorre a sala de apoio e os pontos assinalados.' },
            tagsTitle: 'Os seis pontos da visita (alternativa em texto ao modelo 3D)',
            tags: [
              { title: 'Receção e inscrição', question: 'Aqui a pessoa dá os seus dados e recebe informação importante. Como saberia a pessoa cega que chegou ao sítio certo? Como preencheria ou assinaria os documentos?', helps: 'Dizer o que está a fazer e o que vem a seguir; ler em voz alta os documentos e os campos; oferecer ajuda para assinar; não pressupor incapacidade.' },
              { title: 'Primeiro contacto', question: 'É a primeira pessoa que alguém encontra ao entrar. A quem se dirige a pessoa cega se precisar de ajuda?', helps: 'Haver sempre alguém presente, fácil de chamar, que fale primeiro e se identifique, e que receba e encaminhe a pessoa.' },
              { title: 'Barulho e ruído', question: 'Notícias, avisos e filas passam num ecrã. O que fica de fora para quem não vê?', helps: 'Dizer em voz alta a informação importante; evitar ruído de fundo alto, que dificulta ouvir quem fala.' },
              { title: 'Zona de espera', question: 'Como sabe a pessoa onde se pode sentar e quando é a sua vez?', helps: 'Reservar lugares perto da entrada e de quem ajuda; dizer onde estão e acompanhar, se a pessoa quiser; chamar de viva voz; perguntar regularmente se precisa de algo.' },
              { title: 'Mantimentos e necessidades básicas', question: 'Como encontra a pessoa a comida, as mantas e os seus pertences?', helps: 'Dizer o que há, onde está e como se serve; perguntar antes de servir; não mudar coisas de sítio sem avisar; indicar mantas, zona de descanso e onde ficam os pertences.' },
              { title: 'Zonas reservadas', question: 'Onde se dá uma notícia difícil, ou onde descansa quem está sobrecarregado pelo ruído?', helps: 'Existir sempre um espaço privado, mesmo que improvisado, para conversas difíceis ou para quando o ruído sobrecarrega.' }
            ],
            slides: {
              title: 'Diapositivos da Unidade 3',
              slides: [
                S('l1', '07', 'Primeiro contacto: cuidados a ter após o primeiro contacto', 'Ilustração de um homem com bengala junto a um mapa tátil, com uma voluntária, sobre fundo lilás.', 'Primeiro contacto: cuidados a ter após o primeiro contacto.'),
                S('l1', '08', 'Primeiro contacto', 'Fotografia da entrada da sala de apoio, com uma secretária e cadeiras, ao lado do texto do ponto.', 'Esta é a primeira pessoa que alguém encontra ao entrar. Se a pessoa cega precisar de ajuda, a quem se dirige? Como sabe que há alguém disponível?\n\nCuidados a ter: haver sempre alguém presente neste ponto que possa ser facilmente chamado e que fale primeiro, identificando-se. Assim, a pessoa não precisa de procurar ajuda: é esta pessoa que a recebe e a encaminha.'),
                S('l1', '09', 'Receção e inscrição', 'Fotografia de uma secretária com computador, ao lado do texto do ponto, sob um título roxo.', 'Aqui a pessoa dá os seus dados e recebe informação importante. Imagine que a pessoa cega chega a esta secretária. Como saberia que chegou ao sítio certo? Como lhe seriam comunicadas as informações e como preencheria ou assinaria os documentos?\n\nCuidados a ter: dizer o que está a fazer e o que vai acontecer. Ler em voz alta os documentos e os campos a preencher. Oferecer ajuda para assinar (mostrar onde, se a pessoa quiser). Não pressupor que a pessoa não consegue fazer sozinha.'),
                S('l1', '13', 'Zonas reservadas', 'Fotografia de um canto da sala separado por um biombo, ao lado do texto do ponto, sob um título vermelho.', 'Algumas conversas não devem acontecer no meio de uma sala cheia. Imagine que é preciso dar uma notícia difícil ou que a pessoa cega se sente sobrecarregada pelo ruído. Que espaço deveria existir?\n\nCuidados a ter: existir sempre a possibilidade de reunir num espaço privado que facilite a comunicação. Num ambiente tão caótico, algo improvisado chega, mas deve existir sempre.'),
                S('l1', '11', 'Zona de espera', 'Fotografia de filas de cadeiras laranja e brancas, ao lado do texto do ponto, sob um título laranja.', 'Esperar é muitas vezes a parte mais longa da visita. Como se orienta uma pessoa cega numa zona de espera cheia? Como sabe onde se pode sentar e quando é a sua vez?\n\nCuidados a ter: reservar alguns lugares para pessoas com necessidades específicas, de preferência perto da entrada e de quem pode ajudar. Dizer à pessoa onde estão e acompanhá-la, se ela quiser. Avisar de viva voz, e não só em ecrãs, quando chegar a sua vez. Perguntar de vez em quando se precisa de alguma coisa.'),
                S('l1', '12', 'Mantimentos e necessidades básicas', 'Fotografia de uma mesa com sacos e alimentos, ao lado do texto do ponto, sob um título amarelo.', 'Comida e bebida: dizer à pessoa o que há, onde está e como se serve. Perguntar se quer ajuda em vez de servir sem perguntar, e não mudar as coisas de sítio sem avisar.\n\nMantas e zona de descanso: informar onde estão, perguntar se a pessoa quer e dizer-lhe onde ficam os seus pertences, para ela saber sempre onde os encontrar.'),
                S('l1', '10', 'Barulho e ruído', 'Fotografia de um ecrã de televisão numa sala, ao lado do texto do ponto, sob um título azul.', 'Muita informação é só visual. Imagine que as notícias, os avisos e as filas passam todos num ecrã. O que ficaria de fora?\n\nA informação importante deve ser dita em voz alta. Um som de fundo muito alto também dificulta ouvir quem fala com a pessoa.'),
                S('l1', '14', 'Explore o espaço interativo', 'Miniatura da visita virtual Matterport «Sala de Apoio — Abrigo a pessoas de refúgio forçado», com botão de reprodução.', 'Explore o espaço interativo: visita virtual em Matterport à sala de apoio do centro de acolhimento.')
              ]
            }
          },
          { id: 'u4', kind: 'quiz', label: 'Unidade 4 · Teste 1', title: 'Prática: perguntas de cenário', duration: 'cerca de 1 min 15 s', quiz: 'licao1' }
        ],
        resources: [
          { title: 'Primeiro contacto com uma pessoa cega — material complementar', href: 'assets/docs/l1-primeiro-contacto-pessoa-cega.pdf', meta: 'PDF, 3 páginas, 700 kB' }
        ]
      },

      /* =============================== LIÇÃO 2 =============================== */
      {
        n: 2,
        title: 'Receção e registo',
        subtitle: 'Acolher e comunicar com acessibilidade',
        author: 'Matilde Varela', authorNumber: '1220683',
        cover: 'assets/img/l2-capa.webp',
        coverAlt: 'Ilustração de duas pessoas a uma secretária com computadores, uma delas a apontar para o ecrã.',
        duration: 'cerca de 12 minutos',
        question: 'Como garantir que uma pessoa cega compreende e conclui o processo de registo com autonomia e privacidade?',
        summary: 'O registo num centro de acolhimento, primeiro feito da forma errada e depois com contrato adaptado, formulário digital ditado e um espaço reservado para a informação sensível.',
        objectives: [
          'Explicar oralmente o processo de registo a uma pessoa cega ou com baixa visão antes de pedir qualquer dado.',
          'Apoiar o preenchimento de formulários sem tomar conta das respostas da pessoa.',
          'Reconhecer quando e onde os dados pessoais, em particular os de pessoas evacuadas, devem ser tratados em privado, e confirmar que a pessoa compreendeu.'
        ],
        units: [
          {
            id: 'u1', kind: 'video', label: 'Unidade 1 · Vídeo', title: 'Receção e registo', duration: '5 min 38 s',
            intro: 'Dois exemplos encenados de registo no centro de acolhimento: o processo incorreto e o processo correto, com a análise do que correu mal e do que correu bem.',
            video: {
              title: 'Receção e registo', duration: '5 min 38 s', src: 'assets/video/l2-u1-rececao-registo.mp4', youtube: null,
              poster: 'assets/slides/l2/01.webp', captions: 'assets/captions/l2-u1.vtt',
              chapters: [
                { t: '0:00', label: 'Introdução' }, { t: '0:20', label: 'O processo incorreto' }, { t: '1:04', label: 'O que correu mal' },
                { t: '1:25', label: 'O processo correto: apresentação' }, { t: '1:54', label: 'Opções de contrato' },
                { t: '2:34', label: 'Para que serve a informação' }, { t: '3:00', label: 'Passagem para uma sala reservada' },
                { t: '3:14', label: 'Formulário digital ditado' }, { t: '5:16', label: 'O que correu bem' }
              ],
              transcript: [
                'Nesta lição, vamos falar do processo de registo num centro de acolhimento para pessoas com deficiência visual, em situações de emergência ou de deslocação forçada. Para isso, vamos mostrar dois exemplos: um em que o voluntário do centro age de forma incorreta e outro em que age de forma correta.',
                { head: 'O processo incorreto' },
                { desc: 'O voluntário leva o senhor pela mão até uma cadeira, sem se apresentar, com indicações apressadas («para a frente, para a frente», «tem aqui uma cadeira à sua frente»). Entrega-lhe um contrato em papel, em letra pequena, e indica várias zonas para assinar, como se o senhor o pudesse ler.' },
                { head: 'O que correu mal' },
                'O voluntário não se apresentou nem disse qual era a sua função. Não perguntou se a pessoa tinha dificuldades visuais. Não explicou o contrato nem o processo de registo: que informação recolhe, porquê e quanto tempo demora. Entregou-lhe o contrato só em papel, em letra pequena. Não lhe ofereceu um espaço à parte para dar informações sensíveis.',
                { head: 'O processo correto' },
                { speaker: 'Voluntária', text: 'Sou voluntária aqui no centro de acolhimento da escola básica e estou encarregada do registo das pessoas. Com esse registo vem o contrato, que serve para esse propósito. Preciso de lhe perguntar se tem alguma dificuldade visual ou algo que o impeça de preencher o contrato normal.' },
                { desc: 'O senhor confirma que tem dificuldade visual.' },
                { speaker: 'Voluntária', text: 'Para pessoas com dificuldades visuais, temos um contrato adaptado, com letra maior e mais espaço para a assinatura, mais fácil de ver. Também temos o formato digital, em que o computador dita as informações do contrato. Qual é a opção que prefere? No contrato adaptado, se precisar, posso ajudar a ler e dizer-lhe onde deve assinar e que informações deve dar; no digital também.' },
                { desc: 'O senhor escolhe o contrato digital.' },
                { speaker: 'Voluntária', text: 'Esta informação é utilizada apenas para mantermos uma base de dados das pessoas que estão no centro e das informações necessárias, por exemplo alergias, emergências ou outras situações mais delicadas. Todo o processo deve demorar cerca de 10 minutos. Já que escolheu o contrato digital, vamos agora para uma sala mais resguardada, para termos mais privacidade. Precisa de alguma ajuda para se deslocar?' },
                { desc: 'Na sala para contratos digitais, a voluntária põe o computador a ditar o formulário e pausa o ditado sempre que o senhor precisa de responder.' },
                { speaker: 'Formulário ditado', text: 'Inscrição no centro de acolhimento: formulário acessível para pessoas com diferentes graus de cegueira, com contrato de acolhimento de emergência em Portugal. Identificação e contacto. Nome completo: primeiro nome e último nome. Data de nascimento. Tem cão de assistência ou cão-guia? Bengala, leitor de ecrã, telemóvel adaptado ou outro apoio? Tem alguma doença ou toma medicação que a equipa deva saber? Prefere ser acompanhado nas deslocações dentro do centro? Formato preferido para receber informações: em voz alta, em letra grande, em braille ou por mensagem de áudio?' },
                { desc: 'O senhor responde a cada pergunta: indica que tem asma, que aceita ser acompanhado nas deslocações e que prefere receber informações por mensagem de áudio.' },
                { head: 'O que correu bem' },
                'O voluntário apresentou-se e disse qual era a sua função. Perguntou se a pessoa tinha dificuldades visuais e explicou o contrato e o processo de registo. Ofereceu-lhe um contrato adaptado, com letra maior, indicando que há também uma versão digital, e levou-a para uma sala à parte para proteger a sua privacidade. Cada cuidado devolve à pessoa um pouco do controlo que a emergência lhe tirou.'
              ]
            },
            slides: {
              title: 'Diapositivos do vídeo da Unidade 1',
              slides: [
                S('l2', '01', 'Receção e registo: acolher e comunicar com acessibilidade', 'Ilustração de duas pessoas sentadas a uma secretária com computadores, uma delas a apontar para o ecrã; fundo lilás.', 'Lição 2 — Receção e registo: acolher e comunicar com acessibilidade.'),
                S('l2', '02', 'Processo incorreto', 'Ilustração da secretária em tons de vermelho, com um grande símbolo vermelho de proibição.', 'Exemplo 1: o processo incorreto.'),
                S('l2', '03', 'Erros cometidos pelo voluntário', 'Lista de três erros, cada um marcado com um X vermelho, sob um título numa faixa vermelha.', 'O voluntário não se apresentou nem disse qual era a sua função.\n\nO voluntário não perguntou se a pessoa tinha algumas dificuldades visuais.\n\nO voluntário não explicou para que serve o contrato nem o processo de registo no centro.'),
                S('l2', '04', 'Processo correto', 'Ilustração da secretária em tons de verde, com um grande visto verde.', 'Exemplo 2: o processo correto.'),
                S('l2', '05', 'Cuidados que o voluntário teve', 'Lista de quatro cuidados, cada um marcado com um visto verde, sob um título numa faixa verde.', 'O voluntário apresentou-se e disse qual era a sua função.\n\nO voluntário perguntou se a pessoa tinha algumas dificuldades visuais.\n\nO voluntário explicou para que serve o contrato e o processo de registo no centro, bem como as opções de contrato apropriadas para uma pessoa com dificuldades visuais.\n\nO voluntário levou a pessoa para um espaço mais privado para obter informação sensível.')
              ]
            }
          },
          {
            id: 'u2', kind: 'article', label: 'Unidade 2 · Artigo', title: 'Receção e registo acessíveis', duration: '2 min 40 s de leitura',
            html:
              '<p>O balcão de registo é, muitas vezes, o primeiro sítio onde uma pessoa evacuada tem de tomar decisões sobre si própria. Para uma pessoa cega, um contrato em papel, um balcão desconhecido e uma fila atrás de si podem transformar um procedimento simples numa experiência de perda de controlo. Este artigo resume os cuidados mostrados no vídeo.</p>' +
              '<h3>1. Explicar antes de pedir</h3>' +
              '<p>Antes de pedir qualquer dado, apresente-se, diga qual é a sua função e explique o processo: <strong>que informação vai ser recolhida, porquê e quanto tempo demora</strong>. No exemplo correto, a voluntária explica que os dados servem para manter um registo de quem está no centro e das necessidades importantes (como alergias ou emergências) e que o processo demora cerca de 10 minutos.</p>' +
              '<h3>2. Perguntar e oferecer formatos</h3>' +
              '<p>Pergunte se a pessoa tem alguma dificuldade visual ou algo que a impeça de preencher o contrato normal. Em seguida, apresente as alternativas e deixe-a escolher:</p>' +
              '<ul class="check-list"><li><strong>Contrato adaptado</strong>, com letra maior e mais espaço para a assinatura;</li><li><strong>Formato digital com ditado</strong>, em que o computador lê o contrato e se pausa sempre que a pessoa precisa de responder;</li><li>Leitura em voz alta, com ajuda para indicar onde assinar, se a pessoa o pedir.</li></ul>' +
              '<h3>3. Proteger a privacidade</h3>' +
              '<p>Perguntas sobre saúde, medicação ou necessidades de apoio envolvem dados sensíveis (categorias especiais de dados, segundo o artigo 9.º do RGPD). Não as leia em voz alta ao balcão, com uma fila atrás. Proponha passar para uma sala reservada, <strong>explicando porquê</strong>, e deixe a pessoa decidir. Recolha apenas a informação necessária e com o consentimento da pessoa.</p>' +
              '<h3>4. Quem responde e decide é a pessoa</h3>' +
              '<p>Mesmo que venha acompanhada, a pessoa cega é a principal interlocutora. Apoie o preenchimento sem tomar conta das respostas. Antes de assinar, leia o documento completo, pergunte se quer assinar e só indique a linha de assinatura se ela o pedir.</p>' +
              '<p class="rule-box">«Cada cuidado devolve à pessoa um pouco do controlo que a emergência lhe tirou.»</p>' +
              '<p>Nos recursos desta lição encontra o contrato em versão acessível (e a versão normal, para comparação) e os cartazes preparados para o centro de acolhimento.</p>'
          },
          {
            id: 'u3', kind: 'interactive', label: 'Unidade 3 · Interação ativa', title: 'Explorar a receção do centro de acolhimento', duration: '2 min 30 s + exploração livre',
            intro: 'Um vídeo percorre a sala de espera, o balcão de receção e o espaço privado para conversas, a partir das necessidades de uma pessoa refugiada cega. O mesmo conteúdo está disponível no modelo 3D e, abaixo, em texto.',
            video: {
              title: 'Exploração da receção do centro de acolhimento', duration: '2 min 30 s',
              src: 'assets/video/l2-u3-matterport.mp4', captions: 'assets/captions/l2-u3.vtt',
              chapters: [
                { t: '0:00', label: 'Introdução' }, { t: '0:22', label: 'Sala de espera' }, { t: '0:56', label: 'Receção' },
                { t: '1:29', label: 'Espaço privado para conversas' }, { t: '2:13', label: 'Conclusão' }
              ],
              transcript: [
                'Neste vídeo, vamos percorrer a receção do centro de acolhimento e explorá-la a partir das necessidades de uma pessoa refugiada cega. Todo o conteúdo apresentado está também disponível em formato interativo, para que possa explorar os passos e os contextos ao seu próprio ritmo. O scan 3D está disponível nos recursos desta aula, através do link indicado.',
                { head: 'Sala de espera' },
                'Várias pessoas aguardam ser chamadas e o ambiente é movimentado e barulhento. Para uma pessoa cega que acabou de chegar, é difícil perceber onde está, quem está por perto e quando será a sua vez, porque ecrãs, cartazes e senhas só servem a quem vê. O que ajuda: o voluntário que se aproxima, se apresenta, diz onde a pessoa está e como será chamada; um percurso livre de obstáculos até à receção; e uma descrição do espaço sem palavras como «aqui» ou «ali».',
                { head: 'Receção' },
                'É no balcão que se faz o registo. Para uma pessoa cega, o balcão e o contrato em papel não dizem nada por si. O que ajuda: o voluntário apresentar-se e dizer qual é a sua função; explicar o que é o contrato e o processo de registo, que informação é recolhida, porquê e quanto tempo demora; perguntar se a pessoa tem dificuldades visuais e oferecer o contrato adaptado, com letra maior, indicando que existe também uma versão digital. Quem responde e decide é sempre a pessoa, nunca o acompanhante.',
                { head: 'Espaço privado para conversas' },
                'Sala privada onde se faz o teste auditivo e se recolhe a informação mais sensível. A porta fechada protege a privacidade e reduz o ruído, mas uma sala desconhecida pode causar insegurança a uma pessoa cega. O que ajuda: propor passar para a sala à parte, explicando porquê, e deixar a pessoa decidir; descrever a sala e dizer onde fica a cadeira; explicar o que é o teste, para que serve e quanto tempo demora; dizer o que vai fazer antes de o fazer, por exemplo antes de tocar na pessoa ou de lhe colocar os auscultadores; e recolher apenas a informação necessária, com o consentimento da pessoa.',
                { head: 'Conclusão' },
                'Chegámos ao fim desta visita à receção. Vimos que pequenos gestos, com um espaço bem organizado, uma boa orientação e uma comunicação clara, fazem toda a diferença no acolhimento de uma pessoa cega. Obrigada por nos acompanhar.'
              ]
            },
            matterport: MP + 'jGANKDh66Ls',
            matterportTitle: 'Receção do centro de acolhimento',
            tagsTitle: 'Os três pontos da visita (alternativa em texto ao modelo 3D)',
            tags: [
              { title: 'Sala de espera', question: 'Ambiente movimentado e barulhento: ecrãs, cartazes e senhas só servem a quem vê. Como percebe a pessoa onde está e quando será a sua vez?', helps: 'Um voluntário que se aproxima, se apresenta, diz onde a pessoa está e como será chamada; um percurso livre de obstáculos até à receção; uma descrição do espaço sem «aqui» nem «ali».' },
              { title: 'Receção', question: 'O balcão e o contrato em papel não dizem nada por si. Como participa a pessoa no registo?', helps: 'Apresentar-se e dizer a função; explicar o contrato e o processo (que informação, porquê, quanto tempo); perguntar sobre dificuldades visuais e oferecer o contrato adaptado e a versão digital. Quem responde e decide é sempre a pessoa, nunca o acompanhante.' },
              { title: 'Espaço privado para conversas', question: 'A sala fechada protege a privacidade, mas uma sala desconhecida pode causar insegurança. Como se torna confortável?', helps: 'Propor a sala explicando porquê e deixar a pessoa decidir; descrever a sala e onde fica a cadeira; explicar o teste auditivo; dizer o que vai fazer antes de o fazer; recolher só a informação necessária, com consentimento.' }
            ],
            slides: {
              title: 'Diapositivos e capturas da Unidade 3',
              slides: [
                S('l2', '06', 'Exploração do Matterport da receção do centro de acolhimento', 'Ilustração da receção com o logótipo do Matterport.', 'Exploração do Matterport da receção do centro de acolhimento.'),
                S('l2', '07', 'Sala de espera', 'Ilustração de duas pessoas a uma secretária, com o título «Sala de espera».', 'Várias pessoas aguardam ser chamadas e o ambiente é movimentado e barulhento. Para uma pessoa cega, ecrãs, cartazes e senhas só servem a quem vê.\n\nO que ajuda: o voluntário que se aproxima, se apresenta, diz onde a pessoa está e como será chamada; um percurso livre de obstáculos até à receção; uma descrição do espaço sem «aqui» nem «ali».'),
                S('l2', '09', 'Receção', 'Ilustração de duas pessoas a uma secretária, com o título «Receção».', 'É no balcão que se faz o registo. Para uma pessoa cega, o balcão e o contrato em papel não dizem nada por si.\n\nO que ajuda: apresentar-se e dizer a função; explicar o contrato e o processo de registo; perguntar se a pessoa tem dificuldades visuais e oferecer o contrato adaptado e a versão digital. Quem responde e decide é sempre a pessoa, nunca o acompanhante.'),
                S('l2', '08', 'Visita 3D: a receção', 'Captura da visita Matterport: sala com mesas e caixas, com um ponto assinalado e, à direita, o painel de texto «Receção».', 'Captura do modelo 3D com o ponto «Receção» aberto.'),
                S('l2', '11', 'Espaço privado para conversas', 'Ilustração de duas pessoas a uma secretária, com o título «Espaço privado para conversas».', 'Sala privada onde se faz o teste auditivo e se recolhe a informação mais sensível. A porta fechada protege a privacidade, mas uma sala desconhecida pode causar insegurança.\n\nO que ajuda: propor a sala explicando porquê; descrever a sala e onde fica a cadeira; explicar o teste; dizer o que vai fazer antes de o fazer; recolher só a informação necessária, com consentimento.'),
                S('l2', '10', 'Visita 3D: espaço privado para conversas', 'Captura da visita Matterport: sala com computador portátil e cadeira laranja, com o painel de texto «Espaço privado para conversas».', 'Captura do modelo 3D com o ponto «Espaço privado para conversas» aberto.'),
                S('l2', '12', 'Visita 3D: interior da sala privada', 'Captura da visita Matterport: sala com um biombo de tecido roxo, um quadro branco e uma cadeira laranja.', 'Interior da sala privada no modelo 3D.'),
                S('l2', '13', 'Explore o espaço interativo', 'Miniatura da visita «Lição 2 — Receção e registo» com o endereço do modelo Matterport.', 'Explore o espaço interativo: my.matterport.com/show/?m=jGANKDh66Ls'),
                S('l2', '14', 'Explore os recursos e as restantes aulas', 'Ilustração de um homem com bengala junto a um mapa tátil, acompanhado por uma voluntária.', 'Explore os recursos e as restantes aulas.')
              ]
            }
          },
          { id: 'u4', kind: 'quiz', label: 'Unidade 4 · Teste 2', title: 'Prática: perguntas de cenário e síntese', duration: 'cerca de 1 min 40 s', quiz: 'licao2' }
        ],
        resources: [
          { title: 'Contrato de acolhimento — versão acessível', href: 'assets/docs/l2-contrato-acessivel.pdf', meta: 'PDF, 7 páginas, 300 kB' },
          { title: 'Contrato de acolhimento — versão normal (para comparação)', href: 'assets/docs/l2-contrato-normal.pdf', meta: 'PDF, 94 kB' },
          { title: 'Cartazes para o centro de acolhimento', href: 'assets/docs/l2-cartazes-centro-acolhimento.pdf', meta: 'PDF, 3,3 MB' },
          { title: 'Formulário de inscrição acessível (demonstração em JotForm)', href: 'https://submit.jotform.com/263027457542054', meta: 'Página externa', external: true }
        ]
      },

      /* =============================== LIÇÃO 3 =============================== */
      {
        n: 3,
        title: 'Orientação e acompanhamento',
        subtitle: 'Guiar em espaços desconhecidos',
        author: 'Henrique Ferreira', authorNumber: '1230761',
        cover: null,
        duration: 'cerca de 13 minutos',
        question: 'Como podemos ajudar alguém a deslocar-se com segurança e independência num centro de acolhimento desconhecido?',
        summary: 'Uma pessoa acabada de evacuar chega cansada, sob stress, a um espaço que nunca viu. Guiar bem é devolver-lhe orientação e autonomia, passo a passo.',
        objectives: [
          'Pedir permissão antes de oferecer guia físico e deixar a pessoa escolher como quer ser guiada.',
          'Descrever o ambiente imediato e dar indicações claras e sequenciais, usando referências espaciais estáveis.',
          'Identificar e comunicar percursos entre a receção, a sala de espera e a distribuição de bens.',
          'Verificar a compreensão, adaptar o ritmo e evitar puxar, empurrar ou presumir as necessidades da pessoa.'
        ],
        units: [
          {
            id: 'u1', kind: 'video', label: 'Unidade 1 · Vídeos', title: 'Guiar com apoio humano e orientação verbal', duration: '7 min 49 s',
            intro: 'Primeiro, uma aula com diapositivos explica os princípios do guia vidente: o primeiro contacto, a posição de quem guia, a linguagem a usar, o cão-guia, as passagens estreitas, as escadas e as cadeiras. Depois, um vídeo demonstrativo mostra a forma errada e a forma certa de guiar uma pessoa cega no centro de acolhimento.',
            video: {
              title: 'Princípios do guia vidente', duration: '6 min 13 s',
              src: 'assets/video/l3-u1-principios-guia-vidente.mp4', youtube: null,
              captions: 'assets/captions/l3-u1-aula.vtt',
              chapters: [
                { t: '0:00', label: 'Introdução' }, { t: '0:37', label: 'Primeiro contacto: apresentar, oferecer e posicionar' },
                { t: '1:28', label: 'Três princípios de ouro' }, { t: '2:11', label: 'Linguagem direcional e pontos de referência' },
                { t: '3:04', label: 'Cão-guia e dispositivos de assistência' }, { t: '3:52', label: 'Passagens estreitas, escadas e cadeiras' },
                { t: '4:46', label: 'Erros vs. boas práticas' }, { t: '5:31', label: 'Frases úteis e encerramento' }
              ],
              transcript: [
                { head: 'Introdução' },
                'Seja bem-vindo à Lição 3. Chegar a um ambiente novo ou pouco familiar é um desafio para qualquer pessoa, mas, para quem tem deficiência visual ou baixa visão, a autonomia na navegação depende diretamente de como o espaço está organizado e de como as equipas de apoio prestam o devido auxílio. Nos próximos 6 minutos, vamos aprender os princípios do guia vidente, a linguagem direcional correta e a forma adequada de antecipar obstáculos em edifícios e instalações que sejam desconhecidos.',
                { head: 'Primeiro contacto: apresentar, oferecer e posicionar' },
                'Como fazer um acompanhamento eficaz? Tudo começa no primeiro contacto. Aproxima-te de frente, diz qual é o teu nome e a tua função no local. Em seguida, pergunta abertamente se deseja acompanhamento até ao seu destino. Se a resposta for sim, pergunta como prefere ser guiada. A técnica padrão é oferecer o teu braço ou cotovelo, para que a pessoa se segure ligeiramente acima da articulação. Ao caminhar, mantém-te meio passo à frente. Desta forma, o teu próprio corpo funciona como um indicador natural de curvas, paragens e até mesmo, por exemplo, de degraus.',
                { head: 'Três princípios de ouro' },
                'Guiar alguém não significa conduzir a pessoa de forma passiva ou impositiva. O objetivo principal é sempre preservar a sua autonomia. Guarda estes três princípios de ouro. Primeiro, pede sempre consentimento: nunca assumas que a pessoa precisa de ser guiada sem perguntar. Em segundo lugar, respeita o espaço pessoal: nunca puxes pelo braço, pela bengala ou pelas roupas. E, por último, em terceiro lugar, foca-te na comunicação verbal: indica o que está ao redor e antecipa qualquer obstáculo.',
                { head: 'Linguagem direcional e pontos de referência' },
                'Na indicação de direções, a precisão das tuas palavras substitui a visão. Elimina por completo termos vagos como «ali», «acolá» ou «aqui». Usa sempre direções baseadas na perspetiva da pessoa assistida. Em vez de dizeres «A porta é ali», diz: «A porta fica à sua direita, a três passos.» Se for preciso virar, indica o ângulo: «Vamos virar 90° à esquerda no final deste corredor.» Utiliza também pontos de referência estáveis, que possam ajudar no reconhecimento tátil e auditivo, como, por exemplo, o balcão principal ou o som de um ponto de água.',
                { head: 'Cão-guia e dispositivos de assistência' },
                'Um aspeto fundamental no acompanhamento é respeitar os meios de assistência da pessoa. Se a pessoa estiver acompanhada por um cão-guia, lembra-te: o cão está a trabalhar. Nunca tentes fazer-lhe festas, dar-lhe comida ou distrair o animal. Caminha do lado oposto ao do cão-guia e dirige-te sempre à pessoa, nunca ao cão. Se a pessoa utilizar uma bengala branca ou aplicações de navegação no telemóvel, respeita o seu uso. A bengala e a tecnologia são extensões do próprio corpo e da autonomia da pessoa. Não lhes toques nem as movas sem autorização.',
                { head: 'Passagens estreitas, escadas e cadeiras' },
                'Antecipar mudanças no trajeto é algo extremamente essencial para garantirmos que evitamos qualquer tipo de acidente. Em passagens estreitas, avisa verbalmente e coloca o teu braço atrás das tuas costas. Este gesto indica à pessoa que deve posicionar-se diretamente atrás de ti. Nas escadas, para um segundo antes do primeiro degrau. Indica se vamos subir ou descer e refere de que lado fica o corrimão. Mantém o ritmo e avisa quando chegarem ao último degrau. Para sentar a pessoa, nunca empurres. Guia suavemente a mão dela até ao encosto ou até ao braço da cadeira e descreve, então, como é que está a posição da mesa.',
                { head: 'Erros vs. boas práticas' },
                'Vamos comparar a diferença entre o que não fazer e o que seria a boa prática. Na abordagem, nunca agarres na mão ou no braço: apresenta-te e pergunta como prefere ser guiada. Durante o percurso, não caminhes ao lado nem puxes a pessoa: caminha meio passo à frente. Nas direções, evita dizer «É logo ali». Opta por: «Fica a 10 metros, virando à sua esquerda.» E, nas escadas, não grites «Cuidado!» no último segundo. Descreve antecipadamente o número de degraus para, desta maneira, garantir que a pessoa está preparada para o que vem.',
                { head: 'Frases úteis e encerramento' },
                'Guarda estas frases para o teu dia a dia: «Olá, o meu nome é…» (e refere o teu nome). «Posso ajudar a encontrar a sua sala?» «Prefere segurar no meu cotovelo esquerdo ou direito?» «Estamos já a aproximar-nos de uma porta, que abre para dentro.» «Chegámos ao local. A sua cadeira está à sua esquerda.» Um acompanhamento inclusivo combina clareza nas palavras e respeito pela autonomia. Agora, vê o vídeo demonstrativo da Lição 3 e completa o questionário de consolidação. Bom trabalho!'
              ]
            },
            moreVideos: [
              {
                heading: 'Vídeo demonstrativo',
                video: {
                  title: 'Exemplo encenado: guiar no centro de acolhimento', duration: '1 min 36 s',
                  src: 'assets/video/l3-u1-exemplo-encenado.mp4', youtube: null,
                  captions: 'assets/captions/l3-u1-exemplo.vtt',
                  note: 'No exemplo correto, parte do diálogo é pouco audível; a transcrição descreve o que acontece.',
                  chapters: [
                    { t: '0:00', label: 'Abordagem incorreta' }, { t: '0:34', label: 'O que correu mal?' },
                    { t: '0:36', label: 'Exemplo correto: perguntar' }, { t: '0:58', label: 'Guiar pelo corredor' },
                    { t: '1:12', label: 'Avisar os obstáculos' }, { t: '1:21', label: 'Escadas' }
                  ],
                  transcriptLabel: 'Transcrição e descrição',
                  transcript: [
                    { head: 'Abordagem incorreta' },
                    { desc: 'Cartão de título: «Lição 3 — Orientação e acompanhamento». Na receção, um homem de óculos escuros está sentado a falar com a rececionista.' },
                    { speaker: 'Senhor', text: 'Desculpe, eu estava aqui com um bocado de fome. Gostava só de saber para onde é que me podia dirigir.' },
                    { speaker: 'Rececionista', text: 'Sim, o centro de acolhimento tem uma sala de serviços e de mantimentos. João, ajudas o senhor a ir à sala de mantimentos, se faz favor?' },
                    { desc: 'O ajudante, João, agarra o senhor pelo braço sem perguntar e levanta-o da cadeira.' },
                    { speaker: 'João', text: 'Vamos aqui. Bem, se vier aqui… Está ali à frente, à esquerda. Consegue lá chegar, é só [impercetível].' },
                    { desc: 'À porta, João aponta em frente com o braço estendido, em vez de descrever o caminho.' },
                    { head: 'O que correu mal?' },
                    'O que correu mal?',
                    { head: 'Exemplo correto' },
                    'Vamos ver um exemplo correto.',
                    { desc: 'De volta à receção, com o texto «Perguntar» no ecrã, outro ajudante aproxima-se e pergunta ao senhor se quer ser acompanhado.' },
                    { speaker: 'Senhor', text: 'Sim, se for possível.' },
                    { desc: 'Combinam como guiar (diálogo pouco audível). O senhor levanta-se e apoia a mão no ombro do ajudante, que caminha meio passo à frente pelo corredor; no ecrã, o texto «Guiar».' },
                    { head: 'Obstáculos e escadas' },
                    'Caso existam obstáculos, devemos avisar.',
                    { desc: 'Os dois passam junto a um caixote do lixo no corredor.' },
                    'Especialmente com escadas.',
                    { desc: 'Param ao fundo de uma escada e sobem-na devagar, lado a lado.' },
                    'Devemos sempre evitar potenciais desastres. Orientação apropriada é uma obrigação.'
                  ]
                }
              }
            ],
            keyPoints:
              '<div class="table-wrap"><table><caption>Guiar bem: errado e certo</caption>' +
              '<thead><tr><th scope="col">Aspeto</th><th scope="col">Evitar</th><th scope="col">Preferir</th></tr></thead><tbody>' +
              '<tr><th scope="row">Abordagem</th><td>Agarrar o braço da pessoa</td><td>Perguntar se quer ajuda e como prefere ser guiada</td></tr>' +
              '<tr><th scope="row">Posição</th><td>Caminhar ao lado, a puxar</td><td>Caminhar meio passo à frente, com a pessoa apoiada no braço ou no ombro</td></tr>' +
              '<tr><th scope="row">Instruções</th><td>«É ali», «acolá», «aqui»</td><td>«A dez metros, à sua esquerda», «a três passos»</td></tr>' +
              '<tr><th scope="row">Obstáculos</th><td>Gritar «cuidado!»</td><td>Descrever o obstáculo antes de lá chegar: «Há um degrau a descer à sua frente.»</td></tr>' +
              '</tbody></table></div>'
          },
          {
            id: 'u2', kind: 'interactive', label: 'Unidade 2 · Interação ativa', title: 'Explorar o percurso do centro', duration: '2 min 30 s + exploração livre',
            intro: 'Aplique as regras de guia num centro realista: identifique pontos de referência, escolha um percurso claro, antecipe obstáculos e escolha formas respeitadoras de oferecer ajuda. Em cada ponto há uma decisão para tomar.',
            matterport: MP + 'WxRQNQh4oVo',
            matterportTitle: 'Percurso do centro de acolhimento',
            tagsTitle: 'Os quatro pontos de decisão (alternativa em texto ao modelo 3D)',
            tags: [
              { title: 'Pedido de ajuda à chegada', question: 'Uma pessoa recém-evacuada pergunta como chegar à distribuição de bens. O que faz primeiro?', helps: 'Apresentar-se, perguntar se quer ajuda e como prefere ser guiada.' },
              { title: 'Cruzamento de corredores', question: 'Que direção indica, e como?', helps: 'Escolher a direção mais clara usando um ponto de referência e a orientação esquerda/direita; identificar a porta ou a curva e qualquer obstáculo.' },
              { title: 'A caminho da sala de espera', question: 'Como descreve o percurso e o espaço?', helps: 'Identificar um percurso adequado e descrever os lugares, a entrada e os pontos de referência relevantes, sem o vago «aqui» ou «ali».' },
              { title: 'Chegada à distribuição de bens', question: 'Chegaram ao destino. E agora?', helps: 'Anunciar a chegada, explicar a disposição do espaço e perguntar se a pessoa quer mais ajuda.' }
            ]
          },
          { id: 'u3', kind: 'quiz', label: 'Unidade 3 · Trabalho de casa', title: 'Decisões de percurso e conclusão', duration: 'cerca de 2 min 30 s', quiz: 'licao3' }
        ],
        resources: []
      },

      /* =============================== LIÇÃO 4 =============================== */
      {
        n: 4,
        title: 'Acesso a apoios essenciais',
        subtitle: 'Filas, senhas, alimentação, saúde e apoio social',
        author: 'Leonor Gomes', authorNumber: '1222065',
        cover: null,
        duration: 'cerca de 14 minutos',
        question: 'Como garantir que uma pessoa com deficiência visual acede aos serviços essenciais do centro (alimentação, saúde e apoio social) de forma digna, segura e informada?',
        summary: 'Filas demoradas e ruidosas, senhas que só se veem num ecrã e balcões apressados: como organizar o espaço e o atendimento sem comprometer a autonomia da pessoa.',
        objectives: [
          'Organizar e gerir filas de forma acessível, mesmo em situações de grande afluência.',
          'Oferecer alternativas a sistemas de senhas exclusivamente visuais.',
          'Apoiar a recolha de bens numa cantina ou num ponto de distribuição.',
          'Encaminhar e guiar corretamente até aos postos médicos e dentro deles.',
          'Apoiar o preenchimento da documentação de apoio social, protegendo a confidencialidade.'
        ],
        units: [
          {
            id: 'u1', kind: 'video', label: 'Unidade 1 · Vídeo', title: 'Acessibilidade geral: acompanhamento, filas e senhas', duration: '5 min 21 s',
            intro: 'Uma pessoa chega a um centro com uma fila desorganizada e um sistema de senhas apenas visual. Que erros se cometem e como se ajuda sem comprometer a autonomia?',
            video: {
              title: 'Acessibilidade geral: acompanhamento, filas e senhas', duration: '5 min 21 s', src: 'assets/video/l4-u1-filas-senhas.mp4', youtube: null,
              captions: 'assets/captions/l4-u1.vtt',
              transcript: [
                'Em diversas situações de crise, pode surgir a necessidade de recorrer a serviços essenciais, como o acesso à alimentação, a cuidados de saúde e a apoio social. Nestes cenários, podem existir filas de acesso demoradas, ruidosas e que provocam receio, desconforto ou tensão. Nestes ambientes, a dificuldade visual pode tornar-se uma barreira grave. Por isso, neste capítulo, o objetivo principal é dotar os alunos de competências para organizar e gerir filas, garantir acessibilidade e promover a autonomia da pessoa com deficiência visual. Fique atento ao próximo vídeo.',
                { desc: 'Exemplo incorreto: uma pessoa cega chega a uma fila desorganizada, com um sistema de senhas apenas visual e sem ninguém designado para ajudar.' },
                { head: 'O que aconteceu neste vídeo?' },
                'Em contextos de crise, a acessibilidade desce na escala de prioridades, deixando pessoas com diversos tipos de deficiência isoladas e confusas. Neste cenário, o espaço não tinha nenhum tipo de suporte: nem pessoa designada para ajudar, nem piso tátil, nem sistema de senhas com opção sonora.',
                { head: 'Erros comuns' },
                'O uso de senhas exclusivamente visuais, sem alternativas sonoras ou indicações táteis. Na falta desses sistemas, a falta de acompanhamento. Permitir que a pessoa não seja informada da sua vez por falta de informação sonora. A organização inapropriada do espaço, que o torna inacessível à locomoção autónoma da pessoa com deficiência visual.',
                { head: 'Regras de acessibilidade' },
                'Regra 1: oferecer alternativas ao sistema de senhas — alternativas sonoras, botões físicos com indicações em braille ou uma pessoa designada para ajudar, que deve seguir as indicações da Lição 1. Regra 2: informação sonora — garantir que a vez é indicada de forma sonora, seja por um sistema dedicado, seja por um ajudante. Regra 3: criar um espaço adequado à locomoção autónoma. Os objetos decorativos devem ficar nas margens e as cadeiras de espera num espaço designado, em vez de espalhadas de forma irregular. Se possível, colocar piso tátil direcional para facilitar a orientação com bengala.',
                { head: 'Como devemos ajudar?' },
                'Se eu for a pessoa designada para ajudar, posso encaminhar diretamente para o primeiro balcão disponível? Nunca devemos comprometer a autonomia da pessoa. Devemos, sim, perguntar se a pessoa precisa de ajuda; se disser que não, devemos respeitar. E nunca assumir o nível de incapacidade da pessoa. Embora possa parecer um gesto de boa vontade, encaminhar a pessoa automaticamente para a frente da fila sem a consultar pode causar desconforto: além de lhe retirar o controlo, presume uma incapacidade que ela pode não sentir. Pergunte sempre se a ajuda é bem-vinda. No próximo vídeo, veja o exemplo correto de como ajudar.',
                { head: 'Exemplo correto' },
                { speaker: 'Funcionário', text: 'Olá, sou do serviço de segurança social. Precisa de alguma ajuda?' },
                { speaker: 'Utente', text: 'Sim, gostava de tirar uma senha.' },
                { speaker: 'Funcionário', text: 'Prefere atendimento geral ou prioritário?' },
                { speaker: 'Utente', text: 'Atendimento geral, sim.' },
                { head: 'A realçar neste vídeo' },
                'Existe alguém designado para ajudar, na ausência de outros sistemas acessíveis. Cumprem-se as regras de como abordar e acompanhar alguém com deficiência visual, mencionadas na Lição 1. E a autonomia da pessoa não é comprometida: ela mantém o controlo da situação, escolhendo o tipo de senha e se deseja ser acompanhada. Para relembrar: se a pessoa aceitar ser acompanhada, siga o seu ritmo; descreva a direção e os possíveis obstáculos; tente prever e indicar o tempo de espera, para que a pessoa possa escolher se quer sentar-se ou aguardar de pé; e respeite o cão-guia e o equipamento de apoio — não toque no cão nem lhe ofereça comida, e não puxe a bengala na tentativa de ajudar. Na próxima sessão, vamos abordar de forma mais específica o acesso à alimentação, à saúde e à segurança social.'
              ]
            },
            extraVideos: [
              {
                title: 'Exemplo encenado — abordagem incorreta', duration: '8 s', src: 'assets/video/l4-exemplo-incorreto.mp4',
                transcript: [{ desc: 'Uma pessoa cega aproxima-se de uma fila com um sistema de senhas apenas visual. Não há ninguém designado para ajudar nem qualquer indicação sonora ou tátil.' }],
                transcriptLabel: 'Descrição do vídeo'
              },
              {
                title: 'Exemplo encenado — abordagem correta', duration: '31 s', src: 'assets/video/l4-exemplo-correto.mp4',
                transcriptLabel: 'Transcrição',
                transcript: [
                  { desc: 'Um funcionário aproxima-se da pessoa cega, que está junto à máquina das senhas.' },
                  { speaker: 'Funcionário', text: 'Olá, sou do serviço de segurança social. Precisa de alguma ajuda?' },
                  { speaker: 'Utente', text: 'Sim, gostava de tirar uma senha.' },
                  { speaker: 'Funcionário', text: 'Prefere atendimento geral ou prioritário?' },
                  { speaker: 'Utente', text: 'Atendimento geral, sim.' },
                  { desc: 'O funcionário tira a senha escolhida e oferece-se para acompanhar a pessoa até à zona de espera.' }
                ]
              }
            ]
          },
          {
            id: 'u2', kind: 'video', label: 'Unidade 2 · Vídeo', title: 'Acesso a bens alimentares, saúde e segurança social', duration: '3 min 21 s',
            intro: 'Três cenários: a recolha de bens num ponto de distribuição, o encaminhamento para postos médicos e o apoio nos serviços sociais.',
            video: {
              title: 'Acesso a bens alimentares, serviços de saúde e serviços de segurança social', duration: '3 min 21 s',
              src: 'assets/video/l4-u2-servicos-essenciais.mp4', captions: 'assets/captions/l4-u2.vtt',
              transcript: [
                'Depois de assegurar a acessibilidade geral nos diversos espaços, é necessário garantir que a pessoa com deficiência visual consegue aceder aos serviços essenciais de forma digna e informada. Esta lição aborda três cenários: o apoio à recolha de bens num ponto de distribuição, o encaminhamento para postos médicos e o apoio nos serviços sociais.',
                { head: 'Erros comuns' },
                'Nos pontos de distribuição alimentar, ceder à pressão das filas e tentar despachar a pessoa, ignorando o seu ritmo, é um dos erros mais comuns. Nos serviços de saúde, não fazer a distinção entre o apoio logístico e o apoio clínico. Nos apoios sociais, ler documentos em voz alta de forma a expor a confidencialidade dos dados pessoais, ou usar um tom infantil ou parcial.',
                { head: 'Pontos de distribuição e cantinas' },
                'Descreva as opções quentes e frias disponíveis para recolha. Ofereça o braço para guiar a pessoa enquanto ela gere o tabuleiro e a bengala, se assim o pretender. Acompanhe o ritmo da pessoa, mesmo que haja pressão para acelerar a fila.',
                { head: 'Serviços de saúde' },
                'Dê instruções de mobilidade precisas, sobretudo porque se trata normalmente de espaços pequenos, lotados e stressantes. Mantenha uma distinção clara entre o apoio logístico e o apoio clínico e tente, sempre que possível, ter pessoas diferentes para cada um. Assegure que o sistema de senhas e de chamada é acessível, como referido na aula anterior.',
                { head: 'Serviços de segurança social' },
                'Assegure que existe um balcão que promova a autonomia da pessoa com deficiência visual. A leitura de documentos e formulários deve ser feita sem expor a confidencialidade dos dados pessoais, se possível numa sala privada designada para o efeito. Leia os formulários de forma imparcial e sem infantilizar. Em cenários de crise, deve haver compreensão pela falta de documentos: uma pessoa que acabou de ser evacuada pode não os ter consigo.',
                { head: 'Direitos a conhecer' },
                'Conheça os direitos das pessoas com deficiência visual, para as poder informar: direito legal a atendimento prioritário em todos os serviços públicos e privados com atendimento presencial; direito de aceder a locais públicos, transportes e estabelecimentos comerciais, de saúde e de restauração acompanhadas por um cão-guia, sem que lhes possa ser barrada a entrada ou cobrado qualquer valor adicional; direito de circular em edifícios públicos e espaços urbanos sem barreiras arquitetónicas, com pisos táteis, sinalética adequada e eliminação de obstáculos.',
                'Obrigada pela atenção! Explore na próxima secção um cenário 3D com a aplicação dos conhecimentos desta lição.'
              ]
            }
          },
          {
            id: 'u3', kind: 'interactive', label: 'Unidade 3 · Trabalho de casa', title: 'Cenário 3D e resumo da lição', duration: 'cerca de 6 min',
            intro: 'Aplique o que aprendeu num cenário 3D simulado de um serviço para pessoas evacuadas. O manual de apoio resume todas as regras desta lição.',
            matterport: MP + '9gJEGVfke7t',
            matterportTitle: 'Serviço de apoio para pessoas evacuadas',
            preview: { title: 'Animação do cenário 3D (sem som)', duration: '11 s', src: 'assets/video/l4-matterport.mp4', note: 'Animação silenciosa de apresentação do modelo 3D desta lição.' },
            alternativeHtml:
              '<h4>Resumo das regras (alternativa em texto)</h4>' +
              '<ul class="check-list">' +
                '<li><strong>Senhas:</strong> nunca apenas visuais. Aviso sonoro, botões com braille ou uma pessoa designada que informe verbalmente a vez.</li>' +
                '<li><strong>Espaço:</strong> objetos decorativos nas margens, cadeiras de espera agrupadas num espaço próprio e, se possível, piso tátil direcional.</li>' +
                '<li><strong>Acompanhamento:</strong> perguntar sempre se a pessoa precisa de ajuda e respeitar a resposta; oferecer o braço, seguir o seu ritmo, descrever a direção e os obstáculos, indicar o tempo de espera previsto.</li>' +
                '<li><strong>Distribuição e cantinas:</strong> descrever as opções disponíveis (quentes e frias) e guiar enquanto a pessoa gere o tabuleiro e a bengala.</li>' +
                '<li><strong>Saúde:</strong> instruções de mobilidade precisas e separação entre apoio logístico e apoio clínico.</li>' +
                '<li><strong>Apoio social:</strong> confidencialidade na leitura de documentos, tom imparcial e compreensão pela falta de documentos.</li>' +
                '<li><strong>Cão-guia e bengala:</strong> não tocar no cão nem lhe dar comida, e não puxar a bengala.</li>' +
              '</ul>'
          },
          { id: 'u4', kind: 'quiz', label: 'Unidade 3 · Questionário', title: 'Teste final da lição', duration: 'cerca de 2 min', quiz: 'licao4' }
        ],
        resources: [
          { title: 'Manual de acessibilidade a serviços essenciais', href: 'assets/docs/l4-manual-acessibilidade-servicos-essenciais.pdf', meta: 'PDF, 2 páginas, 177 kB' },
          { title: 'Acessibilidade geral: acompanhamento, filas e senhas (apresentação)', href: 'assets/docs/l4-acompanhamento-filas-senhas.pdf', meta: 'PDF, 15 páginas, 1,9 MB' },
          { title: 'Acesso a serviços essenciais (apresentação)', href: 'assets/docs/l4-servicos-essenciais.pdf', meta: 'PDF, 1,3 MB' }
        ]
      },

      /* =============================== LIÇÃO 5 =============================== */
      {
        n: 5,
        title: 'Segurança e emergências',
        subtitle: 'Acessibilidade, riscos e resposta a emergências',
        author: 'Adrian De Freitas', authorNumber: '1221360',
        cover: 'assets/img/l5-capa.webp',
        coverAlt: 'Ilustração de um homem com bengala junto a um mapa tátil e uma voluntária, com o título «Situações de emergência: ajudar é fundamental».',
        duration: 'cerca de 15 minutos',
        question: 'Como podemos prevenir perigos e tornar a informação de segurança utilizável por uma pessoa cega ou com baixa visão?',
        summary: 'Num centro temporário, o espaço muda muitas vezes: cabos, cadeiras deslocadas, passagens fechadas e avisos só em papel. Como identificar riscos, alertar com clareza e apoiar numa evacuação.',
        objectives: [
          'Identificar perigos em espaços de circulação, como cabos, mobiliário deslocado e alterações inesperadas de percurso.',
          'Reconhecer situações em que a informação de segurança está disponível apenas visualmente.',
          'Dar um aviso verbal claro, indicando o perigo, a sua localização e a ação segura imediata.',
          'Explicar como oferecer assistência de forma respeitadora e seguir os procedimentos de emergência do local.'
        ],
        units: [
          {
            id: 'u1', kind: 'video', label: 'Unidade 1 · Vídeo', title: 'Reconhecer riscos e dar alertas acessíveis', duration: '6 min 56 s',
            intro: 'Um exemplo encenado do que pode correr mal numa emergência, a análise passo a passo dos erros e a forma correta de prestar apoio.',
            video: {
              title: 'Reconhecer riscos e dar alertas acessíveis', duration: '6 min 56 s',
              src: 'assets/video/l5-u1-riscos-alertas.mp4', poster: 'assets/slides/l5/01.webp', youtube: null,
              captions: 'assets/captions/l5-u1.vtt',
              chapters: [
                { t: '0:00', label: 'Introdução' }, { t: '0:34', label: 'Um percurso habitual pode mudar' },
                { t: '0:47', label: 'Exemplo do que pode acontecer' }, { t: '1:02', label: 'O que aconteceu? Análise passo a passo' },
                { t: '1:42', label: 'Segundo erro e obstáculos inesperados' }, { t: '3:06', label: 'Erros levam a consequências' },
                { t: '3:14', label: 'A forma correta' }, { t: '5:29', label: 'Fase final' }
              ],
              transcriptLabel: 'Transcrição da narração',
              transcript: [
                'Em situações de emergência, ajudar pessoas com deficiência visual é fundamental.',
                'Num contexto de crise ou emergência, os espaços podem mudar rapidamente. Uma cadeira pode ser deslocada, um cabo pode ficar no chão, uma passagem pode ser encerrada ou um aviso importante pode existir apenas em formato visual. Para uma pessoa cega ou com baixa visão, estas alterações podem transformar um percurso habitual num percurso inseguro. Nesta aula, vais aprender a reconhecer estes riscos, a comunicar perigos de forma acessível e a prestar apoio de forma respeitadora em situações de emergência.',
                'Pela confusão ou pela natureza da própria emergência, um percurso habitual pode ficar obstruído, com obstáculos novos e diferentes, ou pode haver algum sinal de segurança que seja apenas visual.',
                'Agora vamos ver um exemplo do que pode chegar a acontecer.',
                { desc: 'Exemplo encenado: durante uma emergência, uma pessoa com deficiência visual percorre um espaço que conhece, agora com obstáculos e indicações vagas.' },
                { head: 'O que aconteceu?' },
                'Vou explicar, passo a passo, tudo o que correu mal neste vídeo. Temos uma pessoa com deficiência visual num ambiente conhecido; por isso, à partida, consegue guiar-se sozinha. No entanto, por causa da emergência, terá algumas dificuldades.',
                { head: 'Primeiro erro — linguagem inadequada' },
                'Numa situação de emergência, indicações vagas e um tom apressado podem gerar confusão e ansiedade. É essencial comunicar de forma clara e calma, fornecendo referências espaciais precisas que permitam à pessoa orientar-se em segurança.',
                { head: 'Segundo erro — falta de ajuda e de avisos' },
                'Nesta parte, podemos ver dois erros claríssimos. Para começar, duas pessoas dão indicações vagas e pouco específicas, que não ajudam uma pessoa com deficiência visual a orientar-se. Além disso, não oferecem ajuda nem alertam para os obstáculos presentes no percurso, o que dificulta uma deslocação segura.',
                { head: 'Obstáculos inesperados' },
                'De seguida, encontramos vários obstáculos inesperados que, à primeira vista, podem parecer insignificantes, porque quem consegue ver os identifica e contorna facilmente. No entanto, para uma pessoa com deficiência visual, estes pequenos obstáculos podem representar um perigo significativo. Objetos fora do lugar, cadeiras deslocadas ou materiais espalhados pelo chão podem interromper percursos que a pessoa já conhece e utiliza habitualmente. Como estas alterações surgem sem aviso, tornam-se especialmente difíceis de antecipar. Numa emergência, com confusão, ruído e pressão para abandonar rapidamente o local, estas dificuldades tornam-se ainda mais graves. Por isso, é fundamental manter os caminhos desimpedidos e comunicar claramente qualquer obstáculo ou alteração no percurso.',
                'A junção de todos estes erros leva a consequências.',
                { head: 'A forma correta' },
                'Vamos agora apresentar a forma mais adequada de agir perante este tipo de situações, demonstrando como uma comunicação clara e uma orientação correta podem fazer toda a diferença. É fundamental lembrar, no entanto, que qualquer tentativa de ajudar deve respeitar sempre as condições de segurança, tanto da pessoa que precisa de apoio como de quem o presta. Ajudar os outros nunca deve significar pôr a nossa própria integridade em risco.',
                'Em primeiro lugar, é fundamental oferecer apoio de forma segura e respeitosa, garantindo que a pessoa se sente confortável e mantém o controlo dos seus movimentos. Devemos perguntar como prefere ser ajudada e, caso aceite, permitir que segure no nosso braço, proporcionando uma orientação firme e estável, sem puxões ou movimentos bruscos. Em situações de perigo imediato, devemos agir com rapidez, comunicando claramente o que está a acontecer e seguindo os procedimentos de segurança, de modo a proteger ambas as pessoas.',
                'De seguida, devemos orientar a pessoa através de instruções claras, precisas e tranquilas. Durante a deslocação, é essencial identificar e contornar os obstáculos, alertando sempre para a sua presença e localização. Sempre que possível, devemos descrever antecipadamente as alterações no percurso, como mudanças de direção, degraus, portas, desníveis ou objetos. Em vez de expressões vagas como «por aqui» ou «cuidado», devemos dar referências concretas. É igualmente importante explicar o que está a acontecer à nossa volta, mas apenas a informação relevante, de forma organizada e sem sobrecarregar a pessoa. O objetivo é tornar o percurso o mais previsível e seguro possível, mantendo a autonomia da pessoa.',
                { head: 'Fase final' },
                'Por fim, ao chegarmos à saída de emergência, devemos garantir que a pessoa se encontra num local seguro, afastado de possíveis perigos e da movimentação mais intensa. É importante comunicar-lhe que o percurso de evacuação terminou, explicar brevemente onde se encontra e indicar o que vai acontecer a seguir. A nossa responsabilidade não termina ao alcançar a saída: devemos confirmar se a pessoa precisa de apoio adicional e, se necessário, ajudá-la a contactar os responsáveis pela segurança ou os serviços de emergência. Acima de tudo, devemos evitar deixá-la sozinha num ambiente desconhecido sem confirmar que está orientada e tem o apoio de que precisa. O objetivo não é apenas retirar alguém de uma situação de perigo, mas garantir que essa pessoa consegue alcançar um local seguro com dignidade, confiança e autonomia, respeitando sempre as suas decisões e os procedimentos de emergência estabelecidos.',
                'Agora que sabes os passos para guiar uma pessoa com deficiência visual à segurança, em situações de emergência, vamos ver como é que estes ficam quando aplicados numa situação real.',
                { desc: 'Demonstração: o ajudante acompanha a pessoa pelo corredor até à saída e despede-se com um aperto de mão.' },
                'Esperamos que, se algum dia te encontrares numa situação semelhante, te lembres deste vídeo e dos cuidados a ter ao ajudar alguém com deficiência visual. Obrigada e stay safe.'
              ]
            },
            slides: {
              title: 'Diapositivos do vídeo da Unidade 1',
              slides: [
                S('l5', '01', 'Situações de emergência: ajudar é fundamental', 'Ilustração de um homem com bengala junto a um mapa tátil, com uma voluntária, sobre fundo lilás.', 'Situações de emergência — ajudar é fundamental.'),
                S('l5', '02', 'Duas coisas: informação e obstáculos', 'Cartões coloridos com «2 Coisas» e «Informação, Obstáculos», ao lado da ilustração de uma pessoa a explicar algo num quadro.', 'Duas coisas a ter em conta: a informação e os obstáculos.'),
                S('l5', '03', 'Exemplo', 'A palavra «Exemplo» em letras grandes, ao lado da ilustração de duas pessoas a conversar a uma mesa.', 'Agora vamos ver um exemplo do que pode chegar a acontecer.'),
                S('l5', '04', 'Que aconteceu?', 'Ilustração de duas pessoas diante de um quadro, com os cartões «Que aconteceu?» e «Veremos passo a passo tudo o que correu mal».', 'Que aconteceu? Veremos passo a passo tudo o que correu mal.'),
                S('l5', '05', 'Erros levam a consequências', 'Ilustração de pessoas a uma secretária em tons vermelhos, com um grande X vermelho.', 'Erros levam a consequências.'),
                S('l5', '06', 'Forma correta', 'Ilustração de pessoas a uma secretária em tons verdes, com um grande visto verde.', 'A forma correta de prestar apoio.'),
                S('l5', '07', 'Fase final: o trabalho ainda não acabou', 'Cartão roxo com o título «Fase final», ao lado da ilustração de um grupo de pessoas numa sala.', 'Fase final — o trabalho ainda não acabou.')
              ]
            }
          },
          {
            id: 'u2', kind: 'article', label: 'Unidade 2 · Artigo', title: 'Segurança acessível: identificar, alertar, apoiar', duration: 'cerca de 4 min de leitura',
            html:
              '<figure><img src="assets/img/l5-introducao.webp" alt="Pernas de uma pessoa com bengala branca a caminhar num corredor de piso brilhante." loading="lazy"><figcaption>Pequenas alterações no espaço podem tornar um percurso inseguro.</figcaption></figure>' +
              '<p>Num contexto de crise ou emergência, os espaços podem mudar rapidamente. Uma cadeira pode ser deslocada, um cabo pode ficar no chão, uma passagem pode ser encerrada ou um aviso importante pode existir apenas em formato visual. Para uma pessoa cega ou com baixa visão, estas alterações podem transformar um percurso habitual num percurso inseguro.</p>' +
              '<h3>Um percurso conhecido pode mudar</h3>' +
              '<p>Imagine uma pessoa com deficiência visual num centro de acolhimento temporário, depois de ter sido evacuada. Nos últimos dias, começou a conhecer alguns corredores. Hoje, porém, uma cadeira foi deslocada para o corredor, há um cabo no chão e a passagem habitual foi encerrada com um aviso escrito na parede. Para quem vê, estes obstáculos identificam-se facilmente. Para uma pessoa cega, podem não ser detetados a tempo.</p>' +
              '<p><strong>Pergunta para reflexão:</strong> se estivesse neste corredor, o que poderia fazer para tornar o percurso mais seguro?</p>' +
              '<figure><img src="assets/img/l5-percursomuda.webp" alt="Corredor com uma cadeira deslocada, uma mochila no chão e uma fita a bloquear a passagem, junto a um cartaz «Passagem interditada»." loading="lazy"><figcaption>Um percurso habitual pode ter novos obstáculos e avisos apenas visuais.</figcaption></figure>' +
              '<h3>1. Identificar e reduzir riscos</h3>' +
              '<p>A primeira medida de segurança é reconhecer os perigos e procurar eliminá-los ou reduzi-los. Preste atenção a:</p>' +
              '<ul><li>cabos ou objetos no chão;</li><li>cadeiras e mobiliário fora do lugar habitual;</li><li>mochilas, caixas ou equipamentos nas zonas de passagem;</li><li>portas ou saídas parcialmente bloqueadas;</li><li>obstáculos inesperados, incluindo objetos à altura da cabeça;</li><li>alterações temporárias aos percursos habituais;</li><li>avisos de segurança exclusivamente visuais.</li></ul>' +
              '<p>Sempre que seja seguro e autorizado, remova o obstáculo ou reduza o perigo. Se não for possível, assinale o risco e comunique-o às pessoas responsáveis pelo espaço: o objetivo é também evitar que outras pessoas encontrem o mesmo perigo.</p>' +
              '<p class="rule-box">Regra principal: identificar → reduzir ou isolar → comunicar.</p>' +
              '<h3>2. Dar alertas claros e acessíveis</h3>' +
              '<p>Dizer apenas «Cuidado!» normalmente não basta: indica que há um problema, mas não qual é o perigo, onde está nem o que fazer. Um alerta acessível tem três elementos:</p>' +
              '<ol><li><strong>Perigo</strong> — «Há um cabo no chão.»</li><li><strong>Localização</strong> — «Há um cabo no chão, mesmo à sua frente.»</li><li><strong>Ação</strong> — «Pare, por favor. Há um cabo no chão à sua frente.»</li></ol>' +
              '<p>Evite expressões vagas como «É ali», «Por aqui», «Veja ali» ou «Cuidado com isso», que dependem de gestos ou de referências visuais.</p>' +
              '<figure><img src="assets/img/l5-darinstrucoes.webp" alt="Duas ilustrações lado a lado: à esquerda, alguém grita «Cuidado!» (marcado com X vermelho); à direita, uma voluntária diz «Pare, por favor. Há um cabo no chão à sua frente.» (marcado com visto verde)." loading="lazy"><figcaption>«Cuidado!» não chega: indique o perigo, a localização e a ação segura.</figcaption></figure>' +
              '<p class="rule-box">Regra principal: perigo + localização + ação segura.</p>' +
              '<h3>3. Quando a informação de segurança é apenas visual</h3>' +
              '<p>Se uma passagem foi encerrada e só existe um cartaz «Passagem interditada», quem não o consegue ler pode continuar pelo percurso sem saber que mudou. Transmita a informação de forma acessível: «A passagem habitual está temporariamente encerrada.» Depois de confirmar qual é o percurso alternativo seguro, acrescente: «O percurso alternativo indicado pela equipa de segurança começa pelo corredor à sua direita.» <strong>Nunca indique um percurso alternativo sem confirmar previamente que é seguro.</strong></p>' +
              '<figure><img src="assets/img/l5-informacaoacessivel.webp" alt="À esquerda, um cartaz «Passagem interditada» marcado como «Apenas visual (pode não ser acessível)»; à direita, uma voluntária explica verbalmente que a passagem está encerrada e indica o percurso alternativo, marcado como «Informação acessível (verbal e clara)»." loading="lazy"><figcaption>Um aviso só em papel não chega a toda a gente.</figcaption></figure>' +
              '<h3>4. Apoiar numa situação de emergência</h3>' +
              '<p>Ajudar uma pessoa cega numa emergência não significa agarrá-la e começar a deslocá-la. Sempre que a situação o permita, siga cinco passos:</p>' +
              '<ol class="num-list"><li><strong>Identificar-se:</strong> dizer quem é e, quando relevante, qual é a sua função.</li><li><strong>Explicar a situação:</strong> comunicar de forma breve e clara o que está a acontecer.</li><li><strong>Oferecer ajuda:</strong> perguntar se a pessoa precisa de assistência.</li><li><strong>Respeitar as preferências:</strong> perguntar como prefere ser orientada, sem agarrar, puxar ou empurrar.</li><li><strong>Seguir o plano de emergência:</strong> cumprir as instruções da equipa de segurança e os procedimentos do local.</li></ol>' +
              '<p>Exemplo: «Sou voluntário deste centro. Está a tocar o alarme de evacuação. Posso ajudá-la a chegar à saída?» Durante a deslocação, anuncie antecipadamente portas, mudanças de direção, degraus e obstáculos. Cada edifício tem procedimentos próprios: nunca improvise percursos de evacuação.</p>' +
              '<figure><img src="assets/img/l5-apoiaremergencia.webp" alt="Uma voluntária de colete refletor acompanha uma mulher com óculos escuros e bengala branca num corredor, junto a um sinal de saída de emergência." loading="lazy"><figcaption>Identificar-se, explicar a situação, oferecer ajuda e seguir o plano de emergência.</figcaption></figure>' +
              '<h3>Resumo: três regras essenciais</h3>' +
              '<ol class="num-list"><li><strong>Identificar</strong> — reconhecer os riscos e, sempre que possível, eliminá-los ou reduzi-los.</li><li><strong>Alertar</strong> — comunicar claramente o perigo, a sua localização e a ação segura necessária.</li><li><strong>Apoiar</strong> — oferecer assistência de forma respeitadora e seguir os procedimentos de emergência do local.</li></ol>' +
              '<p>Uma pequena alteração no espaço, ou na forma como comunicamos, pode fazer uma grande diferença na segurança e na autonomia de uma pessoa cega ou com baixa visão.</p>'
          },
          {
            id: 'u3', kind: 'interactive', label: 'Unidade 3 · Interação ativa', title: 'Percurso seguro e zona de emergência', duration: 'cerca de 2 min 30 s',
            intro: 'Quatro situações num corredor do centro de acolhimento. Em cada uma, pense no que comunicaria e faria antes de ler a resposta.',
            matterport: null,
            tagsTitle: 'Quatro situações para decidir',
            tags: [
              { title: 'Cabo no corredor e cadeira deslocada', question: 'Que perigo comunica e como impede o acesso, sem se pôr em risco?', helps: 'Nomear o perigo, a localização e a ação segura («Pare, por favor. Há um cabo no chão, à sua frente.»); se for seguro e autorizado, remover ou isolar o obstáculo; caso contrário, assinalá-lo e comunicá-lo aos responsáveis.' },
              { title: 'Cartaz «Passagem interditada», sem aviso sonoro', question: 'Como transmite a alteração?', helps: 'Explicar verbalmente o encerramento e indicar apenas uma alternativa segura, depois de confirmada com a equipa de segurança.' },
              { title: 'O alarme soa perto de alguém que já viveu uma evacuação', question: 'Como se aproxima?', helps: 'Identificar-se, explicar o que está a acontecer, perguntar se quer ajuda e como prefere ser orientada, e seguir o procedimento estabelecido do edifício.' },
              { title: 'A saída habitual está fechada', question: 'Que percurso escolhe e como o descreve?', helps: 'Escolher o percurso validado com a equipa de segurança e descrever, com antecedência, as curvas, portas e degraus seguintes.' }
            ],
            alternativeHtml:
              '<figure class="figure"><img src="assets/img/l5-identificarriscos.webp" alt="Cinco fotografias de perigos comuns: cabos no chão, mobiliário deslocado, objetos na passagem, portas obstruídas e degraus." loading="lazy"><figcaption>Perigos a procurar num percurso: cabos no chão, mobiliário deslocado, objetos na passagem, portas obstruídas e degraus.</figcaption></figure>'
          },
          { id: 'u4', kind: 'quiz', label: 'Unidade 3 · Trabalho de casa', title: 'Decisões de segurança e conclusão', duration: 'cerca de 2 min', quiz: 'licao5' }
        ],
        resources: [
          { title: 'Cartão de frases e alertas acessíveis', href: 'assets/docs/l5-cartao-frases-alertas-acessiveis.pdf', meta: 'PDF, 1 página, 48 kB' },
          { title: 'Checklist de segurança acessível', href: 'assets/docs/l5-checklist-seguranca-acessivel.pdf', meta: 'PDF, 1 página, 48 kB' }
        ]
      }
    ]
  };
})();
