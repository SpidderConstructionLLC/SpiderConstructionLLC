/* Spider Construction LLC — shared interactions */
(function () {
  // Mobile nav toggle
  function initNav() {
    var btn = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', function () {
      nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }

  // Scroll reveal
  function initReveal() {
    var els = document.querySelectorAll('.anim-up');
    if (!('IntersectionObserver' in window) || !els.length) {
      els.forEach(function (e) { e.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (e, i) {
      e.style.transitionDelay = (Math.min(i % 4, 3) * 80) + 'ms';
      io.observe(e);
    });
  }

  // Estimate / contact form (front-end demo handler)
  function initForms() {
    document.querySelectorAll('form[data-demo]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var card = form.closest('.form-card') || form.parentElement;
        var ok = form.querySelector('.form-success');
        if (ok) {
          form.style.display = 'none';
          ok.style.display = 'block';
          ok.scrollTop = 0;
        }
      });
    });
  }

  // Current year in footers
  function initYear() {
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initNav(); initReveal(); initForms(); initYear();
  });
})();
