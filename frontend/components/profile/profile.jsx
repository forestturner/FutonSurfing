import React from 'react';
import {Link, hashHistory} from 'react-router';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
     let currentUser = this.props.currentUser;
     let listedFuton = `/futons/${currentUser.id}`
     let allFutons =  "/futons"
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
          <li><Link to={listedFuton} >YOUR FUTON</Link></li>
          <li><Link to={allFutons} >All FUTONS IN YOUR AREA</Link></li>
          <li><Link to="/" >SPLASH</Link></li>
        </ul>

      </section>
      <section className="content-main">

        <h1 className="content-header">
          Hit the world's best Futons with FutonSurfers...
        </h1>

      </section>
    </main>



    <script src="js/jquery.min.js"></script>
    <script src="js/overlay.js"></script>

  </div>
    );
  }
}
export default Profile;
