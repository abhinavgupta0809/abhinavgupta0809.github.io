// Light / dark theme. The page follows the system setting until the visitor picks one with the
// toggle; that choice is remembered in localStorage. A tiny inline script in <head> applies a saved
// choice before first paint, so there is no flash.
(function () {
  var root = document.documentElement;
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  var buttons = Array.prototype.slice.call(document.querySelectorAll('[data-theme-toggle]'));

  function current() {
    var set = root.getAttribute('data-theme');
    if (set === 'dark' || set === 'light') return set;
    return mq && mq.matches ? 'dark' : 'light';
  }

  function label() {
    var next = current() === 'dark' ? 'light' : 'dark';
    buttons.forEach(function (b) {
      b.setAttribute('aria-label', 'Switch to ' + next + ' theme');
      b.title = 'Switch to ' + next + ' theme';
    });
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* storage blocked: the choice lasts this page only */ }
      label();
    });
  });
  if (mq && mq.addEventListener) mq.addEventListener('change', label);
  label();
})();
