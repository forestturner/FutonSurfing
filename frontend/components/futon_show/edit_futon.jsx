import React from 'react';
import {hashHistory} from 'react-router';
import merge from 'lodash/merge';


class EditFuton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    address: (this.props.futon.address ? this.props.futon.address : ""),
    description: (this.props.futon.description ? this.props.futon.description : "")
  };
  // console.log("hello");
    this.update = this.update.bind(this);
    this.updateFutonPic = this.updateFutonPic.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editFutonMethod = this.editFutonMethod.bind(this);
  }
  // create_table "futons", force: :cascade do |t|
  //   t.string   "address",       null: false
  //   t.float    "lat",           null: false
  //   t.float    "lng",           null: false
  //   t.text     "description",   null: false
  //   t.integer  "user_id",       null: false
  //   t.datetime "created_at",    null: false
  //   t.datetime "updated_at",    null: false
  //   t.string   "futon_img_url"
  //   t.integer  "capacity"
  //   t.string   "city"
  //   t.string   "state"
  // end



  updateFutonPic() {
    cloudinary.openUploadWidget(window.cloudinaryOptions, (error, images) => {
      if (error) {
        this.setState({error: error.message});
      } else if (images.length > 1) {
        this.setState({error: "Please only one image"});
      } else if (images.length === 0) {
        this.setState({error: "Could not find image"})
      } else {
        this.props.updateUser(this.props.futon.id, { futon_img_url: images[0].url });
      }
    });
  }


    handleSubmit(e) {
      e.preventDefault();
      let newState = this.state
      const editfuton = merge({}, this.props.futon, this.state);
      debugger;
      this.props.updateFuton(this.props.futon.id, editfuton);
      hashHistory.push("/profile");
    }

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



editFutonMethod(){
let futonPic = ( this.props.futon.futon_img_url ? this.props.futon.futon_img_url : "http://res.cloudinary.com/dnuopy1ir/image/upload/v1473008869/facebook_blank_face3_ywa1j7.jpg");
this.state.address = this.props.futon.address
return(
  <div>
    <main className="container">
      <div className="vertical-container">
        <aside className="profile-pic">
          <img className="edit-pic" src={futonPic} onClick={this.updateFutonPic}/>
          <p>Click your futon image to update the your futon pic</p>
        </aside>
        <section className="main-profile">
          <article className="profile-header">
            <h1>{this.props.currentUser.firstname + " " + this.props.currentUser.lastname}</h1>
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
                 address:
                 <input type="text" name="address" value={this.state.address}  onChange={this.update("address")} />
               </label>
               <label>
                 Futon description:
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

    console.log(this.state);
    console.log(this.props);
    // this.state.city = this.props.futon.city;
    // this.state.lat = this.props.futon.lat;
    // this.state.lng = this.props.futon.lng;
    // this.state.address = this.props.futon.address;
    // this.state.description = this.props.futon.description;

    // address: (this.props.futon.address ? this.props.futon.address : ""),
    // description: (this.props.futon.description ? this.props.futon.description : ""),
    // user_id: "",
    // lat: "",
    // lng: "",
    // futon_img_url:""


    return (
      this.editFutonMethod()
    );
  }

}

export default EditFuton;
