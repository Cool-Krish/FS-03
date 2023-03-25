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