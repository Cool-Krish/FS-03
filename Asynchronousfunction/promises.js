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

