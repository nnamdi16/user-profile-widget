import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
	users: [],
	userProfile: {
		repos: []
	}
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_USERS_SUCCESS:
			return { ...state, users: action.users };

		case types.DELETE_USER_SUCCESS:
			//Use lodash to create a new user array without the user we want to be deleted.
			const newUsers = _.filter(state.users, user => user.id !== action.userId);
			return { ...state, users: newUsers };

		case types.USER_PROFILE_SUCCESS:
			return { ...state, userProfile: action.userProfile };

		default:
			return state;
	}
};

export default userReducer;
