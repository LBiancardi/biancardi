const main = document.querySelector("main");
const div = document.createElement("div");
const span = document.createElement("span");
span.id = "addToFavoriteMsg";

// create elements
let pokeImg = document.createElement("ul");
let pokemonImg = document.createElement("ul");
let pokemonName = document.createElement("ul");
pokemonName.className = "pokemonName";
let pokemonId = document.createElement("ul");
pokemonId.id = "pokeID";
let pokemonTypes = document.createElement("div");
pokemonTypes.classList = "type";

// display the pokemonsInfos info
div.appendChild(pokemonImg);
div.appendChild(pokemonName);
div.appendChild(pokemonId);
div.appendChild(pokemonTypes);
div.appendChild(span);

export const displayPokemon = (img, name, id, type, arrType) => {
  // selectors

  pokemonImg.innerHTML = `<img src="${img}" alt="${name} Front">`;
  pokemonName.innerHTML = `${name}`;
  pokemonId.innerHTML = `${id}`;
  pokeImg.innerText = img;
  pokemonTypes.innerHTML = "";
  arrType.forEach((type) => {
    let newType = document.createElement("span");
    newType.innerHTML = type;
    newType.classList.add(`${type}--type`)
    pokemonTypes.append(newType);
  });

  div.classList = `pokemon ${arrType[0]}--bg`;
  main.appendChild(div);
};
