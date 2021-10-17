import { types } from '../assets/types';
import { googleAuthProvider } from '../firebase/firebaseConfig';
import {
	getAuth,
	signInWithPopup,
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { startLoading, finishLoading } from './ui';
import {errorAlert} from '../helpers/alerts';
import { noteLogout } from './notes';

export const startLoginEmailPassword = (email, password) => {
	return (dispatch) => {
		dispatch(startLoading());

		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
				dispatch(finishLoading());
			})
			.catch((e) => {
				dispatch(finishLoading());
				errorAlert('User not found');
			});
	};
};

export const startRegisterEmailPasswordName = (email, password, name) => {
	return (dispatch) => {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then(async ({ user }) => {
				await updateProfile(user, { displayName: name });
				dispatch(login(user.uid, user.displayName));
			})
			.catch((e) => {
				errorAlert('User already registered');
			});
	};
};

export const startGoogleLogin = () => {
	return (dispatch) => {
		dispatch(startLoading());

		const auth = getAuth();
		signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
			dispatch(login(user.uid, user.displayName));
			dispatch(finishLoading());
		});
	};
};

export const login = (uid, displayName) => ({
	type: types.login,
	payload: {
		uid,
		displayName,
	},
});

export const startLogout = () => {
	return async (dispatch) => {
		const auth = getAuth();
		await signOut(auth);
		dispatch(logout());
		dispatch(noteLogout());
	};
};

const logout = () => ({
	type: types.logout,
});
