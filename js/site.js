/* =====================================================================
   Percurso CAMUL — comportamento comum a todas as páginas
   - Preferências de acessibilidade (guardadas neste navegador)
   - Menu em ecrãs pequenos
   - Separadores acessíveis (padrão WAI-ARIA «tabs»)
   - Botões de alternância simples (data-toggle-target)
   ===================================================================== */
(function () {
  'use strict';

  var PC = (window.PC = window.PC || {});
  var KEY = 'pc-prefs';
  // sidebar: 'normal' | 'compacta' (barra lateral recolhida, só ícones — ecrãs largos)
  var DEFAULTS = { theme: 'auto', text: 'md', font: 'padrao', spacing: 'normal', links: 'normal', motion: 'auto', sidebar: 'normal' };

  /* ---------- utilitários partilhados ---------- */
  PC.icon = function (name, extraClass) {
    return '<svg class="icon' + (extraClass ? ' ' + extraClass : '') + '" aria-hidden="true" focusable="false"><use href="#i-' + name + '"></use></svg>';
  };
  PC.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  PC.el = function (html) {
    var t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  };
  PC.prefersReducedMotion = function () {
    return document.documentElement.getAttribute('data-motion') === 'reduzido' ||
      (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  };

  /* ---------- preferências ---------- */
  function loadPrefs() {
    var p = {};
    try { p = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { p = {}; }
    var out = {};
    Object.keys(DEFAULTS).forEach(function (k) { out[k] = p[k] || DEFAULTS[k]; });
    return out;
  }
  function savePrefs(p) {
    try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) { /* modo privado: ignora */ }
  }
  function applyPrefs(p) {
    var root = document.documentElement;
    Object.keys(DEFAULTS).forEach(function (k) {
      if (p[k] && p[k] !== DEFAULTS[k]) root.setAttribute('data-' + k, p[k]);
      else root.removeAttribute('data-' + k);
    });
  }

  var prefs = loadPrefs();   // partilhado pelo painel de acessibilidade e pela barra lateral

  function initA11yPanel() {
    var btn = document.getElementById('btn-acessibilidade');
    var panel = document.getElementById('painel-acessibilidade');
    if (!btn || !panel) return;
    btn.hidden = false;

    applyPrefs(prefs);

    function syncInputs() {
      panel.querySelectorAll('input[type="radio"]').forEach(function (inp) {
        inp.checked = prefs[inp.name] === inp.value;
      });
      panel.querySelectorAll('input[type="checkbox"]').forEach(function (inp) {
        inp.checked = prefs[inp.name] === inp.value;
      });
    }
    syncInputs();

    panel.addEventListener('change', function (e) {
      var inp = e.target;
      if (!inp.name || !(inp.name in DEFAULTS)) return;
      if (inp.type === 'checkbox') prefs[inp.name] = inp.checked ? inp.value : DEFAULTS[inp.name];
      else prefs[inp.name] = inp.value;
      applyPrefs(prefs);
      savePrefs(prefs);
    });

    function open() {
      panel.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
    }
    function close(returnFocus) {
      panel.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
      if (returnFocus) btn.focus();
    }
    btn.addEventListener('click', function () {
      if (panel.hidden) open(); else close(false);
    });
    panel.querySelector('[data-a11y-close]').addEventListener('click', function () { close(true); });
    panel.querySelector('[data-a11y-reset]').addEventListener('click', function () {
      prefs = Object.assign({}, DEFAULTS, { sidebar: prefs.sidebar });   // repor a leitura não mexe na barra lateral
      applyPrefs(prefs);
      savePrefs(prefs);
      syncInputs();
      var status = panel.querySelector('[data-a11y-status]');
      if (status) {
        status.textContent = 'Preferências repostas.';
        setTimeout(function () { status.textContent = ''; }, 3000);
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.hidden) {
        close(panel.contains(document.activeElement) || document.activeElement === btn);
      }
    });
    document.addEventListener('click', function (e) {
      if (!panel.hidden && !panel.contains(e.target) && !btn.contains(e.target)) close(false);
    });
    // fecha quando o foco sai do painel (ex.: Tab depois do último controlo)
    panel.addEventListener('focusout', function (e) {
      if (e.relatedTarget && !panel.contains(e.relatedTarget) && e.relatedTarget !== btn) close(false);
    });
  }

  /* ---------- menu: assinalar a página atual ----------
     As páginas já trazem aria-current no HTML; isto é só uma rede de segurança
     (ex.: páginas novas copiadas sem o atributo). */
  function markCurrent(nav) {
    if (nav.querySelector('[aria-current="page"]')) return;
    var file = location.pathname.split('/').pop() || 'index.html';
    if (!/\.html$/.test(file)) file += '.html';            // endereços sem «.html» (ex.: «npx serve», Netlify)
    var link = nav.querySelector('a[href="' + file + '"]');
    if (!link) return;
    link.setAttribute('aria-current', 'page');
    var group = link.closest('details');
    if (group) group.open = true;
  }

  /* ---------- barra lateral recolhível (ecrãs largos) ---------- */
  function initSidebar() {
    var btn = document.getElementById('btn-sidebar');
    var nav = document.getElementById('menu-principal');
    if (!btn) return;
    btn.hidden = false;
    var label = btn.querySelector('[data-sidebar-label]');
    var wide = window.matchMedia ? window.matchMedia('(min-width: 64rem)') : { matches: true };
    function compact() { return prefs.sidebar === 'compacta'; }
    function sync() {
      var text = compact() ? 'Expandir o menu lateral' : 'Recolher o menu lateral';
      if (label) label.textContent = text;
      btn.title = text;
    }
    function set(value) {
      prefs.sidebar = value;
      applyPrefs(prefs);
      savePrefs(prefs);
      sync();
    }
    sync();
    btn.addEventListener('click', function () { set(compact() ? 'normal' : 'compacta'); });
    // Com a barra recolhida, o grupo «MOOC» não cabe: clicar no ícone expande a barra e abre o grupo.
    if (nav) nav.querySelectorAll('details > summary').forEach(function (s) {
      s.addEventListener('click', function (e) {
        if (!compact() || !wide.matches) return;
        e.preventDefault();
        set('normal');
        s.parentNode.open = true;
      });
    });
  }

  /* ---------- menu em ecrãs pequenos ---------- */
  function initNav() {
    var toggle = document.getElementById('btn-menu');
    var nav = document.getElementById('menu-principal');
    if (nav) markCurrent(nav);
    if (!toggle || !nav) return;
    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('is-open', !isOpen);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true' && nav.contains(document.activeElement)) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        toggle.focus();
      }
    });
  }

  /* ---------- separadores (tabs) ---------- */
  PC.initTabs = function (root) {
    var panels = Array.prototype.slice.call(root.querySelectorAll(':scope > .tab-panel'));
    if (!panels.length) return;
    var list = document.createElement('div');
    list.className = 'tablist';
    list.setAttribute('role', 'tablist');
    list.setAttribute('aria-label', root.getAttribute('data-tabs-label') || 'Secções');
    list.style.setProperty('--tab-count', panels.length);
    var item = root.getAttribute('data-tabs-item') || 'Parte';   // ex.: «Tema» → «Tema 1», «Tema 2»…
    function labelOf(i) { return panels[i].dataset.tabLabel || ('Secção ' + (i + 1)); }
    var tabs = panels.map(function (panel, i) {
      var id = panel.id || ('painel-' + i);
      panel.id = id;
      var tab = document.createElement('button');
      tab.type = 'button';
      tab.className = 'tab';
      tab.id = 'tab-' + id;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-controls', id);
      tab.innerHTML = (panel.dataset.tabIcon ? '<span class="tab-ico">' + PC.icon(panel.dataset.tabIcon) + '</span>' : '') +
        '<span class="tab-text"><span class="tab-num">' + PC.esc(item) + ' ' + (i + 1) + '<span class="visually-hidden">:</span></span> ' +
        '<span class="tab-label">' + PC.esc(labelOf(i)) + '</span></span>';
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', tab.id);
      panel.setAttribute('tabindex', '0');
      list.appendChild(tab);
      return tab;
    });
    root.insertBefore(list, panels[0]);
    root.classList.add('is-ready');

    /* «anterior / seguinte» no fim de cada painel */
    var low = item.toLowerCase();
    panels.forEach(function (panel, i) {
      var nav = document.createElement('nav');
      nav.className = 'tab-pager';
      nav.setAttribute('aria-label', 'Mudar de ' + low);
      nav.innerHTML =
        (i > 0 ? '<button type="button" class="pager-link" data-go="' + (i - 1) + '"><small>' + PC.icon('arrow-left') + ' ' + PC.esc(item) + ' anterior</small><strong>' + PC.esc(labelOf(i - 1)) + '</strong></button>' : '') +
        (i < panels.length - 1 ? '<button type="button" class="pager-link pager-next" data-go="' + (i + 1) + '"><small>' + PC.esc(item) + ' seguinte ' + PC.icon('arrow-right') + '</small><strong>' + PC.esc(labelOf(i + 1)) + '</strong></button>' : '');
      nav.addEventListener('click', function (e) {
        var b = e.target.closest('[data-go]');
        if (!b) return;
        var k = parseInt(b.getAttribute('data-go'), 10);
        select(k, false, true);
        list.scrollIntoView({ block: 'start' });
        tabs[k].focus({ preventScroll: true });
      });
      panel.appendChild(nav);
    });

    function select(idx, focus, updateHash) {
      tabs.forEach(function (t, i) {
        var on = i === idx;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        panels[i].hidden = !on;
      });
      if (focus) tabs[idx].focus();
      if (updateHash && history.replaceState) history.replaceState(null, '', '#' + panels[idx].id);
    }
    list.addEventListener('click', function (e) {
      var t = e.target.closest('[role="tab"]');
      if (t) select(tabs.indexOf(t), false, true);
    });
    list.addEventListener('keydown', function (e) {
      var i = tabs.indexOf(document.activeElement);
      if (i < 0) return;
      var next = null;
      if (e.key === 'ArrowRight') next = (i + 1) % tabs.length;
      else if (e.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
      else if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = tabs.length - 1;
      if (next !== null) { e.preventDefault(); select(next, true, true); }
    });
    var start = 0;
    if (location.hash) {
      var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target) {
        var owner = target.closest('.tab-panel');
        var k = panels.indexOf(owner);
        if (k >= 0) start = k;
      }
    }
    select(start, false, false);
  };

  /* ---------- botões de alternância (ex.: grelha da regra dos terços) ---------- */
  function initToggles() {
    document.querySelectorAll('[data-toggle-target]').forEach(function (btn) {
      var target = document.getElementById(btn.getAttribute('data-toggle-target'));
      if (!target) return;
      btn.addEventListener('click', function () {
        var pressed = btn.getAttribute('aria-pressed') === 'true';
        btn.setAttribute('aria-pressed', String(!pressed));
        target.style.display = pressed ? 'none' : '';
        var label = btn.querySelector('[data-label]');
        if (label) label.textContent = pressed ? btn.getAttribute('data-label-off') : btn.getAttribute('data-label-on');
      });
    });
  }

  /* ---------- carregar incorporações apenas quando pedido ---------- */
  PC.initEmbedButtons = function (scope) {
    (scope || document).querySelectorAll('[data-embed-src]').forEach(function (btn) {
      if (btn.dataset.bound) return;
      btn.dataset.bound = '1';
      btn.addEventListener('click', function () {
        var slot = document.getElementById(btn.getAttribute('data-embed-slot'));
        if (!slot) return;
        var iframe = document.createElement('iframe');
        iframe.src = btn.getAttribute('data-embed-src');
        iframe.title = btn.getAttribute('data-embed-title') || 'Conteúdo incorporado';
        iframe.setAttribute('allow', 'fullscreen; xr-spatial-tracking; autoplay');
        iframe.setAttribute('allowfullscreen', '');
        iframe.loading = 'lazy';
        slot.innerHTML = '';
        slot.appendChild(iframe);
        slot.hidden = false;
        btn.hidden = true;
        iframe.focus();
      });
    });
  };

  document.addEventListener('DOMContentLoaded', function () {
    initA11yPanel();
    initNav();
    initSidebar();
    initToggles();
    document.querySelectorAll('[data-tabs]').forEach(PC.initTabs);
    PC.initEmbedButtons(document);
  });
})();
