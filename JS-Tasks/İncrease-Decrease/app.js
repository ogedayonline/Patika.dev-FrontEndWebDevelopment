let counterDOM = document.getElementById("counter");
let decreaseDOM = document.getElementById("decrease");
let increaseDOM = document.getElementById("increase");
let resetDOM = document.getElementById('reset')


counterDOM.innerHTML = "0";


decreaseDOM.addEventListener("click",function(){

    `${counterDOM.innerHTML--}` 
})

increaseDOM.addEventListener("click",function(){
    `${counterDOM.innerHTML++}`
})

resetDOM.addEventListener("click",reset)


function reset(){
    `${counterDOM.innerHTML=0}` 
}