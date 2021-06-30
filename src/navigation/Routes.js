import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import HomePage from '../components/HomePage';

function PrivateRoute({ getRefreshToken }) {
	return (
		<Route
			render={({ location }) =>
            getRefreshToken ? (
					null
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location }
						}}
					/>
				)}
        
		/>
	);
}

function PublicRoute({getRefreshToken }) {
	return (
		<Route
			render={({ location }) =>
				!getRefreshToken ? (
					null
				) : (
					<Redirect
						to={{
							pathname: '/main',
							state: { from: location }
						}}
					/>
				)}
		/>
	);
}

export default function Routes({ getRefreshToken }) {
	return (
		<BrowserRouter>
			<Switch>
				<PublicRoute exact path="/" getRefreshToken={getRefreshToken}>
					<Register />
				</PublicRoute>

				<PublicRoute exact path="/login" getRefreshToken={getRefreshToken}>
					<Login />
				</PublicRoute>

				<PrivateRoute exact path="/main" getRefreshToken={getRefreshToken}>
					<HomePage />
				</PrivateRoute>
			</Switch>
		</BrowserRouter>
	);
}
