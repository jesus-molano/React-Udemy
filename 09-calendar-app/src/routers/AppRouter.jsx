import CalendarPage from '../pages/CalendarPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

const AppRouter = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path='/login' component={LoginPage} />
					<Route exact path='/register' component={RegisterPage} />
					<Route exact path='/' component={CalendarPage} />
					<Redirect to="/"/>
				</Switch>
			</div>
		</Router>
	);
};

export default AppRouter;
