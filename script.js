// Tabs: one panel visible at a time, each with its own URL hash (#about, #pm, #builder).
(function () {
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  var ids = tabs.map(function (t) { return t.getAttribute('aria-controls'); });

  function show(id, opts) {
    opts = opts || {};
    if (ids.indexOf(id) === -1) id = ids[0];
    tabs.forEach(function (t) {
      var on = t.getAttribute('aria-controls') === id;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      if (on && opts.focus) t.focus();
    });
    if (opts.push && location.hash !== '#' + id) history.pushState(null, '', '#' + id);
  }

  // Scroll to an entry inside a panel and flash it so the eye lands on it.
  function jumpTo(targetId) {
    var el = document.getElementById(targetId);
    if (!el) return;
    el.scrollIntoView({ block: 'start' });
    el.classList.remove('flash');
    void el.offsetWidth;
    el.classList.add('flash');
  }

  function toTabTop() {
    var bar = document.querySelector('.tabbar');
    if (bar.getBoundingClientRect().top <= 0) {
      window.scrollTo(0, bar.offsetTop);
    }
  }

  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () {
      show(t.getAttribute('aria-controls'), { push: true });
      toTabTop();
    });
    t.addEventListener('keydown', function (e) {
      var next = null;
      if (e.key === 'ArrowRight') next = (i + 1) % tabs.length;
      if (e.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
      if (e.key === 'Home') next = 0;
      if (e.key === 'End') next = tabs.length - 1;
      if (next === null) return;
      e.preventDefault();
      show(ids[next], { push: true, focus: true });
    });
  });

  // In-page links to another tab, optionally to one entry inside it.
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href').slice(1);
    if (ids.indexOf(id) === -1) return;
    e.preventDefault();
    show(id, { push: true });
    var target = a.getAttribute('data-jump');
    if (target) jumpTo(target); else toTabTop();
  });

  function fromHash() { show(location.hash.slice(1)); }
  window.addEventListener('hashchange', fromHash);
  window.addEventListener('popstate', fromHash);
  fromHash();
})();

// "Email me" opens a small menu, since a bare mailto link does nothing without a mail app set up.
(function () {
  var btn = document.getElementById('email-btn');
  var menu = document.getElementById('email-menu');
  var copy = document.getElementById('email-copy');
  var address = 'agupta7@andrew.cmu.edu';

  function setOpen(open) {
    menu.hidden = !open;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) menu.querySelector('a').focus();
  }

  btn.addEventListener('click', function () { setOpen(menu.hidden); });
  document.addEventListener('click', function (e) {
    if (!menu.hidden && !e.target.closest('.email')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !menu.hidden) { setOpen(false); btn.focus(); }
  });

  copy.addEventListener('click', function () {
    function done() {
      copy.textContent = 'Copied';
      setTimeout(function () { copy.textContent = 'Copy address'; }, 1600);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(address).then(done, function () { window.prompt('Copy this address:', address); });
    } else {
      window.prompt('Copy this address:', address);
    }
  });
})();
