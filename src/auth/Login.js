import React, { useState } from 'react';
import initializeFirebase from '../config/Firebase';
import { useHistory, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	section: {
		height: '550px',
		width: '620px',
		backgroundColor: 'white',
		boxShadow: '2px 2px 2px 0.5px #F9ECCF'
	},
	title: {
		color: '#4A364B',
		marginTop: '43px',
		fontSize: '28px',
		fontWeight: 'bold'
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	input: {
		width: '230px',
		height: '53px',
		fontSize: '16px',
		margin: '15px'
	},
	error: {
		color: 'red'
	},
	firstButton: {
		border: 0,
		background: 'linear-gradient(45deg, #5C888B 20%, #71A8A1 80%)',
		borderRadius: 3,
		boxShadow: '0 2px 3px 2px #8ABAAC',
		color: 'white',
		width: '230px',
		height: '40px',
		fontSize: '14px',
		marginTop: '10px',
		marginBottom: '40px'
	},
	secondButton: {
		border: 0,
		background: 'linear-gradient(45deg, #5C888B 20%, #71A8A1 80%)',
		borderRadius: 3,
		boxShadow: '0 2px 3px 2px #8ABAAC',
		color: 'white',
		width: '120px',
		height: '31px',
		fontSize: '14px',
		margin: '20px'
	},
	link: {
		color: 'white',
		textDecoration: 'none'
	}
});

export default function Login(props) {
	const { email, setEmail, password, setPassword, errorMessage, setErrorMessage, submitLoginForm } = props;

	// const login = useSelector((state) => state.auth.login);
	// const error = useSelector((state) => state.auth.error);
	// const token = useSelector((state) => state.auth.token);
	// const user = useSelector((state) => state.auth.user);

	// const checkUser = user ? JSON.parse(user) : user; //user's data must be an object

	// const [ email, setEmail ] = useState(login.email);
	// const [ password, setPassword ] = useState(login.password);
	const [ showPassword, setShowPassword ] = useState(false);
	// const [ setErrorMessage ] = useState(error);

	// const [ refreshToken, setRefreshToken ] = useState(token);
	// const [ userData, setUserData ] = useState(checkUser);

	// console.log('refreshToken', refreshToken);
	// console.log('userData', userData);

	// const history = useHistory();

	// function loginData(userToken, data) {
	// 	setRefreshToken(token);
	// 	setUserData(checkUser);
	// 	localStorage.setItem(token, userToken);
	// 	localStorage.setItem(user, JSON.stringify(data));
	// }

	// function handleSubmit(event) {
	// 	event.preventDefault();
	// 	initializeFirebase
	// 		.auth()
	// 		.signInWithEmailAndPassword(email, password)
	// 		.then(({ user }) => {
	// 			loginData(user.refreshToken, user);
	// 			history.push('/main');
	// 		})
	// 		.catch((error) => setErrorMessage(error));
	// }

	function handleShowPassword() {
		setShowPassword(!showPassword);
	}

	function handleMouseDownPassword(event) {
		event.preventDefault();
	}

	const classes = useStyles();

	return (
		<div className="login-wrapper">
			<header className="header">Zandaka</header>
			<section className={classes.section}>
				<h1 className={classes.title}>Login</h1>
				{errorMessage && <p className={classes.error}>{errorMessage.message}</p>}
				<form onSubmit={submitLoginForm} className={classes.form}>
					<FilledInput
						id="email"
						// label="Email"
						// defaultValue="Email"
						value={email}
						placeholder="Email"
						type="text"
						required
						onChange={(event) => setEmail(event.target.value)}
						className={classes.input}
					/>
					<FilledInput
						id="password"
						// label="Password"
						// defaultValue="Password"
						value={password}
						placeholder="Password"
						required
						onChange={(event) => setPassword(event.target.value)}
						type={showPassword ? 'text' : 'password'}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleShowPassword}
									onMouseDown={handleMouseDownPassword}
								>
									{showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						}
						className={classes.input}
					/>
					<Button type="submit" className={classes.firstButton}>
						Login
					</Button>
				</form>
				<div>
					Don't have an account? {''}
					<Button className={classes.secondButton}>
						<Link to="/" className={classes.link}>
							Register
						</Link>
					</Button>
				</div>
			</section>
			<footer className="footer">
				<p>We care about your opinion, so we would like your contribution to our platform.</p>
				<h4>Contact us: zandaka1@yahoo.com</h4>
			</footer>
		</div>
	);
}
