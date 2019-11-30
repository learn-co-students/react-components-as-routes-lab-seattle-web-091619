import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div><h1>Directors Page</h1>
      {directors.map((director,index) => (
        <div key={index}>
        <h2>Name: {director.name}</h2>
          <ul><h2>Movies:</h2> {director.movies.map((movie,index) => (
          <li><h3>{movie}</h3></li>
            ))}</ul>
        </div>
      ))}
    </div>
  );
}

export default Directors
