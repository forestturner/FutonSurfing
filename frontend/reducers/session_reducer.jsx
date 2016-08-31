import {SessionConstants} from '../actions/session_actions';
import merge from 'lodash/merge';

const _freshUser = Object.freeze({
  current_user: null,
  errors: []
});


const SessionReducer = function(state ={current_user: null,errors: []}, action){
  switch(action.type){
    case SessionConstants.RECEIVE_CURRENT_USER:
      const newUser = action.currentUser;
      return merge({},_freshUser,{newUser});
    case SessionConstants.RECEIVE_ERRORS:
      const newErrors = action.errors;
      return merge({},_freshUser,{newErrors});
    case SessionConstants.LOG_OUT:
      return merge({},_freshUser);
    default:
      return state;
  }
};
export default SessionReducer;
