import React from 'react';

import './movie.component.scss';

const Movie = ({ movie: { name, image } }) => (
  <div className="movie">
    <img src={image} className="image" alt="loader" />
    <p>
      { name }
    </p>
  </div>
);

export default Movie;
