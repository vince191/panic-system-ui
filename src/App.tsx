import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Amplify from "aws-amplify";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from './components/Signup';
import ConfirmAccount from './components/ConfirmAccount';

Amplify.configure({
  aws_cognito_region: process.env.REACT_APP_COGNITO_REGION,
  aws_user_pools_id: process.env.REACT_APP_COGNITO_USER_POOL_ID,
  aws_user_pools_web_client_id: process.env.REACT_APP_COGNITO_APP_CLIENT_ID,
});

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route> 
          <Route path="/confirmation">
            <ConfirmAccount />
          </Route>
          <Route path="/">
            <ProtectedRoute component={Dashboard} />
          </Route>
        </Switch>
    </Router>

  );
}

export default App;
