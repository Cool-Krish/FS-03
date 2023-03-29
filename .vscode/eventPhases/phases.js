const elem = document.querySelectorAll("*")

//bubbling
// for (let ele of elem){
//     ele.addEventListener("click", (e)=>{
//         console.log("bubbling -> ",ele.tagName,"clicked on -> ", e.currentTarget,
//         "Originated from->",e.target)
//     })
// }

//capturing

// for (let ele of elem){
//     ele.addEventListener("click", (e)=>{
//         console.log("Capturing -> ",ele.tagName,"clicked on ->", e.currentTarget,
//         "Originated from->",e.target)
//     },true)
// }


// document.querySelector(".parent").addEventListener(
//     "click", function(e) {
//         console.log(`click event is fired on ${this.tagName}`)
//     }
// )
// document.querySelector(".child").addEventListener(
//     "click", function(e) {
//         e.stopPropagation()
//         console.log(`click event is fired on ${this.tagName}`)
//     }
// )

let bought = false;
document.querySelector(".list").addEventListener("click", function (e) {
    console.log(`${e.type} event fired on ${this.nodeName}`);
    if (!bought) {
        e.target.classList.add("bought");
    }
    else if (bought){
        e.target.classList.remove("bought");
    }
    bought = !bought
    
    e.target.classList.toggle("bought");

    console.log("target",e.target);
    console.log("currentTarget", e.currentTarget);
    console.log("eventPhase", e.eventPhase);
})