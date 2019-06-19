import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
	widgets: []
};

const widgetReducer = (state = initialState, action) => {
	switch (action.types) {
		case types.GET_WIDGETS_SUCCESS:
			return { ...state, widgets: action.widgets };

		case types.DELETE_WIDGET_SUCCESS:
			let newWidget = _.filter(state.widgets, widget => widget.id !== action.widgetId);
			return { ...state, newWidget };
		default:
			return state;
	}
};

export default widgetReducer;
