// Arya Panji — Portfolio
// Mobile navigation + restrained shared behavior.

function initNav() {
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");
  if (!toggle || !links) return;

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    links.classList.toggle("is-open", open);
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  // Close on link selection or outside click / Escape
  links.addEventListener("click", (e) => {
    if (e.target.closest("a")) setOpen(false);
  });

  document.addEventListener("click", (e) => {
    if (
      toggle.getAttribute("aria-expanded") === "true" &&
      !e.target.closest(".nav")
    ) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });

  // Reset state when crossing the desktop breakpoint
  window
    .matchMedia("(min-width: 861px)")
    .addEventListener("change", (mq) => mq.matches && setOpen(false));
}

initNav();
