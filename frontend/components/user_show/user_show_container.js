import {connect} from 'react-redux';
import UserShow from './user_show';

const mapStateToProps = (state,ownProps) => {
  const userId = parseInt(ownProps.params.userId);
  const user = state.users[userId] || {};
  return {
    userId,
    user
  };
};
export default connect (
  mapStateToProps
)(UserShow);
