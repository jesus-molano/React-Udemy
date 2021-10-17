import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import NavBar from './pages/NavBar';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';

const AppRouter = () => {
	return (
		<Router>
			<div>
				<NavBar />
				<div className='container'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/about' component={About} />
						<Redirect to='/' />
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default AppRouter;
