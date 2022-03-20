import {Nav, NavItem, NavLink, Navbar, NavbarBrand, 
        NavbarToggler, Collapse, UncontrolledDropdown, 
        DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

export const NavbarComponent = () => {
    return (
        <Navbar color="info" expand="md" light>
            <NavbarBrand href="/">
                <img className={"nav-logo"} src="https://i.imgur.com/fLYLVah.jpg"/>
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck(){}}/>
            <Collapse navbar>
                <Nav className={"me-auto"} navbar>
                    <NavItem>
                        <NavLink href="a">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="a">
                            Art
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="a">
                            Other
                        </NavLink>
                    </NavItem>
                    <UncontrolledDropdown innavbar nav>
                        <DropdownToggle caret nav>
                            About Meg
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem href="About/Professional">
                                Professional
                            </DropdownItem>
                            <DropdownItem href="About/Creative">
                                Creative
                            </DropdownItem>
                            <DropdownItem href="About/Personal">
                                Personal
                            </DropdownItem>
                            <DropdownItem href="About/Album">
                                Photos
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default NavbarComponent;