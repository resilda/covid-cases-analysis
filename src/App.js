import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './auth/Register';
import Login from './auth/Login';
import HomePage from './components/HomePage';
import './App.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Register} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/main" component={HomePage} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
