

let newPromise = new Promise(function (res, rej){
    setTimeout(() => res("promise resolve"), 3000)
    setTimeout(() => rej(new Error("Error occur")), 3000)
})

console.log(newPromise)


newPromise.then((result)=>console.log(result),(error)=>console.log(error))


let job = new Promise(function(ress, rejj){
    function getval(){
        let val = Math.floor(Math.random()*100)
        if(val%2==0) ress(`Number is  even, ${val}`)
        else rejj(new Error(`Number is not even, ${val}`))
    }
    setTimeout(getval,4000)
})

job.then((ans)=> console.log(ans),
(err) => console.log(err))

function delay(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(()=>resolve(),ms)
  })
}

delay(3000).then(() => console.log("delayed for 3 seconds"));

function getData() {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      const data = [10, 20, 30, 40, 50];
      resolve(data);
    }, 5000);
  })
}

getData().then(cb);

function cb(arr) {
  console.log(arr);
}

//instantly resolved promises
new Promise((resolve, reject) => {
  // if(data)
  resolve("hello");
  //server call to get data 
}).then((x) => console.log(x)).catch((e) => console.log(e));

new Promise((resolve, reject) => {
  setTimeout(() => resolve(100), 2000);
})
  .then((res) => {
    return res * 2;
  })
  .then((res) => {
    return res * 2;
  })
  .then((res) => {
    console.log(res);
  })
  .catch(err => console.log(err))

  let p = new Promise((resolve, reject) => {
  setTimeout(() => resolve(100), 2000);
})
  
p.then(res => {
  console.log(res);
  return res * 2
});

p.then(res => {
  console.log(res);
  return res * 2
});

p.then((res) => {
  console.log(res);
  return res * 2;
});

//let p1=new Promise((resolve,reject)=>{
//  setTimeout(()=>resolve(100),1000)
//})
//let p2=new Promise((resolve,reject)=>{
//  setTimeout(()=>reject(new Error("promise rejected")),7000)
//})
//let p3 = new Promise((resolve, reject) => {
//  setTimeout(() => resolve(300), 3000);
//});
//let allPromise = Promise.all([p1, p2, p3]);
//allPromise
//  .then(data => console.log(data))
//  .catch((err) => console.log(err));


       //Promise.allSettled
 let p1=new Promise((resolve,reject)=>{
   setTimeout(()=>resolve(100),1000)
 })
 let p2=new Promise((resolve,reject)=>{
   setTimeout(()=>reject(new Error("promise rejected")),7000)
 })
 let p3 = new Promise((resolve, reject) => {
   setTimeout(() => resolve(300), 3000);
 });
 let allSetlledPromise = Promise.allSettled([p1, p2, p3]); //returns an array with values of promises, does not matter if promise has been resolved or rejected. It just waits for promise to get settled. 
 allSetlledPromise
   .then((data) => console.log(data))
   .catch((err) => console.log(err));

  // Promise.race
  // simiilar to promise.all but waits for first settled promise.
 let pr1 = new Promise((resolve, reject) => {
   setTimeout(() => resolve(100), 10000);
 });
 let pr2 = new Promise((resolve, reject) => {
   setTimeout(() => reject(new Error("promise rejected")), 1000);
 });
 let pr3 = new Promise((resolve, reject) => {
   setTimeout(() => resolve(300), 3000);
 });
 let racePromise = Promise.race([pr1, pr2, pr3]); 
 racePromise.then((data) => console.log(data)).catch((err) => console.log(err));


// Promise.any 
//return first fuflfilled promise
let pa1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(100), 10000);
});
let pa2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(350), 1000);
});
let pa3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(300), 3000);
});
let anyPromise = Promise.race([pa1, pa2, pa3]); 
racePromise.then((data) => console.log(data)).catch((err) => console.log(err));