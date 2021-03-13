import React ,{ Suspense,lazy,useEffect } from "react";
import { hot } from "react-hot-loader/root";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
const Login = lazy(() => import("./component/login/login"));
const SignUp = lazy(() => import("./component/signup/signup"));
const FileUpload = lazy(() => import("./component/fileupload/fileupload"));
const Editor = lazy(() => import("./component/editor/editor"));
const NotFound = lazy(() => import("./component/notfound/notfound"));
import Loader from './component/loader/loader';

const PrivateRoute = ({component: Component,...rest}) => (
  <Route 
    {...rest}
    render={ props => 
      localStorage.getItem("loggedIn")
      ? <Component {...props} />
      : <Redirect
          to={{
            pathname: "/login",
            state: { from : props.location }
          }}
        />
    }
  />
)

const App = () => {

  return(
    <Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          <Route exact path="/">
            { localStorage.getItem("loggedIn") ? <Redirect to="/upload_file" /> : <Redirect to="/login" /> }
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/upload_file" component={FileUpload} />
          <Route path="/editor/file_not_found" component={NotFound} />
          <PrivateRoute path="/editor/:fileId" component={Editor} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default hot(App);