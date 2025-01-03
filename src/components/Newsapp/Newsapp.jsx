import React, { useState } from "react";
import "./Newsapp.css";
import Cards from "../Cards/Cards";

const Newsapp = () => {

 const [search,setSearch] = useState("india"); 
 const [newsData,setNewsData] = useState(null);

 const API_KEY = "d1b2ce5143724fa1aa6706e32630faed"

 const getData = async()=> {
      const response = await  fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
      const jsonData = await response.json();
      console.log(jsonData.articles);
      setNewsData(jsonData.articles)
 }

 const handleInput = (e) => {
     console.log(e.target.value);
     setSearch(e.target.value)
 }

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
          <input type="text" placeholder="Search News" onChange={handleInput} />
          <button onClick={getData}>Search</button>
        </div>
      </nav>
      <div>
         <p className="heading">Stay Update with TrendyNews</p>
      </div>

      <div className="category-btns">
          <button>Sports</button>
          <button>Politics</button>
          <button>Entertainment</button>
          <button>Health</button>
          <button>Fitness</button>
      </div>
      
      <div>
        {newsData?<Cards data={newsData}/> : null }
      </div>
    </div>
  );
};

export default Newsapp;
