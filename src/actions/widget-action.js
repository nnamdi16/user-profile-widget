import * as types from '../actions/action-types';

export const getWidgetsSuccess = widgets => {
	return {
		type: types.GET_WIDGETS_SUCCESS,
		widgets
	};
};

export const deleteWidgetSuccess = widgetId => {
	return {
		type: types.DELETE_WIDGET_SUCCESS,
		widgetId
	};
};
