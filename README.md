# Percurso CAMUL — plataforma multimédia do Grupo 2

Portefólio web dos trabalhos de CAMUL (ISEP, 2026/2027): estudo da cor laranja, composição visual,
avatares IA, MOOC «Crises Humanitárias: Apoio a Pessoas com Deficiência Visual» e processo.
Site estático (HTML, CSS e JavaScript), sem passo de compilação, pensado para WCAG 2.2 AA.

## Ver no computador

As legendas dos vídeos (`.vtt`) só funcionam através de um servidor (não abrindo o ficheiro diretamente).
Na pasta do projeto, use uma destas opções:

```bash
npx serve .                 # Node.js
python -m http.server 8000  # Python
```

Ou, no VS Code, a extensão **Live Server** («Go Live»).

## Publicar no Netlify

- **Mais simples:** em <https://app.netlify.com/drop>, arraste a pasta `WEB_PLATFORM` inteira.
- **Com Git:** ligue o repositório no Netlify. O `netlify.toml` já está configurado (`publish = "."`).

## Onde editar cada coisa

| Quero mudar…                                   | Ficheiro                                  |
|------------------------------------------------|-------------------------------------------|
| Textos das páginas                             | o `.html` da página (`index.html`, `cor.html`, …) |
| Lições do MOOC (vídeos, artigos, Tags, recursos) | `data/mooc.js`                          |
| Perguntas e explicações dos testes das lições  | `data/quizzes.js`                         |
| Diapositivos (carrosséis)                      | `data/slides.js` e `assets/slides/`       |
| Vídeos dos avatares                            | `avatares.html` (atributo `data-video-json`) |
| Cores, letras e espaçamentos                   | `css/styles.css` (secção 1, «Tokens»)     |

O cabeçalho, o painel de acessibilidade e o rodapé estão repetidos em cada página `.html`:
se mudar o menu, mude-o em todas. No menu, o grupo **MOOC** abre e fecha e lista a visão geral, as cinco lições
e «Como criámos o MOOC» (`processo.html`). Se mudar o título de uma lição em `data/mooc.js`, mude-o também no menu.

### Páginas das lições

Cada lição tem a sua página: `licao-1.html` … `licao-5.html`. São cópias iguais, exceto no número da lição
(`<div id="licao-app" data-licao="N">`), no título, na descrição e na lição assinalada no menu. O conteúdo vem
todo de `data/mooc.js`. Não usamos `licao.html?n=2` porque o `npx serve` redireciona `licao.html` para `/licao`
e perde o `?n=`, abrindo sempre a Lição 1. A `licao.html` ficou só a reencaminhar ligações antigas.

### Publicar um vídeo que está «a publicar»

Os vídeos principais das lições são grandes (90–290 MB). Recomendamos:

1. Carregar no YouTube como **Não listado** e adicionar a legenda `.vtt` da pasta `assets/captions/`.
2. Em `data/mooc.js`, preencher `youtube: 'ID_DO_VIDEO'` (o código depois de `watch?v=`).

Em alternativa, comprimir para 720p (H.264) e colocar em `assets/video/`, preenchendo `src`.

Para os avatares, em `avatares.html`, troque o `data-video-json` de cada pessoa, por exemplo:
`{"title":"Avatar de Matilde Varela","ai":true,"youtube":"ID","transcript":["Olá, eu sou a Matilde…"]}`

### Questionários

A avaliação existe **só nas lições do MOOC** e aparece sempre no fim de cada lição (depois dos recursos
para descarregar). As outras páginas (Cor, Composição, Avatares…) não têm questionários.

```js
{ type: 'single',   prompt: 'Pergunta?', options: [ { text: '…', correct: true, feedback: 'Porque está certa' }, … ] }
{ type: 'multiple', prompt: 'Selecione todas…', options: [ … várias com correct: true … ] }
```

## Regras de acessibilidade ao acrescentar conteúdo

- Imagens: `alt` a descrever o que a imagem mostra (vazio, `alt=""`, se for decorativa).
- Vídeos: legendas em português **e** transcrição (`transcript`).
- Diapositivos: `alt` da imagem + `text` com o texto integral do diapositivo.
- Ligações que abrem noutro separador: indicar «(abre num novo separador)».
- Não usar texto branco sobre o laranja `#FF6600` (contraste 2,9:1): usar texto escuro.

## O que falta preencher

- [x] Vídeos das cinco lições, em `assets/video/` (comprimidos para 720p, ou 480p quando o original já era 480p).
- [ ] **Validar** as legendas criadas com o Whisper (transcrição automática) e revistas à mão:
      `l3-u1-aula.vtt`, `l3-u1-exemplo.vtt`, `l5-u1.vtt` e `avatar-adrian.vtt`. As partes que não se percebem
      estão marcadas como `[impercetível]` ou `[diálogo pouco audível]`. Quem gravou deve confirmar essas partes.
- [ ] Na aula da Lição 3 (0:37–2:11), os diapositivos «Princípios fundamentais» e «Apresentar, oferecer e
      posicionar» aparecem trocados em relação à narração. Os capítulos seguem a narração.
- [ ] Vídeo de apresentação da página inicial e vídeos dos cinco avatares (D-ID). Na página dos avatares está, para já,
      a gravação real do Adrian (`assets/video/avatar-adrian.mp4`), usada para criar o avatar dele.
- [ ] Endereço do curso na Udemy (`udemyUrl` em `data/mooc.js`).
- [ ] Ligação Matterport da Lição 5, se existir (não vinha na pasta entregue da Lição 5).
- [ ] **Rever** os textos marcados como «a validar» em `data/quizzes.js` (justificações das Lições 3 e 5,
      perguntas da Lição 4) e as transcrições em `data/mooc.js`.
- [ ] Rever as legendas automáticas em `assets/captions/`.
- [ ] Resultados dos testes alfa e beta **desta plataforma** (os do MOOC já estão em `processo.html#testes`).
