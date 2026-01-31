// Registrar plugin //

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  crearTimelineMaestro();
});

function crearTimelineMaestro() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "main",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    }
  });

  /* HERO */
  
  /* SERVICIOS */
  tl.from(".service-card", {
    opacity: 0,
    y: 40,
    stagger: 0.2,
    duration: 1
  }, "+=0.3");

  /* POR QUÉ ELEGIRNOS */
  tl.from(".why__item", {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 1
  }, "+=0.3");

  /* TESTIMONIOS */
  tl.from(".testimonials__card", {
    opacity: 0,
    y: 40,
    stagger: 0.25,
    duration: 1
  }, "+=0.3");
}

function pinPorqueElegirnos() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".why",
      start: "top top",
      end: "+=120%",
      scrub: true,
      pin: true,
      anticipatePin: 1
    }
  });

  tl.from(".why__item", {
    opacity: 0,
    y: 40,
    stagger: 0.3,
    ease: "power2.out"
  });
}

/* Storytelling */
function storytellingTestimonios() {
  gsap.fromTo(".testimonials__card",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".testimonials",
        start: "top 70%",
        end: "bottom 40%",
        scrub: true
      }
    }
  );
}
storytellingTestimonios();

function animarHeaderScroll() {
  gsap.to(".header", {
    opacity: 0,
    y: -40,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "+=300",
      scrub: true
    }
  });
} 
animarHeaderScroll();
