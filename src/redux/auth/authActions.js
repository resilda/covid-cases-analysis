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

export function handleErrorRegister(registerError) {
	return {
		type: actionTypes.HANDLE_ERROR_REGISTER,
		payload: registerError
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

export function handleErrorLogin(loginError) {
	return {
		type: actionTypes.HANDLE_ERROR_LOGIN,
		payload: loginError
	}
}

export function setRefreshToken(token) {
	return {
		type: actionTypes.SET_REFRESH_TOKEN,
		payload: token
	};
}

export function setUserData(user) {
	return {
		type: actionTypes.SET_USER_DATA,
		payload: user
	};
}

export function removeRefreshToken() {
	return {
		type: actionTypes.REMOVE_REFRESH_TOKEN
	}
}

export function removeUserData() {
	return {
		type: actionTypes.REMOVE_USER_DATA
	}
}
