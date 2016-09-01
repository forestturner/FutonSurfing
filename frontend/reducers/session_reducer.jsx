import {SessionConstants} from '../actions/session_actions.js';
import merge from 'lodash/merge';

const _freshUser = Object.freeze({
  current_user: null,
  errors: []
});


const SessionReducer = function(state ={current_user: null,errors: []}, action){

  switch(action.type){

    case SessionConstants.RECEIVE_CURRENT_USER:
      debugger;
      const newUser = action.currentUser;
      return merge({},_freshUser,{user: action.currentUser});
    case SessionConstants.RECEIVE_ERRORS:
      debugger;
      const newErrors = action.errors;
      return merge({},_freshUser,{newErrors});
    case SessionConstants.LOG_OUT:
    debugger;
      return merge({},_freshUser);
    default:
      return state;
  }
};
export default SessionReducer;
