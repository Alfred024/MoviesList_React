import React from "react";
import "../styles/MovieItem.css"

function MovieItem(props){
  return(
    <li className="movieItem">
      <article  className="shopCard">
        <div className="imgContainer">
            <img src={props.posterURL}/>
        </div>
        <div class="infoContainer">
            <h2>{props.movieName}</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam earum tempore eum facere dolor rerum suscipit corrupti consequuntur asperiores molestias nobis omnis.
            </p>
            <button className="addButton">
                Add to favourites
            </button>
            <button className="deleteButton">
                X
            </button>
        </div>
        </article>
    </li>
  );
}

export {MovieItem};