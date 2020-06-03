import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => (
      <nav>
        <h2>{props.title}</h2>
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/features">Features</NavLink></li>
          <li>FAQs</li>
        </ul>
      </nav>

);

export default Navbar;