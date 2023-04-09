const Elect = document.getElementById("Electronics")
const Jewell = document.getElementById("Jewellery")

const Mens = document.getElementById("Menswearing")
const Women = document.getElementById("Womenswearing")







Elect.addEventListener("click",ProductDetail)
Jewell.addEventListener("click",Jewellerys)
Mens.addEventListener("click",Mwearing)
Women.addEventListener("click",Wwearing)

async function ProductDetail(){
    const Apicall = await fetch(`https://fakestoreapi.com/products/14`)

    const data = await Apicall.json()
    //console.log(data)
    let title = data.title
    let src = data.image
    let description = data.description
    let Price = data.price
    let  str = data.category
    const categorys = str.charAt(0).toUpperCase() + str.slice(1);
    let ratings = data.rating.rate
    let counts = data.rating.count

    let show = document.querySelector(".Product-info")

    show.innerHTML = `<img class="Product-image" src="${src}" alt="">
    <div class="Details">
      <h2>${categorys}</h2>
      <br>
      <h3>Title</h3>
              <p>${title}</p>
              <br>
      <h3>Price</h3>
               <p>${Price}</p>
               <br>
      <h3>Description</h3>
      <p>${description}</p>
      <br>
      <h3>Rating</h3>
      <p>${ratings} <span> ${counts}</span></p>
    </div>
    `
}

async function Jewellerys(){
    const Apicall = await fetch(`https://fakestoreapi.com/products/5`)

    const data = await Apicall.json()
    //console.log(data)
    let title = data.title
    let src = data.image
    let description = data.description
    let Price = data.price
    let  str = data.category
    const categorys = str.charAt(0).toUpperCase() + str.slice(1);
    let ratings = data.rating.rate
    let counts = data.rating.count

    let show = document.querySelector(".Product-info")

    show.innerHTML = `<img class="Product-image" src="${src}" alt="">
    <div class="Details">
      <h2>${categorys}</h2>
      <br>
      <h3>Title</h3>
              <p>${title}</p>
              <br>
      <h3>Price</h3>
               <p>${Price}</p>
               <br>
      <h3>Description</h3>
      <p>${description}</p>
      <br>
      <h3>Rating</h3>
      <p>${ratings} <span> ${counts}</span></p>
    </div>
    `
}
async function Mwearing(){
    const Apicall = await fetch(`https://fakestoreapi.com/products/1`)

    const data = await Apicall.json()
    //console.log(data)
    let title = data.title
    let src = data.image
    let description = data.description
    let Price = data.price
    let  str = data.category
    const categorys = str.charAt(0).toUpperCase() + str.slice(1);
    let ratings = data.rating.rate
    let counts = data.rating.count

    let show = document.querySelector(".Product-info")

    show.innerHTML = `<img class="Product-image" src="${src}" alt="">
    <div class="Details">
      <h2>${categorys}</h2>
      <br>
      <h3>Title</h3>
              <p>${title}</p>
              <br>
      <h3>Price</h3>
               <p>${Price}</p>
               <br>
      <h3>Description</h3>
      <p>${description}</p>
      <br>
      <h3>Rating</h3>
      <p>${ratings} <span> ${counts}</span></p>
    </div>
    `
}

async function Wwearing(){
    const Apicall = await fetch(`https://fakestoreapi.com/products/16`)

    const data = await Apicall.json()
    //console.log(data)
    let title = data.title
    let src = data.image
    let description = data.description
    let Price = data.price
    let  str = data.category
    const categorys = str.charAt(0).toUpperCase() + str.slice(1);
    let ratings = data.rating.rate
    let counts = data.rating.count

    let show = document.querySelector(".Product-info")

    show.innerHTML = `<img class="Product-image" src="${src}" alt="">
    <div class="Details">
      <h2>${categorys}</h2>
      <br>
      <h3>Title</h3>
              <p>${title}</p>
              <br>
      <h3>Price</h3>
               <p>${Price}</p>
               <br>
      <h3>Description</h3>
      <p>${description}</p>
      <br>
      <h3>Rating</h3>
      <p>${ratings} <span> ${counts}</span></p>
    </div>
    `
}

