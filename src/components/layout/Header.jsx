import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar container color='dark' light='false' dark full='false' expand="md" fixed='top'>
        <NavbarBrand href="/">Awesome Blog</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/" style={{ textDecoration: 'none', }}>
                <NavLink>
                    Home
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/post/1" style={{ textDecoration: 'none', }}>
                <NavLink>
                  Single Post
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/josumung999/awesome-blog">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header