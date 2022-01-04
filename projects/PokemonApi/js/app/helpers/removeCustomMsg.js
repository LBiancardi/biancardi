export const removeCustomMsg = () => {
  const addToFavoriteMsg = document.getElementById("addToFavoriteMsg");
  const failedMsg = document.querySelector(".failedMsg");
  failedMsg.classList.add("hide");
  addToFavoriteMsg.innerText = "";
};