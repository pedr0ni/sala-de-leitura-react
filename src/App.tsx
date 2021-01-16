import React from 'react';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	useLocation,
  } from "react-router-dom";
import { Container } from 'semantic-ui-react';
import CustomMenu from './components/CustomMenu';
import Login from './views/auth/Login';
import { PrivateRoute } from './views/auth/PrivateRoute';
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
					<PrivateRoute exact path="/" component={Dashboard} />

					<PrivateRoute exact path="/library" component={Library} />

					<PrivateRoute exact path="/students" component={Students} />

					<PrivateRoute exact path="/profile" component={Profile} />

					<Route exact path="/auth/login" component={Login} />
				</Switch>
			</Container>
		</Router>
	);
}

export default App;
