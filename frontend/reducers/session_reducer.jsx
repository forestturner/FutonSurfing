import {SessionConstants} from '../actions/session_actions.js';
import merge from 'lodash/merge';

const _freshUser = Object.freeze({
  current_user: null,
  errors: []
});


const SessionReducer = function(state =_freshUser, action){

  switch(action.type){

    case SessionConstants.RECEIVE_CURRENT_USER:
      const newUser = action.currentUser;
      return merge({},state,{current_user: newUser});
    case SessionConstants.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({},state,{errors});
    case SessionConstants.LOG_OUT:
      return merge({},_freshUser);
    default:
      return state;
  }
};
export default SessionReducer;
