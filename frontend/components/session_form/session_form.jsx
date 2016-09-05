	import React from 'react';
import { Link} from 'react-router';

class SessionForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: "",
			firstname: "",
			lastname: "",
			email: "",
			profile_img_url: ""
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
		const user = this.state;
		this.props.processForm({user});
	}



	navLink(){
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up </Link>;
		} else {
			return <Link to="/login">log in</Link>;
		}
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
				Futonsurfing sign up form
				<br/>
				Please { this.props.formType } or { this.navLink() }
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

	loginMethod(){
		return(
		<div>
			<form onSubmit={this.handleSubmit} className="login-form-box">
				Futonsurfing log in form
				<br/>
				Please { this.props.formType } or { this.navLink() }
				{ this.renderErrors() }
				<div className="login-form">
					<label> Username:
						<input type="text" value={this.state.username}	onChange={this.update("username")} className="login-input" />
					</label>
					<label> Password:
						<input type="password" value={this.state.password} onChange={this.update("password")} className="login-input" />
					</label>
					<input type="submit" value="login"/>
				</div>
			</form>
		</div>
	);
	}

	guestMethod() {
		this.state.username = "Guest";
		this.state.password = "password1";
		return(
			<div>
				<form onSubmit={this.handleSubmit} className="login-form-box">
					Futonsurfing log in form
					<br/>
					Please log in as a { this.props.formType } or { this.navLink() }
					{ this.renderErrors() }
					<div className="login-form">
						<label> Username:
							<input type="text" value={this.state.username}	onChange={this.update("username")} className="login-input" />
						</label>
						<label> Password:
							<input type="password" value={this.state.password} onChange={this.update("password")} className="login-input" />
						</label>
						<input type="submit" value="login"/>
					</div>
				</form>
			</div>
		)
	}




	render() {
		let renderMethod;
		// if(this.props.loggedIn){
		// 	this.redirectIfLoggedIn();
		// 	return;
		// }
		if (this.props.formType === "login") {
			renderMethod = this.loginMethod();
		} else if (this.props.formType === "guest") {
			renderMethod = this.guestMethod();
		} else {
			renderMethod = this.signupMethod();
		}
		return (renderMethod);
	}

}

export default SessionForm;


// Render a controlled component with state governed by user interface.
// Invoke the processForm prop when the 'submit' button is clicked.
// Render a "Log in" or "Sign up" header based on the formType prop.
// Provide a link to /#/signup or /#/login (whichever isn't the current address!)
// Render a list of error messages if any are present.
// Redirect the user to the /#/ route if they are logged in.
