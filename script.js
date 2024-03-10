function init() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
init();

var tl = gsap.timeline();
Shery.mouseFollower();

tl.from(".hello span, .writing span", {
  opacity: 0,
  delay: 0.5,
  stagger: 0.13,
  duration: 3,
});

gsap.from(".question span", {
  opacity: 0,
  stagger: 0.6,
  delay: 0.5,
  duration: 1,
  scrollTrigger: {
    trigger: ".question",
    scroller: ".main",
  },
});

gsap.from(".answer span", {
  opacity: 0,
  stagger: 0.6,
  delay: 1.5,
  duration: 1.8,
  scrollTrigger: {
    trigger: ".question",
    scroller: ".main",
  },
});

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".picture1",
    scroller: ".main",
    start: "top 55%",
    end: "top 5%",
    scrub: 4,
  },
});

tl2.to(".main", {
  backgroundColor: "#0F0D0D",
  color: "#fff",
});

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".picture1",
    scroller: ".main",
    start: "top -60%",
    end: "top 110%",
    scrub: 4,
  },
});

tl3.to(".main", {
  backgroundColor: "#fff",
  color: "black",
});

const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".picture1",
    scroller: ".main",
    start: "top -150%",
    end: "top 200%",
    scrub: 4,
  },
});

tl4.to(".main", {
  backgroundColor: "#0F0D0D",
  color: "#fff",
});

const tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".picture1",
    scroller: ".main",
    start: "top -250%",
    end: "top 300%",
    scrub: 4,
  },
});

tl5.to(".main", {
  backgroundColor: "#fff",
  color: "black",
});

var btn = document.querySelector(".hover-btn");

var video = document.querySelector(".video-segment");

btn.addEventListener("mouseover", () => {
  btn.style.opacity = 0;
  video.style.display = "flex";
  video.style.opacity = 1;

  gsap.from(".video-edited", {
    opacity: 0,
    duration: 2,
  });
});

btn.addEventListener("mouseleave", () => {
  btn.style.opacity = 1;
  video.style.display = "none";
  video.style.opacity = 0;
});

gsap.from(".who-is span", {
  opacity: 0,
  duration: 3.5,
  stagger: 0.4,
  delay: 1,
  scrollTrigger: {
    trigger: ".who-is",
    scroller: ".main",
  },
});

gsap.from(".who-answer", {
  opacity: 0,
  delay: 2,
  duration: 3,
  scrollTrigger: {
    trigger: ".who-is",
    scroller: ".main",
  },
});

gsap.from(".about span", {
  opacity: 0,
  stagger: 0.3,
  duration: 4,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".about",
    scroller: ".main",
  },
});

gsap.from(".made span", {
  opacity: 0,
  stagger: 0.5,
  delay: 5,
  scrollTrigger: {
    trigger: ".made",
    scroller: ".main",
  },
});
