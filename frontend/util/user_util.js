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
