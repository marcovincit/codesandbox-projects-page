const linear = (t) => t;
const easeInQuad = (t) => Math.pow(t, 2);
const easeOutQuad = (t) => 1 - easeInQuad(1 - t);
const easeInOutQuad = (t) =>
  t < 0.5 ? easeInQuad(t * 2) / 2 : easeOutQuad(t * 2 - 1) / 2 + 0.5;
const easeInCubic = (t) => Math.pow(t, 3);
const easeOutCubic = (t) => 1 - easeInCubic(1 - t);
const easeInOutCubic = (t) =>
  t < 0.5 ? easeInCubic(t * 2) / 2 : easeOutCubic(t * 2 - 1) / 2 + 0.5;
const easeInQuart = (t) => Math.pow(t, 4);
const easeOutQuart = (t) => 1 - easeInQuart(1 - t);
const easeInOutQuart = (t) =>
  t < 0.5 ? easeInQuart(t * 2) / 2 : easeOutQuart(t * 2 - 1) / 2 + 0.5;
const easeInQuint = (t) => Math.pow(t, 5);
const easeOutQuint = (t) => 1 - easeInQuint(1 - t);
const easeInOutQuint = (t) =>
  t < 0.5 ? easeInQuint(t * 2) / 2 : easeOutQuint(t * 2 - 1) / 2 + 0.5;

export {
  linear,
  easeInQuad,
  easeOutQuad,
  easeInOutQuad,
  easeInCubic,
  easeOutCubic,
  easeInOutCubic,
  easeInQuart,
  easeOutQuart,
  easeInOutQuart,
  easeInQuint,
  easeOutQuint,
  easeInOutQuint,
};
