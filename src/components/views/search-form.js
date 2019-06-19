import React, { Component, Fragment } from 'react';

export default class SearchForm extends Component {
	getQuery() {
		console.log(this.refs.search);
		return this.refs.search.value;
	}
	render() {
		return (
			<Fragment>
				<form onSubmit={this.props.search} className="search">
					<input type="text" ref="search" placeholder="Search" />
					<button>Search</button>
				</form>
			</Fragment>
		);
	}
}
