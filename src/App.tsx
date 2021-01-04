import React from 'react';

import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";
import { Container, Dropdown, Menu } from 'semantic-ui-react';
import CustomMenu from './components/CustomMenu';
import Dashboard from './views/Dashboard';
import Books from './views/library/Books';
import Movies from './views/library/Movies';

function App() {
	return (
		<Router>
			<CustomMenu />
			<Container>
				<Switch>
					<Route exact path="/" component={Dashboard} />

					<Route exact path="/library/books" component={Books} />
					<Route exact path="/library/movies" component={Movies} />
				</Switch>
			</Container>
		</Router>
	);
}

export default App;
