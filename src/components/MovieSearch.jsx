import React from "react";
import "../styles/MovieSearch.css";

function MovieSearch(props){
    return(
      <form className="searchMovieDiv" method="post">
        <label>Ingrese la película o serie que desea buscar</label>
        <input placeholder="Batman..."/>
      </form>
    );
}

export {MovieSearch};