let userN = ["Cool-Krish","goelabhishek694", "vishnupumar"];
let allGithubUsersR = userN.map(username => fetch(`https://api.github.com/users/${username}`))

Promise.all(allGithubUsersR)
  .then((responseObjectArr) => {
    let userDataArr = responseObjectArr.map((resObj) => resObj.json());
    
    return Promise.all(userDataArr);
  })
  .then((userDataArr) => userDataArr.forEach((user) => {
    let img = document.createElement('img');
    img.src = user.avatar_url;
    img.style.height='200px'
    img.style.width = '200px';
    img.style.borderRadius = '50%';
    document.body.append(img);
  }));

  let userNames = ["goelabhishek694", "vishnupumar34566", "smulla786"];
let allGithubUsersRequest = userNames.map((username) =>
  fetch(`https://api.github.com/users/${username}`)
);
console.log(allGithubUsersRequest);
Promise.allSettled(allGithubUsersRequest)
  .then((responseObjectArr) => {
    console.log(responseObjectArr);
    let userDataArr = responseObjectArr.map((resObj,idx) => {
      if (resObj.status == "fulfilled") {
        return resObj.value.json();
      };
      return Promise.reject(new Error("url is wrong"));
    });
    console.log(userDataArr);
    return Promise.allSettled(userDataArr);
  })
  .then((userDataArr) =>
    userDataArr.forEach((user,idx) => {
      console.log(user);
      if (user.status == 'fulfilled') {
        if (user.value && user.value.avatar_url) {
          const img = document.createElement("img");
          img.src = user.value?.avatar_url;
          img.style.height = "300px";
          img.style.width = "300px";
          img.style.borderRadius = "50%";
          document.body.append(img);
          setTimeout(() => img.remove(), 3000);
        }
        else console.log(`${userNames[idx]} wrong user`);
      }
    })
  )
  .catch((err) => console.log(err));