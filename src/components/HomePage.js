import React from 'react';
import initializeFirebase from '../config/Firebase';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeRefreshToken, removeUserData } from '../redux/auth/authActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	navBar: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: '10px 30px'
	}, 
	button: {
		width: '85px',
		height: '35px',
		margin: '15px',
		vertical: 'bottom',
		horizontal: 'center',
		background: 'linear-gradient(45deg, #5C888B 20%, #71A8A1 80%)',
		border: 0,
		borderRadius: 3,
		color: 'white',
		fontSize: '13px',
		cursor: 'pointer'
	},
});

export default function HomePage({ getRefreshToken, getUser }) {

	const history = useHistory();
	const dispatch = useDispatch();
	const classes = useStyles();

	function handleLogOut() {
			initializeFirebase.auth().signOut().then(() => {
				localStorage.removeItem(getRefreshToken);
				localStorage.removeItem(getUser);
				dispatch(removeRefreshToken());
				dispatch(removeUserData())
				history.push('/login');
			})
	}

	return (
		<div className={classes.wrapper}>
			<div className={classes.navBar}>
				<h2>Welcome to Zandaka</h2>
				<Button onClick={handleLogOut} className={classes.button}>Log out</Button>
			</div>
		</div>
	)
}
