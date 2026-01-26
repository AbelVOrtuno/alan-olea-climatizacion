/* Animacion al hacer scroll vertical */
const whySection = document.querySelector('.why-us');

window.addEventListener('scroll', () => {
  const pos = whySection.getBoundingClientRect().top;
  if (pos < window.innerHeight - 100) {
    whySection.classList.add('visible');
  }
});

/* Animacion al entrar las cards al viewport */

const cards = document.querySelectorAll('.testimonials__card');

window.addEventListener('scroll', ()=> {
  cards.forEach(card => {
    const pos = card.getBoundingClientRect().top;
    if (pos < window.innerHeight -80) {
      card.classList.add('visible');
    }
  });
});

/* Animacion del boton y la imagen */

const cta = document.querySelector('.cta');

window.addEventListener('scroll', () => {
  const pos = cta.getBoundingClientRect().top;
  if (pos < window.innerHeight - 100) {
    cta.classList.add('visible');
  }
});