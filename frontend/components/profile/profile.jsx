import React from 'react';
import {Link, hashHistory} from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl,Button} from 'react-bootstrap';
import Bookings from '../bookings/bookings';
import Guests from '../bookings/guests.jsx';
import Modal from 'react-modal';
import merge from 'lodash/merge';

<<<<<<< HEAD
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
=======

console.log(Modal);
class Profile extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    this.state = {
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
      lat: this.props.coords.lat,
      lng: this.props.coords.lng,
      location: "",
      editFirstName: false,
      editLastName: false,
      editLanguages: false,
      editPlaceVisited: false,
      editDescription: false,
      editAddress: false,
      editFutonDescription: false,
      modalIsOpen: false,
      firstname: this.props.currentUser.firstname,
      lastname: this.props.currentUser.lastname,
      description: this.props.currentUser.description,
      places: this.props.currentUser.places,
      languages: this.props.currentUser.languages
    };
<<<<<<< HEAD
    this.handleDone = this.handleDone.bind(this);
    this.handleOpenedit = this.handleOpenedit.bind(this);
=======
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
    this.acceptGuests = this.acceptGuests.bind(this);
    this.getBookings = this.getBookings.bind(this);
    this.renderUserProfile = this.renderUserProfile.bind(this);
    this.renderProfileInfo = this.renderProfileInfo.bind(this);
    this.search = this.search.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.update = this.update.bind(this);
    this.updateProfilePic = this.updateProfilePic.bind(this);
    this.handleSubmitUser = this.handleSubmitUser.bind(this);
    this.handleSubmitFuton = this.handleSubmitFuton.bind(this);

    this.onClickEditFirstName = this.onClickEditFirstName.bind(this);
    this.onClickEditLastName = this.onClickEditLastName.bind(this);
    this.onClickEditLanguages = this.onClickEditLanguages.bind(this);
    this.onClickEditPlaceVisited = this.onClickEditPlaceVisited.bind(this);
    this.onClickEditDescription =this. onClickEditDescription.bind(this);
    this.onClickEditAddress = this.onClickEditAddress.bind(this);
    this.onClickEditFutonDescription = this.onClickEditFutonDescription.bind(this);
    this.nameFirstClose= this.nameFirstClose.bind(this);
    this.nameLastClose= this.nameLastClose.bind(this);
    this.languagesClose = this.languagesClose.bind(this);
    this.placeClose = this.placeClose.bind(this);
    this.descriptionClose = this.descriptionClose.bind(this);
    this.addressClose = this.addressClose.bind(this);
    this.futonDescriptionClose = this.futonDescriptionClose.bind(this);






  }


  handleSubmitFuton(e) {
    e.preventDefault();
    let newState = this.state
    const editfuton = merge({}, this.props.futon, this.state);
    this.props.updateFuton(this.props.futon.id, editfuton);
    this.addressClose();
    this.futonDescriptionClose();
  }



  handleSubmitUser(e) {
    e.preventDefault();
    let newInfo = this.state
    const editUser = merge({}, this.props.currentUser, newInfo);
    this.props.updateUser(this.props.currentUser.id, editUser);
    this.nameFirstClose();
    this.nameLastClose();
    this.languagesClose();
    this.placeClose();
    this.descriptionClose();
  }

        //
        // handleSubmitUser(e) {
        //   e.preventDefault();
        //   let newState = this.state
        //   const editfuton = merge({}, this.props.futon, this.state);
        //   this.props.updateFuton(this.props.futon.id, editfuton);
        //    hashHistory.push("/profile");
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

  // getInitialState() {
  //   return { modalIsOpen: false };
  // }

  componentWillMount() {
    Modal.setAppElement('body');
 }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }






  acceptGuests() {
    let newInfo;
    if (this.props.currentUser.site.accepting_guests) {
      newInfo = {accepting_guests: false}
    } else {
      newInfo = {accepting_guests: true}
    }
    this.props.updateSite(this.props.currentUser.site.id, newInfo)
  }
  getBookings(nextState, replace) {
  if (!this.props.store.getState().session.currentUser) {
    replace('/');
  } else {
    this.props.store.dispatch(requestBookings());
  }
}
componentWillReceiveProps(newProps){
  //console.log(newProps);
}
componentDidMount() {
  this.props.requestBookings();
<<<<<<< HEAD
  this.props.requestGuests();
=======
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e

}
// componentDidUpdate(){
//   let input = document.getElementById('nav-search-profile')
//   let options = {types: ['(cities)']};
//   this.autocomplete = new google.maps.places.Autocomplete(input, options);
//   this.autocomplete.addListener('place_changed', this.search);
// }



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
// handleSubmitUser(e) {
//   e.preventDefault();
// }






// handleProfileEditModel(fieldToEdited){
//   // Get the modal
//   var modal = document.getElementById('myModal');
//
//   // Get the button that opens the modal
//   var btn = document.getElementById("myBtn");
//
//   // Get the <span> element that closes the modal
//   var span = document.getElementsByClassName("close")[0];
//
//   // When the user clicks on the button, open the modal
//   btn.onclick = function() {
//       modal.style.display = "block";
//   }
//
//   // When the user clicks on <span> (x), close the modal
//   span.onclick = function() {
//       modal.style.display = "none";
//   }
//
//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function(event) {
//       if (event.target == modal) {
//           modal.style.display = "none";
//       }
//   }
// }


onClickEditFirstName() {
  this.setState({editFirstName: true});
}
onClickEditLastName() {
  this.setState({editLastName: true});
}
onClickEditLanguages() {
  this.setState({editLanguages: true});
}
onClickEditPlaceVisited() {
  this.setState({editPlaceVisited: true});
}
onClickEditDescription(){
  this.setState({editDescription: true});
}
onClickEditAddress(){
  this.setState({editAddress: true});
}
onClickEditFutonDescription(){
  this.setState({editFutonDescription: true});
}


nameFirstClose(){
  this.setState({editFirstName: false});
}
nameLastClose(){
  this.setState({editLastName: false});
}
languagesClose(){
  this.setState({editLanguages: false});
}
placeClose(){
  this.setState({editPlaceVisited: false});
}
descriptionClose(){
    this.setState({editDescription: false});
}
addressClose(){
    this.setState({editAddress: false});
}
futonDescriptionClose(){
    this.setState({editFutonDescription: false});
}

renderUserProfile() {
    // let guests = this.props.booking.guests
<<<<<<< HEAD

=======
    debugger;
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
    let divStyle ={fontSize: 14 };
    let currentUser = this.props.currentUser;
    let listedFuton = `/futons/${currentUser.id}`
    let allFutons =  "/futons"
    let UserProfile = `/users/${currentUser.id}`
    let allUsers =  "/users"
    let editFuton = '/editfuton';
    let editInfo = '/editprofile'
    let createFuton = '/createfuton';
    let profilePic = ( this.props.currentUser.profile_img_url ? this.props.currentUser.profile_img_url : "http://res.cloudinary.com/dnuopy1ir/image/upload/v1473008869/facebook_blank_face3_ywa1j7.jpg");
    return (
      <div>
        <main className="content group">
          <section className="content-sidebar">
            <div className="profile-picture">
              <img src={profilePic} onClick={this.updateProfilePic}/>
            </div>
            <div className="profile-info">
            <h2> {currentUser.firstname +" "+ currentUser.lastname}</h2>
              <p>
                Welcome!
              </p>
            </div>

        <ul className="profile-nav">
          <li><Link to={listedFuton} >MY FUTON</Link></li>
          <li><Link to={allFutons} >All FUTONS IN MY AREA</Link></li>
          <li><Link to={editFuton} >EDIT MY FUTON</Link></li>
          <li><Link to={editInfo} >EDIT MY INFO</Link></li>
          <li><Link to={UserProfile} >MY PUBLIC PROFILE</Link></li>
          <li><Link to={createFuton} >CREATE FUTON</Link></li>
        </ul>

      </section>
      <section className="content-main">

        <h1 className="content-header">
          Hit the world's best Futons with FutonSurfers...
        </h1>

        <div className="bookings-container">
        <article className="profile-section-main">
          <section className="profile-section-heading">
            <h2>My Bookings</h2>
          </section>
            <Bookings bookings={this.props.bookings} deleteBooking={this.props.deleteBooking} />
        </article>
          </div>
      </section>
    </main>




    <script src="js/jquery.min.js"></script>
    <script src="js/overlay.js"></script>

  </div>
    );

}

renderProfileInfo(){
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
  // let guests = this.props.booking.guests
<<<<<<< HEAD

=======
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
 let profilePic = ( this.props.currentUser.profile_img_url ? this.props.currentUser.profile_img_url : "http://res.cloudinary.com/dnuopy1ir/image/upload/v1473008869/facebook_blank_face3_ywa1j7.jpg");
 let divStyle ={fontSize: 16,float:'right' };
 let h3Style = {display: 'initial', fontSize: 14};
 let currentUser = this.props.currentUser;
 let listedFuton = `/futons/${currentUser.id}`
 let allFutons =  "/futons"
 let UserProfile = `/users/${currentUser.id}`
 let allUsers =  "/users"
 let editFuton = '/editfuton';
 let editInfo = '/editprofile'
 let createFuton = '/createfuton';
return (
  <div>
    <main className="content group">
      <section className="content-sidebar">
        <div className="profile-picture">
          <img src={profilePic} onClick={this.updateProfilePic}/>
        </div>
        <div className="profile-info">
        <h2> {this.state.firstname +" "+ this.state.lastname}</h2>
          <p>
            Welcome!
          </p>
        </div>

    <ul className="profile-nav">
      <li><Link to={listedFuton} >MY FUTON</Link></li>
      <li><Link to={allFutons} >All FUTONS IN MY AREA</Link></li>
      <li><Link to={editFuton} >EDIT MY FUTON</Link></li>
<<<<<<< HEAD
=======
      <li><Link to={editInfo} >EDIT MY INFO</Link></li>
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
      <li><Link to={UserProfile} >MY PUBLIC PROFILE</Link></li>
      <li><Link to={createFuton} >CREATE FUTON</Link></li>
    </ul>

  </section>
  <section className="content-main">

<<<<<<< HEAD
=======
    <h1 className="content-header">
      Info
    </h1>
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e

    <div className="bookings-container">
    <article className="profile-section-main">
      <section className="profile-section-heading">
        <h2>About Me</h2>
      </section>
<<<<<<< HEAD
      <div>

      <h3 style={h3Style}>*click on profile picture to upload new picture*</h3>
      </div>
=======

>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
      <h3 style={h3Style}>First Name: {this.state.firstname}</h3>
      <i className="fa fa-pencil-square-o" style={divStyle} onClick={this.onClickEditFirstName}></i>
      <div>
       <Modal
         isOpen={this.state.editFirstName}
         onRequestClose={this.closeFirstName}
         style={customStyles} >

         <button onClick={this.nameFirstClose}>close</button>
         <div>Please input new first name.</div>
         <form>
           <input type="text" name="firstname" value={this.state.firstname} onChange={this.update("firstname")} />
           <button className="update-button" onClick={this.handleSubmitUser} >Edit</button>
         </form>
       </Modal>
       </div>


       <h3 style={h3Style}>Last Name: {this.state.lastname}</h3>
       <i className="fa fa-pencil-square-o" style={divStyle} onClick={this.onClickEditLastName}></i>
       <div>
        <Modal
          isOpen={this.state.editLastName}
          onRequestClose={this.closeLastName}
          style={customStyles} >

          <button onClick={this.nameLastClose}>close</button>
          <div>Please input new last name.</div>
          <form>
            <input type="text" name="lastname" value={this.state.lastname} onChange={this.update("lastname")} />
            <button className="update-button" onClick={this.handleSubmitUser} >Edit</button>
          </form>
        </Modal>
        </div>


      <h3 style={h3Style}>languages: {this.state.languages}</h3>
      <i className="fa fa-pencil-square-o" style={divStyle} onClick={this.onClickEditLanguages}></i>
      <div>
         <Modal
           isOpen={this.state.editLanguages}
           onRequestClose={this.closeLanguages}
           style={customStyles} >

           <button onClick={this.languagesClose}>close</button>
           <div>Please update your languages.</div>
           <form>
             <input type="text" name="languages" value={this.state.languages} onChange={this.update("languages")} />
             <button className="update-button" onClick={this.handleSubmitUser} >Edit</button>
           </form>
        </Modal>
        </div>



        <h3 style={h3Style}>Places I have visted: {this.state.places}</h3>
        <i className="fa fa-pencil-square-o" style={divStyle} onClick={this.onClickEditPlaceVisited}></i>
        <div>
           <Modal
             isOpen={this.state.editPlaceVisited}
             onRequestClose={this.closePlaces}
             style={customStyles} >

<<<<<<< HEAD
             <button onClick={this.placeClose}>close</button>
=======
             <button onClick={this.placesClose}>close</button>
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
             <div>Please update places you have visited.</div>
             <form>
               <input type="text" name="places" value={this.state.places} onChange={this.update("places")} />
               <button className="update-button" onClick={this.handleSubmitUser} >Edit</button>
             </form>
          </Modal>
          </div>



          <h3 style={h3Style}>My description: {this.state.description}</h3>
          <i className="fa fa-pencil-square-o" style={divStyle} onClick={this.onClickEditDescription}></i>
          <div>
             <Modal
               isOpen={this.state.editDescription}
               onRequestClose={this.closeDescription}
               style={customStyles} >

               <button onClick={this.descriptionClose}>close</button>
               <div>Please update your description.</div>
               <form>
                 <input type="text" name="description" value={this.state.description} onChange={this.update("description")} />
                 <button className="update-button" onClick={this.handleSubmitUser} >Edit</button>
               </form>
            </Modal>
            </div>
<<<<<<< HEAD
            <button className="done-button" onClick={this.handleDone} >Done</button>
=======

>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e






    </article>
    <article className="profile-section-main">
      <section className="profile-section-heading">
        <h2>My Futon </h2>
      </section>
        <Bookings bookings={this.props.bookings} deleteBooking={this.props.deleteBooking} />
    </article>



      </div>
  </section>
</main>




<script src="js/jquery.min.js"></script>
<script src="js/overlay.js"></script>

</div>
);

}


<<<<<<< HEAD
renderBookings(){
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

 let profilePic = ( this.props.currentUser.profile_img_url ? this.props.currentUser.profile_img_url : "http://res.cloudinary.com/dnuopy1ir/image/upload/v1473008869/facebook_blank_face3_ywa1j7.jpg");
 let divStyle ={fontSize: 16,float:'right' };
 let h3Style = {display: 'initial', fontSize: 14};
 let currentUser = this.props.currentUser;
 let listedFuton = `/futons/${currentUser.id}`
 let allFutons =  "/futons"
 let UserProfile = `/users/${currentUser.id}`
 let allUsers =  "/users"
 let editFuton = '/editfuton';
 let editInfo = '/editprofile'
 let createFuton = '/createfuton';
return (
  <div>
    <main className="content group">
      <section className="content-sidebar">
        <div className="profile-picture">
          <img src={profilePic}/>
        </div>
        <div className="profile-info">
        <h2> {this.state.firstname +" "+ this.state.lastname}</h2>
          <p>
            Welcome!
          </p>
        </div>

    <ul className="profile-nav">
      <li><Link to={'/profile'} onClick={this.handleOpenedit}>EDIT PROFILE INFORMATION</Link></li>
      <li><Link to={listedFuton} >MY FUTON</Link></li>
      <li><Link to={allFutons} >All FUTONS IN MY AREA</Link></li>
      <li><Link to={editFuton} >EDIT MY FUTON</Link></li>
      <li><Link to={UserProfile} >MY PUBLIC PROFILE</Link></li>
      <li><Link to={createFuton} >CREATE FUTON</Link></li>
    </ul>

  </section>
  <section className="content-main">


    <div className="bookings-container">
    <article className="profile-section-main">
      <section className="profile-section-heading">
        <h2> My Bookings </h2>
      </section>
        <Bookings bookings={this.props.bookings} deleteBooking={this.props.deleteBooking} />
    </article>


      </div>

      <div className="bookings-container">
      <article className="profile-section-main">
        <section className="profile-section-heading">
          <h2> Guests </h2>
        </section>
          <Guests guests={this.props.guests} deleteBooking={this.props.deleteBooking} />
      </article>


        </div>


  </section>
</main>




<script src="js/jquery.min.js"></script>
<script src="js/overlay.js"></script>

</div>
);

}

handleDone(){
    this.setState({ showEdit: false })
}
handleOpenedit(){
    this.setState({ showEdit: true })
}
=======
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e





  render() {
<<<<<<< HEAD
    if(this.props.currentUser && this.state.showEdit){
      return (<div className="profile-background">{this.renderProfileInfo()}</div>);
      // return (<div>{this.renderUserProfile()}</div>);
    } else if (this.props.currentUser && !this.state.showEdit) {
      return (<div className="profile-background">{this.renderBookings()}</div>);
    } {
=======
    debugger;
    if(this.props.currentUser){
      return (<div>{this.renderProfileInfo()}</div>);
      // return (<div>{this.renderUserProfile()}</div>);
    } else {
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
      return( <div> loading... </div>);
    }
  }
}
export default Profile;







{/* <article className="profile-section-main"> */}
{/* <section className="profile-section-heading">
<h2> My Guests </h2> */}
{/* </section>
  <Guests guests={this.props.guests} deleteBooking={this.props.deleteBooking} />
  </article> */}











  {/*

    <Bookings bookings={this.props.bookings} deleteBooking={this.props.deleteBooking} /> */}
