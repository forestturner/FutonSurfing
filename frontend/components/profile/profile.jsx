import React from 'react';
import {Link, hashHistory} from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl,Button} from 'react-bootstrap';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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

      </section>
    </main>




    <script src="js/jquery.min.js"></script>
    <script src="js/overlay.js"></script>

  </div>
    );
  }
}
export default Profile;
