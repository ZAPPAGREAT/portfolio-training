document.querySelectorAll(".menu-toggle").forEach((button) => {
  const header = button.closest(".site-header");
  const menu = document.getElementById(button.getAttribute("aria-controls"));

  const closeMenu = () => {
    header.classList.remove("is-menu-open");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "メニューを開く");
  };

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    header.classList.toggle("is-menu-open", !isOpen);
    button.setAttribute("aria-expanded", String(!isOpen));
    button.setAttribute("aria-label", isOpen ? "メニューを開く" : "メニューを閉じる");
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) closeMenu();
  });
});