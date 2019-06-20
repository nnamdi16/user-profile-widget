import React, { Component } from 'react';
import { connect } from 'react-redux';
import WidgetList from '../views/widget-list';
import * as widgetApi from '../../api/widget-api';
import store from '../../store';
import { loadSearchLayout } from '../../actions/search-layout-actions';

class WidgetListContainer extends Component {
	componentDidMount() {
		widgetApi.getWidgets();
		store.dispatch(loadSearchLayout('widgets', 'Widget Results'));
	}

	render() {
		return <WidgetList widget={this.props.widgets} deleteWidget={widgetApi.deleteWidget} />;
	}
}

const mapStateToProps = store => {
	return {
		widgets: store.widgetState.widgets
	};
};

export default connect(mapStateToProps)(WidgetListContainer);
