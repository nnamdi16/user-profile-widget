import axios from 'axios';
import store from '../store';
import { deleteWidgetSuccess, getWidgetsSuccess } from '../actions/widget-action';

/**
 * Get widgets
 */

export const getWidgets = () => {
	return axios.get(`http://localhost:5000/widgets`).then(response => {
		store.dispatch(getWidgetsSuccess(response.data));
		return response;
	});
};

/**
 * Delete a widget
 */

export const searchWidgets = (query = '') => {
	return axios.get(`http://localhost:5000/widgets?q=${query}`).then(response => {
		store.dispatch(getWidgetsSuccess(response.data));
		return response;
	});
};

/***
 * Delete a widget
 */

export const deleteWidget = widgetId => {
	return axios.delete(`http://localhost:5000/widgets/${widgetId}`).then(response => {
		store.dispatch(deleteWidgetSuccess(widgetId));
		return response;
	});
};
