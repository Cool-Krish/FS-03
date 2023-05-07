const topRated = document.querySelector(".show-Movies")
const Rated = document.querySelector(".Movies-container")

const NewTrailer = document.querySelector('.New-trailers')
const mydiv = document.querySelector('.ShowMovies')
const PopularDiv = document.querySelector('.Popular')
const searchText = document.querySelector('.Search')





async function TopRatedMovies() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=9a07857692d5c9aaec99b7a5182567db&language=en-US&page=1`)
  const data = await res.json()
  // let moviesData = JSON.parse(data)
  ShowMovies(data.results);

}
TopRatedMovies()

function ShowMovies(MovieData) {



  MovieData.forEach((item) => {

    let imgUrl = `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
    let htmls = `<div class="card" >
                    <img src=${imgUrl} class="card-img" alt="...">
                    <div class="cardbody">
                      <h5 class="cardtitle">
                      <a href="./OverView.html?id=${item.id}" class="btn btn-primary">${item.original_title}</a></h5>
                      <p class="Rating" ><span class="fa fa-star checked"></span> ${item.vote_average}</p>
            
                    </div>
                  </div>`
    mydiv.innerHTML += htmls

  });

  const SeeMore = document.querySelector(".See-More")

  SeeMore.addEventListener("click", AllMovies)

  function AllMovies() {
    SeeMore.innerText = 'See Less...'
    mydiv.classList.toggle("mystyle");
  }
}

// Upcoming Movies

async function Upcoming() {
  const NewMovies = await fetch(`
  https://api.themoviedb.org/3/movie/upcoming?api_key=9a07857692d5c9aaec99b7a5182567db&language=en-US&page=1`)

  const mData = await NewMovies.json()
  UpcomingMovies(mData.results)
}
Upcoming()

function UpcomingMovies(UpData) {

  let Mdiv = document.createElement("div")
  let Nheading = document.createElement("div")
  Mdiv.classList.add('NTrail')
  Nheading.classList.add('Heading')
  Nheading.innerHTML += `<div class="Heading">
    <h1 class="Sub-Heading">New Trailers</h1>
    
</div>`
  UpData.forEach((item) => {

    let imgUrl = `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
    let htmls = `<div class="cards" >
                  <img src=${imgUrl} class="card-img" alt="...">
                  <div class="card-body">
                  <h5 class="cardtitle">
                  <a href="./OverView.html?id=${item.id}" class="btn btn-primary">${item.original_title}</a></h5><br/>
                    <p class="Rating" ><span class="fa fa-star checked"></span> ${item.vote_average}</p>
          
                  </div>
                </div>`
    Mdiv.innerHTML += htmls

  });
  NewTrailer.appendChild(Nheading)
  NewTrailer.appendChild(Mdiv)
}


async function TopPopular() {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9a07857692d5c9aaec99b7a5182567db&language=en-US&page=1`)
  const PData = await response.json()
  PopularMovies(PData.results)
}
TopPopular()
function PopularMovies(PopularData) {
  PopularData.forEach((item) => {

    let imgUrl = `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
    let htmls = `<div class="card" >
                <img src=${imgUrl} class="card-img" alt="...">
                <div class="cardbody">
                <h5 class="cardtitle">
                <a href="./OverView.html?id=${item.id}" class="btn btn-primary">${item.original_title}</a></h5>
                  <p class="Rating" ><span class="fa fa-star checked"></span> ${item.vote_average}</p>
        
                </div>
              </div>`
    PopularDiv.innerHTML += htmls

  });

  const PMore = document.querySelector(".Popular-More")

  PMore.addEventListener("click", PMovies)

  function PMovies() {
    PMore.innerText = 'See Less...'
    PopularDiv.classList.toggle("myh");
  }
}

// Search Movies
//https://api.themoviedb.org/3/search/movie?api_key=9a07857692d5c9aaec99b7a5182567db&language=en-US&query=${searchText}&page=1&include_adult=false



searchText.addEventListener('keyup', SearchM)

async function SearchM() {
  let Stext = document.getElementById("Searchvalue").value
  const ress = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=9a07857692d5c9aaec99b7a5182567db&language=en-US&query=${Stext}&page=1&include_adult=false`)
  const SearchData = await ress.json()
  SearchMovies(SearchData.results, Stext)



}
function SearchMovies(Searchdata, SearchTexts) {

  console.log(SearchTexts)
  Rated.innerHTML = ''

  let Searchdiv = document.createElement("div")
  let Nheading = document.createElement("div")
  Searchdiv.classList.add('SearchResult')
  Nheading.classList.add('Heading')
  Nheading.innerHTML += `<div class="Heading">
    <h1 class="Sub-Heading">You are Searching for ${SearchTexts}</h1>
    
</div>`
  Searchdata.forEach((item) => {

    let imgUrl = `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
    let htmls = `<div class="card" >
                  <img src=${imgUrl} class="card-img" alt="...">
                  <div class="card-body">
                  <h5 class="cardtitle">
                  <a href="./OverView.html?id=${item.id}" class="btn btn-primary">${item.original_title}</a></h5><br/>
                    <p class="Rating" ><span class="fa fa-star checked"></span> ${item.vote_average}</p>
          
                  </div>
                </div>`
    Searchdiv.innerHTML += htmls

  });
  Rated.appendChild(Nheading)
  Rated.appendChild(Searchdiv)

}
