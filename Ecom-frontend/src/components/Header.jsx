import { NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

function Header({search}) {
  let user = JSON.parse(localStorage.getItem('user-info'));
  let navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-secondary">
      <Container fluid>
        <Navbar.Brand href="#">Dashboard</Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto " >
            <Link className='px-3 text-black fs-5 text-decoration-none' to="/">Home</Link>
            {
              localStorage.getItem('user-info')?
              <>
            <Link className='px-3 text-black fs-5 text-decoration-none' to="/add">Add Product</Link>
              </>:
              <>
            <Link className='px-3 text-black fs-5 text-decoration-none' to="/login">Login</Link>
            <Link className='px-3 text-black fs-5 text-decoration-none' to="/register">Register</Link>
              </>
            }
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              onChange={(e)=>search(e.target.value)}
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className=' border-white'> 
           <Link to='/search'className='text-white ' >Search</Link> 
            </Button>
          </Form>
        {
          localStorage.getItem('user-info')?
          <Nav className='mx-4'>
          <NavDropdown title={user && user.name} id="collapsible-nav-dropdown" >
               <NavDropdown.Item onClick={()=>{
                 localStorage.clear();
                 navigate('/register')
               }}>Logout</NavDropdown.Item>
             </NavDropdown>
          </Nav>
          :
          null
        }
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Header;