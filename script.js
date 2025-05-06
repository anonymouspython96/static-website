// Clona le slide per il loop infinito senza ripetere manualmente
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".slide-track");
  const slides = Array.from(track.children);
  slides.forEach((slide) => {
    track.appendChild(slide.cloneNode(true));
  });
});

const scrollButton = document.getElementById('scrollButton');
const showAfter = 200; // soglia in pixel per far comparire il bottone

// Al scroll controlla se mostrare o nascondere
window.addEventListener('scroll', () => {
  if (window.scrollY > showAfter) {
    scrollButton.classList.add('show');
  } else {
    scrollButton.classList.remove('show');
  }
});

// Al click scrolla in cima
scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});