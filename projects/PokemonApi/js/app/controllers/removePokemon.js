export const removeBtn = (index) => {
  const listOfPokemons = JSON.parse(localStorage.getItem("pokemons"));
  console.log(index);
  const pokemonId = listOfPokemons[index].id;
  listOfPokemons.splice(index, 1);
  removeFadeOut(document.getElementById(`${pokemonId}`), 1000);
  localStorage.setItem("pokemons", JSON.stringify(listOfPokemons));
};

function removeFadeOut(el, speed) {
  var seconds = speed / 1000;
  el.style.transition = "opacity " + seconds + "s ease";

  el.style.opacity = 0;
  setTimeout(function () {
    el.parentNode.removeChild(el);
  }, speed);
}
