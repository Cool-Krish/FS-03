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
foo()