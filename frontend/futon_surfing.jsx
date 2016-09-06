import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';







// import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl,Button} from 'react-bootstrap';
//
// const navbarInstance = (
//   <Navbar inverse>
//     <Navbar.Header>
//       <Navbar.Brand>
//         <a href="#">FutonSurfing</a>
//       </Navbar.Brand>
//       <Navbar.Toggle />
//     </Navbar.Header>
//     <Navbar.Collapse>
//       <Nav>
//         <Navbar.Form pullLeft>
//          <FormGroup>
//            <FormControl type="text" placeholder="City" />
//          </FormGroup>
//          {' '}
//          <Button type="submit">Search</Button>
//        </Navbar.Form>
//       </Nav>
//       <Nav pullRight>
//         <Button type="Join">Join</Button>
//         <Button type="Log In">Log In</Button>
//       </Nav>
//     </Navbar.Collapse>
//   </Navbar>
// );
//
// export default navbarInstance;
// ReactDOM.render(navbarInstance, mountNode);

import {logIn,signUp} from './actions/session_actions.js';


document.addEventListener('DOMContentLoaded', () => {


  let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  let height = window.innerHeight || document.documentElement.clientHeight|| document.body.clientHeight;

  let store;
  if (window.currentUser) {
    const initialState = {session: {currentUser: window.currentUser, errors: [], width: width, height:height }};
    store = configureStore(initialState);
  }
  else {
    store = configureStore();
  }




  // window.logIn = logIn;
  // window.signUp = signUp;
  window.store = store;
  // let store = configureStore();
  const root = document.getElementById('NavBar');
  ReactDOM.render(<Root store={store}/>, root);
   //ReactDOM.render(<h1>FUTON SURFING</h1>, root);
});
