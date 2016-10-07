import { receiveCurrentUser, receiveErrors, SessionConstants} from '../actions/session_actions';
import { hashHistory } from 'react-router';
import { login, signup, logout, editCurrentUser } from '../util/session_util';
import { requestBookings } from '../actions/booking_actions';
<<<<<<< HEAD
import {createFuton } from '../actions/futon_actions';

export default ({getState, dispatch}) => next => action => {
  const loginSuccess = data => {

=======


export default ({getState, dispatch}) => next => action => {
  const loginSuccess = data => {
    debugger;
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
    dispatch(receiveCurrentUser(data));
    dispatch(requestBookings());
    hashHistory.push("/profile");
  }
  const editSuccess = data => {
    dispatch(receiveCurrentUser(data));
    hashHistory.push("/profile");
  }
  // const successCallback = data => dispatch(signUp(data))
  const errorsCallback = xhr => {
    const errors  = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type) {

    case SessionConstants.LOG_IN:
<<<<<<< HEAD

=======
    debugger;
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
      login(action.user,loginSuccess,errorsCallback);
      return next(action);
      break;
    case SessionConstants.LOG_OUT:
      logout(() => next(action));
      break;
    case SessionConstants.SIGN_UP:

      signup(action.user, loginSuccess, errorsCallback);
<<<<<<< HEAD
      createFuton({address: "unknown", lat: 123, lng: 38, description: "unknown"});
=======
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
      return next(action);
    case SessionConstants.EDIT_USER:

      editCurrentUser(action.user, editSuccess, errorsCallback);
      return next(action);
    default:
      return next(action);
  }
};
