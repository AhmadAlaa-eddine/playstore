import React, { useState } from "react";


function MovieList() {
    const [movies] = useState([
        {
          id: 1,
          title: 'The Shawshank Redemption',
          category: 'Drama'
        },
        {
          id: 2,
          title: 'The Godfather',
          category: 'Drama'
        },
        {
          id: 3,
          title: 'The Dark Knight',
          category: 'Action'
        }
        // Add more movies as needed
      ]);
  const [selectedCategory, setSelectedCategory] = useState("Top Selling");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const filteredMovies = movies.filter(movie => movie.category === selectedCategory);

  function handleCategoryClick(category) {
    setSelectedCategory(category);
    setSelectedMovie(null);
  }

  function handleMovieClick(movie) {
    setSelectedMovie(movie);
  }

  return (
    <div>
      <div>
        <button onClick={() => handleCategoryClick("Top Selling")}>Top Selling</button>
        <button onClick={() => handleCategoryClick("New Releases")}>New Releases</button>
        <button onClick={() => handleCategoryClick("Recommendations")}>Recommendations</button>
      </div>
      <div>
        {filteredMovies.map(movie => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <img src={movie.image} alt={movie.title} />
            <button onClick={() => handleMovieClick(movie)}>Details</button>
          </div>
        ))}
      </div>
      {selectedMovie && (
        <div>
          <h2>{selectedMovie.title}</h2>
          <img src={selectedMovie.image} alt={selectedMovie.title} />
          <p>{selectedMovie.description}</p>
          <button onClick={() => setSelectedMovie(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default MovieList;
