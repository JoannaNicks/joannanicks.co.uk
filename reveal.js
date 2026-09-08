/* ============================================================
   Scroll reveal — content eases up into place as it scrolls in.
   Enhancement only: the hidden state lives under the `js` class
   that this adds to <html>, so with JavaScript off nothing is
   ever hidden. Anyone who prefers reduced motion sees it all at
   once, no movement.
   ============================================================ */
(function () {
  // The blocks that lift in. Never nest one target inside another,
  // or the child would sit invisible while its parent fades in.
  var targets = Array.prototype.slice.call(document.querySelectorAll(
    '.hero h1, .hero .roles, .bio-text > p, .shout, .bio-photo, .door, ' +
    '.lede, .work, .service, .grid > *, .next, ' +
    '.contact h2, .contact > p, .contact .email'
  ));
  if (!targets.length) return;

  // A light stagger: neighbours sharing a parent lift one after another.
  var counts = new Map();
  targets.forEach(function (el) {
    var i = counts.get(el.parentNode) || 0;
    counts.set(el.parentNode, i + 1);
    if (i) el.style.transitionDelay = Math.min(i * 70, 420) + 'ms';
  });

  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Reduced motion, or a browser without the observer: just show everything.
  if (still || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });

  targets.forEach(function (el) { io.observe(el); });
})();
