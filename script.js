const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");


hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});


document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});



function mostrarAba(id) {
  const cards = document.querySelectorAll(".gee-card");

  cards.forEach(card => {
    card.classList.add("hidden");
  });

  const ativa = document.getElementById(id);
  if (ativa) {
    ativa.classList.remove("hidden");
  }
}


document.addEventListener("DOMContentLoaded", () => {
  mostrarAba("areas");
});