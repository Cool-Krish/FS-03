
import './style.css'
import ContextApi from './ContextApi';
import {  useState, useEffect, useContext } from 'react';
// import axios from 'axios';

function Home() {
    const {moviedata} = useContext(ContextApi)
    
// console.log(moviedata)
    return <>
        <h1 style={{color:"red"}}>Movie Varse</h1>
        <div className="container">
          { moviedata && 
             moviedata.map((ele)=>{
                return<>
                <div className="box">
                    <div className="images">
                        <img src={`https://image.tmdb.org/t/p/w500${ele.backdrop_path}`} alt="" />
                    </div>
                    <div className="info">
                        <h2>{ele.original_title}</h2>
                        <h3>Release Date: {ele.release_date}</h3>
                        <p>Rating: {ele.vote_average}</p>
                    </div>
                </div>
                </>
             })


        
            


     }
    </div>
</>
           } 
export default Home;