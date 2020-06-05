import React from 'react';
import {Container,Navbar,Nav,NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Navigation = (props) => (
<Container fluid>
  <Navbar bg="light" expand={'sm'} fixed="top" collapseOnSelect>
    
    <Navbar.Brand as={Link} to="/">{props.title}</Navbar.Brand>
    
    <Navbar.Toggle/>
    <Navbar.Collapse>
    <Nav className="mr-auto">
      <NavItem>
        <Nav.Link eventkey={1} as={Link} exact to="/">Home</Nav.Link>
      </NavItem>
      
      <NavItem>
        <Nav.Link eventkey={2} as={Link} to="/features">Features</Nav.Link>
      </NavItem>  

      <NavItem>
        <Nav.Link eventkey={3} as={Link} to="/features">FAQs</Nav.Link>
      </NavItem>  
    </Nav>
    </Navbar.Collapse>

  </Navbar>
  </Container>
      

);

export default Navigation;