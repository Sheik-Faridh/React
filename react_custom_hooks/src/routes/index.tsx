import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Home from '../pages/home';
import Hooks from '../pages/hooks';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Redirect to='/hooks' />
				</Route>
				<Route exact path='/hooks' component={Home} />
				<Route path='/hooks/:id' component={Hooks} />
				<Route path='*'>
					<Redirect to='/hooks' />
				</Route>
			</Switch>
		</Router>
	);
};

export default Routes;
