var full_hook = document.getElementById("full_hook"),
  hook = document.getElementById("hook"),
  strings = document.getElementById("strings"),
  website = document.getElementById("website"),
  sign_body = document.getElementById("sign_body"),
  clouds_background = document.getElementById("back_clouds"),
  clouds_foreground = document.getElementById("front_clouds"),
  moto_stiv = document.getElementById("motostiv"),
  moto = document.getElementById("moto"),
  wheel1 = document.getElementById("wheel1"),
  wheel2 = document.getElementById("wheel2"),
  orange_item = document.getElementById("orange_item"),
  platform = document.getElementById("platform"),
  angular_logo = document.getElementById("angular_logo"),
  react_logo = document.getElementById("react_logo"),
  logos = document.querySelectorAll(".logo"),
  website_tl,
  logo_tl;

website_tl = new TimelineMax();
logo_tl = new TimelineMax();
/* Setup stage */
// boot up the first call

gsap.to(logos, 1, {
  autoAlpha: 1,
  stagger: {
    each: 2,
    repeat: 1,
    yoyo: true,
  },
  repeat: -1,
});

website_tl
  .fromTo(full_hook, 6, { yPercent: -100 }, { yPercent: -10 })
  .fromTo(
    full_hook,
    2,
    {
      ease: Power1.easeInOut,
      transformOrigin: "top center",
      rotation: 20,
    },
    {
      ease: Power1.easeInOut,
      transformOrigin: "top center",
      rotation: -20,
      repeat: 2,
    },
    "-=6"
  )
  .fromTo(
    full_hook,
    2,
    {
      ease: Power1.easeInOut,
      transformOrigin: "top center",
      rotation: -20,
      repeat: 2,
    },
    {
      ease: Power1.easeInOut,
      transformOrigin: "top center",
      rotation: 20,
    },
    "-=4"
  )
  .to(full_hook, 2, {
    ease: Power1.easeInOut,
    transformOrigin: "top center",
    rotation: 0,
  })
  .to(strings, 0.5, { opacity: 0 }, "-=0.5")
  .to(website, 0.5, { yPercent: 40, ease: "bounce" }, "-=0.5")
  .to(hook, 2, { yPercent: -20, ease: Power3.easeInOut }, "-=1")
  .fromTo(
    moto_stiv,
    4,
    { xPercent: 1000 },
    { xPercent: 0, ease: Power4.easeOut },
    "-=1"
  )
  .to(
    [wheel1, wheel2],
    4,
    { rotation: -800, transformOrigin: "50% 50%" },
    "-=4"
  )
  .to([platform, orange_item], 2, { yPercent: -100 })
  .to(platform, 2, { yPercent: 0 })
  .to(moto, 2, { xPercent: 80 })
  .to(
    [wheel1, wheel2],
    2,
    { rotation: -500, transformOrigin: "50% 50%" },
    "-=2"
  );
