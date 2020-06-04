import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Navigation = (props) => (

  <Navbar fixed="top" bg="light">
    <Navbar.Brand to="/">{props.title}</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} exact to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/features">Features</Nav.Link>
        
        
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