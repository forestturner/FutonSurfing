import React from 'react';
import {Link, hashHistory} from 'react-router';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
     let currentUser = this.props.currentUser;
    return (
      <body>
        <main className="content group">
          <section className="content-sidebar">
            <a href="#" className="profile-picture">
              <img src="http://res.cloudinary.com/dnuopy1ir/image/upload/v1472775467/960_nmpq7n.jpg" alt=""></img>
            </a>
            <div className="profile-info">
            <h2> {currentUser.firstname +" "+ currentUser.lastname}</h2>
              <p>
                Welcome!
              </p>
            </div>

        <ul className="profile-nav">
          <li><a href="#">Futons</a></li>
          <li><a href="#">Profile</a></li>
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

  </body>
    );
  }
}
export default Profile;
