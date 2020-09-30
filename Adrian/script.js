gsap.from(".card-content", {
  duration: 1.2,
  y: "-100%",
  ease: "bounce.out",
});
gsap.from("img", { duration: 1, x: "-100%", delay: 0.5, ease: "power2.in" });
gsap.from("h1", { duration: 0.2, opacity: 0, delay: 1.7 });
gsap.from("h3", { duration: 0.2, opacity: 0, delay: 1.7 });
gsap.from(".card p", { duration: 0.5, opacity: 0, delay: 1.7, stagger: 0.5 });
gsap.from(".rightText", {
  duration: 0.5,
  opacity: 0,
  delay: 1.7,
  stagger: 0.5,
});
gsap.fromTo(
  ".fab",
  { opacity: 0.1, scale: 0.1, rotation: 360 },
  { duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0 }
);

gsap.from(".title1", { duration: 1, opacity: 0, delay: 1.5, stagger: 0.5 });

gsap.from(".percentage", {
  duration: 1.2,
  y: "-100%",
  ease: "bounce.out",
});

gsap.from(".title2", { duration: 1, opacity: 0, delay: 1.5, stagger: 0.5 });

gsap.from(".timeline", {
  duration: 1.2,
  y: "-100%",
  ease: "bounce.out",
});
