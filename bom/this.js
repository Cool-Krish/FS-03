let user = {
    name: "krishna",
    age: 23,
    greet(){
        alert(`Hello ${this.name } my age is: ${this.age}`)
    }
}

let user2 = {
    name: "nitin",
    age: 25,
    greet(){
        alert(`Hello ${this.name } my age is ${this.age}`)
    }
}
//console.log(user.name)
 //user.greet()
 //user2.greet()
//user = null
 //let x = user
 //user=null
 //x.greet()
//setTimeout(user.greet,1000)


let x= {name:"krishna"}
let z = {name:"nitin"}

function y(){
    console.log(`${this.name}`)
}
x.fn=y
z.fn=y
//x.fn()
//z.fn()
//console.log(x)
let foo = x.fn
//foo()


function type1(){
    console.log(`I love ${this.name}`)
}
var name="krishna"
type1()

function type2(){
    console.log(this.fname)
}
var fname = "Nitin"
var ob={
    fname: "manish",
    type2: function (){
        console.log(this.fname)
    }
}
ob.type2()
var food = "pizza"
var obj ={
    food: "pasta",
    eat: function(){
        console.log(this.food)
    }
}

var foos = obj.eat
foos()

var length =1
 function sq(){
    let cb = function (){
        console.log(this.length)
    }
    setTimeout(cb,2000)
 }

 var object = {
    length: 3,
    sq
    
 }

 object.sq()

function Name(frname,lname){
    this.firstname = frname
    this.lastname = lname
}

var classobj = new Name("Rohit","Sharma")

console.log(classobj)




let fs = {
    c:"italy",
    m:"pizz",
    say(){
        let fv = function (){console.log(this.m)}
        fv()
    }

}
fs.say()