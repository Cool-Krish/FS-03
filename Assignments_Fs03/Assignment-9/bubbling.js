
function alertbox(){
    alert("Items added to shopping cart")
    
}






document.querySelector(".list").addEventListener("click", function (event) {
	console.info(`${event.type} event fired on ${this.nodeName}`);
	event.target.classList.toggle("purchased");

	console.log("target:", event.target); 
	console.log("currentTarget:", event.currentTarget); 
	console.log("eventPhase:", event.eventPhase);
});



//Capturing

document.querySelector(".lists").addEventListener(
  "focus",
  function (event) {
    console.info(`${event.type} event fired on ${this.nodeName}`);
    event.target.style.background = "red"
    console.log("target:", event.target);
    console.log("currentTarget:", event.currentTarget);
    console.log("eventPhase:", event.eventPhase);
  },
  true
 );