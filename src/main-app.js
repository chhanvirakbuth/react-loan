// ((======= core import ========= ))
import React from 'react';

// ((======= library import ========= ))
import { BrowserRouter as Router ,Switch ,Route } from 'react-router-dom';

// ((======= custom import ========= ))

import './assets/styles/style.scss';
import App from "./app";
import RoutePath from "./config/route-path";
import LoginView from "./resources/view-pages/auth/login";
import ProtectedRoute from "./resources/components/protected.route";

const MainApp = () => {
    return (
       <Router>
          <Switch>
              {/*outside admin*/}
              <Route path={RoutePath.login} exact={true}>
                  <LoginView/>
              </Route>
              <Route path={`/`} exact>
                  Landing Page
              </Route>
              {/*main app*/}
              <ProtectedRoute path={`*`} isAuth={true} component={App}/>
          </Switch>
       </Router>
    );
}

export default MainApp;
