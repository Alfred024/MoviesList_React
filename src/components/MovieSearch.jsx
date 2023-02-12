import {React, useState, useEffect} from "react";
import "../styles/MovieSearch.css";

function MovieSearch(props){
    
    const [posts, setPosts] = useState([]);
    const stringTokebabCase = (string) => {
        return string.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, '-').toLowerCase();
    }
  
    //API Consume options object
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '532d0c1310msh988dee28f976e8ep12bc49jsn1b74a5f379a5',
        'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
      }
    };
  
    const useEffect = () => {
      fetch(options.headers[1]+"term"+`${props.search}`)
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
    };

    return(
      <div className="searchMovieDiv">
        <label>Ingrese la película o serie que desea buscar</label>
        <input/>
        <button 
          type="submit"
          onClick={useEffect}
          >🔎
        </button>
      </div>
    );
}

export {MovieSearch};