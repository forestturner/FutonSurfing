
//
// $.ajax({
//   method: 'POST',
//   url: 'api/users',
//   data: {username: "forest",firstname: "forest",lastname:"turner",email:"mrforestranger@gmail.com",password:"password1"}
// });



export const logout = (success) => {
  $.ajax({
    method: 'delete',
    url: `api/session`,
    success,
    error: () => { console.log("logout error")}
  });
};

export const signup = (user, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: user,
    success,
    error
  });
};
export const login = (user, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: user,
    success,
    error
  });
};
