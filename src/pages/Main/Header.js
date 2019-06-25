import React from 'react';
import { connect } from 'react-redux';
import { toggleMobileNavVisibility } from '../../reducers/Layout';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap';


const handleLogout = () => {
  debugger;
  localStorage.removeItem('googleAuth');
  global.isAuthenticated = false;
  //TODO Redirect to home page
}

const Header = ({
  showMobileMenu,
  toggleMobileNavVisibility,
  handleLogout
}) => (
  <Navbar fluid={true}>
  <Navbar.Header>
    <button type="button" className="navbar-toggle" data-toggle="collapse" onClick={toggleMobileNavVisibility}>
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
          <NavItem>Account</NavItem>
          <NavItem onClick={handleLogout} >Log out</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );



const mapDispatchToProp = dispatch => ({
  toggleMobileNavVisibility: () => dispatch(toggleMobileNavVisibility())
});

export default connect(null, mapDispatchToProp)(Header);