// Petit effet d’animation au clic sur les boutons du menu
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(e.target.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: "smooth"
      });
    }
  });
});
