import { receiveCurrentUser, receiveErrors, SessionConstants} from '../actions/session_actions';
import { hashHistory } from 'react-router';
import { login, signup, logout, editCurrentUser } from '../util/session_util';
import { requestBookings } from '../actions/booking_actions';
import {createFuton } from '../actions/futon_actions';

export default ({getState, dispatch}) => next => action => {
  const loginSuccess = data => {

    dispatch(receiveCurrentUser(data));
    // dispatch(requestBookings());
    hashHistory.push("/profile");
  }
  const editSuccess = data => {
    dispatch(receiveCurrentUser(data));
    hashHistory.push("/profile");
  }
  // const logOutSuccess = () => {
  //   // dispatch(receiveCurrentUser(data));
  //   hashHistory.push("/");
  // }
  // const successCallback = data => dispatch(signUp(data))
  const errorsCallback = xhr => {
    const errors  = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type) {

    case SessionConstants.LOG_IN:

      login(action.user,loginSuccess,errorsCallback);
      return next(action);
      break;
    case SessionConstants.LOG_OUT:
      let  success = () => {
        next(action);
        hashHistory.push("/");
      }
      logout(success,errorsCallback);
      break;
    case SessionConstants.SIGN_UP:

      signup(action.user, loginSuccess, errorsCallback);
      createFuton({address: "unknown", lat: 123, lng: 38, description: "unknown"});
      return next(action);
    case SessionConstants.EDIT_USER:

      editCurrentUser(action.user, editSuccess, errorsCallback);
      return next(action);
    default:
      return next(action);
  }
};
