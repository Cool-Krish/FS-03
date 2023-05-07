const Name = document.querySelector('.Name-heading')
const rating = document.querySelector('.Rating')
const Release = document.querySelector('.year')
const Duration = document.querySelector('.Length')
const overView = document.querySelector('.Overview')
const Starring = document.querySelector('.info-1')
const Created = document.querySelector('.info-2')
const Genre = document.querySelector('.info-3')
const Cover = document.querySelector('.Cover-Image')


var ids = null

async function getProduct() {
    const url = window.location.href;
    const urlObj = new URL(url);
    const params = new URLSearchParams(urlObj.search);
    console.log(params);
    if (!params.has('id')) {
        return;
    }

    let MovieId = params.get('id');
    ids = MovieId
    let request = await fetch(`https://api.themoviedb.org/3/movie/${MovieId}?api_key=9a07857692d5c9aaec99b7a5182567db&language=en-US`);
    let data = await request.json();
    console.log(data)
    renderMovies(data);

}

getProduct()
function renderMovies(Data){
    let ImgUrl = `https://image.tmdb.org/t/p/w500${Data.poster_path}`
    var hours = (Data.runtime/ 60);
var rhours = Math.floor(hours);
var minutes = (hours - rhours) * 60;
var rminutes = Math.round(minutes);
Name.innerText = Data.original_title
rating.innerText = Data.vote_average
Release.innerText = Data.release_date
overView.innerText = Data.overview
Created.innerText = Data.production_companies[0].name
Starring.innerText= Data.production_countries[0].name
Genre.innerText= Data.genres[1].name
Cover.style.backgroundImage = `url(${ImgUrl})`
Duration.innerText = rhours+"h "+rminutes+"m"

}
async function RelatedMovie(){
    const res = await fetch(`https://api.themoviedb.org/3/movie/${ids}/recommendations?api_key=9a07857692d5c9aaec99b7a5182567db&language=en-US&page=1`)
    const Rdata = await res.json()
    RMovies(Rdata.results)
}
RelatedMovie()
const r = document.querySelector('.Render')
function RMovies(data){
    
    
    data.forEach(element => {
        let mydiv = document.createElement('div')
    mydiv.classList.add('Related')
        let imgUrl = `https://image.tmdb.org/t/p/w500${element.poster_path}`
        let ht =`<div class="Related">
        <img src=${imgUrl} class="Rimage" alt="Poster">
                        <p class="Mname">Movie name</p>
                    </div>
                    `
        // mydiv.style.backgroundImage = `url(${imgUrl})`
        r.innerHTML += ht
    });
     r.appendChild(mydiv)
}
