function toggleMenu() {
  let toggle = document.querySelector(".toggle");
  let navigation = document.querySelector(".navigation");
  let main = document.querySelector(".main");

  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
  main.classList.toggle("active");
}

function darkMode() {
  const navigation = document.querySelector(".navigation");

  navigation.classList.toggle("dark");
  changeNavItemColor();
  changeText();
}

function changeText() {
  const theme = document.querySelector("#theme");

  if (theme.innerText == "Dark Theme") {
    theme.innerText = "Light Theme";
  } else {
    theme.innerText = "Dark Theme";
  }
}

function changeNavItemColor() {
  const navigation__item = document.querySelectorAll(".navigation__item");

  for (i = 0; i < navigation__item.length; i++) {
    navigation__item[i].classList.toggle("dark");
  }
}
