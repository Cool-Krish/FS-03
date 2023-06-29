import { createContext, useState,useEffect } from "react";
// import axios from 'axios';
import App from "../App";

const ContextApi = createContext()

export default ContextApi


export function CustomProvider(){
  const [moviedata, setData] = useState();
  useEffect(()=>{
      fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=9a07857692d5c9aaec99b7a5182567db&language=en-US&page=1")
      .then((res)=>res.json())
      .then((data)=>{
          // console.log(data.results)
          setData(data.results)
      })
      .catch(()=> console.log("erroe"))
  })
    
  return (<ContextApi.Provider value={{moviedata}}>
       <App/>
  </ContextApi.Provider>)
}