import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default props => {
	return (
		<Fragment className="app">
			<header className="primary-header" />
			<aside className="primary-aside">
				<ul>
					<li>
						<Link to="/" activeClassName="active">
							Home
						</Link>
					</li>
					<li>
						<Link to="/users" activeClassName="active">
							Users
						</Link>
					</li>
					<li>
						<Link to="/widgets" activeClassName="active">
							Widgets
						</Link>
					</li>
				</ul>
			</aside>
			<main>{props.children}</main>
		</Fragment>
	);
};
