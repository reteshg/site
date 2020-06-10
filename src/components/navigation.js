import React from 'react';
import {Container,Navbar,Nav,NavItem,NavDropdown,Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Navigation = (props) => (
<Container>

  <Navbar collapseOnSelect expand={'sm'} bg="dark" variant="dark" fixed="top" >
    
    <Navbar.Brand as={Link} to="/">{props.title}</Navbar.Brand>
    
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav>
      
      <NavItem>
      <NavDropdown title="Features" id="basic-nav-dropdown">
        <NavDropdown.Item eventkey={1} as={Link} to="/featureList">Features List</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventkey={2} as={Link} to="/featureCreateTimelapse">Create Timelapse</NavDropdown.Item>
        <NavDropdown.Item eventkey={3} as={Link} to="/featureVideoSettings">Video Settings</NavDropdown.Item>
        <NavDropdown.Item eventkey={4} as={Link} to="/features">Audio Settings</NavDropdown.Item>
        <NavDropdown.Item eventkey={5} as={Link} to="/features">Intro-Credit Slides</NavDropdown.Item>
        </NavDropdown>
      </NavItem>  

      <NavItem>
        <Nav.Link eventkey={6} as={Link} to="/features">FAQs</Nav.Link>
      </NavItem>  
      <NavItem>
        <Nav.Link eventkey={7} as={Link} to="/download"><Badge pill variant="primary">Download</Badge></Nav.Link>
      </NavItem>  
    </Nav>
    </Navbar.Collapse>

  </Navbar>
  </Container>
      

);

export default Navigation;