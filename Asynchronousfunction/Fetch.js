
let lat = '25.3176';
let lon = '82.9739';
let url = `https://api.openweathermap.org/data/2.5/weather?lat=25.3176&lon=82.9739&units=metric&appid=`;

let weatherPromise = fetch(url);
weatherPromise
  .then((res) => {
    
    return res.json();
  })
  .then((data)=>console.log(data))
  .catch((err) => console.log(err))


let username="Cool-Krish"
let githubUserPromise = fetch(`https://api.github.com/users/${username}`);
githubUserPromise
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let img = document.createElement('img');
    img.src = data.avatar_url;
    img.style.height='300px'
    img.style.width = '300px';
    img.style.borderRadius = '50%';
    document.body.append(img);
    setTimeout(()=>img.remove(), 3000);
  })
  .catch((err) => console.log(err));

  let p1 = new Promise((res, rej) =>{
    setTimeout(()=>res(100),1000)
  })
  let p2 = new Promise((res, rej) =>{
    setTimeout(()=>res(100),3000)
  })
  let p3 = new Promise((res, rej) =>{
    setTimeout(()=>res(100),4000)
  })
  let p4 = new Promise((res, rej) =>{
    setTimeout(()=>res(100),5000)
  })

  let allpromises = Promise.all([p1,p2,p3,p4])
  allpromises
  .then(data => console.log(data))