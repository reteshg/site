import React from 'react';

const Navbar = (props) => (
      <nav>
        <h2>{props.title}</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </nav>

);

export default Navbar;