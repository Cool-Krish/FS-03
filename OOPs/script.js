class Person{
    constructor(name){
        this.name = name
    }
    greet(){
        console.log(`Hello ${this.name}`)
    }
}

class Engineer extends Person{
    constructor(name,branch){
        super(name)
        this.branch = branch
    }
    greet(){
        console.log(`Hello ${this.name}`)
    }

}

class Doctor extends Person{
    constructor(name,spc){
        super(name)
        this.spc =spc
    }
    greet(){
        console.log(`Hello Dr. ${this.name}`)
    }
}
let sde = new Engineer("Krishna","CSE")
sde.greet()
console.log(sde);

let doc = new Doctor("Nitin","BoneSpecialiest")
doc.greet()
console.log(doc)