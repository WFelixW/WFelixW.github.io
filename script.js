document.addEventListener("DOMContentLoaded", () => {

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Animate skill bars when scrolled into view
  const skillFills = document.querySelectorAll(".skill-bar__fill");
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target.dataset.width;
        entry.target.style.width = prefersReducedMotion ? target + "%" : "0%";
        requestAnimationFrame(() => {
          entry.target.style.width = target + "%";
        });
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  skillFills.forEach(fill => skillObserver.observe(fill));

  // Project filter widget
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach(b => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      button.classList.add("is-active");
      button.setAttribute("aria-selected", "true");

      projectCards.forEach(card => {
        const status = card.dataset.status;
        const match = filter === "all" || status === filter;
        card.classList.toggle("is-hidden", !match);
      });
    });
  });

  // Scroll-triggered fade-in for sections
  const sections = document.querySelectorAll("section");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.classList.add("fade-in");
    revealObserver.observe(section);
  });

});
