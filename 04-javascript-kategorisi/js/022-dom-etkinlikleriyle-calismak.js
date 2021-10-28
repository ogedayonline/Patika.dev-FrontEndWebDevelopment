// DOM Etkinlikleriyle Calismak
// https://www.w3schools.com/jsref/dom_obj_event.asp
// https://developer.mozilla.org/en-US/docs/Web/Events

// let greeting = document.querySelector("#greeting")
// greeting.addEventListener("click", domClick)

// function domClick() {
//     console.log("etkinlik denetlendi")
//     this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
// }

let greeting1 = document.querySelector("#greeting")
greeting1.addEventListener("mouseover",domClick1)

function domClick1(){
    console.log("Bana tıkladın")
    this.style.color == "green" ? this.style.color = "pink" : this.style.color = "green"
}