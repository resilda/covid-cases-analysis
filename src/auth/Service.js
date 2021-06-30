import React from 'react';
import { useSelector } from 'react-redux';
import HomePage from '../components/HomePage';
import Routes from '../navigation/Routes';
import PublicRoute from '../navigation/Routes';
import PrivateRoute from '../navigation/Routes';

export default function Service() {
	const token = useSelector((state) => state.auth.token);
	const user = useSelector((state) => state.auth.user);

	const getRefreshToken = localStorage.getItem(token);
	const getUser = localStorage.getItem(user);

	return (
		<div>
			<HomePage getRefreshToken={getRefreshToken} getUser={getUser} />
			<Routes getRefreshToken={getRefreshToken} />
			<PublicRoute getRefreshToken={getRefreshToken}/>
			<PrivateRoute getRefreshToken={getRefreshToken} />
		</div>
	);
}
