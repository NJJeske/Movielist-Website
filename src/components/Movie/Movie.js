import React from 'react';
import './Movie.css';

const Movie = ({poster_path, title, popularity, release_date }) => {
  return (
      <div className='pointer grow dib pa0 textDescription'>
       <img alt='movies' src={`https://image.tmdb.org/t/p/w300${poster_path}`} /> 
        <h2 className='f4 measure-narrow'>{title}</h2>
        <h3>{`Popularity: ${popularity}`}</h3>
        <h4>{`Released: ${release_date}`}</h4>
      </div>
  );
}

export default Movie;
