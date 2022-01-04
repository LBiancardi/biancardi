import { checkDuplicates } from "../helpers/checkDuplicates.js";

export const addToLocalStorage = (img, name, id, type) => {
  if (name.length > 1 && !checkDuplicates(id)) {
    try {
      const pokemons = JSON.parse(localStorage.getItem("pokemons")) || [];
      const newPokemon = { img, name, id, type };
      const pokemonList = [...pokemons, newPokemon];
      localStorage.setItem("pokemons", JSON.stringify(pokemonList));
      window.location.href = "succed.html";
    } catch (error) {
      const body = document.querySelector(".pokemon");
      const addToFavoriteMsg = document.getElementById("addToFavoriteMsg");
      addToFavoriteMsg.className = "failedMsg";
      addToFavoriteMsg.innerText = "Something went wrong";
      body.appendChild(addToFavoriteMsg);
    }
  } else {
    console.log("Please select a pokemon.");
  }
};
