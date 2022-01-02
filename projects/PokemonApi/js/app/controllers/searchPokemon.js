import { Pokemon } from "../models/pokeModel.js";

// selectors
const main = document.querySelector("main");
const div = document.createElement("div");
const span = document.createElement("span");
span.id = "addToFavoriteMsg";
div.classList = "container pokemon";

// create elements
let pokeImg = document.createElement("ul");
let pokemonImg = document.createElement("ul");
let pokemonName = document.createElement("ul");
pokemonName.className = "pokemonName"
let pokemonId = document.createElement("ul");
pokemonId.id = "pokeID";
let pokemonTypes = document.createElement("ul");

// display the pokemonsInfos info
div.appendChild(pokemonImg);
div.appendChild(pokemonName);
div.appendChild(pokemonId);
div.appendChild(pokemonTypes);
div.appendChild(span);
// main.appendChild(div);

export const returnPokemon = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemonsInfos = await res.json();
    const types = pokemonsInfos.types;
    const currentTypes = document.createElement("span");
    types.forEach((type) => {
      currentTypes.innerHTML += `${type.type.name} `;
    });
    const pokemon = new Pokemon(
      pokemonsInfos.sprites.front_default,
      pokemonsInfos.name.toUpperCase(),
      pokemonsInfos.id,
      currentTypes.innerText
    );
    return pokemon;
  } catch (error) {
    console.error("Select a Pokemon between 1 and 898");
  }
};

export const searchPokemon = async (id) => {
  try {
    const pokemon = await returnPokemon(id);
    pokemonImg.innerHTML = `<img src="${pokemon.img}" alt="${pokemon.name} Front">`;
    pokemonName.innerHTML = `${pokemon.name}`;
    pokemonId.innerHTML = `${pokemon.id}`;
    pokeImg.innerText = pokemon.img;
    pokemonTypes.innerHTML = pokemon.type;
    main.appendChild(div);
    removeCustomMsg();
  } catch (err) {
    p.className = "error";
    p.innerText = "Pokemon doesn't exist";
    console.error("Error searching pokemon.");
  }
};

const removeCustomMsg = () => {
  const addToFavoriteMsg = document.getElementById("addToFavoriteMsg");
  addToFavoriteMsg.innerText = "";
};
