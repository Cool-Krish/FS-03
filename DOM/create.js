// create element
const mydiv = document.createElement("div")
console.log(mydiv)
mydiv.className = "mydiv"
mydiv.innerHTML = "<h1>Jai shree ram</h1>"
mydiv.id = "Element"
// create text
const ts = document.createTextNode("hello krishna")
console.log(ts)

document.body.append(mydiv)
mydiv.classList.add("hello")

function removeele(){
   // mydiv.remove()
}
 const bt = document.getElementById("kb")
setTimeout(cb,3000)
function cb(){
//bt.remove()
}
const kr = document.querySelector(".render")
const bdiv = document.createElement("div")
bdiv.innerHTML="<h2>befor hgjh</h2>"
bdiv.className="append"
document.body.append(bdiv)
//mydiv.append(kr)
//mydiv.appendChild(kr)
//bdiv.insertBefor(kr)
var a = kr.parentElement
var b = kr.parentNode
console.log(a)
console.log(b)
var c = kr.childNode
console.log(c)


var d = kr.children
console.log(d)

var e = kr.nextSibling
console.log(e)

var f = kr.nextElementSibling
console.log(f)

var g = kr.previousElementSibling
console.log(g)