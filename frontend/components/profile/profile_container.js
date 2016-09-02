import { connect } from 'react-redux';
import Profile from './profile';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps
)(Profile);
