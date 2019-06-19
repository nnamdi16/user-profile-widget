import axios from 'axios';
import store from '../store';
import * as userAction from '../actions/user-action';

/**
 * Get all users
 */

export const getUsers = () => {
	return axios.get('http://localhost:5000/users').then(response => {
		store.dispatch(userAction.getUsersSuccess(response.data));
		return response;
	});
};

/**
 * Search Users
 */

export const searchUsers = (query = '') => {
	return axios.get(`http://localhost:5000/users?q=${query}`).then(response => {
		store.dispatch(userAction.getUsersSuccess(response.data));
		return response;
	});
};

/**
 * 
 * @param {*} Delete a user 
 * 
 */
export const deleteUser = userId => {
	return axios.delete(`http://localhost:5000/users/${userId}`).then(response => {
		store.dispatch(userAction.deleteUSerSuccess(userId));
	});
};

/**
 * Get Profile of a user
 */

export const getProfile = userId => {
	//Create an empty profile object.
	let profile = {};

	//Get the user data from our local database.
	return axios.get(`http://localhost:5000/users/${userId}`).then(response => {
		let user = response.data;
		profile.name = user.name;
		profile.twitter = user.twitter;
		profile.worksOn = user.worksOn;

		//Send two Xhr request

		return Promise.all([
			axios.get(`https://api.github.com/users/${user.github}`),

			axios.get(`https://api.github.com/users/${user.github}/repos`)
		]).then(results => {
			let githubProfile = results[0].data;
			let githubRepos = results[1].data;

			profile.imageUrl = githubProfile.avatar_url;
			profile.repos = githubRepos;

			store.dispatch(userAction.userProfileSuccess(profile));
			return;
		});
	});
};
