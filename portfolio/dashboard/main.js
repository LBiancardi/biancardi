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
  const topbar = document.querySelector(".topbar");
  const toggle = document.querySelector(".toggle");
  const main = document.querySelector(".main");
  const details = document.querySelector(".details");

  navigation.classList.toggle("dark");
  topbar.classList.toggle("dark");
  toggle.classList.toggle("dark");
  main.classList.toggle("dark");
  details.classList.toggle("dark");
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
  const card = document.querySelectorAll(".card");

  for (i = 0; i < navigation__item.length; i++) {
    navigation__item[i].classList.toggle("dark");
    card[i].classList.toggle("dark");
  }
}

function validate() {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const form = document.querySelector(".box");

  if (username == "admin" && password == 123) {
    form.action = "index.html";
  } else {
    document.querySelector("#sorry__msg").style.display = "block";
  }
}

function show_hint() {
  document.querySelector("#hint__msg").style.display = "block";
}
