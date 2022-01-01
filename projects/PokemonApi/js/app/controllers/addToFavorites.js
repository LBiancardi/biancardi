export const addToFavorites = async (img, name, id, type) => {
  if (name.length >= 1) {
    try {
      const res = await fetch(`http://localhost:3000/myFavorites`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          img,
          name,
          id,
          type,
        }),
      });
    } catch (err) {
      const p = document.createElement("p");
      p.innerText = "Something went wrong";
      body.appendChild(p);
    }
  } else {
    console.log("Select a pokemon before add to favorites");
  }
};

export const addToLocalStorage = (img, name, id, type) => {
  const body = document.querySelector(".pokemon");
  const addToFavoriteMsg = document.getElementById("addToFavoriteMsg");
  if (name.length > 1) {
    try {
      const pokemons = JSON.parse(localStorage.getItem("pokemons")) || [];
      const newPokemon = { img, name, id, type };
      const pokemonList = [...pokemons, newPokemon];
      localStorage.setItem("pokemons", JSON.stringify(pokemonList));
      addToFavoriteMsg.className = "successMsg";
      addToFavoriteMsg.innerText = "Pokemon added to favorite";
    } catch (error) {
      addToFavoriteMsg.className = "failedMsg";
      addToFavoriteMsg.innerText = "Something went wrong";
    } finally {
      body.appendChild(addToFavoriteMsg);
    }
  } else {
    console.log("Please select a pokemon.");
  }
};
