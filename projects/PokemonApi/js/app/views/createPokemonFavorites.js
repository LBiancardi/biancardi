import { findIdx } from "../helpers/findIndex.js";
import { removeBtn } from "../controllers/removePokemon.js";
import { moreInfo } from "../controllers/moreInfo.js";

const pokemonsList = document.querySelector(".pokemonsList");

export const createPokemon = async (img, name, id, type) => {
  let newPokemon = document.createElement("div");
  let extraInfo = document.createElement("div");
  let buttons = document.createElement("div");
  newPokemon.className = "pokemon";
  newPokemon.id = `${id}`;
  newPokemon.draggable = true;
  const pokeImg = document.createElement("span");
  const pokeName = document.createElement("p");
  pokeName.className = "pokemonName";
  const pokeID = document.createElement("p");
  pokeID.className = "pokemonID";
  const removeButton = document.createElement("button");
  const moreInfo = document.createElement("button");
  removeButton.className = "btn";
  removeButton.id = "removeBtn";
  removeButton.innerText = "Remove";
  moreInfo.className = "btn";
  moreInfo.id = "moreInfoBtn";
  moreInfo.innerText = "More info";
  buttons.classList = "favorite__buttons";
  buttons.appendChild(moreInfo);
  buttons.appendChild(removeButton);

  pokeImg.innerHTML = `<img src="${img}" alt="${name} Front">`;
  pokeName.innerText = `${id}. ${name}`;
  // pokeID.innerText = id;

  extraInfo.classList = ["extraInfo hide"];
  extraInfo.id = "hiding";
  const pokeType = document.createElement("p");
  pokeType.innerText = type;
  pokeType.classList = "pokeType";
  extraInfo.appendChild(pokeType);

  newPokemon.appendChild(pokeName);
  newPokemon.appendChild(pokeImg);
  newPokemon.appendChild(pokeID);
  newPokemon.appendChild(extraInfo);
  newPokemon.appendChild(buttons);
  // newPokemon.appendChild(moreInfo);
  // newPokemon.appendChild(removeButton);
  const mainType = extraInfo.childNodes[0].innerText.split(" ")[0];
  newPokemon.classList.add(mainType);

  pokemonsList.appendChild(newPokemon);

  createBtns(removeButton);
  createBtns(moreInfo);
};

function createBtns(btn) {
  const pokemonInfos = btn.parentElement;
  const pokemonID = Number(pokemonInfos.parentElement.id);
  const index = findIdx(pokemonID);
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
