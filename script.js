document.addEventListener("DOMContentLoaded", () => {

  // Animated stat counters
  const statEls = document.querySelectorAll(".stat__num");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function animateCount(el) {
    const target = parseInt(el.dataset.target, 10);
    if (prefersReducedMotion) {
      el.textContent = target;
      return;
    }
    const duration = 1200;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target;
      }
    }
    requestAnimationFrame(tick);
  }

  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  statEls.forEach(el => statObserver.observe(el));

  // Scroll-triggered fade-in for sections
  const sections = document.querySelectorAll("section");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.12 });

  sections.forEach(section => {
    section.classList.add("fade-in");
    revealObserver.observe(section);
  });

});
