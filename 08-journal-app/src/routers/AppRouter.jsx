import JournalPage from '../components/journal/JournalPage';
import Loading from '../components/auth/Loading';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import {
	BrowserRouter as Router,
	Switch,
	Redirect,
} from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {
	const dispatch = useDispatch();
	const [checking, setChecking] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, async (user) => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName));
				setIsLoggedIn(true);
				dispatch(startLoadingNotes(user.uid));
			} else {
				setIsLoggedIn(false);
			}
			setChecking(false);
		});
	}, [setChecking]);

	if (checking) {
		return <Loading />;
	}

	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute
						path='/auth'
						isAuthenticated={isLoggedIn}
						component={AuthRouter}
					/>
					<PrivateRoute
						exact
						path='/'
						isAuthenticated={isLoggedIn}
						component={JournalPage}
					/>
					<Redirect to='/auth/login' />
				</Switch>
			</div>
		</Router>
	);
};
