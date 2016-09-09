import React from 'react';
import {hashHistory} from 'react-router';
import merge from 'lodash/merge';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    firstname: this.props.currentUser.firstname,
    lastname: this.props.currentUser.lastname,
    description: this.props.currentUser.description 
  };

    this.update = this.update.bind(this);
    this.updateProfilePic = this.updateProfilePic.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editProfileData = this.editProfileData.bind(this);
  }



    handleSubmit(e) {
      e.preventDefault();
      let newInfo = this.state
      this.props.updateUser(this.props.currentUser.id, newInfo);

    }


        // handleSubmit(e) {
        //   e.preventDefault();
        //   let newState = this.state
        //   const editfuton = merge({}, this.props.futon, this.state);
        //   debugger;
        //   this.props.updateFuton(this.props.futon.id, editfuton);
        //   // hashHistory.push("/profile");
        // }


    update(field){
  		return e => { this.setState({[field]: e.currentTarget.value }); };
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



    updateProfilePic() {
      cloudinary.openUploadWidget(window.cloudinaryOptions, (error, images) => {
        if (error) {
          this.setState({error: error.message});
        } else if (images.length > 1) {
          this.setState({error: "Please only one image"});
        } else if (images.length === 0) {
          this.setState({error: "Could not find image"})
        } else {
          this.props.updateUser(this.props.currentUser.id, { profile_img_url: images[0].url });
        }
      });
    }

editProfileData () {

  let profilePic = ( this.props.currentUser.profile_img_url ? this.props.currentUser.profile_img_url : "http://res.cloudinary.com/dnuopy1ir/image/upload/v1473008869/facebook_blank_face3_ywa1j7.jpg");
  return(
  <div>
    <main className="container">
      <div className="vertical-container">
        <aside className="profile-pic">
          <img className="edit-pic" src={profilePic} onClick={this.updateProfilePic}/>
          <p>Click your profile image to update your profile pic</p>
          </aside>
          <section className="main-profile">
            <article className="profile-header">
              <h1>{this.props.currentUser.username}</h1>
              <h3>{this.props.currentUser.city}</h3>
            </article>
            <article className="profile-buttons">
              <h4>{this.state.error}</h4>
              { this.renderErrors() }
            </article>
            <article className="profile-info">
              <nav className="profile-navbar">
            <ul>
              <li><a href="/#/editprofile" className="profile-navbar-links"> Edit your about</a></li>
              <li><a href="/#/editfuton" className="profile-navbar-links">Edit your futon</a></li>
            </ul>
            </nav>
              <div className="inner-info">
              <form className="update-form">
          <label>
            First name:
            <input type="text" name="firstname" value={this.state.firstname} onChange={this.update("firstname")} />
          </label>
          <label>
          Last name:
          <input type="text" name="lastname" value={this.state.lastname} onChange={this.update("lastname")} />
          </label>
          <label>
          About me:
          <textarea name="description" value={this.state.description} onChange={this.update("description")} />
          </label>
          <button className="update-button" onClick={this.handleSubmit} >Edit</button>
          </form>
          </div>
      </article>
      </section>
      </div>
    </main>
  </div>
);
}



  render() {

    return (
      this.editProfileData()
    )
  }

}

export default EditProfile;

















// if (!newInfo.password) {
//   delete newInfo.password;
// }
