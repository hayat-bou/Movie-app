
import React, { useState } from 'react';

function Filter({ onFilter }) {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleRatingChange = (e) => setRating(e.target.value);

  const handleSubmit = () => {
    onFilter({ title, rating });
  };

  return (
    <div className="filter">
      <input 
        type="text" 
        placeholder="Filter by title" 
        value={title} 
        onChange={handleTitleChange} 
      />
      <input 
        type="number" 
        placeholder="Filter by rating" 
        value={rating} 
        onChange={handleRatingChange} 
      />
      <button onClick={handleSubmit}>Filter</button>
    </div>
  );
}

export default Filter;
