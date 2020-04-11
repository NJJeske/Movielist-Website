import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <input
        className='tc pa3 ba b--green bg-lightest-blue w-40'
        type='search'
        placeholder='search top rated movies from TMDB API'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;