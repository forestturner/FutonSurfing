export const SessionConstants = {
  LOG_IN: "LOG_IN",
  LOG_OUT: "LOG_OUT",
  SIGN_UP: "SIGN_UP",
  RECEIVE_CURRENT_USER: "RECEIVE_CURRENT_USER",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",

}

export const logIn = (user) => ({
  type: SessionConstants.LOG_IN,
  user: user
});
export const logOut = () => ({
  type: SessionConstants.LOG_OUT
});
export const signUp = (user) => ({
  type: SessionConstants.SIGN_UP,
  user
});
export const receiveCurrentUser = (currentUser) => ({
  type: SessionConstants.RECEIVE_CURRENT_USER,
  currentUser
});
export const receiveErrors = (errors) => ({
  type: SessionConstants.RECEIVE_ERRORS,
  errors
});
