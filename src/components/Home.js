import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Home.css';
function Home() {
  return (
    <div className="home">
      <h2>Welcome to our store!</h2>
      <div className="categories">
        <Link to="/components/movies">
          <div className="category-movies">
            <h3>Movies</h3>
          </div>
        </Link>
        <Link to="/components/books">
          <div className="category-books">
            <h3>Books</h3>
          </div>
        </Link>
        <Link to="/components/games">
          <div className="category-games">
            <h3>Games</h3>
          </div>
        </Link>
        <Link to="/components/apps">
          <div className="category-apps">
            <h3>Apps</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
