import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

export const NavbarComponent = () => {
    return (
        <Navbar bg="light" expand="md">
            <Navbar.Brand href="/">
                <img className={"nav-logo"} src="https://i.imgur.com/fLYLVah.jpg"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={"me-auto"}>
                    {/* <Nav.Link href="/Challenge/ShaftChallenge">
                        The Challenge of the Shaft
                    </Nav.Link>
                    <Nav.Link href="/Challenge/BottleChallenge">
                        The Challenge of the Bottles
                    </Nav.Link>
                    <Nav.Link href="/Challenge/GemsHunt">
                        The Challenge of the Gems
                    </Nav.Link> */}
                    <NavDropdown title="About Meg" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/About/Professional">
                            Professional
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/About/Creative">
                            Creative
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/About/Personal">
                            Personal
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/About/Album">
                            Photos
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent;