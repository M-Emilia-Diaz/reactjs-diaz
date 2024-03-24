import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/CartWidget';
import { NavLink } from 'react-router-dom';


function NavBar() {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <img className='navimg'  src="../images/logo.png " alt="logo" />
        <Container>
        <Navbar.Brand href="#home">Terrón de Azucar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Inicio</Nav.Link>            
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to='/categories/nuevos sabores'>Nuevos sabores</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to='/categories/mas vendidos'>
                Mas Vendidos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to='/categories/clasicos'>Clasicos</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <CartWidget counter={15}/>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NavBar;