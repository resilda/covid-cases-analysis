import * as actionTypes from './authTypes';

export function registerUser(username, email, password) {
	return {
		type: actionTypes.REGISTER_USER_DATA,
		payload: {
			register: {
				username: username,
				email: email,
				password: password
			}
		}
	};
}

export function loginUser(email, password) {
	return {
		type: actionTypes.LOGIN_USER_DATA,
		payload: {
			login: {
				email: email,
				password: password
			}
		}
	};
}

export function handleError(error) {
	return {
		type: actionTypes.HANDLE_ERROR,
		payload: error
	};
}

export function getRefreshToken(token) {
	return {
		type: actionTypes.GET_REFRESH_TOKEN,
		payload: token
	};
}

export function getUserData(user) {
	return {
		type: actionTypes.GET_USER_DATA,
		payload: user
	};
}
