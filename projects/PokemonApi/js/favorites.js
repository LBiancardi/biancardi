import { Pokemon } from "./app/models/pokeModel.js";

const pokemonsList = document.querySelector(".pokemonsList");

async function displayFavorites() {
  try {
    const res = await fetch(`http://localhost:3000/myFavorites`);
    if (res.ok) {
      const pokemons = await res.json();
      pokemons.forEach((pokemon) => {
        let newPokemon = document.createElement("div");
        newPokemon.className = "pokemon";
        const pokeImg = document.createElement("span");
        const pokeName = document.createElement("p");
        pokeName.className = "pokemonName";
        const pokeID = document.createElement("p");
        pokeID.className = "pokemonID";
        const pokeType = document.createElement("p");
        const removeButton = document.createElement("button");
        const moreInfo = document.createElement("button");
        removeButton.id = "removeBtn";
        removeButton.innerText = "Remove";
        moreInfo.id = "moreInfoBtn";
        moreInfo.innerText = "More infos";

        pokeImg.innerHTML = `<img src="${pokemon.img}" alt="${pokemons.name} Front">`;
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
        // console.log(pokemon);
      });
    } else {
      window.location.href = "failed.html";
    }
  } catch (err) {
    console.error(err);
  }
}
displayFavorites();

function createBtns(btn) {
  const pokemonInfos = btn.parentElement;
  const pokemonID = pokemonInfos.querySelector(".pokemonID").innerText;
  if (btn.id === "moreInfoBtn") {
    btn.addEventListener("click", () => {
      moreInfo(pokemonID);
    });
  } else if (btn.id === "removeBtn") {
    btn.addEventListener("click", () => {
      // console.log(pokemonID);
      removeBtn(pokemonID);
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

const removeBtn = async (id) => {
  if (id >= 1 || id <= 899) {
    try {
      return fetch(`http://localhost:3000/myFavorites/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }
  }
};
