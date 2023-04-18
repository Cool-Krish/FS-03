//object destructuring
let obj = {
    name: "krishna",
    profession: "teacher",
    age: 23,
    hobby: "Dancing"
}


//array destructuring
var {age, name} = obj
console.log(name)
console.log(age)

let persion = ["krishna","teacher",23,"Dancing"]

var [name,,,hobby] = persion
console.log(name)
console.log(hobby)

//spread oparetor

let fruits = ["apple","mango","banana"]
let allFruit = ["Papaya","kiwi","pineapple",...fruits]

console.log(allFruit)

userprofile("krishna","Teacher",23,"Dancing","CSE")
function userprofile(...args){
    console.log(...args)
}

//string destructring
let fullName = "krishna patel"
let [firstlatter] = fullName
let [firstName] = fullName.split(" ")
console.log(firstlatter)
console.log(firstName)

//arrow function
//do not have this
// hosting
//anonymoush

var name = "Nitin"

var arrow = () => {
     console.log("hello "+name)
}
arrow()
var arrow = (name)=>{
console.log("hello-"+ name)
}
arrow(name)

var arrow = name =>{
    return ("hello_"+ name)//explicitly type return if curly braces present
}
arrow(name)
var arrow = (name) => console.log("hello:"+name)
arrow(name)
var arrow = name => "hello:-"+name //return whatever there in arrow function
console.log(arrow(name))

