import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Navigation = (props) => (

  <Navbar fixed="top" bg="light">
    <Navbar.Brand>{props.title}</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link><NavLink exact to="/">Home</NavLink></Nav.Link>
        <Nav.Link><NavLink to="/features">Features</NavLink></Nav.Link>
        <Nav.Link><NavLink to="/faqs">Faqs</NavLink></Nav.Link>
        
      </Nav>
  </Navbar>

      /*
      
      
      <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/features">Features</Nav.Link>
        <Nav.Link href="/faqs">Faqs</Nav.Link>
      
      <nav>
        <h2>{props.title}</h2>
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/features">Features</NavLink></li>
          <li>FAQs</li>
        </ul>
      </nav> */

);

export default Navigation;