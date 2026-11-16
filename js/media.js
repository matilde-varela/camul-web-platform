/* =====================================================================
   Percurso CAMUL — componente de vídeo acessível
   Aceita: ficheiro local (src) com legendas .vtt, vídeo do YouTube
   (youtube: "ID") ou nenhum dos dois (mostra aviso «vídeo a publicar»).
   Mostra sempre a transcrição, quando existe (alternativa em texto).
   ===================================================================== */
(function () {
  'use strict';
  var PC = (window.PC = window.PC || {});
  var uid = 0;

  function transcriptHTML(paras) {
    return paras.map(function (p) {
      if (typeof p === 'string') return '<p>' + PC.esc(p) + '</p>';
      if (p.head) return '<p class="t-head">' + PC.esc(p.head) + '</p>';
      if (p.desc) return '<p class="t-desc">[' + PC.esc(p.desc) + ']</p>';
      if (p.speaker) return '<p><span class="t-speaker">' + PC.esc(p.speaker) + ':</span> ' + PC.esc(p.text) + '</p>';
      return '';
    }).join('');
  }

  function toSeconds(t) {
    var parts = String(t).split(':').map(Number);
    return parts.reduce(function (acc, n) { return acc * 60 + n; }, 0);
  }

  /**
   * opts: { title, src, youtube, poster, captions, duration, transcript:[], transcriptLabel,
   *         chapters:[{t,label}], note, pendingText, ai:boolean }
   */
  PC.video = function (opts) {
    uid += 1;
    var id = 'video-' + uid;
    var hasLocal = !!opts.src;
    var hasYT = !!opts.youtube;
    var frame;

    if (hasLocal) {
      frame = '<video id="' + id + '" controls preload="metadata" playsinline' +
        (opts.poster ? ' poster="' + PC.esc(opts.poster) + '"' : '') + '>' +
        '<source src="' + PC.esc(opts.src) + '" type="video/mp4">' +
        (opts.captions ? '<track kind="captions" srclang="pt" label="Português" src="' + PC.esc(opts.captions) + '" default>' : '') +
        '<p>O seu navegador não reproduz vídeo. <a href="' + PC.esc(opts.src) + '">Descarregar o vídeo</a>.</p>' +
        '</video>';
    } else if (hasYT) {
      frame = '<iframe id="' + id + '" src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(opts.youtube) +
        '?cc_load_policy=1&amp;cc_lang_pref=pt&amp;hl=pt-PT&amp;rel=0" title="Vídeo: ' + PC.esc(opts.title) + '" loading="lazy" ' +
        'allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>';
    } else {
      frame = '<div class="media-pending">' +
        '<div>' + PC.icon('video') +
        '<p><strong>Vídeo a publicar</strong></p>' +
        '<p>' + PC.esc(opts.pendingText || 'Este vídeo ainda não foi carregado na plataforma.') + '</p>' +
        (opts.transcript && opts.transcript.length ? '<p>A transcrição completa está disponível junto ao vídeo.</p>' : '') +
        '</div></div>';
    }

    var meta = [];
    if (opts.duration) meta.push('<span>' + PC.icon('clock') + 'Duração: ' + PC.esc(opts.duration) + '</span>');
    if (hasLocal && opts.captions) meta.push('<span>' + PC.icon('cc') + 'Legendas em português</span>');
    if (hasYT) meta.push('<span>' + PC.icon('cc') + 'Legendas no YouTube</span>');
    if (opts.transcript && opts.transcript.length) meta.push('<span>' + PC.icon('text') + 'Transcrição disponível</span>');
    if (opts.ai) meta.push('<span>' + PC.icon('sparkles') + 'Gerado com inteligência artificial</span>');

    /* Estrutura: [vídeo + título] | [capítulos + transcrição]
       Em espaços largos, os capítulos e a transcrição ficam à direita do vídeo (ver .media-layout no CSS);
       em espaços estreitos, ficam por baixo. */
    var aside = '';

    if (opts.chapters && opts.chapters.length) {
      aside += '<details class="disclosure"><summary>' + PC.icon('list') + 'Capítulos do vídeo</summary>' +
        '<div class="disclosure-body"><ol class="chapters">' +
        opts.chapters.map(function (c) {
          var inner = '<time>' + PC.esc(c.t) + '</time><span>' + PC.esc(c.label) + '</span>';
          return '<li>' + (hasLocal ? '<button type="button" data-seek="' + toSeconds(c.t) + '" data-video="' + id + '">' + inner + '<span class="visually-hidden"> (saltar para este momento)</span></button>' : inner) + '</li>';
        }).join('') +
        '</ol></div></details>';
    }

    if (opts.transcript && opts.transcript.length) {
      aside += '<details class="disclosure"><summary>' + PC.icon('text') + PC.esc(opts.transcriptLabel || 'Transcrição do vídeo') + '</summary>' +
        '<div class="transcript-body" tabindex="0" role="region" aria-label="' + PC.esc((opts.transcriptLabel || 'Transcrição') + ': ' + opts.title) + '">' +
        transcriptHTML(opts.transcript) + '</div></details>';
    }

    var html = '<figure class="media" aria-labelledby="' + id + '-t">' +
      '<div class="media-layout' + (aside ? ' has-aside' : '') + '">' +
        '<div class="media-main">' +
          '<div class="media-frame">' + frame + '</div>' +
          '<div class="media-body">' +
            '<p class="media-title" id="' + id + '-t">' + PC.esc(opts.title) + '</p>' +
            (meta.length ? '<p class="media-meta">' + meta.join('') + '</p>' : '') +
            (opts.note ? '<p class="media-note">' + PC.esc(opts.note) + '</p>' : '') +
          '</div>' +
        '</div>' +
        (aside ? '<div class="media-aside"><div class="media-aside-scroll">' + aside + '</div></div>' : '') +
      '</div>' +
    '</figure>';

    var node = PC.el(html);

    /* Com a coluna à direita visível, abre logo o primeiro bloco (capítulos ou transcrição),
       para a coluna não ficar vazia ao lado do vídeo. */
    if (aside && window.requestAnimationFrame) {
      requestAnimationFrame(function () {
        var layout = node.querySelector('.media-layout');
        var first = node.querySelector('.media-aside details');
        if (layout && first && getComputedStyle(layout).display === 'grid') first.open = true;
      });
    }
    node.querySelectorAll('[data-seek]').forEach(function (b) {
      b.addEventListener('click', function () {
        var v = document.getElementById(b.getAttribute('data-video'));
        if (!v) return;
        v.currentTime = Number(b.getAttribute('data-seek'));
        v.focus();
        var p = v.play();
        if (p && p.catch) p.catch(function () {});
      });
    });
    return node;
  };

  /* Montagem automática: <div data-video='{"title":"…","src":"…"}'></div> */
  function autoMount() {
    document.querySelectorAll('[data-video-json]').forEach(function (slot) {
      try {
        var opts = JSON.parse(slot.getAttribute('data-video-json'));
        slot.replaceWith(PC.video(opts));
      } catch (e) { /* JSON inválido: deixa o conteúdo estático */ }
    });
  }
  autoMount();
})();
