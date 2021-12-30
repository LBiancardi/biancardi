import { Pokemon } from "../models/pokeModel.js";

// selectors
const body = document.querySelector("body");
const div = document.createElement("div");
const p = document.createElement("p");
p.style.color = "red";
div.appendChild(p);
div.classList = "container";

// create elements
let pokeImg = document.createElement("ul");
let pokemonImg = document.createElement("ul");
let pokemonName = document.createElement("ul");
let pokemonId = document.createElement("ul");
pokemonId.id = "pokeID";
let pokemonTypes = document.createElement("ul");

// display the pokemonsInfos info
div.appendChild(pokemonImg);
div.appendChild(pokemonName);
div.appendChild(pokemonId);
div.appendChild(pokemonTypes);
body.appendChild(div);

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
    console.error(error);
  }
};

export const searchPokemon = async (id) => {
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
    console.log(pokemon.greeting());
    pokemonImg.innerHTML = `<img src="${pokemon.img}" alt="${pokemon.name} Front">`;
    pokemonName.innerHTML = `${pokemon.name}`;
    pokemonId.innerHTML = `${pokemon.id}`;
    pokeImg.innerText = pokemon.img;
    pokemonTypes.innerHTML = currentTypes.textContent;
    p.innerText = "";
  } catch (err) {
    p.innerText = "Pokemon doesn't exist";
    console.error(err);
  }
};
