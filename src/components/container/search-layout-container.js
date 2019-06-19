import React from 'react';
import { connect } from 'react-redux';
import SearchLayout from '../Layout/search-layout';

const mapStateToProps = store => {
	let searchType = store.searchLayoutState.searchType;
	let totalResults = 0;
	if (searchType === 'users') {
		totalResults = store.userState.user.length;
	} else if (searchType === 'widgets') {
		totalResults = store.widgetState.widgets.length;
	}
	return {
		searchType,
		title: store.searchLayoutState.title,
		totalResults
	};
};

export default connect(mapStateToProps)(SearchLayout);
