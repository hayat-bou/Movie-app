import React from 'react';
import MovieCard from './MovieCard';
import movies from './movies'; // Make sure to import the movie data

const MovieList = () => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
