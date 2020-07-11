import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NoMatch from './pages/NoMatch';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/' component={Login} />
					<Route exact path='/Dashboard' component={Dashboard} />
					<Route component={NoMatch} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
