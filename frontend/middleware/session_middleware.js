import { receiveCurrentUser,
         receiveErrors,
         SessionConstants
       } from '../actions/session_actions';

import { login, signup, logout } from '../util/session_util';

export default ({getState, dispatch}) => next => action => {
  const loginSuccess = data => dispatch(receiveCurrentUser(data));
  // const successCallback = data => dispatch(signUp(data))
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
      debugger;
      signup(action.user, loginSuccess, errorsCallback);
      return next(action);
    default:
      return next(action);
  }
};
