import React from 'react';
import { Link, hashHistory } from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl,Button} from 'react-bootstrap';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleGuest = this.handleGuest.bind(this);
  }

  handleGuest(e) {
		const user = {user: {username: "Guest",password:"password1"}};
		this.props.logIn(user);
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
          <Nav pullRight>
            {/* <Link to="#" className="btn btn-default join" onClick={handleGuest}> log in </Link> */}
            <Link to="/signup" className="btn btn-primary join"> Join </Link>
            <Link to="/profile" className="btn btn-warning join" onClick={this.handleGuest}>> Guest </Link>
            <Link to="/futons" className="btn btn-info join">Futons</Link>
          </Nav>
          <Nav pullRight>
          <Navbar.Form >
          <FormGroup pullRight>
          <FormControl type="text" placeholder="City" />
          </FormGroup>
          {' '}
          <Button type="submit">Search</Button>
          </Navbar.Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  navbarInstanceLoggedin(currentUser, logout){
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand pullLeft>
            <a href="#">FutonSurfing</a>

          </Navbar.Brand>
          <Nav pullLeft>
            <img className="img-nav" src={currentUser.profile_img_url} alt=""></img>
          </Nav>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {/* <NavItem eventKey={1} >{currentUser.username}</NavItem> */}

            <Link className="btn btn-primary join" to="/profile">Dashboard</Link>
            <Link to="/" className="btn btn-warning join" onClick={logout}>Log Out</Link>
            <Link to="/futons" className="btn btn-info join">Futons</Link>
            {/* <Button className="header-button" onClick={logout}>Log Out</Button> */}
          </Nav>
          <Nav pullRight>
          <Navbar.Form pullRight>
          <FormGroup>
          <FormControl type="text" placeholder="City" />
          </FormGroup>
          {' '}
          <Button type="submit">Search</Button>
          </Navbar.Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  render() {
    let currentUser = this.props.currentUser;
    let logout = this.props.logOut;
    // let guestUser = {user:{username:"Guest",password:"password1"}};
    // let loginGuest = this.props.logIn(guestUser);
    if (currentUser){
      return this.navbarInstanceLoggedin(currentUser, logout);
    } else {
      return this.navbarInstanceSession();
    }
  }
}
export default NavBar;
