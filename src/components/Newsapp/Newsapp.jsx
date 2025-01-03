import React from "react";
import "./Newsapp.css";

const Newsapp = () => {
  return (
    <div>
      <nav>
        <div>
          <h1>Trendy News</h1>
        </div>
        <ul>
          <a>All News</a>
          <a>Trending</a>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search News" />
          <button>Search</button>
        </div>
      </nav>

      <div className="category-btns">
          <button>Sports</button>
          <button>Politics</button>
          <button>Entertainment</button>
          <button>Health</button>
          <button>Fitness</button>
      </div>
      
    </div>
  );
};

export default Newsapp;
