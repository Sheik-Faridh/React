import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FileManager from './pages/filemanager';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="*" component={FileManager} />
      </Switch>
    </Router>
  );
}

export default App;
