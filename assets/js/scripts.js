let date = new Date().getHours();

if (date < 18) {
  document.querySelector("body").classList.add("light-mode");
  document.querySelector("#btn-dark-mode").classList.toggle("enable");
  document.querySelector("#img-dark").src = "assets/img/alexandre-p-filho.png";
} else {
  document.querySelector("body").classList.add("dark-mode");
  document.querySelector("#btn-dark-mode").classList.toggle("enable");
  document.querySelector("#img-dark").src =
    "assets/img/alexandre-p-filho-dark.png";
}

let btn_darkMode = document.querySelector("#btn-dark-mode");

btn_darkMode.addEventListener("click", function () {
  if (document.querySelector("body").classList.length === 0) {
    document.querySelector("#img-dark").src =
      "assets/img/alexandre-p-filho-dark.png";
  } else {
    document.querySelector("#img-dark").src =
      "assets/img/alexandre-p-filho.png";
  }
  document.querySelector("body").classList.toggle("dark-mode");
  document.querySelector("#btn-dark-mode").classList.toggle("enable");
});

var SPMaskBehavior = function (val) {
    return val.replace(/\D/g, "").length === 11
      ? "(00) 00000-0000"
      : "(00) 0000-00009";
  },
  spOptions = {
    onKeyPress: function (val, e, field, options) {
      field.mask(SPMaskBehavior.apply({}, arguments), options);
    },
  };

$("#telefone").mask(SPMaskBehavior, spOptions);

gsap.registerPlugin(ScrollTrigger);

gsap.to("#servicos .float-right-img", {
  scrollTrigger: {
    ease: "back.out(1.7)",
    trigger: "#servicos",
    start: "top center",
    scrub: 1,
    end: "bottom center",
  },
  y: "-100",
});

gsap.to("#servicos .float-bottom-img", {
  scrollTrigger: {
    ease: "back.out(1.7)",
    trigger: "#servicos",
    start: "top center",
    scrub: 2,
    end: "bottom center",
  },
  y: "50",
});

gsap.to("#clientes .float-right-img", {
  scrollTrigger: {
    ease: "back.out(1.7)",
    trigger: "#clientes",
    start: "top center",
    scrub: 1,
    end: "bottom center",
  },
  y: "-100",
});

gsap.to("#clientes .float-bottom-img", {
  scrollTrigger: {
    ease: "back.out(1.7)",
    trigger: "#clientes",
    start: "top center",
    scrub: 2,
    end: "bottom center",
  },
  y: "50",
});

gsap.from("#depoimentos *", {
  scrollTrigger: {
    ease: "back.out(1.7)",
    trigger: "#depoimentos",
    start: "top center",
    scrub: 1,
    end: "70% center",
  },
  stagger: 1,
  y: 150,
  opacity: 0,
});

// MOUSE FOLLOW