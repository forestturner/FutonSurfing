import React from 'react';
import { Link} from 'react-router';

class createFutonForm extends React.Component {
constructor(props){
  super(props);
  this.state = {
    address: "",
    lng: "",
    lat:"",
    address:"",
    lat:"",
    lng:"",
    description:"",
    futon_img_url: ""
  };
  this.handleSubmit = this.handleSubmit.bind(this);
  this.signupMethod = this.signupMethod.bind(this);
  this.loginMethod = this.loginMethod.bind(this);
  this.guestMethod = this.guestMethod.bind(this);

}



update(field){
  return e => { this.setState({[field]: e.currentTarget.value }); };
}

handleSubmit(e){
  e.preventDefault();
  const futon = this.state;
  this.props.createFuton({futon});
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

//
// handleClick(e){
// 	e.preventDefault();

// 	this.props.processForm()
// }
//
signupMethod(){
  return(
  <div>
    <form onSubmit={this.handleSubmit} className="login-form-box">
      Futonsurfing add Futon Page!
      <br/>
      { this.renderErrors() }
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

        <input type="submit" value="sign-up"/>
      </div>
    </form>
  </div>
);
}
