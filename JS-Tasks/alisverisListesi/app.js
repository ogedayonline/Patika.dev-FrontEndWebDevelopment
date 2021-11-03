let inputDOM = document.getElementById("input");
let buttonDOM = document.getElementById("button");
let listDOM = document.getElementById("liste");
let containerDOM = document.getElementById("container");

buttonDOM.addEventListener("click", function () {
  let listeElemani = document.createElement("li");
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.setAttribute("type", "button");
  deleteButton.innerText = "Delete";
  listeElemani.innerText = inputDOM.value;
  if (listeElemani.innerText == "") {
    var element = document.getElementById("myToast");
    var myToast = new bootstrap.Toast(element, {
      delay: 5000,
    });
    myToast.show();
  } else {
    listeElemani.appendChild(deleteButton);
    listDOM.appendChild(listeElemani);
    inputDOM.value = "";
  }
  deleteButton.addEventListener("click", function () {
    listDOM.removeChild(listeElemani);
  });
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
