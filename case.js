// Case pages: keep the "1 / 4" counter and the tick marks in sync with the slide in view, and let
// arrow keys and PageUp / PageDown move between slides. The page works without it.
(function () {
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  if (!slides.length) return;
  var currentEl = document.querySelector('[data-current]');
  var ticks = Array.prototype.slice.call(document.querySelectorAll('.ticks a'));
  var bar = document.querySelector('.deckbar');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  function setCurrent(i) {
    if (currentEl) currentEl.textContent = String(i + 1);
    ticks.forEach(function (t, j) {
      if (j === i) t.setAttribute('aria-current', 'step');
      else t.removeAttribute('aria-current');
    });
  }
  setCurrent(0);

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) setCurrent(slides.indexOf(e.target));
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    slides.forEach(function (s) { io.observe(s); });
  }

  var NEXT = ['ArrowDown', 'ArrowRight', 'PageDown'];
  var PREV = ['ArrowUp', 'ArrowLeft', 'PageUp'];

  document.addEventListener('keydown', function (e) {
    if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
    var t = e.target;
    if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
    var dir = NEXT.indexOf(e.key) !== -1 ? 1 : PREV.indexOf(e.key) !== -1 ? -1 : 0;
    if (!dir) return;

    var top = bar ? bar.getBoundingClientRect().bottom : 0;
    var vh = window.innerHeight;
    var rects = slides.map(function (s) { return s.getBoundingClientRect(); });
    var target = -1;
    var i;

    if (dir > 0) {
      for (i = 0; i < rects.length; i++) {
        // A slide taller than the screen scrolls normally until its end is visible.
        if (rects[i].top <= top + 2 && rects[i].bottom > top + 2) {
          if (rects[i].bottom > vh + 2 && e.key !== 'ArrowRight') return;
          break;
        }
      }
      for (i = 0; i < rects.length; i++) {
        if (rects[i].top > top + 2) { target = i; break; }
      }
    } else {
      // Below the last slide ("More from" and the pager), scroll normally until a slide is back in view.
      var last = rects[rects.length - 1];
      if (last.bottom <= top + 2) return;
      for (i = rects.length - 1; i >= 0; i--) {
        if (rects[i].top < top - 2) { target = i; break; }
      }
    }
    if (target < 0) return;

    e.preventDefault();
    slides[target].scrollIntoView({ behavior: reduce.matches ? 'auto' : 'smooth', block: 'start' });
    slides[target].focus({ preventScroll: true });
    setCurrent(target);
  });
})();
