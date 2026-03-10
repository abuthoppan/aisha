/* AISHA — main.js */
(function () {
  'use strict';

  /* ── Mobile menu ─────────────────────────────── */
  var toggle = document.getElementById('menu-toggle');
  var nav    = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  /* ── Scroll reveal ───────────────────────────── */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    reveals.forEach(function (r) { obs.observe(r); });
  } else {
    reveals.forEach(function (r) { r.classList.add('visible'); });
  }

  /* ── Mailchimp form ──────────────────────────── */
  var form     = document.getElementById('mc-embedded-subscribe-form');
  var submitBtn = document.getElementById('mc-submit');
  var emailIn  = document.getElementById('mc-email');
  var msgEl    = document.getElementById('mc-message');
  var successEl = document.getElementById('newsletter-success');

  function showMsg(text, isError) {
    if (!msgEl) return;
    msgEl.textContent = text;
    msgEl.style.display = 'block';
    msgEl.className = 'mc-message' + (isError ? ' error' : '');
  }

  if (form && submitBtn) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var email = emailIn ? emailIn.value.trim() : '';
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showMsg('Please enter a valid email address.', true);
        if (emailIn) emailIn.focus();
        return;
      }

      var action = form.getAttribute('action');
      if (!action || action === '') {
        showMsg('Newsletter not configured yet — check back soon!', true);
        return;
      }

      /* Use Mailchimp's JSONP endpoint to avoid CORS */
      var jsonpUrl = action.replace('/post?', '/post-json?') + '&c=__mailchimpCallback';
      var fname = document.getElementById('mc-fname');
      jsonpUrl += '&EMAIL=' + encodeURIComponent(email);
      if (fname && fname.value) jsonpUrl += '&FNAME=' + encodeURIComponent(fname.value.trim());

      submitBtn.textContent = 'Subscribing…';
      submitBtn.disabled = true;

      window.__mailchimpCallback = function (data) {
        delete window.__mailchimpCallback;
        var script = document.getElementById('__mc_script');
        if (script) script.remove();

        if (data.result === 'success') {
          if (form)      form.style.display = 'none';
          if (successEl) { successEl.hidden = false; successEl.style.display = 'flex'; }
        } else {
          var msg = data.msg || 'Something went wrong. Please try again.';
          // Strip Mailchimp HTML tags from error message
          msg = msg.replace(/<[^>]*>/g, '').replace(/^\d+\s+-\s+/, '');
          showMsg(msg, true);
          submitBtn.textContent = 'Subscribe to AISHA →';
          submitBtn.disabled = false;
        }
      };

      var script = document.createElement('script');
      script.id  = '__mc_script';
      script.src = jsonpUrl;
      document.body.appendChild(script);
    });
  }

  /* ── Category filter (blog archive) ─────────── */
  var filterBtns = document.querySelectorAll('.filter-btn');
  var postCards  = document.querySelectorAll('.post-card[data-category]');

  if (filterBtns.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        var filter = btn.getAttribute('data-filter');
        postCards.forEach(function (card) {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ── Smooth scroll for anchor links ─────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href').slice(1);
      var el = document.getElementById(id);
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

})();
