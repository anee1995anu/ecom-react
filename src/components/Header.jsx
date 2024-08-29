import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom"

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand  as={Link} to = {"/"}>My eCom</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to = {"/"}>Home</Nav.Link>
            <Nav.Link  as={Link} to = {"/about"}>About</Nav.Link>
            <Nav.Link as={Link} to ={"/products"}>Products</Nav.Link>
            <Nav.Link as={Link} to ={"/contacts"}>Contact Us</Nav.Link>
            {/* <Nav.Link  as={Link} to ={"/profile"}>Profile</Nav.Link> */}
          
          </Nav>
          
          <nav>
          <NavDropdown title="Add Product" id="basic-nav-dropdown" className='mr-9'>
          <NavDropdown.Item as = {Link} to="/admin/product/add">Add Product</NavDropdown.Item>
          
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
              
              
            </NavDropdown>
          
          
        </nav>
        <nav>
          <Nav.Link as={Link} to ={"/signup"}>Log in  </Nav.Link>
          </nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default Header;