export function moreInfo(index) {
  const listOfPokemons = document.querySelectorAll(".extraInfo");
  const moreInfoBtn = document.querySelectorAll("#moreInfoBtn");

  moreInfoBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      console.log(e.target);
      console.log(e.target.parentNode.parentNode.children[2]);
      addAndRemoveClass(e.target.parentNode.parentNode.children[2], e.target);
    });
  });

  removeHideClass(listOfPokemons);
}

const removeHideClass = (listOfPokemons) => {
  listOfPokemons.forEach((pokemon, idx) => {
    if (moreInfoBtn.innerText !== "More info") {
      moreInfoBtn.innerText = "More info";
    }
    pokemon.classList.add("hide");
    pokemon.parentNode.classList.remove("selectedPokemon");
  });
};

const addAndRemoveClass = (pokemon, moreInfo) => {
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
