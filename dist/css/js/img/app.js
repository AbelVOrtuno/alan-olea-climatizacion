
const whySection = document.querySelector('.why-us');

window.addEventListener('scroll', () => {
  const pos = whySection.getBoundingClientRect().top;
  if (pos < window.innerHeight - 100) {
    whySection.classList.add('visible');
  }
});
