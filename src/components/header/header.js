import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="title">Swapi project</div>
      <div>
        <ul className="menu">
          <li><a href="#" className="link">People</a></li>
          <li><a href="#" className="link">Planets</a></li>
          <li><a href="#" className="link">Starships</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;