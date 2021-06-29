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

export default function Register() {
	const register = useSelector((state) => state.auth.register);
	const error = useSelector((state) => state.auth.error);

	const [ username, setUsername ] = useState(register.username);
	const [ email, setEmail ] = useState(register.email);
	const [ password, setPassword ] = useState(register.password);
	const [ showPassword, setShowPassword ] = useState(false);
	const [ setErrorMessage ] = useState(error);

	const history = useHistory();
	const classes = useStyles();

	function handleSubmit(event) {
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

	function handleShowPassword() {
		setShowPassword(!showPassword);
	}

	function handleMouseDownPassword(event) {
		event.preventDefault();
	}

	return (
		<div>
			<div className="login-wrapper">
				<header className="header">Movie Box Edition</header>
				<section className={classes.section}>
					<h1 className={classes.title}>Register</h1>
					{error && <p className={classes.error}>{error.message}</p>}
					<form onSubmit={handleSubmit} className={classes.form}>
						<FilledInput
							id="username"
							defaultValue="Username"
							value={username}
							placeholder="Username"
							type="text"
							variant="outlined"
							required
							onChange={(event) => setUsername(event.target.value)}
							className={classes.input}
						/>
						<FilledInput
							id="email"
							defaultValue="Email"
							value={email}
							placeholder="Email"
							type="text"
							variant="outlined"
							required
							onChange={(event) => setEmail(event.target.value)}
							className={classes.input}
						/>
						<FilledInput
							id="password"
							defaultValue="Password"
							value={password}
							placeholder="Password"
							variant="outlined"
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
							Register
						</Button>
					</form>
					<div>
						Already have an account? {''}
						<Button className={classes.secondButton}>
							<Link to="/login" className={classes.link}>
								Login
							</Link>
						</Button>
					</div>
				</section>
				<footer className="footer">
					<p>We care about your opinion, so we would like your contribution to our platform.</p>
					<h4>Contact us: movie_box@yahoo.com</h4>
				</footer>
			</div>
			{password}
		</div>
	);
}
