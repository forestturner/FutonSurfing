import React from 'react';
import { Link, hashHistory } from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl,Button} from 'react-bootstrap';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  navbarInstanceSession(){
    return (
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
          <Link to="/login" className="btn btn-default login"> log in </Link>
          <Link to="/signup" className="btn btn-primary join"> Join </Link>
            <Link to="/guest" className="btn btn-warning guest"> Guest </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  navbarInstanceLoggedin(currentUser, logout){
    return (
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
  }
  render() {
    let currentUser = this.props.currentUser;
    let logout = this.props.logOut;
    if (currentUser){
      return this.navbarInstanceLoggedin(currentUser, logout);
    } else {
      return this.navbarInstanceSession();
    }
  }
}
export default NavBar;
