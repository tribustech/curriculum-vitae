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
  drop_elements = document.querySelectorAll(".drop"),
  green_div = document.getElementById("green_div"),
  underConstruction_text = document.getElementById("under_construction_text"),
  website_text = document.getElementById("website_text"),
  bird_left = document.querySelectorAll(".bird_left"),
  bird_right = document.querySelectorAll(".bird_right"),
  website_tl,
  birds_tl;
gsap.registerPlugin(CustomEase);

website_tl = new TimelineMax();
birds_tl = new TimelineMax();
/* Setup stage */

gsap.to(logos, 1, {
  autoAlpha: 1,
  stagger: {
    each: 2,
    repeat: 1,
    yoyo: true,
  },
  repeat: -1,
});

gsap.fromTo(
  clouds_background,
  30,
  { x: -2000, ease: "none" },
  {
    x: 2000,
    ease: "none",
    stagger: {
      each: 1,
      repeat: -1,
    },
  }
);

gsap.fromTo(
  clouds_foreground,
  20,
  { x: -2000, ease: "none" },
  {
    x: 2000,
    ease: "none",
    stagger: {
      each: 1,
      repeat: -1,
    },
  }
);

//drop
gsap.fromTo(drop_elements, 0.5, { y: -150 }, { y: 0, ease: "bounce.out" });

website_tl
  .add("begin", 0)
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
  .to(full_hook, 1.5, {
    ease: Power1.easeInOut,
    transformOrigin: "top center",
    rotation: 0,
  })
  .to(strings, 0.5, { opacity: 0 }, "-=0.5")
  .to(website, 0.5, { yPercent: 40, ease: "bounce" }, "-=0.5")
  .to(hook, 2, { yPercent: -20, ease: Power3.easeInOut }, "-=1")
  .fromTo(
    moto_stiv,
    2,
    { xPercent: 1000 },
    { xPercent: 0, ease: Power1.easeOut },
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
  )
  .to(
    green_div,
    2.5,
    {
      rotation: 90,
      transformOrigin: "0% 0%",
      ease: CustomEase.create(
        "custom",
        "M0,0 C0.14,0 0.209,0.295 0.232,0.42 0.258,0.566 0.246,0.601 0.272,0.75 0.29,0.856 0.308,0.997 0.364,0.997 0.458,0.997 0.398,0.152 0.494,0.152 0.604,0.152 0.516,0.846 0.64,0.846 0.726,0.846 0.696,0.298 0.782,0.298 0.854,0.298 0.792,0.664 0.876,0.664 0.926,0.664 0.939,0.46 0.966,0.46 1.004,0.46 0.999,0.538 1,0.538 "
      ),
    },
    "-=1"
  )
  .fromTo(
    underConstruction_text,
    1,
    { autoAlpha: 0, y: -2000 },
    { autoAlpha: 1, y: 0, ease: "bounce.out" }
  )
  .fromTo(
    website_text,
    1,
    { autoAlpha: 0, y: -2000 },
    { autoAlpha: 1, y: 0, ease: "bounce.out" }
  );
