export const displayErrorMsg = (err, customErrorMsg) => {
  console.log("Some error is happening here" + err);
  const failedMsg = document.querySelector(".failedMsg");
  failedMsg.classList.remove("hide");
  failedMsg.innerText = customErrorMsg;
};