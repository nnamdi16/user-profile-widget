import { combineReducer } from 'redux';

//Reducers
import userReducer from './user-reducer';
import widgetReducer from './widget-reducer';
import searchLayoutReducer from './search-layout-reducer';

//Combine Reducers
const reducers = combineReducer({
	userState: userReducer,
	widgetState: widgetReducer,
	searchLayout: searchLayoutReducer
});

export default reducers;
