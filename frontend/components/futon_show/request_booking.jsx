import React from 'react';
import Modal from 'react-modal';
import { hashHistory, Link } from 'react-router';

class Request extends React.Component {
  constructor(props) {
    super(props);
    // let from = this.props.user.futon.start_date;
    // let to = this.props.user.futon.end_date;

    this.state = {
      start_date: "",
      end_date: "",
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      email: "",
      profile_img_url: "",
      location: "",
      loginModal: false,
      signUpModal: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
    this.renderMethod = this.renderMethod.bind(this);


    this.handleLogin = this.handleLogin.bind(this);
    this.handleCloseLogin = this.handleCloseLogin.bind(this);
    this.handleSubmitLoginForm = this.handleSubmitLoginForm.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    document.getElementById("first-field").focus();
  }



  handleSubmit(e) {
    e.preventDefault();
    if(this.props.currentUser){

    let from;
    let to;
    if (this.state.start_date && this.state.end_date) {
      from = this.state.start_date;
      to = this.state.end_date;
    }

    let updates = {
      start_date: from,
      end_date: to,
      futon_id: this.props.futonId
    }

    this.props.createBooking(updates);

  } else {
    this.handleLogin();
  }
  }

  updateField(event) {
    let updates = {};
    let key = event.target.name;
    updates[key] = event.target.value;
    this.setState(updates);
  }


  renderErrors(){
    return(
      <ul>
        {this.props.errors.map( (error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleLogin() {

    this.setState({ loginModal: true});
  }

  handleCloseLogin() {
    this.setState({ loginModal: false});
   }

  update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

  handleSubmitLoginForm(e){
    debugger;
		e.preventDefault();
		const user = this.state;
		this.props.logIn({user});
	}
  componentWillMount() {
    Modal.setAppElement('body');
 }

 handleGuest(e) {
   debugger;
   const user = {user: {username: "Guest",password:"password1"}};
   this.props.logIn(user);
 }
 //

renderMethod(){

  const customStyles = {
    content : {
      fontSize              : 14,
      top                   : '50%',
      left                  : '15%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  return (
    <div className="padding">
      <div className="overlay"></div>
      <section className="request-form">
        <div className="errors">
        </div>
        <h3>Request Booking</h3>
        <form className="request" onSubmit={this.handleSubmit}>
          <label className="request-label">
            Start date:
            <input className="request-input" type="date" id="first-field" name="start_date" value={this.state.start_date} onChange={this.updateField} />
          </label>
          <label className="request-label">
            End date:
            <input className="request-input" type="date" name="end_date" value={this.state.end_date} onChange={this.updateField} />
          </label>
          <button className="btn-guest">Request</button>
        </form>
      </section>

      <div>
       <Modal
         isOpen={this.state.loginModal}
         onRequestClose={this.handleCloseLogin}
         style={customStyles} >

         <Link to="/profile" className="btn btn-guest join" onClick={this.handleGuest}> Guest Login </Link>
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
       </div>



    </div>
  );
}


  render() {
    debugger;
    return (this.renderMethod());
  }
}

export default Request;
