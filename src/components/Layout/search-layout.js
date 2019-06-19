import React, { Fragment } from 'react';
import SearchFormContainer from '../container/search-form-container';

export default function(props) {
	return (
		<Fragment className="search">
			<header className="search-header">
				{props.title}
				<SearchFormContainer searchType={props.searchType} />
			</header>
			<div className="search-results">{props.children}</div>
			<footer className="search-footer">{props.totalResult} Results</footer>
		</Fragment>
	);
}
