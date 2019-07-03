import React from 'react';
import { connect } from 'react-redux';
import { toggleMobileNavVisibility, handleLogout } from '../../reducers/Layout';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl,NavLink } from 'react-bootstrap';


const Header = ({
  showMobileMenu,
  toggleMobileNavVisibility,
  handleLogout
}) => (
  <Navbar fluid={true}>
  <Navbar.Header>
    <button type="button" className="navbar-toggle" data-toggle="collapse" onClick={handleLogout}>
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </button>
  </Navbar.Header>

      <Navbar.Collapse>

        <div className="separator"></div>
        <Navbar.Form pullLeft>
        </Navbar.Form>
        <Nav pullRight> 
          <NavItem> <Link to="/">  Logout </Link> </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );



const mapDispatchToProp = dispatch => ({
  handleLogout: () => dispatch(handleLogout())
});

export default connect(null)(Header);