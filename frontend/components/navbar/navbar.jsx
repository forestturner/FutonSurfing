
import React from 'react';
import { Link, hashHistory } from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl,Button} from 'react-bootstrap';
import Modal from 'react-modal';
import merge from 'lodash/merge';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      email: "",
      profile_img_url: "",
      lat: this.props.coords.lat,
      lng: this.props.coords.lng,
      location: "",
      loginModal: false,
      signUpModal: false
    };

    this.handleGuest = this.handleGuest.bind(this);
    this.search = this.search.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleCloseLogin = this.handleCloseLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleCloseSignUp = this.handleCloseSignUp.bind(this);
    this.handleSubmitSignUpForm = this.handleSubmitSignUpForm.bind(this);
    this.handleSubmitLoginForm = this.handleSubmitLoginForm.bind(this);
    this.update = this.update.bind(this);
  }

  handleGuest(e) {
		const user = {user: {username: "Guest",password:"password1"}};
		this.props.logIn(user);
	}

  componentDidUpdate() {
    let input = document.getElementById('nav-search')
    let options = {types: ['(cities)']};
    this.autocomplete = new google.maps.places.Autocomplete(input, options);
    this.autocomplete.addListener('place_changed', this.search);
  }

  search() {
    let place = this.autocomplete.getPlace();
    this.setState({
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
      location: ""
    });
    this.props.updateCoords(this.state);
    hashHistory.push("/futons");
  }
  updateSearch(e) {
    this.setState({location: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
  }

  handleLogin() {
    debugger;
    this.setState({ loginModal: true});
  }

  handleCloseLogin() {
    this.setState({ loginModal: false});
   }

  handleSignUp() {
    this.setState({ signUpModal: true});
  }

  handleCloseSignUp() {
    this.setState({ signUpModal: false});
  }


  update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

  handleSubmitLoginForm(e){
		e.preventDefault();
		const user = this.state;
		this.props.logIn({user});
	}

  handleSubmitSignUpForm(e){
		e.preventDefault();
		const user = this.state;
		this.props.signUp({user});
    this.handleCloseSignUp();
  }

  componentWillMount() {
    Modal.setAppElement('body');
 }

  navbarInstanceSession(){
    const customStyles = {
      content : {
        fontSize              : 14,
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };

    return (
      <div>

      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">FutonSurfing</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>


            <button className="btn btn-signup join" onClick={this.handleSignUp}> Sign up</button>
            <div>
             <Modal
               isOpen={this.state.signUpModal}
               onRequestClose={this.handleCloseSignUp}
               style={customStyles} >

               <Link to="/profile" className="btn btn-guest join" onClick={this.handleGuest}> Guest Login </Link>
               <div>Pleas Sign Up.</div>
               <div className="login-form">
                 <label> Username:
                   <input type="text" value={this.state.username}	onChange={this.update("username")} className="login-input" />
                 </label>
                 <label> Password:
                   <input type="password" value={this.state.password} onChange={this.update("password")} className="login-input" />
                 </label>
                 <label> firstname:
                   <input type="text" value={this.state.firstname}	onChange={this.update("firstname")} className="login-input" />
                 </label>
                 <label> lastname:
                   <input type="text" value={this.state.lastname}	onChange={this.update("lastname")} className="login-input" />
                 </label>
                 <label> email:
                   <input type="text" value={this.state.email}	onChange={this.update("email")} className="login-input" />
                 </label>

                 <input type="submit" value="sign-up" onClick={this.handleSubmitSignUpForm}/>
               </div>
             </Modal>
             </div>


            <Link to="/profile" className="btn btn-guest join" onClick={this.handleGuest}> Guest </Link>

            <button className="btn btn-login join" onClick={this.handleLogin}> Log in</button>
            <div>
             <Modal
               isOpen={this.state.loginModal}
               onRequestClose={this.handleCloseLogin}
               style={customStyles} >

               <Link to="/profile" className="btn btn-guest join" onClick={this.handleGuest}> Guest Login </Link>
               <div>Pleas Login.</div>
               <div className="login-form">
                 <label> Username:
                   <input type="text" value={this.state.username}	onChange={this.update("username")} className="login-input" />
                 </label>
                 <label> Password:
                   <input type="password" value={this.state.password} onChange={this.update("password")} className="login-input" />
                 </label>
                 <input type="submit" value="login" onClick= {this.handleSubmitLoginForm}/>
               </div>
             </Modal>
             </div>

            <Link to="/futons" className="btn btn-futons join">Futons</Link>
          </Nav>
          <Nav pullRight>
            <form className="nav-search" onSubmit={this.handleSubmit} >
              <input type="text" id="nav-search" placeholder="Search by city.." value={this.state.location} onChange={this.updateSearch} />
            </form>
          </Nav>

        </Navbar.Collapse>

      </Navbar>
      </div>
    );
  }
  navbarInstanceLoggedin(currentUser, logout){



    return (
      <div>

      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand pullLeft>
            <a href="#">FutonSurfing</a>

          </Navbar.Brand>
          <Nav pullLeft >
            <img className="img-nav" src={currentUser.profile_img_url} alt=""></img>
          </Nav>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {/* <NavItem eventKey={1} >{currentUser.username}</NavItem> */}

            <Link className="btn btn-guest join" to="/profile">Dashboard</Link>
            <Link to="/" className="btn btn-warning join" onClick={logout}>Log Out</Link>
            <Link to="/futons" className="btn btn-futons join">Futons</Link>
            {/* <Button className="header-button" onClick={logout}>Log Out</Button> */}
          </Nav>
          <Nav pullRight>
            <form className="nav-search" onSubmit={this.handleSubmit} >
              <input type="text" id="nav-search" placeholder="Search by city.." value={this.state.location} onChange={this.updateSearch} />
            </form>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      </div>
    );
  }
  render() {
    let currentUser = this.props.currentUser;
    let logout = this.props.logOut;
    debugger;
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
