import React from "react";
import { Auth } from "aws-amplify";
import { Route, Redirect } from "react-router-dom";
import { access } from "fs";

interface Props {
  component: React.FC;
}
function ProtectedRoute({ component }: Props) {
  const [isAuthenticated, setLoggedIn] = React.useState(true);
  const [accessToken, setAccessToken] = React.useState('');
  React.useEffect(() => {
    (async () => {
      try {
        Auth.currentAuthenticatedUser().then(user => {
          console.log('user', user);
          if (user) {
            setLoggedIn(true);
          } else {
            setLoggedIn(false);
          }
        }).catch(err => { setLoggedIn(false); console.log(err) });
      } catch (e) {
        setLoggedIn(false);
      }
    })();
  }, []);
 
  return (
    <Route
      render={(props: any) =>
        isAuthenticated ? (
          React.createElement(component)
        ) : (
          <Redirect to="/Login" />
        )
      }
    />
  );
};

export default ProtectedRoute;