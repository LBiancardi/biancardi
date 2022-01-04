import { Pokemon } from "./app/models/pokeModel.js";
import { createPokemon } from "./app/views/createPokemonFavorites.js";
import { findIdx } from "./app/helpers/findIndex.js";

const pokemonsList = document.querySelector(".pokemonsList");

(() => {
  const pokemons = JSON.parse(localStorage.getItem("pokemons"));
  pokemons.forEach((pokemon) => {
    createPokemon(pokemon.img, pokemon.name, pokemon.id, pokemon.type);
  });
})();

const searchBar = document.querySelector(".bar");
searchBar.addEventListener("keyup", (event) => {
  const searchContent = event.target.value.toUpperCase();
  const pokemons = document.querySelectorAll(".pokemonName");
  // console.log(searchContent);
  pokemons.forEach((pokemon) => {
    const pokemonName = pokemon.innerText;
    if (pokemonName.indexOf(searchContent) != -1) {
      pokemon.parentNode.style.display = "block";
    } else {
      pokemon.parentNode.style.display = "none";
    }
  });
});
