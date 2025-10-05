// === ГАМБУРГЕР-МЕНЮ ===
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  navList.classList.toggle("active");
});

// === АНИМАЦИЯ ПОЯВЛЕНИЯ СЕКЦИЙ ===
const sections = document.querySelectorAll("section");

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.9;
  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top < triggerBottom) section.classList.add("visible");
  });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();

// === ЗАКРЫТИЕ МЕНЮ ПО КЛИКУ НА ССЫЛКУ ===
document.querySelectorAll(".nav-list a").forEach((link) =>
  link.addEventListener("click", () => {
    navList.classList.remove("active");
    mobileMenu.classList.remove("active");
  })
);
