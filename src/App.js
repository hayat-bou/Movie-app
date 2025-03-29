// src/App.js
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller about dream thieves.',
      posterURL: 'https://image.url/inception.jpg',
      rating: 8.8
    },
    {
      title: 'The Dark Knight',
      description: 'Batman faces off against the Joker.',
      posterURL: 'https://image.url/darkknight.jpg',
      rating: 9.0
    },
    {
      title: 'The Matrix',
      description: 'A computer hacker learns about the true nature of reality.',
      posterURL: 'https://image.url/matrix.jpg',
      rating: 8.7
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
    setFilteredMovies([...movies, movie]);
  };

  const filterMovies = ({ title, rating }) => {
    setFilteredMovies(
      movies.filter((movie) => 
        (title ? movie.title.toLowerCase().includes(title.toLowerCase()) : true) &&
        (rating ? movie.rating >= rating : true)
      )
    );
  };

  return (
    <div className="App">
      <h1>Movie App</h1>

      {/* Add a new movie form */}
      <button onClick={() => addMovie({
        title: 'Avatar',
        description: 'A marine on an alien planet.',
        posterURL: 'https://image.url/avatar.jpg',
        rating: 7.8
      })}>Add Avatar</button>

      {/* Filter component */}
      <Filter onFilter={filterMovies} />

      {/* Movie List component */}
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
