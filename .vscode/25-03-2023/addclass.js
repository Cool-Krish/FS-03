const change = document.getElementById("head1");
function changes(){
    const h1 = document.querySelector(".head1")
    const h2 = document.querySelector(".head2")
    //h1.setAttributes("class","kk");
    h1.classList.add("kk");
    h2.classList.remove("name")
    console.log("hello")
}
function expinner(){
     const exp1 = document.querySelector(".con")
     //console.log(exp1.innerHTML)
     console.log(exp1.textContent)
     //console.log(exp1.innerText)
}

//on mouse event

function mousecat(){
    const cat  = document.querySelector("#cutecat")
    cat.style.height="400px"
    cat.style.width="800px"
}
function reduceImage(){
    const cat  = document.querySelector("#cutecat")
    cat.style.height="200px"
    cat.style.width="300px"
}
function show(){
    const showbutton = document.querySelector(".mouseevent")
    showbutton.style.opacity = "100"
}