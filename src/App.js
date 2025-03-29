import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDescription from './MovieDescription';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home route to display the movie list */}
          <Route path="/" element={<MovieList />} />
          
          {/* Dynamic route for each movie description */}
          <Route path="/movie/:id" element={<MovieDescription />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
