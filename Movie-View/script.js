const topRated = document.querySelector(".show-Movies")
const Rated = document.querySelector(".Movies-container")

const NewTrailer = document.querySelector('.New-trailers')




async function TopRatedMovies() {
    const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=9a07857692d5c9aaec99b7a5182567db&language=en-US&page=1`)
    const data = await res.json()
    // let moviesData = JSON.parse(data)
    ShowMovies(data.results);

}
TopRatedMovies()

function ShowMovies(MovieData){
    
    let mydiv = document.createElement("div")
    let Headingdiv = document.createElement("div")
      mydiv.classList.add('ShowMovies')
      Headingdiv.classList.add('Heading')
      Headingdiv.innerHTML += `<div class="Heading">
      <h1 class="Sub-Heading">Weekly Top Rated Movies</h1>
      <h3 class="See-More">See More...</h3>
  </div>`
    MovieData.forEach((item) => {
      
        let imgUrl = `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
         let htmls = `<div class="card" >
                    <img src=${imgUrl} class="card-img" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${item.original_title}</h5><br/>
                      <p class="Rating" ><span class="fa fa-star checked"></span> ${item.vote_average}</p>
            
                    </div>
                  </div>`
                   mydiv.innerHTML += htmls
                   
    });
    Rated.appendChild(Headingdiv)
    Rated.appendChild(mydiv)
    
    const SeeMore = document.querySelector(".See-More")

SeeMore.addEventListener("click", AllMovies)

function AllMovies(){
  const mm = document.querySelector('.ShowMovies')
  SeeMore.innerText = 'See Less...'
  mm.classList.toggle("mystyle");
}
}

// Upcoming Movies

async function Upcoming(){
  const NewMovies = await fetch(`
  https://api.themoviedb.org/3/movie/upcoming?api_key=9a07857692d5c9aaec99b7a5182567db&language=en-US&page=1`)

const mData = await NewMovies.json()
UpcomingMovies(mData.results)
}
Upcoming()

function UpcomingMovies(UpData){

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
                    <h5 class="card-title">${item.original_title}</h5><br/>
                    <p class="Rating" ><span class="fa fa-star checked"></span> ${item.vote_average}</p>
          
                  </div>
                </div>`
                 Mdiv.innerHTML += htmls
                 
  });
  NewTrailer.appendChild(Nheading)
  NewTrailer.appendChild(Mdiv)
}


async function TopPopular(){
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9a07857692d5c9aaec99b7a5182567db&language=en-US&page=1`)
  const PData = await response.json()
  PopularMovies(PData.results)
}
TopPopular()
function PopularMovies(PopularData){
  let Pdiv = document.createElement("div")
    let Pheading = document.createElement("div")
      Pdiv.classList.add('ShowMovies')
      Pheading.classList.add('Heading')
      Pheading.innerHTML += `<div class="Heading">
      <h1 class="Sub-Heading">Weekly Top Rated Movies</h1>
      <h3 class="See-More">See More...</h3>
  </div>`
    PopularData.forEach((item) => {
      
        let imgUrl = `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
         let htmls = `<div class="card" >
                    <img src=${imgUrl} class="card-img" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${item.original_title}</h5><br/>
                      <p class="Rating" ><span class="fa fa-star checked"></span> ${item.vote_average}</p>
            
                    </div>
                  </div>`
                   Pdiv.innerHTML += htmls
                   
    });
    Rated.appendChild(Pheading)
    Rated.appendChild(Pdiv)
    
    const SeeMore = document.querySelector(".See-More")

SeeMore.addEventListener("click", AllMovies)

function AllMovies(){
  const mm = document.querySelector('.ShowMovies')
  SeeMore.innerText = 'See Less...'
  mm.classList.toggle("mystyle");
}
}