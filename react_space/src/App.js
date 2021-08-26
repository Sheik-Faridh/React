import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect 
} from 'react-router-dom';
import Login from './pages/login';
import Main from './pages/main';
import './App.css';

const App = ()  => {

  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/a" component={Main} />
        <Route path="*">
          <Redirect to="/a/notfound" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
