(() => {
  const menuBtnRef = document.querySelectorAll("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.forEach(button => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true" || false;

      button.classList.toggle("is-open");
      button.setAttribute("aria-expanded", !expanded);

      mobileMenuRef.classList.toggle("is-open");
    });
  });
})();