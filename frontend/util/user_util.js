export const fetchUsers = ( success) => {
  $.ajax({
    method: 'GET',
    url: 'api/users',
    success
  });
};

export const fetchUser = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`,
    success
  });
};

export const updateUser = (id, user, success) => {
  debugger;
  $.ajax({
    url: `api/users/${id}`,
    method: "PATCH",
    data: {user:user},
    success,
    error: (error)=> (console.log(error) )
  });
};
