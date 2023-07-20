import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
// import logo from '/assets/logo.png'

function NavScrollExample() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: 'black' }}>
      <Container fluid>
        {/* <Navbar.Brand href="#" style={{ color: 'white' }}>Navbar scroll</Navbar.Brand> */}
        <Navbar.Brand href="#">
        <Image src="/assets/logos.png" alt="Logo" style={{ width: '100px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{ color: 'white' }}>🏠Home</Nav.Link>
            <Nav.Link href="#action2" style={{ color: 'white' }}>📚Blogs</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="navbarScrollingDropdown" style={{ color: 'white', backgroundColor: '#C0C0C0' }}>
              <NavDropdown.Item href="#action3" style={{ color: 'black' }}>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4" style={{ color: 'black' }}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" style={{ color: 'black' }}>
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#" disabled style={{ color: 'white' }}> 🧑‍🎓About Us</Nav.Link>
          </Nav>
          <Nav.Link href="#" disabled style={{ backgroundColor:'blue', border: '2px solid gray', borderRadius: '25px' ,color: 'white',marginRight:'20px',paddingLeft: '15px', paddingRight: '15px', paddingBottom: '5px', paddingTop:'5px',marginBottom:'10px', marginTop:'10px' }}> ✍️ Write</Nav.Link>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
