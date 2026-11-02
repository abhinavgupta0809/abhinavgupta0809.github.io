// Home page: email button with a small menu of other email options, and nav highlighting.
// Old links from earlier versions still land: #about is About, #pm is Selected work, #builds, #builder and
// #other-work are Personal projects, #experience is Path, and the old card and build ids are kept.

// The menu (mail app, Gmail, Outlook) is the secondary option to the Email link.
(function () {
  var groups = Array.prototype.slice.call(document.querySelectorAll('.split-btn'));
  groups.forEach(function (group) {
    var btn = group.querySelector('button[aria-controls]');
    var menu = btn && document.getElementById(btn.getAttribute('aria-controls'));
    if (!btn || !menu) return;

    function setOpen(open) {
      menu.hidden = !open;
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) menu.querySelector('a').focus();
    }
    group._setOpen = setOpen;

    btn.addEventListener('click', function () {
      var willOpen = menu.hidden;
      groups.forEach(function (g) { if (g !== group && g._setOpen) g._setOpen(false); });
      setOpen(willOpen);
    });
    document.addEventListener('click', function (e) {
      if (!menu.hidden && !group.contains(e.target)) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.hidden) { setOpen(false); btn.focus(); }
    });
  });
})();

// Nav: mark the section currently in view.
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav-links a[href^="#"]'));
  if (!links.length || !('IntersectionObserver' in window)) return;
  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
  var sections = Object.keys(byId).map(function (id) { return document.getElementById(id); }).filter(Boolean);

  function setCurrent(id) {
    links.forEach(function (a) {
      if (a === byId[id]) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) setCurrent(e.target.id); });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(function (s) { io.observe(s); });
})();
