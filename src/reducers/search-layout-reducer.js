import * as types from '../actions/action-types';

const initialState = {
	searchType: '',
	title: ''
};

const searchLayoutReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.LOAD_SEARCH_LAYOUT:
			return {
				...state,
				searchType: action.searchType,
				title: action.title
			};

		default:
			return state;
	}
};

export default searchLayoutReducer;
