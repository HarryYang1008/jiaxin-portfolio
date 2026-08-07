(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nav = document.querySelector(".site-nav");
  const targets = Array.from(document.querySelectorAll(
    ".manifesto h2, .manifesto-body, .work-heading h2, .home-project, .campaign-image, .process > h2, .process-steps li, .journey > h2, .timeline article, .practice h2, .skill-lines span, .contact h2, .archive-hero > *, .archive-list article, .case-hero h1, .case-hero > p, .case-overview > div, .story-beat > *, .case-deliverables > *, .reflection > *, .source-note > *"
  ));
  targets.forEach((target) => target.classList.add("reveal-target"));

  if (reduceMotion) {
    targets.forEach((target) => target.classList.add("is-revealed"));
    document.documentElement.style.setProperty("--page-progress", "1");
    nav?.classList.add("is-visible");
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  targets.forEach((target) => observer.observe(target));

  const parallax = Array.from(document.querySelectorAll(
    ".portrait-wrap img, .identity-copy, .home-project .project-visual, .campaign-image img, .story-pause span, .closing-statement p"
  ));
  let frame = 0;
  const update = () => {
    const range = document.documentElement.scrollHeight - window.innerHeight;
    const progress = range > 0 ? window.scrollY / range : 0;
    document.documentElement.style.setProperty("--page-progress", String(progress));
    nav?.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.7 || document.body.dataset.innerPage === "true");
    parallax.forEach((target) => {
      const rect = target.getBoundingClientRect();
      const offset = rect.top + rect.height / 2 - window.innerHeight / 2;
      const value = Math.max(-1, Math.min(1, offset / window.innerHeight));
      target.style.setProperty("--parallax-y", `${value * -42}px`);
      target.style.setProperty("--parallax-x", `${value * 52}px`);
      target.style.setProperty("--parallax-rotate", `${value * -1.2}deg`);
    });
    frame = 0;
  };
  const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
  update();
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);
})();
