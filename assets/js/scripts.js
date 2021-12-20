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


gsap.to(".box", {
    scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
    x: 500
  });

