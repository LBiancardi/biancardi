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
      // console.error(err);
    }
  } else {
    p.innerText = "Select a pokemon before add to favorites";
    // window.location.href = "failed.html";
  }
};

export const addToLocalStorage = (img, name, id, type) => {
  if (name.length > 1) {
    try {
      const pokemons = JSON.parse(localStorage.getItem("pokemons")) || [];
      const newPokemon = { img, name, id, type };
      const pokemonList = [...pokemons, newPokemon];
      localStorage.setItem("pokemons", JSON.stringify(pokemonList));
    } catch (error) {
      const p = document.createElement("p");
      p.innerText = "Something went wrong";
      body.appendChild(p);
    }
  } else {
    console.log("Please select a pokemon.");
  }
};
