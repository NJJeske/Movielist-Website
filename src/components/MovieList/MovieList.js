import React from 'react';
import Movie from '../Movie/Movie';

const MovieList = ({ movies }) => {
  return (
    <div className='nowrap overflow-x-auto overflow-y-hidden pa3 ph3'>
      {
        movies.map((results, i) => {
          return (
            <Movie
              key={i}
              id={movies[i].id}
              poster_path={movies[i].poster_path}
              title={movies[i].title}
              popularity={movies[i].popularity}
              release_date={movies[i].release_date}
              />
          );
        })
      }
    </div>
  );
}

export default MovieList;