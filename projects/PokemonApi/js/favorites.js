import { Pokemon } from "./app/models/pokeModel.js";

const pokemonsList = document.querySelector(".pokemonsList");

(() => {
  const pokemons = JSON.parse(localStorage.getItem("pokemons"));
  pokemons.forEach((pokemon) => {
    let newPokemon = document.createElement("div");
    newPokemon.className = "pokemon";
    newPokemon.id = `${pokemon.id}`;
    const pokeImg = document.createElement("span");
    const pokeName = document.createElement("p");
    pokeName.className = "pokemonName";
    const pokeID = document.createElement("p");
    pokeID.className = "pokemonID";
    const pokeType = document.createElement("p");
    const removeButton = document.createElement("button");
    const moreInfo = document.createElement("button");
    removeButton.className = "btn";
    removeButton.id = "removeBtn";
    removeButton.innerText = "Remove";
    moreInfo.className = "btn";
    moreInfo.id = "moreInfoBtn";
    moreInfo.innerText = "More infos";

    pokeImg.innerHTML = `<img src="${pokemon.img}" alt="${pokemon.name} Front">`;
    pokeName.innerText = pokemon.name;
    pokeID.innerText = pokemon.id;
    pokeType.innerText = pokemon.type;

    newPokemon.appendChild(pokeImg);
    newPokemon.appendChild(pokeName);
    newPokemon.appendChild(pokeID);
    newPokemon.appendChild(pokeType);
    newPokemon.appendChild(moreInfo);
    newPokemon.appendChild(removeButton);

    pokemonsList.appendChild(newPokemon);

    createBtns(removeButton);
    createBtns(moreInfo);
  });
})();

function createBtns(btn) {
  const pokemonInfos = btn.parentElement;
  const pokemonID = pokemonInfos.querySelector(".pokemonID").innerText;
  const index = findIdx(Number(pokemonID));
  if (btn.id === "moreInfoBtn") {
    btn.addEventListener("click", () => {
      moreInfo(index);
    });
  } else if (btn.id === "removeBtn") {
    btn.addEventListener("click", () => {
      removeBtn(index);
    });
  }
}

async function moreInfo(id) {
  console.log(id);
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemons = await res.json();
    const pokemon = document.querySelectorAll(".pokemon");
    pokemon.forEach((element) => {
      console.log(element);
    });
    const extraInfo = document.createElement("div");
    const height = document.createElement("p");
    height.innerText = pokemons.height;
    const weight = document.createElement("p");
    weight.innerText = pokemons.weight;
    extraInfo.appendChild(height);
    extraInfo.appendChild(weight);
    // pokemon.appendChild(extraInfo);

    console.log(pokemons.height, pokemons.weight);
  } catch (err) {
    console.error(err);
  }
}

const removeBtn = (index) => {
  const listOfPokemons = JSON.parse(localStorage.getItem("pokemons"));
  listOfPokemons.splice(index, 1);
  localStorage.setItem("pokemons", JSON.stringify(listOfPokemons));
  location.reload();
};

function findIdx(id) {
  const myPokemons = document.querySelectorAll(".pokemon");
  for (let index = 0; index < myPokemons.length; index++) {
    if (myPokemons[index].id == id) {
      return index;
    }
  }
}
