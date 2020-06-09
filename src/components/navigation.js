import React from 'react';
import {Container,Navbar,Nav,NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Navigation = (props) => (
<Container >
  
  <Navbar collapseOnSelect expand={'sm'} bg="dark" variant="dark" fixed="top" >
    
    <Navbar.Brand as={Link} to="/">{props.title}</Navbar.Brand>
    
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav>
      <NavItem>
        <Nav.Link eventkey={1} as={Link} exact to="/">Home</Nav.Link>
      </NavItem>
      
      <NavItem>
        <Nav.Link eventkey={2} as={Link} to="/features">Features</Nav.Link>
      </NavItem>  

      <NavItem>
        <Nav.Link eventkey={3} as={Link} to="/features">FAQs</Nav.Link>
      </NavItem>  
      <NavItem>
        <Nav.Link eventkey={4} as={Link} to="/download">Download</Nav.Link>
      </NavItem>  
    </Nav>
    </Navbar.Collapse>

  </Navbar>
  </Container>
      

);

export default Navigation;