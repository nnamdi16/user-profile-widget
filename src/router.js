import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
//Layouts
import MainLayout from './components/Layout/main-layout';
import SearchLayoutContainer from './components/Layout/search-layout';

//Pages
import Home from './components/Home';
import UserListContainer from './components/container/user-list-container';
import UserProfileContainer from './components/container/user-profile-container';
import WidgetListContainer from './components/container/widget-list-container';
export default () => {
	return (
		<Router history={history}>
			<Route component={MainLayout}>
				<Route path="/" component={Home} />
				<Route path="user">
					<Route component={SearchLayoutContainer}>
						<Route component={UserListContainer} />
					</Route>
					<Route path=":userId" component={UserProfileContainer} />
				</Route>

				<Route path="widget">
					<Route component={SearchLayoutContainer}>
						<Route component={WidgetListContainer} />
					</Route>
				</Route>
			</Route>
		</Router>
	);
};
