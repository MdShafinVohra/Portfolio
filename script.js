(function () {
  const links = document.querySelectorAll(".nav__links a");
  const nav = document.querySelector(".nav");

  // Smooth scroll for anchor links
  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      const href = link.getAttribute("href");
      if (href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  // Nav background on scroll
  const threshold = 8;
  function onScroll() {
    if (window.scrollY > threshold) {
      nav.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
    } else {
      nav.style.boxShadow = "none";
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
})();
