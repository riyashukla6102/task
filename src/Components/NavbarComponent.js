import React from 'react';
import {Nav , Container ,Navbar} from 'react-bootstrap';

const NavbarComponent=()=>{
  return (
      
        <Navbar bg="dark" variant="dark" >
          <Container>
          <Navbar.Brand className="px-4"href="#home">GetGo Logistics</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="px-3" href="#home">Home<i class="fa fa-home"></i></Nav.Link>
            <Nav.Link className="px-3"  href="#features">Features<i class="fa fa-star"></i></Nav.Link>
            <Nav.Link className="px-3"  href="#pricing">Pricing<i class="fa fa-bitcoin"></i></Nav.Link>
          </Nav>
          </Container>
        </Navbar>
  )
}

export default NavbarComponent;