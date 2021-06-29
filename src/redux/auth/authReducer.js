import * as actionTypes from './authTypes';

const initialState = {
	register: {
		username: '',
		email: '',
		password: ''
	},
	login: {
		email: '',
		password: ''
	},
	error: null,
	token: localStorage.getItem('refreshToken'),
	user: localStorage.getItem('user')
};

export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.REGISTER_USER_DATA:
			return {
				...state,
				register: {
					username: action.payload.register.username,
					email: action.payload.register.email,
					password: action.payload.register.password
				}
			};
		case actionTypes.LOGIN_USER_DATA:
			return {
				...state,
				login: {
					email: action.payload.login.email,
					password: action.payload.login.password
				}
			};
		case actionTypes.HANDLE_ERROR:
			return {
				...state,
				error: action.payload
			};
		case actionTypes.GET_REFRESH_TOKEN:
			return {
				...state,
				token: action.payload
			};
		case actionTypes.GET_USER_DATA:
			return {
				...state,
				user: action.payload
			};
		default:
			return state;
	}
}
