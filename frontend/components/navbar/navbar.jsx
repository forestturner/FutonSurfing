
import React from 'react';
import { Link, hashHistory } from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl,Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
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
    this.handleLogin = this.handleLogin.bind(this);
    this.handleCloseLogin = this.handleCloseLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleCloseSignUp = this.handleCloseSignUp.bind(this);
    this.handleSubmitSignUpForm = this.handleSubmitSignUpForm.bind(this);
    this.handleSubmitLoginForm = this.handleSubmitLoginForm.bind(this);
    this.update = this.update.bind(this);
    this.updateSearch =this.updateSearch.bind(this);


  }

  handleGuest(e) {
		const user = {user: {username: "Guest",password:"password1"}};
		this.props.logIn(user);
	}
  //
   componentDidMount() {
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
      location: "",
      once: true
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
            <h1>FutonSurfing</h1>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>

            <NavItem>
              <Button className="btn btn-signup join" onClick={this.handleSignUp}> Sign up</Button>
            </NavItem>

             <Modal
               isOpen={this.state.signUpModal}
               onRequestClose={this.handleCloseSignUp}
               style={customStyles} >


              <div  className="btn btn-guest join" onClick={this.handleGuest}> Guest </div>

               <div>Please Sign Up.</div>
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


             <NavItem>
               <Button className="btn btn-guest join" onClick={this.handleGuest}>Guest</Button>
             </NavItem>
             <NavItem>
               <Button className="btn btn-login join" onClick={this.handleLogin}>Log In</Button>
             </NavItem>


             <Modal
               isOpen={this.state.loginModal}
               onRequestClose={this.handleCloseLogin}
               style={customStyles} >


               <div className="btn btn-warning join" onClick={this.handleGuest}>Guest</div>

               <div>Please Login.</div>
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


             <LinkContainer to="/futons">
             <NavItem>
               <Button className="btn btn-futons join">Futons</Button>
                 </NavItem>
             </LinkContainer>
          </Nav>
          <Nav pullRight>
          <NavItem>
            <form className="nav-search" onSubmit={this.handleSubmit} >
              <input type="text" id="nav-search" placeholder="Search by city.." value={this.state.location} onChange={this.updateSearch} />
            </form>
          </NavItem>
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
            {/* <NavItem> */}
              <a>FutonSurfing</a>
            {/* </NavItem> */}
          </Navbar.Brand>
          <Nav pullLeft >
            <NavItem>
              <img className="img-nav" src={currentUser.profile_img_url} alt=""></img>
            </NavItem>
          </Nav>
          <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/profile">
                <NavItem>
                  <Button className="btn btn-guest join">Dashboard</Button>
                </NavItem>
              </LinkContainer>
                <NavItem>
                  <Button className="btn btn-warning join" onClick={logout}>Log Out</Button>
                </NavItem>
              <LinkContainer to="/futons">
                <NavItem>
                  <Button className="btn btn-futons join">Futons</Button>
                </NavItem>
              </LinkContainer>
              </Nav>
                <Nav pullRight>
                  <NavItem>
                    <form className="nav-search" onSubmit={this.handleSubmit} >
                      <input type="text" id="nav-search" placeholder="Search by city.." value={this.state.location} onChange={this.updateSearch} />
                    </form>
                  </NavItem>
                </Nav>
          </Navbar.Collapse>
      </Navbar>
      </div>
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
