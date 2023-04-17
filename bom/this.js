// let user = {
//    name: "krishna",
//    age: 23,
//    greet(){
//        alert(`Hello ${this.name } my age is: ${this.age}`)
//    }
// }

// let user2 = {
//    name: "nitin",
//    age: 25,
//    greet(){
//        alert(`Hello ${this.name } my age is ${this.age}`)
//    }
// }
// console.log(user.name)
//  user.greet()
//  user2.greet()
// user = null
//  let x = user
//  user=null
//  x.greet()
// setTimeout(user.greet,1000)


// let x= {name:"krishna"}
// let z = {name:"nitin"}

// function y(){
//    console.log(`${this.name}`)
// }
// x.fn=y
// z.fn=y
// x.fn()
// z.fn()
// console.log(x)
// let foo = x.fn
// foo()


// function type1(){
//    console.log(`I love ${this.name}`)
// }
// var name="krishna"
// type1()

// function type2(){
//    console.log(this.fname)
// }
// var fname = "Nitin"
// var ob={
//    fname: "manish",
//    type2: function (){
//        console.log(this.fname)
//    }
// }
// ob.type2()
// var food = "pizza"
// var obj ={
//    food: "pasta",
//    eat: function(){
//        console.log(this.food)
//    }
// }

// var foos = obj.eat
// foos()

// var length =1
// function sq(){
//    let cb = function (){
//        console.log(this.length)
//    }
//    setTimeout(cb,2000)
// }

// var object = {
//    length: 3,
//    sq
   
// }

// object.sq()

// function Name(frname,lname){
//    this.firstname = frname
//    this.lastname = lname
// }

// var classobj = new Name("Rohit","Sharma")

// console.log(classobj)




// let fs = {
//    c:"italy",
//    m:"pizz",
//    say(){
//        let fv = function (){console.log(this.m)}
//        fv()
//    }

// }
// fs.say()

// <------- CALL, APPLY, BIND------->

let user = {
    fname: "krishna",
    lname: "patel",
    welcome: function (){
        console.log(this.fname+" "+this.lname)
    } 
}

let user1 = {
    fname: "nitin",
    lname: "singh",
    welcome: function (){
        console.log(this.fname+" "+this.lnamee)
    } 
}



//user.welcome()
//user.wecome() some how "this" should point to user1
//instead of user
//user.welcome.call(user1)
// functionname.call(name of obj to whom we want "this" to point to)
//welcome.call(user1)

let user2 = {
    fname: "kapil",
    lname: "dev",
}
function welcome(email,age){
    console.log(`${this.fname} ${this.lname}
    email ${email}
     age ${age}`)
}

// welcome.call(user2,"kp3644@gmail.com",56)
// welcome.call(user1,"nitin3644@gmail.com",26)

//apply
let arr = ["nitin36@gmail.com",27]
// welcome.apply(user1,arr)

//bind

let welcomekrishna = welcome.bind(user,"coolkrish@gnail.com",23)
// welcomekrishna()

// welcomekrishna.call(user2)//no effect
// welcomekrishna.bind(user2)//no effect


//polyfills
 let car = {
    name: "thar",
    brand: "mahindra"
 }
 let carDis = function (){
    console.log(`I bought a new ${this.brand} ${this.name}`)

 }
// prototype is an obj which contain method and properties

//prototype for bind method


let car={
    name:"Thar",
    brand:"Mahindra"
}

let carDescription=function(){
    console.log(`I bought a new ${this.brand} ${this.name}`);
}

//assume i do not have a bind function 
// var bindedFn=carDescription.bind(car);

// prototype is an obj which contains methods and properties 


Function.prototype.myBind=function(arg){
  let fn = this; //carDescription
  return function () {
    fn.call(arg);
  };
};



var bindedFn=carDescription.myBind(car);
console.log(bindedFn);
bindedFn();