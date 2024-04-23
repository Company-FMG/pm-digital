import {Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import mikelogo from '../assets/mikelogo.svg';

import '../css/navbar.css'
import '../App.css'

function NavbarMike() {
  return (
    <Navbar expand="lg" className='bg-navColor'>
      <Container>
      <NavbarBrand href="/">
          <img src={mikelogo}/>
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" id="textNav">Home</Nav.Link>
            <Nav.Link href="#link" id="textNav">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMike;