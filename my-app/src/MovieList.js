import React, { useState } from 'react';
import './MovieList.css';

const movies = [
  { title: 'Inception', genre: 'Science Fiction', releaseYear: 2010 },
  { title: 'The Shawshank Redemption', genre: 'Drama', releaseYear: 1994 },
  { title: 'The Dark Knight', genre: 'Action', releaseYear: 2008 },
  { title: 'Interstellar', genre: 'Science Fiction', releaseYear: 2014 },
  { title: 'Forrest Gump', genre: 'Drama', releaseYear: 1994 },
  { title: 'Mad Max: Fury Road', genre: 'Action', releaseYear: 2015 },
];

function MovieList() {
  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const genres = ['All Genres', ...new Set(movies.map((m) => m.genre))];

  const filteredMovies =
    selectedGenre === 'All Genres'
      ? movies
      : movies.filter((m) => m.genre === selectedGenre);

  const handleMovieClick = (title) => {
    alert(`You clicked on "${title}"`);
  };

  return (
    <div className="movie-list">
      <h1>Movie List</h1>

      <select
        className="genre-select"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <ul className="movies">
        {filteredMovies.map((movie) => (
          <li
            key={movie.title}
            className="movie-card"
            onClick={() => handleMovieClick(movie.title)}
          >
            <h2>{movie.title}</h2>
            <p>{movie.genre}</p>
            <p>Released: {movie.releaseYear}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
