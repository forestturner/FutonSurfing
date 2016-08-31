import React from 'react';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl,Button} from 'react-bootstrap';



const navbarInstance_session =()  => (
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">FutonSurfing</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <Navbar.Form pullLeft>
         <FormGroup>
           <FormControl type="text" placeholder="City" />
         </FormGroup>
         {' '}
         <Button type="submit">Search</Button>
       </Navbar.Form>
      </Nav>
      <Nav pullRight>
        <Button type="button" data-toggle="modal">Join</Button>
        <Button type="button" data-toggle="modal">Log In</Button>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const navbarInstance_loggedin = (currentUser, logout) =>  (
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">FutonSurfing</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <Navbar.Form pullLeft>
         <FormGroup>
           <FormControl type="text" placeholder="City" />
         </FormGroup>
         {' '}
         <Button type="submit">Search</Button>
       </Navbar.Form>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} >{currentUser.username}</NavItem>
        <Button className="header-button" onClick={logout}>Log Out</Button>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

function NavBar({currentUser, logout}){
  if (currentUser){
    return navbarInstance_loggedin(currentUser, logout);
  } else {
    return navbarInstance_session();
  }
}

export default NavBar;
