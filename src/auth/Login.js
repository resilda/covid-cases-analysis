import React, { useState } from 'react';
import initializeFirebase from '../config/Firebase';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles';
import { setRefreshToken, setUserData, loginUser } from '../redux/auth/authActions';

const useStyles = makeStyles({
	loginWrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'column',
		// backgroundColor: '#f0f0f0',
	},
	header: {
		fontSize: '37px',
		fontFamily: 'Bebas Neue',
		color: '#4a364b',
		fontWeight: 'bolder',
		marginTop: '65px',
		marginBottom: '130px',
	},
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
	},
	footer: {
		color: 'gray',
		fontSize: '14px',
		fontFamily: 'monospace',
		marginTop: '150px',
	}
});

export default function Login() {
	const email = useSelector((state) => state.auth.login.email);
	const password = useSelector((state) => state.auth.login.password)
	const loginError = useSelector((state) => state.auth.loginError);
	const token = useSelector((state) => state.auth.token);
	const user = useSelector((state) => state.auth.user);

	const getRefreshToken = localStorage.getItem(token);
	const getUser = localStorage.getItem(user)

	const checkUser = getUser ? JSON.parse(getUser) : getUser;
	
	const [ loginEmail, setLoginEmail ] = useState(email);
	const [ loginPassword, setLoginPassword ] = useState(password);
	const [ showPassword, setShowPassword ] = useState(false);
	const [ errorMessage, setErrorMessage ] = useState(loginError);
	const [ refreshToken, updateRefreshToken ] = useState(getRefreshToken);
	const [ data, updateData ] = useState(checkUser);

	const history = useHistory();
	const dispatch = useDispatch();
	const classes = useStyles();

	function loginData(userToken, data) {
		updateRefreshToken(userToken);
		updateData(data);
		localStorage.setItem(getRefreshToken, userToken);
		localStorage.setItem(getUser, JSON.stringify(data));
		dispatch(setRefreshToken(userToken));
		dispatch(setUserData(data))
	}

	function handleSubmit(event) {
		event.preventDefault();
		initializeFirebase
			.auth()
			.signInWithEmailAndPassword(loginEmail, loginPassword)
			.then(({ user }) => {
				loginData(user.refreshToken, user);
				dispatch(loginUser())
				history.push('/main');
			})
			.catch((error) => setErrorMessage(error));
	}

	function handleShowPassword() {
		setShowPassword(!showPassword);
	}

	function handleMouseDownPassword(event) {
		event.preventDefault();
	}

	return (
		<div className={classes.loginWrapper}>
			<header className={classes.header}>Zandaka</header>
			<section className={classes.section}>
				<h1 className={classes.title}>Login</h1>
				{errorMessage && <p className={classes.error}>{errorMessage.message}</p>}
				<form onSubmit={handleSubmit} className={classes.form}>
					<FilledInput
						id="email"
						value={loginEmail}
						placeholder="Email"
						type="text"
						required
						onChange={(event) => setLoginEmail(event.target.value)}
						className={classes.input}
					/>
					<FilledInput
						id="password"
						value={loginPassword}
						placeholder="Password"
						required
						onChange={(event) => setLoginPassword(event.target.value)}
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
			<footer className={classes.footer}>
				<p>We care about your opinion, so we would like your contribution to our platform.</p>
				<h4>Contact us: zandaka1@yahoo.com</h4>
			</footer>
		</div>
	);
}
