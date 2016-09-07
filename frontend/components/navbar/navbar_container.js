import { connect } from 'react-redux';
import { logOut, logIn } from '../../actions/session_actions';
import NavBar from './navbar';
import {updateSearch} from '../../actions/search_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
  logIn: user => dispatch(logIn(user)),
  updateSearch: (search) => dispatch(updateSearch(search))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);


// /home/forest/Development/FutonSurfing/frontend/actions/session_actions.js
// /home/forest/Development/FutonSurfing/frontend/actions/session_actions.js
// /home/forest/Development/FutonSurfing/frontend/components/navbar/navbar_container.js
