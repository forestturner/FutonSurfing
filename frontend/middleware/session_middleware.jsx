import { Login, logout, signup } from '../util/session_util';
import { logIN, logOut, signUp, SessionConstants } from '../actions/session_actions';

const SessionsMiddleware = ({getState,dispatch}) => next => action => {
  const loginSuccess = data => dispatch(receiveBench(data));
  const errorsCallback = xhr => {
    const errors  = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  const result = next(action);
  switch(action.type) {
    case SessionConstants.LOG_IN:
      login(action.user,loginSuccess,errorsCallback);
      return next(action);
    case SessionConstants.LOG_OUT:
      logout(() => next(action));
      break;
    case SessionConstants.SIGN_UP:
      signUp(action.user, successCallback, errorsCallback);
      return next(action);
    default:
      return next(ation);
  }
};
