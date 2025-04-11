import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function CustomNavbar() {
    const navigate = useNavigate(); 
    return (
        <>


            {/* Main Navigation */}
            <Navbar bg="light" expand="lg" sticky="top" className="main-navbar shadow-sm">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="fw-bold text-secondary">
                        Taqi Tahmid
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <FontAwesomeIcon icon={faBars} />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link href="about">About</Nav.Link>
                            <Nav.Link href="projects">Projects</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                        <div className="d-flex ms-3">
                            <Button variant="dark" onClick={() => navigate("/contact")}>Hire Me</Button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default CustomNavbar;