import React from 'react';
import './App.css';

//Imports de Componentes
import { MovieItem } from './components/MovieItem';
import { MovieSearch } from './components/MovieSearch';

const moviesDemo = [
  {name: "Batman", poster: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmoviepostermexico.com%2Fproducts%2Fposter-pelicula-the-batman-2022&psig=AOvVaw2zG6pBuPTsy5ElRp_A8n7S&ust=1676314145136000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIiutfzSkP0CFQAAAAAdAAAAABAb", year: 2022},

  {name: "Pinochio", poster: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnecir.org%2Fguillermo-del-toros-pinocchioreview-a-novel-work-of-art-about-a-sinister-wooden-boy%2F&psig=AOvVaw1hrRugLceuyJLpGPLUPbuo&ust=1676314264024000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiiwrTTkP0CFQAAAAAdAAAAABAI", year: 2022}
];

function App() {
  return (
    <React.Fragment>

      <MovieSearch/>

      {/* Parte de la renderización de las películas */}
      {
        moviesDemo.map(movie => (
          <MovieItem
            movieName= {movie.name}
            posterURL = {movie.poster}
          />
        ))
      };

    </React.Fragment>
  );
}

export default App;
