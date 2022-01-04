// POKEMON API
// https://pokeapi.co/

import { addToLocalStorage } from "./app/controllers/addToFavorites.js";
import {
  searchPokemon,
  returnPokemon,
} from "./app/controllers/searchPokemon.js";
import { displayErrorMsg } from "./app/helpers/displayErrorMsg.js";

// buttons
const submitBtnId = document.getElementById("submitBtnId");
const submitBtnName = document.getElementById("submitBtnName");
const submitRandom = document.getElementById("submitRandom");
const addFavorite = document.getElementById("addFavorite");
const addLocalStorage = document.getElementById("addLocalStorage");

// buttons listeners
submitBtnName.addEventListener("click", (event) => {
  try {
    event.preventDefault();
    let pokeName = document.getElementById("pokeName").value.toLowerCase();
    searchPokemon(pokeName);
  } catch (error) {
    displayErrorMsg(error);
  }
});

submitBtnId.addEventListener("click", (event) => {
  event.preventDefault();
  let pokeId = document.getElementById("pokemonID").value;
  searchPokemon(pokeId);
});

submitRandom.addEventListener("click", async (event) => {
  event.preventDefault();
  const randomId = Math.floor(Math.random() * 898) + 1;
  document.getElementById("pokemonID").value = randomId;
  searchPokemon(randomId);
});

addLocalStorage.addEventListener("click", async (event) => {
  event.preventDefault();
  try {
    const pokeID = document.getElementById("pokeID").innerText;
    const poke = await returnPokemon(pokeID);
    addToLocalStorage(poke.img, poke.name, poke.id, poke.type);
  } catch (error) {
    displayErrorMsg(error, "Find a pokemon before add to favorite.");
  }
});
