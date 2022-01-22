import { Pokemon } from "../models/pokeModel.js";
import { displayErrorMsg } from "../helpers/displayErrorMsg.js";
import { removeCustomMsg } from "../helpers/removeCustomMsg.js";
import { displayPokemon } from "../views/createPokemonIndex.js";

export const returnPokemon = async (id) => {
  let pokemonCorrectedId = 0;
  switch (true) {
    case id <= 9:
      pokemonCorrectedId = `00${id}`;
      break;
    case id <= 99:
      pokemonCorrectedId = `0${id}`;
      break;
    default:
      pokemonCorrectedId = `${id}`;
  }
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemonsInfos = await res.json();
    const types = pokemonsInfos.types;
    const currentTypes = document.createElement("span");
    types.forEach((type) => {
      currentTypes.innerHTML += `${type.type.name} `;
    });
    const pokemon = new Pokemon(
      `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonCorrectedId}.png`,
      pokemonsInfos.name.toUpperCase(),
      pokemonsInfos.id,
      currentTypes.innerText
    );
    return pokemon;
  } catch (error) {
    displayErrorMsg(err, "Please select a valid Pokemon.");
  }
};

export const searchPokemon = async (id) => {
  try {
    const pokemon = await returnPokemon(id);
    displayPokemon(pokemon.img, pokemon.name, pokemon.id, pokemon.type);
    removeCustomMsg();
  } catch (err) {
    displayErrorMsg(err, "Please select a valid Pokemon.");
  }
};
