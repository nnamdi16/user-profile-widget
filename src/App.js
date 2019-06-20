import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import router from './router';

import './App.css';

class App extends Component {
	render() {
		return <Provider store={store}>{router}</Provider>;
	}
}

export default App;

// Provider is a top-level component that wraps our entire application, including
// the Router. We pass it a reference to the store so we can use react-redux's connect() method for Component Containers.
