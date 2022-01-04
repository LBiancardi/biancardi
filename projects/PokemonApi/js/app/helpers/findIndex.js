export function findIdx(id) {
  const myPokemons = document.querySelectorAll(".pokemon");
  for (let index = 0; index < myPokemons.length; index++) {
    if (myPokemons[index].id == id) {
      return index;
    }
  }
}