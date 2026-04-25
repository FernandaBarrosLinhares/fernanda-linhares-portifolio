// const hamburger = document.getElementById("hamburger");
// const menu = document.getElementById("menu");


// hamburger.addEventListener("click", () => {
//   menu.classList.toggle("active");
// });


// document.querySelectorAll("#menu a").forEach(link => {
//   link.addEventListener("click", () => {
//     menu.classList.remove("active");
//   });
// });



// function mostrarAba(id) {
//   const cards = document.querySelectorAll(".gee-card");

//   cards.forEach(card => {
//     card.classList.add("hidden");
//   });

//   const ativa = document.getElementById(id);
//   if (ativa) {
//     ativa.classList.remove("hidden");
//   }
// }


// document.addEventListener("DOMContentLoaded", () => {
//   mostrarAba("areas");
// });


// MENU HAMBURGER
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


// ABAS GEE
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


// =========================
// 🚀 CARROSSEL + MODAL QGIS
// =========================

const carousel = document.getElementById("carousel");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

// precisa estar no window por causa do onclick no HTML
window.scrollCarousel = function(direction) {
  if (!carousel) return;

  carousel.scrollBy({
    left: direction * 350,
    behavior: "smooth"
  });
};

window.openModal = function(imgSrc) {
  if (!modal || !modalImg) return;

  modal.classList.add("active");
  modalImg.src = imgSrc;
};

window.closeModal = function() {
  if (!modal) return;

  modal.classList.remove("active");
};