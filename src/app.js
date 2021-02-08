// ((======= core import ========= ))
import React from 'react';

// ((======= library import ========= ))
import {Switch, Route } from 'react-router-dom';
import 'animate.css';

// ((======= custom import ========= ))
import HomePageView from "./resources/view-pages/home-page";
import MainContentView from "./resources/view-pages/main-conent.page";
import AppBarComponent from "./resources/components/appbar";
import RoutePath from "./config/route-path";

const App = () => {
    return (
        <>
            <AppBarComponent/>
            <Switch>
                {/* Home page */}
                <Route path={ RoutePath.home } exact component={HomePageView}/>
                {/*Main content page*/}
                <Route path={ `${process.env.REACT_APP_APP_BASE_PATH}/:path` } component={ MainContentView }/>
            </Switch>
            <div style={{ height : '150px'}}/>
        </>
    );
}

export default App;
