import {connect} from 'react-redux';
import UsersShow from './users_show';

const mapStateToProps = (state,ownProps) => {
  let users = state.users;
 return {
   users
 }
}
export default connect(
  mapStateToProps
)(UsersShow);
