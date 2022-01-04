import { displayErrorMsg } from "./displayErrorMsg.js";

export const checkDuplicates = (id) => {
  // const element = document.getElementById("pokeID");
  const pokemons = JSON.parse(localStorage.getItem("pokemons")) || [];
  for (const pokemon of pokemons) {
    if (pokemon.id == id) {
      displayErrorMsg("error", "Pokemon already on your list");
      return true;
    }
  }
  return false;
};
