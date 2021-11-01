let inputDOM = document.getElementById("input");
let buttonDOM = document.getElementById("button");
let listDOM = document.getElementById("liste");
let listeElemani2 = document.getElementsByTagName("LI");

buttonDOM.addEventListener("click", function () {
  let listeElemani = document.createElement("li");
  listeElemani.innerText = inputDOM.value;
  listDOM.appendChild(listeElemani);
  inputDOM.value = "";
});

listDOM.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
