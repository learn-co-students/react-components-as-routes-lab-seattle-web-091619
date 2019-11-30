import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map((movie,index) => (
          <div key={index}>
            <h2>Name: {movie.title}</h2>
            <h3>Time: {movie.time}</h3>
            <h3>Genres: <ul>{movie.genres.map((genre, index) => (
                <li><h4>{genre}</h4></li>
            ))}</ul> </h3>
          </div>
        ))}
    </div>
  );
};

export default Movies;
