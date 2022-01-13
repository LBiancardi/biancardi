const socialMedia = document.querySelectorAll(".social__media__name");

socialMedia.forEach((link) => {
  link.addEventListener("mouseover", () => {
    const socialMediaIcon = document.querySelector(".social__media__icon");
    socialMediaIcon.classList.remove("hide");
  });
});
