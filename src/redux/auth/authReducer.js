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
	registerError: null, 
	loginError: null,
	token: 'refreshToken',
	user: 'user'
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
		case actionTypes.HANDLE_ERROR_REGISTER:
			return {
				...state,
				registerError: action.payload
			};
		case actionTypes.HANDLE_ERROR_LOGIN:
			return {
				...state, 
				loginError: action.payload
			}
		case actionTypes.SET_REFRESH_TOKEN:
			return {
				...state,
				token: action.payload
			};
		case actionTypes.SET_USER_DATA:
			return {
				...state,
				user: action.payload
			};
		case actionTypes.REMOVE_REFRESH_TOKEN:
			return {
				...state, 
				token: 'refreshToken',
			}
		case actionTypes.REMOVE_USER_DATA: 
			return {
				...state, 
				user: 'user'
			}
		default:
			return state;
	}
}
