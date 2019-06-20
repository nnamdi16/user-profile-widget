import { combineReducers } from 'redux';

//Reducers
import userReducer from './user-reducer';
import widgetReducer from './widget-reducer';
import searchLayoutReducer from './search-layout-reducer';

//Combine Reducers
const reducers = combineReducers({
	userState: userReducer,
	widgetState: widgetReducer,
	searchLayout: searchLayoutReducer
});

export default reducers;
