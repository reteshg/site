import React from 'react';
import {Container,Navbar,Nav,NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Navigation = (props) => (
<Container>
  <Navbar fixed="top" bg="light" expand={'sm'}>
    
    <Navbar.Brand as={Link} to="/">{props.title}</Navbar.Brand>
    
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse>
    <Nav className="mr-auto">
      <NavItem>
        <Nav.Link as={Link} exact to="/">Home</Nav.Link>
      </NavItem>
      
      <NavItem>
        <Nav.Link as={Link} to="/features">Features</Nav.Link>
      </NavItem>  

      <NavItem>
        <Nav.Link as={Link} to="/features">FAQs</Nav.Link>
      </NavItem>  
    </Nav>
    </Navbar.Collapse>

  </Navbar>
  </Container>
      

);

export default Navigation;