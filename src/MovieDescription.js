import React from 'react';
import { useParams, Link } from 'react-router-dom';
import movies from './movies';

const MovieDescription = () => {
  const { id } = useParams(); // Get the movie id from the URL
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="movie-description">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        title={movie.title}
        width="560"
        height="315"
        src={movie.trailerLink}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDescription;
