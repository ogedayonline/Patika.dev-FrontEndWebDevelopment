let containerDOM = document.getElementById('container');
let buttonDOM = document.getElementById('button');
let paragraf = document.createElement("H1");
paragraf.style.textAlign="center";
paragraf.style.marginTop="20px";
buttonDOM.addEventListener("click",function change(){
    if(containerDOM.style.backgroundColor=="red"){
        containerDOM.style.backgroundColor = "green";
        paragraf.innerText="This is green!"
        containerDOM.appendChild(paragraf);
    }
    else if(containerDOM.style.backgroundColor=="green"){
        containerDOM.style.backgroundColor = "purple";
        paragraf.innerText="This is purple!"
        containerDOM.appendChild(paragraf);
    }
    else if(containerDOM.style.backgroundColor=="purple"){
        containerDOM.style.backgroundColor = "blue";
        paragraf.innerText="This is blue!"
        containerDOM.appendChild(paragraf);
    }
    else if(containerDOM.style.backgroundColor=="blue"){
        containerDOM.style.backgroundColor = "grey";
        paragraf.innerText="This is grey!"
        containerDOM.appendChild(paragraf);
    }
    else if(containerDOM.style.backgroundColor=="grey"){
        containerDOM.style.backgroundColor = "red";
        paragraf.innerText="This is red!"
        containerDOM.appendChild(paragraf);
    }

}
)