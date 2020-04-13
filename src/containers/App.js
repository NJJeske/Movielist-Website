import React, { Component } from 'react';
import MovieList from '../components/MovieList/MovieList';
import SearchBox from '../components/SearchBox/SearchBox';
import Logo from '../components/Logo/Logo';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      isLoaded: false,
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`)
      .then(response=> response.json())
      .then(data => {this.setState({ movies: data.results, isLoaded: true})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { movies, searchfield, isLoaded } = this.state;
    
    const filteredMovies = movies.filter(movie =>{
      return movie.title.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !isLoaded ? <h1 className='tc f-subheadline lh-solid'>Loading Movies!</h1> :
     (
      <div className='tc pa2 ph2' >
        <div className='h3' >
          <Logo />               
        </div>
          <h1 className='f-subheadline lh-solid '>What's Trending?</h1> 
          <SearchBox searchChange={this.onSearchChange}/>
          <h1 className='f1 tl'>Top Rated Movies!</h1>
          <MovieList movies={filteredMovies} />
      </div>
      );
  }
}

export default App;