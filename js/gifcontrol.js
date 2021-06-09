const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce))");
const details = document.querySelector(".gif-con > details");
console.log(details)
if (mediaQuery.matches) {
  details.removeAttribute("open");
}