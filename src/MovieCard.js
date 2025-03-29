// src/MovieCard.js
import React from 'react';

function MovieCard({ title, description, posterURL, rating }) {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} style={{ width: '200px', height: '300px' }} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Rating:</strong> {rating}</p>
    </div>
  );
}

export default MovieCard;
