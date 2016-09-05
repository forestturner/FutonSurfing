import {fetchUsers,fetchUser,updateUser} from '../util/user_util';
import {receiveUsers,receiveUser,UserConstants} from '../actions/user_actions';

export default ({getState,dispatch}) => next => action => {
  const usersSuccess = data => dispatch(receiveUsers(data));
  const userSuccess = data => dispatch(receiveUser(data));
  const result = next(action);
  switch(action.type){
    case UserConstants.REQUEST_USERS:
      fetchUsers(usersSuccess);
      break;
    case UserConstants.REQUEST_USER:
      fetchUser(action.id,userSuccess);
      break;
    case UserConstants.UPDATE_USER:
      updateUser(action.id,action.user,userSuccess)
      break;
    default:
      break;
  }
  return result;
}
