"use strict";

const socialMedia = document.querySelectorAll(".social__media__name");
const footerTxt = document.getElementsByClassName("footer__txt");
const footerMsgs = [
  "Living, learning and growing one day at a time.",
  "A computer once beat me at chess, but it was no match for me at kick boxing.",
  "Looking beyond the present moment (Proverbs 23:18) - Keep Faith",
];

(() => {
  const randomNumber = Math.floor(Math.random() * footerMsgs.length);
  footerTxt[0].innerText = footerMsgs[randomNumber];
})();

socialMedia.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.childNodes[1].style.visibility = "visible";
    // link.childNodes[1].classList.remove("hide");
  });
  link.addEventListener("mouseout", (target) => {
    link.childNodes[1].style.visibility = "hidden";
    // link.childNodes[1].classList.add("hide");
  });
});
