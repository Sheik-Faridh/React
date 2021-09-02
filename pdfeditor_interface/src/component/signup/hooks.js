import { useReducer } from 'react';

const initialSignUpState = {
	firstName: '',
	lastName: '',
	username: '',
	password: '',
	showPassword: false,
	confirmPassword: '',
	error: false,
};

const reducerAction = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'firstName':
			return { ...state, firstName: payload.firstName };
		case 'lastName':
			return { ...state, lastName: payload.lastName };
		case 'username':
			return { ...state, username: payload.username };
		case 'password':
			return { ...state, password: payload.password };
		case 'showPassword':
			return { ...state, showPassword: payload.showPassword };
		case 'confirmPassword':
			return { ...state, confirmPassword: payload.confirmPassword };
		case 'error':
			return { ...state, error: payload.error };
		default:
			return state;
	}
};

const useSignUpCredentials = () => {
	const [signUpCredentials, dispatch] = useReducer(
		reducerAction,
		initialSignUpState
	);

	return { signUpCredentials, dispatch };
};

export default useSignUpCredentials;
