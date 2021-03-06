// import { receiveCurrentUser, receiveErrors } from '/home/forest/Development/FutonSurfing/frontend/actions/session_actions.js';
//
// $.ajax({
//   method: 'POST',
//   url: 'api/users',
//   data: {user: {username: "forest",profile_img_url: "test",firstname: "forest",lastname:"turner",email:"mrforestranger@gmail.com",password:"password1"}}
// });


import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

export const editCurrentUser = function(user,success,error) {
	$.ajax({
		method: 'PATCH',
		url: `/api/user/${user.id}`,
		data: user,
		success,
		error
	})
}



export const login = function(user, success, error) {
	$.ajax({
		method: 'POST',
		url: '/api/session',
		data: user,
		success,
		error
	});
};

export const signup = function(user, success, error) {
	$.ajax({
		method: 'POST',
		url: '/api/users',
		data: user,
		success,
		error
	});
};

export const logout = function(success,error){
	$.ajax({
		method: 'delete',
		url: '/api/session',
		success,
		error
	});
};
