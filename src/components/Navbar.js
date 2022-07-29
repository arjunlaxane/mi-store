import React from 'react';
import '../styles/navBar.css';
import { Link } from 'react-router-dom';
// import { logo } from '../data/data.json';

// const searchIcon = (
//   <span className="material-symbols-outlined search-logo">search</span>
// );

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">
          <img
            id="logoImage"
            src="https://tse4.mm.bing.net/th?id=OIP.7UIJA_3ud3lwAOmZBXq21AHaHa&pid=Api&P=0"
            alt="Not"
          />
        </Link>
      </div>

      <a className="navlinks" href="/miphones">
        miphones
      </a>
      <a className="navlinks" href="/miphones">
        Redmi phones
      </a>
      <a className="navlinks" href="/tv">
        TV
      </a>
      <a className="navlinks" href="/laptops">
        Laptops
      </a>
      <a className="navlinks" href="/lifestyle">
        Fitness & Lifestyle
      </a>
      <a className="navlinks" href="/home">
        Home
      </a>
      <a className="navlinks" href="/audio">
        Radio
      </a>
      <a className="navlinks" href="/accessories">
        Accessories
      </a>

      <div className="searchbox">
        <input type="text" name="search" placeholder="Search Products.." />
        <span className="material-symbols-outlined search-logo">search</span>
      </div>
    </div>
  );
};

export default Navbar;
