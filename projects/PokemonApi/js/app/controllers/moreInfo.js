export function moreInfo(index) {
  const listOfPokemons = document.querySelectorAll(".extraInfo");
  const moreInfoBtn = document.querySelectorAll(".favorite__buttons");
  const pokemon = listOfPokemons[index];
  const moreInfo = moreInfoBtn[index].children[0];

  removeHideClass(listOfPokemons);
  addAndRemoveClass(pokemon, moreInfo);
}

const removeHideClass = (listOfPokemons) => {
  console.log(listOfPokemons);
  listOfPokemons.forEach((pokemon, idx) => {
    if (pokemon.classList.value === "extraInfo") {
      moreInfoBtn[idx].innerText = "More info";
    }
    pokemon.classList.add("hide");
    pokemon.parentNode.classList.remove("selectedPokemon");
  });
};

const addAndRemoveClass = (pokemon, moreInfo) => {
  console.log(pokemon);
  console.log(moreInfo.innerText);
  if (pokemon.id === "hiding") {
    pokemon.classList.remove("hide");
    pokemon.id = "displaying";
    moreInfo.innerText = "Hide info";
    pokemon.parentNode.classList.add("selectedPokemon");
  } else {
    pokemon.classList.add("hide");
    pokemon.id = "hiding";
    moreInfo.innerText = "More info";
    pokemon.parentNode.classList.remove("selectedPokemon");
  }
};
