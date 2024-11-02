import React from 'react';
import MovieCard from './MovieCard'; 

const MovieGrid = () => {
  const movies = [
    { id: 1, title: "Inception", year: 2010, director: "Christopher Nolan" },
    { id: 2, title: "The Dark Knight", year: 2008, director: "Christopher Nolan" },
    { id: 3, title: "Interstellar", year: 2014, director: "Christopher Nolan" },
    { id: 4, title: "The Matrix", year: 1999, director: "The Wachowskis" },
    { id: 5, title: "Pulp Fiction", year: 1994, director: "Quentin Tarantino" },
  ];

  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
 
export default MovieGrid;