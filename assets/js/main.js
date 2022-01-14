const socialMedia = document.querySelectorAll(".social__media__name");

socialMedia.forEach((link) => {
  link.addEventListener("mouseover", (target) => {
    link.childNodes[1].style.visibility = "visible";
    // link.childNodes[1].classList.remove("hide");
  });
  link.addEventListener("mouseout", (target) => {
    link.childNodes[1].style.visibility = "hidden";
    // link.childNodes[1].classList.add("hide");
  });
});