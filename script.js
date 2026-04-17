window.addEventListener("load", () => {
  const tl = gsap.timeline();

  // Navbar Entrance
  tl.from("nav", {
    y: -100,
    opacity: 0,
    duration: 1.2,
    ease: "expo.out"
  });

  // Content Boxes Entrance
  tl.from(".content-box", {
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  }, "-=0.8");

  // Footer Entrance
  tl.from(".footer-tag", {
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.5");

  // Scroll Shrink effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      gsap.to("nav", {
        padding: "5px 15px",
        scale: 0.9,
        duration: 0.4,
        ease: "power2.out"
      });
    } else {
      gsap.to("nav", {
        padding: "8px 20px",
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      });
    }
  });

  // Add subtle hover tilt to boxes
  document.querySelectorAll(".content-box").forEach(box => {
    box.addEventListener("mouseenter", () => {
      gsap.to(box, { y: -10, scale: 1.02, duration: 0.3 });
    });
    box.addEventListener("mouseleave", () => {
      gsap.to(box, { y: 0, scale: 1, duration: 0.3 });
    });
  });
});
