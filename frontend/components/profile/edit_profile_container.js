
import { connect } from 'react-redux';
import EditProfile from './edit_profile';
import { updateUser } from '../../actions/user_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors
});


const mapDispatchToProps = (dispatch) => ({
  updateUser: (id, user) => dispatch(updateUser(id, user))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
