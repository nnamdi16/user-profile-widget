import * as types from '../actions/action-types';

export const getUsersSuccess = users => {
	return {
		type: types.GET_USERS_SUCCESS
	};
};

export const deleteUSerSuccess = userId => {
	return {
		type: types.DELETE_USER_SUCCESS,
		userId
	};
};

export const userProfileSuccess = userProfile => {
	return {
		type: types.USER_PROFILE_SUCCESS,
		userProfile
	};
};
