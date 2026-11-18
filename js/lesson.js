/* =====================================================================
   Percurso CAMUL — página de lição (licao-1.html … licao-5.html)
   O número da lição vem de <div id="licao-app" data-licao="N"> (não do endereço:
   alguns servidores locais perdem o «?n=» ao redirecionar).
   Constrói a lição a partir de data/mooc.js
   ===================================================================== */
(function () {
  'use strict';
  var PC = window.PC;
  var app = document.getElementById('licao-app');
  if (!app || !window.MOOC) return;

  var esc = PC.esc, icon = PC.icon;
  var lessons = window.MOOC.lessons;
  var params = new URLSearchParams(location.search);
  var n = parseInt(app.getAttribute('data-licao'), 10) || parseInt(params.get('n'), 10) || 1;
  var lesson = lessons.filter(function (l) { return l.n === n; })[0];

  var KIND = {
    video: { label: 'Vídeo', icon: 'video' },
    article: { label: 'Artigo', icon: 'text' },
    interactive: { label: 'Interação ativa', icon: 'cube' },
    quiz: { label: 'Teste', icon: 'quiz' }
  };

  if (!lesson) {
    document.title = 'Lição não encontrada · Percurso CAMUL';
    app.innerHTML = '<div class="container section"><h1>Lição não encontrada</h1><p>Esta lição não existe. <a href="mooc.html">Ver todas as lições do MOOC</a>.</p></div>';
    return;
  }

  document.title = 'Lição ' + lesson.n + ': ' + lesson.title + ' · MOOC · Percurso CAMUL';
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', lesson.summary);

  var total = lessons.length;
  var prev = lessons.filter(function (l) { return l.n === n - 1; })[0];
  var next = lessons.filter(function (l) { return l.n === n + 1; })[0];

  /* ---------- cabeçalho da lição ---------- */
  var cover = lesson.cover
    ? '<img src="' + esc(lesson.cover) + '" alt="' + esc(lesson.coverAlt || '') + '" width="800" height="450">'
    : '<div class="lesson-cover-fallback" aria-hidden="true">' + lesson.n + '</div>';

  var html =
    '<div class="lesson-hero"><div class="container">' +
      '<nav class="breadcrumb" aria-label="Caminho"><ol>' +
        '<li><a href="index.html">Início</a></li>' +
        '<li><a href="mooc.html">MOOC</a></li>' +
        '<li><span aria-current="page">Lição ' + lesson.n + '</span></li>' +
      '</ol></nav>' +
      '<div class="lesson-hero-grid"><div>' +
        '<p class="eyebrow">MOOC · Lição ' + lesson.n + ' de ' + total + '</p>' +
        '<h1>' + esc(lesson.title) + '</h1>' +
        '<p class="card-meta">' +
          '<span class="badge">' + icon('user') + 'Autoria: ' + esc(lesson.author) + '</span>' +
          '<span class="badge">' + icon('clock') + esc(lesson.duration) + '</span>' +
          '<span class="badge">' + icon('list') + lesson.units.length + ' unidades</span>' +
        '</p>' +
        '<p class="lead">' + esc(lesson.subtitle) + '</p>' +
        '<p>' + esc(lesson.summary) + '</p>' +
      '</div><div>' + cover + '</div></div>' +
    '</div></div>';

  /* ---------- pergunta central e objetivos ---------- */
  html += '<div class="container"><div class="grid grid-2" style="margin-bottom:2.5rem">' +
    '<section class="panel panel-tint" aria-labelledby="pergunta-central"><h2 id="pergunta-central" class="h-small" style="font-size:1.3rem">Pergunta central</h2>' +
      '<p style="font-size:1.15rem;margin:0">' + esc(lesson.question) + '</p></section>' +
    '<section class="panel" aria-labelledby="objetivos"><h2 id="objetivos" style="font-size:1.3rem">No final desta lição, vai conseguir:</h2>' +
      '<ul class="check-list" style="margin:0">' + lesson.objectives.map(function (o) { return '<li>' + esc(o) + '</li>'; }).join('') + '</ul></section>' +
  '</div></div>';

  /* ---------- índice + unidades ----------
     A avaliação (unidades 'quiz') fica sempre no fim da lição,
     depois dos recursos para descarregar.
     A lição mostra uma unidade de cada vez: o índice fica parado ao lado
     e cada entrada abre a respetiva unidade. */
  var hasResources = !!(lesson.resources && lesson.resources.length);
  /* O rótulo de cada unidade é gerado a partir da ordem e do tipo, para ser igual em todas as lições:
     «Unidade N · Vídeo», «· Artigo», «· Interação ativa» ou «· Teste». */
  lesson.units.forEach(function (u, i) { u.label = 'Unidade ' + (i + 1) + ' · ' + (KIND[u.kind] || KIND.video).label; });
  var contentUnits = lesson.units.filter(function (u) { return u.kind !== 'quiz'; });
  var quizUnits = lesson.units.filter(function (u) { return u.kind === 'quiz'; });
  function step(u) { return { id: u.id, label: u.label, title: u.title }; }
  var order = contentUnits.map(step)
    .concat(hasResources ? [{ id: 'recursos', label: 'Materiais', title: 'Recursos para descarregar' }] : [])
    .concat(quizUnits.map(step));
  var toc = '<nav class="toc" aria-labelledby="toc-title"><h2 id="toc-title">Nesta lição</h2><ol>' +
    order.map(function (o) {
      return '<li><a href="#' + esc(o.id) + '"><span class="toc-type">' + esc(o.label) + '</span>' + esc(o.title) + '</a></li>';
    }).join('') +
    '</ol></nav>';

  html += '<div class="container lesson-layout">' + toc + '<div class="lesson-content" id="unidades"></div></div>';
  app.innerHTML = html;

  var content = document.getElementById('unidades');

  function unitShell(u) {
    var k = KIND[u.kind] || KIND.video;
    var sec = PC.el('<section class="unit" id="' + esc(u.id) + '" aria-labelledby="' + esc(u.id) + '-t">' +
      '<header class="unit-head"><p class="card-meta">' +
        '<span class="badge badge-brand">' + icon(k.icon) + esc(u.label) + '</span>' +
        (u.duration ? '<span class="badge">' + icon('clock') + esc(u.duration) + '</span>' : '') +
      '</p><h2 id="' + esc(u.id) + '-t">' + esc(u.title) + '</h2>' +
      (u.intro ? '<p class="lead" style="font-size:1.08rem">' + esc(u.intro) + '</p>' : '') +
      '</header></section>');
    return sec;
  }

  function addSlides(sec, deck) {
    if (!deck || !deck.slides || !deck.slides.length) return;
    var h = PC.el('<h3>' + icon('slides') + ' Diapositivos</h3>');
    var m = document.createElement('div');
    sec.appendChild(h);
    sec.appendChild(m);
    PC.carousel(m, deck);
  }

  function renderVideo(sec, u) {
    if (u.video) sec.appendChild(PC.video(u.video));
    /* vídeos seguintes da mesma unidade, a toda a largura, cada um com o seu título (ex.: Lição 3) */
    (u.moreVideos || []).forEach(function (m) {
      sec.appendChild(PC.el('<h3>' + icon('video') + ' ' + esc(m.heading) + '</h3>'));
      sec.appendChild(PC.video(m.video));
    });
    if (u.keyPoints) {
      sec.appendChild(PC.el('<div><h3>Pontos-chave</h3>' + u.keyPoints + '</div>'));
    }
    if (u.extraVideos && u.extraVideos.length) {
      var wrap = PC.el('<div><h3>Exemplos encenados</h3><div class="grid grid-2"></div></div>');
      var grid = wrap.querySelector('.grid');
      u.extraVideos.forEach(function (v) { grid.appendChild(PC.video(v)); });
      sec.appendChild(wrap);
    }
    addSlides(sec, u.slides);
  }

  function renderArticle(sec, u) {
    sec.appendChild(PC.el('<article class="article" aria-labelledby="' + esc(u.id) + '-t">' + u.html + '</article>'));
  }

  function renderInteractive(sec, u) {
    if (u.video) sec.appendChild(PC.video(u.video));
    if (u.matterport) {
      var mpTitle = u.matterportTitle || 'espaço do centro de acolhimento';
      /* A visita fica logo incorporada à direita. Sem «play=1», o Matterport mostra primeiro o ecrã inicial
         e só carrega o modelo e movimenta a câmara quando a pessoa carrega em «play». */
      sec.appendChild(PC.el(
        '<div class="panel"><div class="matterport-card"><div>' +
          '<h3>' + icon('cube') + ' Visita 3D: ' + esc(mpTitle) + '</h3>' +
          '<p>Modelo 3D interativo criado com o Matterport. Pode percorrer o espaço e abrir os pontos assinalados (Tags).</p>' +
          '<div class="callout callout-warn" style="margin:0 0 1rem">' + icon('info') +
            '<p>O modelo 3D é navegado com rato ou toque e não é acessível a leitores de ecrã. <strong>Todo o seu conteúdo está disponível em texto, mais abaixo.</strong> A visita contém movimento de câmara.</p></div>' +
          '<div class="btn-row">' +
            '<a class="btn btn-primary" href="' + esc(u.matterport) + '" target="_blank" rel="noopener">' + icon('external') + 'Abrir a visita 3D<span class="visually-hidden"> (abre num novo separador)</span></a>' +
          '</div>' +
        '</div>' +
        '<div class="embed-slot"><iframe src="' + esc(u.matterport) + '" title="Visita 3D Matterport: ' + esc(mpTitle) + '" loading="lazy" allow="fullscreen; xr-spatial-tracking" allowfullscreen></iframe></div>' +
        '</div></div>'
      ));
    }
    if (u.tags && u.tags.length) {
      sec.appendChild(PC.el('<div><h3>' + esc(u.tagsTitle || 'Pontos da visita') + '</h3><ol class="tags-list">' +
        u.tags.map(function (t, i) {
          return '<li><h4><span class="tag-num" aria-hidden="true">' + (i + 1) + '</span><span><span class="visually-hidden">Ponto ' + (i + 1) + ': </span>' + esc(t.title) + '</span></h4>' +
            '<p>' + esc(t.question) + '</p>' +
            '<p><span class="helps-label">O que ajuda: </span>' + esc(t.helps) + '</p></li>';
        }).join('') + '</ol></div>'));
    }
    if (u.alternativeHtml) sec.appendChild(PC.el('<div class="panel">' + u.alternativeHtml + '</div>'));
    addSlides(sec, u.slides);
  }

  function renderQuiz(sec, u) {
    var m = document.createElement('div');
    sec.appendChild(m);
    PC.quiz(m, window.QUIZZES && window.QUIZZES[u.quiz]);
  }

  function renderUnit(u) {
    var sec = unitShell(u);
    content.appendChild(sec);
    if (u.kind === 'video') renderVideo(sec, u);
    else if (u.kind === 'article') renderArticle(sec, u);
    else if (u.kind === 'interactive') renderInteractive(sec, u);
    else if (u.kind === 'quiz') renderQuiz(sec, u);
  }

  contentUnits.forEach(renderUnit);

  /* ---------- recursos ---------- */
  if (hasResources) {
    content.appendChild(PC.el('<section class="unit" id="recursos" aria-labelledby="recursos-t">' +
      '<header class="unit-head"><p class="card-meta"><span class="badge badge-teal">' + icon('download') + 'Materiais</span></p>' +
      '<h2 id="recursos-t">Recursos para descarregar</h2></header>' +
      '<ul class="downloads">' + lesson.resources.map(function (r) {
        return '<li><a class="download" href="' + esc(r.href) + '"' + (r.external ? ' target="_blank" rel="noopener"' : ' download') + '>' +
          '<span class="file-ico">' + icon(r.external ? 'external' : 'file') + '</span>' +
          '<span><strong>' + esc(r.title) + '</strong><small>' + esc(r.meta) + (r.external ? ' — abre num novo separador' : '') + '</small></span></a></li>';
      }).join('') + '</ul></section>'));
  }

  /* ---------- avaliação: no fim da lição ---------- */
  quizUnits.forEach(renderUnit);

  PC.initEmbedButtons(app);

  /* ---------- uma unidade de cada vez ---------- */
  var sections = order.map(function (o) { return document.getElementById(o.id); });
  var links = Array.prototype.slice.call(app.querySelectorAll('.toc a'));
  var current = -1;

  /* «anterior / seguinte» no fim de cada unidade; nas pontas, passa para a lição ao lado */
  var prevLesson = prev
    ? '<a class="pager-link" href="licao-' + prev.n + '.html"><small>' + icon('arrow-left') + ' Lição anterior</small><strong>' + prev.n + '. ' + esc(prev.title) + '</strong></a>'
    : '<a class="pager-link" href="mooc.html"><small>' + icon('arrow-left') + ' Voltar</small><strong>Visão geral do MOOC</strong></a>';
  var nextLesson = next
    ? '<a class="pager-link pager-next" href="licao-' + next.n + '.html"><small>Lição seguinte ' + icon('arrow-right') + '</small><strong>' + next.n + '. ' + esc(next.title) + '</strong></a>'
    : '<a class="pager-link pager-next" href="processo.html"><small>A seguir ' + icon('arrow-right') + '</small><strong>Como fizemos o MOOC</strong></a>';
  sections.forEach(function (sec, i) {
    var b = order[i - 1], a = order[i + 1];
    sec.appendChild(PC.el('<nav class="lesson-pager" aria-label="Navegar na lição">' +
      (b ? '<a class="pager-link" href="#' + esc(b.id) + '"><small>' + icon('arrow-left') + ' Anterior: ' + esc(b.label) + '</small><strong>' + esc(b.title) + '</strong></a>' : prevLesson) +
      (a ? '<a class="pager-link pager-next" href="#' + esc(a.id) + '"><small>Seguinte: ' + esc(a.label) + ' ' + icon('arrow-right') + '</small><strong>' + esc(a.title) + '</strong></a>' : nextLesson) +
    '</nav>'));
    var h = sec.querySelector('h2');
    if (h) h.setAttribute('tabindex', '-1');
  });

  /* pára vídeos e áudio da unidade que deixa de se ver */
  function pauseMedia(sec) {
    sec.querySelectorAll('video, audio').forEach(function (m) { if (!m.paused) m.pause(); });
    sec.querySelectorAll('iframe[src*="youtube"]').forEach(function (f) {
      try { f.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*'); } catch (e) {}
    });
  }

  function show(k) {
    if (k === current) return;
    sections.forEach(function (sec, i) {
      if (i !== k && !sec.hidden) pauseMedia(sec);
      sec.hidden = i !== k;
    });
    links.forEach(function (a, i) {
      if (i === k) a.setAttribute('aria-current', 'step');
      else a.removeAttribute('aria-current');
    });
    current = k;
  }

  /* abre a unidade que contém o elemento #id; devolve false se não for de nenhuma */
  function openTarget(id, fromUser) {
    var el = id ? document.getElementById(id) : null;
    var sec = el && el.closest('.unit');
    var k = sections.indexOf(sec);
    if (k < 0) return false;
    show(k);
    if (history.replaceState) history.replaceState(null, '', '#' + id);
    if (el === sec) {
      /* nova unidade: começa no topo, com o índice ao lado */
      content.scrollIntoView({ block: 'start' });
      if (fromUser) sec.querySelector('h2').focus({ preventScroll: true });
    } else {
      el.scrollIntoView({ block: 'start' });
    }
    return true;
  }

  /* índice, botões «anterior / seguinte» e ligações internas (#recursos, …) */
  app.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest('a[href^="#"]');
    if (a && openTarget(decodeURIComponent(a.getAttribute('href').slice(1)), true)) e.preventDefault();
  });
  window.addEventListener('hashchange', function () {
    openTarget(decodeURIComponent(location.hash.slice(1)), false);
  });

  /* Esconde as outras unidades só no frame seguinte: o media.js decide nesse frame
     se abre os capítulos ao lado do vídeo, e precisa de ver o vídeo com tamanho real. */
  requestAnimationFrame(function () {
    var id = decodeURIComponent(location.hash.slice(1));
    if (!openTarget(id, false)) show(0);
  });
})();
