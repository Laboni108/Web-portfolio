/* ============================================================
   DESIGNER.DEV — Interactive Client Functionality Scripts
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  
  // Mobile Navigation panel layout toggle logic
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen);
    });
  }

  // Sticky Header scroll position tracking backdrop filter adjustment
  const header = document.getElementById("site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

});