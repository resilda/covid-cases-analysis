import React, { useState } from 'react';
import initializeFirebase from '../config/Firebase';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Register from './Register';
import Login from './Login';
import MainPage from '../components/HomePage';

export default function AuthService() {
	const register = useSelector((state) => state.auth.register);
	const login = useSelector((state) => state.auth.login);
	const error = useSelector((state) => state.auth.error);
	const token = useSelector((state) => state.auth.token);
	const user = useSelector((state) => state.auth.user);

	const checkUser = user ? JSON.parse(user) : user; //user's data must be an object

	const [ username, setUsername ] = useState(register.username);
	const [ email, setEmail ] = useState(login.email);
	const [ password, setPassword ] = useState(login.password);
	const [ errorMessage, setErrorMessage ] = useState(error);

	const [ refreshToken, setRefreshToken ] = useState(token);
	const [ userData, setUserData ] = useState(checkUser);

	console.log('refreshToken', refreshToken);
	console.log('userData', userData);

	const history = useHistory();

	function loginData(userToken, data) {
		setRefreshToken(token);
		setUserData(checkUser);
		localStorage.setItem(token, userToken);
		localStorage.setItem(user, JSON.stringify(data));
	}

	function logout() {
		setRefreshToken(null);
		setUserData(null);
		localStorage.removeItem(token);
		localStorage.removeItem(user);
	}

	function submitLoginForm(event) {
		event.preventDefault();
		initializeFirebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(({ user }) => {
				loginData(user.refreshToken, user);
				history.push('/main');
			})
			.catch((error) => setErrorMessage(error));
	}

	function submitRegisterForm(event) {
		event.preventDefault();
		initializeFirebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				const user = initializeFirebase.auth().currentUser;
				user
					.updateProfile({ displayName: username })
					.then(() => {
						history.push('/main');
					})
					.catch((error) => {
						setErrorMessage(error);
					});
			})
			.catch((error) => setErrorMessage(error));
	}

	return (
		<div>
			<Login
				email={email}
				setEmail={setEmail}
				password={password}
				setPassword={setPassword}
				errorMessage={errorMessage}
				setErrorMessage={setErrorMessage}
				submitLoginForm={submitLoginForm}
			/>
			<Register
				username={username}
				setUsername={setUsername}
				email={email}
				setEmail={setEmail}
				password={password}
				setPassword={setPassword}
				errorMessage={errorMessage}
				setErrorMessage={setErrorMessage}
				submitRegisterForm={submitRegisterForm}
			/>
			<MainPage logout={logout} />
		</div>
	);
}
