import React from 'react'
import { Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
function NavBar() {
    return (
        <div className='nav'>
        <Navbar  >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={Link} to ='/'> Home</Nav.Link>
            <Nav.Link  as={Link}   to='/film' >Movies</Nav.Link>
              <NavDropdown  title="" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link}to="/romance">Romance</NavDropdown.Item>
                <NavDropdown.Item as={Link}to="/Action">Action</NavDropdown.Item>
                <NavDropdown.Item as={Link}to="/Comedie">comédie</NavDropdown.Item>
                <NavDropdown.Item as={Link}to="/Drama">drama</NavDropdown.Item>
                <NavDropdown.Item as={Link}to="/Crime">crime</NavDropdown.Item>
              </NavDropdown>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
      
    )
    }
   


export default NavBar
