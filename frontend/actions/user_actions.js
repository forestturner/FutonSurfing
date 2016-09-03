export const UserConstants = {
  RECEIVE_USERS: "RECEIVE_USERS",
  RECEIVE_USER: "RECEIVE_USER",
  REQUEST_USERS: "REQUEST_USERS",
  REQUEST_USER: "REQUEST_USER",
  CREATE_USER: "CREATE_USER",
  CREATE_REVIEW: "CREATE_REVIEW"
};

export const requestUsers = () => ({
  type: UserConstants.REQUEST_USERS
});

export const requestUser = id => ({
  type: UserConstants.REQUEST_USER,
  id
});

export const receiveUsers = users => ({
  type: UserConstants.RECEIVE_USERS,
  users
});

export const receiveUser = user => ({
  type: UserConstants.RECEIVE_USER,
  user
});
