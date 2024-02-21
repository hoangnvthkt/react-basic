import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Hỏi Dân IT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={`/`} className="nav-link">
              Home
            </Link>
            <Link to={`Users`} className="nav-link">
              Users
            </Link>
            <Link to={`Admin`} className="nav-link">
              Admin
            </Link>

            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Users">Users</Nav.Link>
            <Nav.Link href="Admin">Admin</Nav.Link> */}
          </Nav>
          <nav>
            <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
            </NavDropdown>
          </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
