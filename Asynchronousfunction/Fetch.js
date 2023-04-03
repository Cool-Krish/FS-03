
//let lat = '25.3176';
//let lon = '82.9739';
//let url = `https://api.openweathermap.org/data/2.5/weather?lat=25.3176&lon=82.9739&units=metric&appid=`;
//
//let weatherPromise = fetch(url);
//weatherPromise
//  .then((res) => {
//    
//    return res.json();
//  })
//  .then((data)=>console.log(data))
//  .catch((err) => console.log(err))


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

  let userNames = ["goelabhishek694", "vishnupumar","smulla786"];
let allGithubUsersRequest = userNames.map(username => fetch(`https://api.github.com/users/${username}`))
console.log(allGithubUsersRequest)
Promise.all(allGithubUsersRequest)
  .then((responseObjectArr) => {
    console.log(responseObjectArr);
    let userDataArr = responseObjectArr.map((resObj) => resObj.json());
    console.log(userDataArr);
    return Promise.all(userDataArr);
  })
  .then((userDataArr) => userDataArr.forEach((user) => console.log(user)));
  //display profile picture instead of printing object 