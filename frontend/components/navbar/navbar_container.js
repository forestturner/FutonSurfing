import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);


// /home/forest/Development/FutonSurfing/frontend/actions/session_actions.js
// /home/forest/Development/FutonSurfing/frontend/actions/session_actions.js
// /home/forest/Development/FutonSurfing/frontend/components/navbar/navbar_container.js
