/* =====================================================================
   Percurso CAMUL — questionários com explicação de cada opção
   Tipos de pergunta:
     type: "single"   → escolha múltipla com UMA resposta certa (rádio)
     type: "multiple" → seleção múltipla, «selecione todas as corretas»
   Cada opção tem «feedback»: a justificação de estar certa ou errada.
   Dados: window.QUIZZES[id] = { title, intro, questions:[{ type, prompt,
          scenario, options:[{ text, correct, feedback }] }] }
   ===================================================================== */
(function () {
  'use strict';
  var PC = (window.PC = window.PC || {});
  var LETTERS = 'abcdefghij';
  var counter = 0;

  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    var s = a.slice().sort().join(',');
    return s === b.slice().sort().join(',');
  }

  PC.quiz = function (mount, data) {
    if (!data || !data.questions || !data.questions.length) return;
    counter += 1;
    var qid = 'quiz-' + counter;
    var qs = data.questions;
    var total = qs.length;
    var current = 0;
    var answers = [];   // índices escolhidos por pergunta
    var outcomes = [];  // 'ok' | 'part' | 'err'

    var root = PC.el(
      '<section class="quiz" aria-labelledby="' + qid + '-t">' +
        '<div class="quiz-head"><h3 id="' + qid + '-t">' + PC.esc(data.title || 'Teste') + '</h3>' +
        '<p class="quiz-step" data-step></p></div>' +
        (data.intro ? '<p class="quiz-intro">' + PC.esc(data.intro) + '</p>' : '') +
        '<div class="quiz-progress" aria-hidden="true"><span data-bar style="width:0"></span></div>' +
        '<div data-body></div>' +
      '</section>'
    );
    var body = root.querySelector('[data-body]');
    var step = root.querySelector('[data-step]');
    var bar = root.querySelector('[data-bar]');

    function correctIdx(q) {
      var out = [];
      q.options.forEach(function (o, i) { if (o.correct) out.push(i); });
      return out;
    }

    function optionFeedbackHTML(q, o, i, chosen) {
      var isChosen = chosen.indexOf(i) >= 0;
      var tag = o.correct
        ? '<span class="verdict-tag">' + PC.icon('check') + (q.type === 'multiple' && !isChosen ? 'Correta (não selecionada)' : 'Correta') + '</span>'
        : '<span class="verdict-tag">' + PC.icon('x') + 'Incorreta</span>';
      return tag + (isChosen ? '<span class="choice-tag">A sua escolha</span>' : '') +
        (o.feedback ? ' ' + PC.esc(o.feedback) : '');
    }

    function renderQuestion() {
      root.classList.remove('is-answered');
      var q = qs[current];
      var multi = q.type === 'multiple';
      var name = qid + '-q' + current;
      step.textContent = 'Pergunta ' + (current + 1) + ' de ' + total;
      bar.style.width = (current / total * 100) + '%';

      var opts = q.options.map(function (o, i) {
        var oid = name + '-o' + i;
        return '<li><label class="option" for="' + oid + '">' +
          '<input type="' + (multi ? 'checkbox' : 'radio') + '" id="' + oid + '" name="' + name + '" value="' + i + '">' +
          '<span class="option-letter" aria-hidden="true">' + LETTERS[i] + ')</span>' +
          '<span class="option-text">' + PC.esc(o.text) + '<span class="option-feedback" hidden></span></span>' +
          '</label></li>';
      }).join('');

      body.innerHTML =
        '<form novalidate>' +
          '<fieldset aria-describedby="' + name + '-hint">' +
            '<legend tabindex="-1">' + PC.esc(q.prompt) + '</legend>' +
            (q.scenario ? '<p class="quiz-scenario">' + PC.esc(q.scenario) + '</p>' : '') +
            '<p class="quiz-hint" id="' + name + '-hint">' + PC.icon(multi ? 'list-check' : 'circle-dot') +
              (multi ? 'Selecione todas as opções corretas.' : 'Escolha uma opção (só uma está certa).') + '</p>' +
            '<ul class="options">' + opts + '</ul>' +
          '</fieldset>' +
          '<p class="quiz-error" role="alert" hidden>' + PC.icon('alert') + '<span></span></p>' +
          '<div data-verdict></div>' +
          '<div class="btn-row" data-actions><button type="submit" class="btn btn-primary">' + PC.icon('check') + 'Verificar resposta</button></div>' +
        '</form>';

      var form = body.querySelector('form');
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        check(form);
      });
      form.addEventListener('change', function () {
        var err = form.querySelector('.quiz-error');
        err.hidden = true;
      });
    }

    function check(form) {
      var q = qs[current];
      var chosen = Array.prototype.map.call(form.querySelectorAll('input:checked'), function (i) { return Number(i.value); });
      var err = form.querySelector('.quiz-error');
      if (!chosen.length) {
        err.querySelector('span').textContent = q.type === 'multiple'
          ? 'Selecione pelo menos uma opção antes de verificar.'
          : 'Escolha uma opção antes de verificar.';
        err.hidden = false;
        var first = form.querySelector('input');
        if (first) first.focus();
        return;
      }
      var right = correctIdx(q);
      var outcome;
      if (sameSet(chosen, right)) outcome = 'ok';
      else if (q.type === 'multiple' && chosen.some(function (c) { return right.indexOf(c) >= 0; })) outcome = 'part';
      else outcome = 'err';
      answers[current] = chosen;
      outcomes[current] = outcome;
      root.classList.add('is-answered');

      // mostrar a explicação de TODAS as opções
      form.querySelectorAll('.option').forEach(function (label, i) {
        var o = q.options[i];
        var isChosen = chosen.indexOf(i) >= 0;
        label.querySelector('input').disabled = true;
        if (o.correct) {
          label.classList.add('is-correct');
          if (!isChosen && q.type === 'multiple') label.classList.add('is-missed');
        } else if (isChosen) {
          label.classList.add('is-wrong');
        } else {
          label.classList.add('is-neutral');
        }
        var fb = label.querySelector('.option-feedback');
        fb.innerHTML = optionFeedbackHTML(q, o, i, chosen);
        fb.hidden = false;
      });

      var titles = { ok: 'Resposta correta!', part: 'Resposta parcialmente correta', err: 'Resposta incorreta' };
      var icons = { ok: 'check-circle', part: 'alert', err: 'x-circle' };
      var cls = { ok: 'ok', part: 'part', err: 'err' };
      var chosenText = chosen.map(function (i) {
        return LETTERS[i] + ') ' + q.options[i].text + (q.options[i].feedback ? ' — ' + q.options[i].feedback : '');
      });
      var verdict = form.querySelector('[data-verdict]');
      verdict.innerHTML =
        '<div class="quiz-verdict ' + cls[outcome] + '" tabindex="-1">' + PC.icon(icons[outcome]) +
          '<div><h4>' + titles[outcome] + '</h4>' +
          '<p>' + (chosen.length > 1 ? 'Escolheu: ' : 'A sua escolha: ') + PC.esc(chosenText.join(' | ')) + '</p>' +
          (outcome !== 'ok' ? '<p><strong>' + (right.length > 1 ? 'Respostas certas: ' : 'Resposta certa: ') + '</strong>' +
            PC.esc(right.map(function (i) { return LETTERS[i] + ') ' + q.options[i].text; }).join('; ')) + '</p>' : '') +
          '<p class="muted">A explicação de cada opção aparece junto à opção.</p></div>' +
        '</div>';

      var actions = form.querySelector('[data-actions]');
      var last = current === total - 1;
      actions.innerHTML = '<button type="button" class="btn btn-primary">' +
        (last ? 'Ver resultado final' : 'Pergunta seguinte') + PC.icon('arrow-right') + '</button>';
      actions.querySelector('button').addEventListener('click', function () {
        if (last) renderResult();
        else { current += 1; renderQuestion(); focusTop(); }
      });
      bar.style.width = ((current + 1) / total * 100) + '%';
      verdict.firstChild.focus();
    }

    function focusTop() {
      var legend = body.querySelector('legend');
      if (legend) legend.focus();
    }

    function reviewHTML() {
      return qs.map(function (q, qi) {
        var chosen = answers[qi] || [];
        return '<h4>' + (qi + 1) + '. ' + PC.esc(q.prompt) + '</h4>' +
          (q.scenario ? '<p class="quiz-scenario">' + PC.esc(q.scenario) + '</p>' : '') +
          '<ul class="options">' + q.options.map(function (o, i) {
            var c = o.correct ? 'is-correct' : (chosen.indexOf(i) >= 0 ? 'is-wrong' : 'is-neutral');
            return '<li><div class="option ' + c + '"><span class="option-letter" aria-hidden="true">' + LETTERS[i] + ')</span>' +
              '<span class="option-text">' + PC.esc(o.text) + '<span class="option-feedback">' + optionFeedbackHTML(q, o, i, chosen) + '</span></span></div></li>';
          }).join('') + '</ul>';
      }).join('');
    }

    function renderResult() {
      var score = outcomes.filter(function (o) { return o === 'ok'; }).length;
      var pct = Math.round(score / total * 100);
      step.textContent = 'Resultado';
      bar.style.width = '100%';
      var msg = pct === 100 ? 'Excelente! Domina os conceitos desta secção.'
        : pct >= 60 ? 'Bom trabalho. Reveja as explicações das perguntas que falhou.'
        : 'Vale a pena rever os conteúdos e tentar de novo — as explicações ajudam.';
      body.innerHTML =
        '<div class="quiz-result">' +
          '<div class="score-ring" style="--p:' + pct + '" aria-hidden="true"><span>' + score + '/' + total + '</span></div>' +
          '<h4 tabindex="-1" data-result-title>Acertou em ' + score + ' de ' + total + ' perguntas (' + pct + '%)</h4>' +
          '<p>' + msg + '</p>' +
          '<ul class="quiz-summary">' + qs.map(function (q, i) {
            var ok = outcomes[i] === 'ok';
            var label = ok ? 'Correta' : outcomes[i] === 'part' ? 'Parcialmente correta' : 'Incorreta';
            return '<li class="' + (ok ? 'ok' : 'err') + '">' + PC.icon(ok ? 'check' : 'x') +
              '<span><strong>Pergunta ' + (i + 1) + ' — ' + label + '.</strong> ' + PC.esc(q.prompt) + '</span></li>';
          }).join('') + '</ul>' +
          '<div class="btn-row">' +
            '<button type="button" class="btn btn-primary" data-retry>' + PC.icon('rotate') + 'Repetir o teste</button>' +
            '<button type="button" class="btn btn-secondary" data-review aria-expanded="false" aria-controls="' + qid + '-review">' + PC.icon('text') + 'Rever todas as explicações</button>' +
          '</div>' +
          '<div class="quiz-review" id="' + qid + '-review" hidden>' + reviewHTML() + '</div>' +
        '</div>';
      body.querySelector('[data-retry]').addEventListener('click', function () {
        current = 0; answers = []; outcomes = [];
        renderQuestion(); focusTop();
      });
      var rv = body.querySelector('[data-review]');
      rv.addEventListener('click', function () {
        var box = body.querySelector('.quiz-review');
        box.hidden = !box.hidden;
        rv.setAttribute('aria-expanded', String(!box.hidden));
      });
      body.querySelector('[data-result-title]').focus();
    }

    mount.replaceWith(root);
    renderQuestion();
    return root;
  };

  // Montagem automática: <div data-quiz="cor"></div>
  document.querySelectorAll('[data-quiz]').forEach(function (m) {
    var data = window.QUIZZES && window.QUIZZES[m.getAttribute('data-quiz')];
    if (data) PC.quiz(m, data);
  });
})();
