const navbarNav = document.querySelector(".navbar-nav");
const menu = document.getElementById("menu");
const img = document.querySelector(".profil img");
const overlay = document.querySelector(".overlay");

menu.addEventListener("click", (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
});

document.addEventListener("click", (e) => {
  if (!navbarNav.contains(e.target) && !menu.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

img.addEventListener("click", () => {
  overlay.style.display = "flex";
});

overlay.addEventListener("click", function () {
  this.classList.add("animasiKeluar");
  setTimeout(() => {
    this.classList.remove("animasiKeluar");
    this.style.display = "none";
  }, 500);
});
