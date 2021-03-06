import { connect } from 'react-redux';
import { logOut, logIn, signUp } from '../../actions/session_actions';
import NavBar from './navbar';
import {updateCoords} from '../../actions/coords_actions.js';
// import {logIn,signUp} from '../../actions/session_actions.js';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  coords: state.coords,
  showModal: false,
  modal: ""
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
  signUp: (user) => dispatch(signUp(user)),
  logIn: (user) => dispatch(logIn(user)),
  updateCoords: (search) => dispatch(updateCoords(search))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);


// /home/forest/Development/FutonSurfing/frontend/actions/session_actions.js
// /home/forest/Development/FutonSurfing/frontend/actions/session_actions.js
// /home/forest/Development/FutonSurfing/frontend/components/navbar/navbar_container.js
