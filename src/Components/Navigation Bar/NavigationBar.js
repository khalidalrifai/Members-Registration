import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LanguageSwitch from "../Language Switch/LanguageToggle";

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="https://www.aeapolimi.it/en/">
                    Automation Engineering Association
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Join Us</Nav.Link>
                        <NavDropdown title="More" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#">Members</NavDropdown.Item>
                            <NavDropdown.Item href="#">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Contact Us</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <div className="LanguageSwitch">
                            <LanguageSwitch />
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;