import { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import LoginPage from '../pages/LoginPage';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {

	const { user } = useContext(AuthContext);
	return (
		<Router>
				<Switch>
				<PublicRoute exact path='/login' component={LoginPage} isAuthenticated={ user.logged}/>
					<PrivateRoute path='/' component={DashboardRoutes} isAuthenticated={user.logged} />
				</Switch>
		</Router>
	);
};

export default AppRouter;
