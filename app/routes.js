import React from 'react';
import { Route, IndexRoute } from 'react-router';
// import App from './components/App';
import FilterableTable from './containers/FilterableTable';
import About from './components/About';
import Mainpage from './components/pages/Mainpage';

export default (
	<Route path="/" component={Mainpage}>
	/*
		<IndexRoute component={FilterableTable} />
		<Route path="/about" component={About} />
		*/
	</Route>
);
