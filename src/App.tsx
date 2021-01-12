import React from 'react';

import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";
import { Container } from 'semantic-ui-react';
import CustomMenu from './components/CustomMenu';
import Dashboard from './views/Dashboard';
import Library from './views/Library';
import Profile from './views/Profile';
import Students from './views/Students';

function App() {
	return (
		<Router>
			<CustomMenu />
			<Container>
				<Switch>
					<Route exact path="/" component={Dashboard} />

					<Route exact path="/library" component={Library} />

					<Route exact path="/students" component={Students} />

					<Route exact path="/profile" component={Profile} />
				</Switch>
			</Container>
		</Router>
	);
}

export default App;
