/* =====================================================================
   Percurso CAMUL — carrossel de diapositivos acessível
   Padrão WAI-ARIA «Carousel» sem rotação automática:
   - botões anterior/seguinte, miniaturas, setas do teclado, deslizar
   - anúncio discreto («Diapositivo 3 de 13: …») para leitores de ecrã
   - texto equivalente de cada diapositivo, num cartão que abre e fecha
   - modo de ecrã inteiro
   Dados: window.SLIDES[id] = { title, pdf, pdfSize, slides:[{src, thumb, title, alt, text|html}] }
   ===================================================================== */
(function () {
  'use strict';
  var PC = (window.PC = window.PC || {});
  var count = 0;

  PC.carousel = function (mount, deck) {
    if (!deck || !deck.slides || !deck.slides.length) return;
    count += 1;
    var cid = 'carrossel-' + count;
    var slides = deck.slides;
    var n = slides.length;
    var index = 0;
    var label = deck.title || 'Diapositivos';

    var root = PC.el(
      '<section class="carousel" aria-roledescription="carrossel" aria-label="' + PC.esc(label) + '" id="' + cid + '">' +
        '<div class="carousel-top">' +
          '<div><p class="carousel-title">' + PC.esc(label) + '</p>' +
          '<p class="carousel-count" aria-hidden="true"><span data-cur>1</span> / ' + n + '</p></div>' +
          '<div class="carousel-tools">' +
            (document.fullscreenEnabled ? '<button type="button" class="btn btn-quiet btn-sm" data-fs>' + PC.icon('expand') + '<span data-fs-label>Ecrã inteiro</span></button>' : '') +
            (deck.pdf ? '<a class="btn btn-quiet btn-sm" href="' + PC.esc(deck.pdf) + '" download>' + PC.icon('download') + 'Descarregar PDF' + (deck.pdfSize ? ' <span class="muted">(' + PC.esc(deck.pdfSize) + ')</span>' : '') + '</a>' : '') +
          '</div>' +
        '</div>' +
        '<div class="carousel-stage">' +
          '<button type="button" class="carousel-btn prev" aria-controls="' + cid + '-slide">' + PC.icon('chevron-left') + '<span class="visually-hidden">Diapositivo anterior</span></button>' +
          '<div class="carousel-viewport" id="' + cid + '-slide" role="group" aria-roledescription="diapositivo">' +
            '<img src="" alt="" decoding="async">' +
          '</div>' +
          '<button type="button" class="carousel-btn next" aria-controls="' + cid + '-slide">' + PC.icon('chevron-right') + '<span class="visually-hidden">Diapositivo seguinte</span></button>' +
        '</div>' +
        '<div class="visually-hidden" aria-live="polite" aria-atomic="true" data-status></div>' +
        '<ol class="carousel-thumbs" aria-label="Escolher diapositivo"></ol>' +
        '<details class="disclosure slide-notes" data-notes>' +
          '<summary><span class="notes-label">Texto do diapositivo</span><span class="notes-title" data-notes-title></span></summary>' +
          '<div class="notes-body" data-notes-body></div>' +
        '</details>' +
        '<p class="carousel-hint">Dica: com o foco no carrossel, use as teclas <kbd>←</kbd> e <kbd>→</kbd> para mudar de diapositivo.</p>' +
      '</section>'
    );

    var img = root.querySelector('.carousel-viewport img');
    var viewport = root.querySelector('.carousel-viewport');
    var prev = root.querySelector('.carousel-btn.prev');
    var next = root.querySelector('.carousel-btn.next');
    var status = root.querySelector('[data-status]');
    var cur = root.querySelector('[data-cur]');
    var thumbs = root.querySelector('.carousel-thumbs');
    var notesTitle = root.querySelector('[data-notes-title]');
    var notesBody = root.querySelector('[data-notes-body]');

    // cartão «Texto do diapositivo»: fechado por omissão; a escolha fica guardada neste navegador
    var notes = root.querySelector('[data-notes]');
    try { notes.open = localStorage.getItem('pc-notas-abertas') === '1'; } catch (e) { /* sem armazenamento */ }
    notes.addEventListener('toggle', function () {
      try { localStorage.setItem('pc-notas-abertas', notes.open ? '1' : '0'); } catch (e) { /* ignora */ }
    });

    slides.forEach(function (s, i) {
      var li = document.createElement('li');
      li.innerHTML = '<button type="button" aria-label="Diapositivo ' + (i + 1) + ': ' + PC.esc(s.title) + '">' +
        '<img src="' + PC.esc(s.thumb || s.src) + '" alt="" loading="lazy" decoding="async"></button>';
      li.firstChild.addEventListener('click', function () { go(i, true); });
      thumbs.appendChild(li);
    });
    var thumbBtns = thumbs.querySelectorAll('button');

    function preload(i) {
      if (i < 0 || i >= n) return;
      var im = new Image();
      im.src = slides[i].src;
    }

    function render(announce) {
      var s = slides[index];
      img.classList.add('is-loading');
      img.onload = function () { img.classList.remove('is-loading'); };
      img.src = s.src;
      img.alt = s.alt || s.title;
      viewport.setAttribute('aria-label', (index + 1) + ' de ' + n + ': ' + s.title);
      cur.textContent = index + 1;
      prev.disabled = index === 0;
      next.disabled = index === n - 1;
      thumbBtns.forEach(function (b, i) {
        if (i === index) b.setAttribute('aria-current', 'true');
        else b.removeAttribute('aria-current');
      });
      var active = thumbBtns[index];
      if (active && thumbs.scrollWidth > thumbs.clientWidth) {
        var left = active.parentNode.offsetLeft - thumbs.clientWidth / 2 + active.parentNode.offsetWidth / 2;
        thumbs.scrollTo({ left: left, behavior: PC.prefersReducedMotion() ? 'auto' : 'smooth' });
      }
      notesTitle.textContent = s.title;
      if (s.html) notesBody.innerHTML = s.html;
      else notesBody.innerHTML = String(s.text || '').split(/\n\n+/).map(function (p) { return '<p>' + PC.esc(p).replace(/\n/g, '<br>') + '</p>'; }).join('');
      if (announce) status.textContent = 'Diapositivo ' + (index + 1) + ' de ' + n + ': ' + s.title;
      preload(index + 1);
      preload(index - 1);
    }

    function go(i, announce) {
      if (i < 0 || i >= n || i === index) return;
      index = i;
      render(announce);
    }

    prev.addEventListener('click', function () {
      go(index - 1, true);
      if (prev.disabled) next.focus();
    });
    next.addEventListener('click', function () {
      go(index + 1, true);
      if (next.disabled) prev.focus();
    });

    root.addEventListener('keydown', function (e) {
      if (e.target.closest('input, textarea, select, a[href]')) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1, true); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); go(index - 1, true); }
      else if (e.key === 'Home' && !e.target.closest('.carousel-thumbs')) { e.preventDefault(); go(0, true); }
      else if (e.key === 'End' && !e.target.closest('.carousel-thumbs')) { e.preventDefault(); go(n - 1, true); }
    });

    // deslizar (ecrãs táteis)
    var startX = null;
    viewport.addEventListener('pointerdown', function (e) { startX = e.clientX; });
    viewport.addEventListener('pointerup', function (e) {
      if (startX === null) return;
      var dx = e.clientX - startX;
      startX = null;
      if (Math.abs(dx) > 45) go(index + (dx < 0 ? 1 : -1), true);
    });
    viewport.addEventListener('pointercancel', function () { startX = null; });

    // ecrã inteiro
    var fsBtn = root.querySelector('[data-fs]');
    if (fsBtn) {
      var fsLabel = fsBtn.querySelector('[data-fs-label]');
      fsBtn.addEventListener('click', function () {
        if (document.fullscreenElement === root) document.exitFullscreen();
        else if (root.requestFullscreen) root.requestFullscreen().catch(function () {});
      });
      document.addEventListener('fullscreenchange', function () {
        var on = document.fullscreenElement === root;
        fsLabel.textContent = on ? 'Sair do ecrã inteiro' : 'Ecrã inteiro';
        fsBtn.setAttribute('aria-pressed', String(on));
      });
    }

    mount.replaceWith(root);
    render(false);
    return root;
  };

  // Montagem automática: <div data-carousel="laranja"></div>
  document.querySelectorAll('[data-carousel]').forEach(function (m) {
    var deck = window.SLIDES && window.SLIDES[m.getAttribute('data-carousel')];
    if (deck) PC.carousel(m, deck);
  });
})();
