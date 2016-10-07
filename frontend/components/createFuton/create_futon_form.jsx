import React from 'react';
import { Link, hashHistory} from 'react-router';


class createFutonForm extends React.Component {
constructor(props){
  super(props);
  this.state = {
    address: "",
    lng: "",
    lat:"",
    description:"",
    futon_img_url: ""
  };
  this.handleSubmit = this.handleSubmit.bind(this);

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


componentDidMount(){

  if (this.props.currentUser.futon.address)
  {
    hashHistory.push("/editfuton");
  }
}



render(){
  return(
  <div>
    <form onSubmit={this.handleSubmit} className="login-form-box">
      Futonsurfing add Futon Page!
      <br/>
      { this.renderErrors() }
      <div className="login-form">
        <label> address:
          <input type="text" value={this.state.address}	onChange={this.update("address")} className="login-input" />
        </label>
        <label> lng:
          <input type="text" value={this.state.lng}	onChange={this.update("lng")} className="login-input" />
        </label>
        <label> lat:
          <input type="text" value={this.state.lat}	onChange={this.update("lat")} className="login-input" />
        </label>
        <label> description:
<<<<<<< HEAD
          <input type="text" value={this.state.description}	onChange={this.update("description")} className="login-input" />
=======
          <input type="text" value={this.state.email}	onChange={this.update("description")} className="login-input" />
        </label>
        <label> futon image url:
          <input type="text" value={this.state.username}	onChange={this.update("futon_img_url")} className="login-input" />
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
        </label>
        <input type="submit" value="Create"/>
      </div>
      <Link to="/profile"> Back to Dashboard</Link>
    </form>
  </div>
);
}

}

export default createFutonForm;
