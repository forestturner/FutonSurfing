import React from 'react';
import {Link, hashHistory} from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl,Button} from 'react-bootstrap';
import Bookings from '../bookings/bookings';
import Guests from '../bookings/guests.jsx'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   currentUser: {
    //     id: undefined,
    //
    //   }
    // }
     this.acceptGuests = this.acceptGuests.bind(this);
     this.getBookings = this.getBookings.bind(this);
      this.renderUserProfile = this.renderUserProfile.bind(this);
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
}


renderUserProfile() {
     let currentUser = this.props.currentUser;
     let listedFuton = `/futons/${currentUser.id}`
     let allFutons =  "/futons"
     let UserProfile = `/users/${currentUser.id}`
     let allUsers =  "/users"
     let editFuton = '/editfuton';
     let editInfo = '/editprofile'
    return (
      <div>
        <main className="content group">
          <section className="content-sidebar">
            <a href="#" className="profile-picture">
              <img src={currentUser.profile_img_url} alt=""></img>
            </a>
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
          <li><Link to={allUsers} >All USERS IN MY AREA</Link></li>
          <li><Link to="/" >SPLASH</Link></li>
        </ul>

      </section>
      <section className="content-main">

        <h1 className="content-header">
          Hit the world's best Futons with FutonSurfers...
        </h1>
        <div className="content-show">
          <a href="#" className="profile-show-image">
            <img src="http://res.cloudinary.com/dnuopy1ir/image/upload/v1473115804/breeze_e_vpyljn.jpg" alt="">

            </img>

          </a>
          <a href="#" className="profile-show-image">

            <img src="http://res.cloudinary.com/dnuopy1ir/image/upload/v1473115487/Futon_oip8zq.jpg" alt="">

            </img>

          </a>
          <a href="#" className="profile-show-image">
            <img src="http://res.cloudinary.com/dnuopy1ir/image/upload/v1473115485/e385508a-bde9-4e53-95d0-cf96511afa58_1.f5142c4984c8cb0da879ab1f8a4930b3_miosmo.jpg" alt="">

            </img>
          </a>
            <Nav pullRight>
                <Navbar.Form >
                  <FormGroup pullRight>
                    <FormControl type="text" placeholder="City" />
                    </FormGroup>
                    {' '}
                    <Button type="submit">Search</Button>
                </Navbar.Form>
              </Nav>


        </div>

        <div className="bookings-container">
        <article className="profile-section-main">
          <section className="profile-section-heading">
            <h2>My Bookings</h2>
          </section>
            <Bookings bookings={this.props.bookings} deleteBooking={this.props.deleteBooking} />
        </article>
        <article className="profile-section-main">
          <section className="profile-section-heading">
          <h2> My Guests </h2>
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

  render() {
    if(this.props.currentUser){
      return (<div>{this.renderUserProfile()}</div>);
    } else {
      return( <div> loading... </div>);
    }
  }
}
export default Profile;
