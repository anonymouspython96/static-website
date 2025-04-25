    // Clona le slide per il loop infinito senza ripetere manualmente
    document.addEventListener('DOMContentLoaded', () => {
        const track = document.querySelector('.slide-track');
        const slides = Array.from(track.children);
        slides.forEach(slide => {
          track.appendChild(slide.cloneNode(true));
        });
      });