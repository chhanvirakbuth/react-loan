// ((======= core import ========= ))
import React from 'react';

// ((======= library import ========= ))
import { BrowserRouter as Router } from 'react-router-dom';

// ((======= custom import ========= ))

import './assets/styles/style.scss';
import App from "./app";

const MainApp = () => {
    return (
       <Router>
           <App/>
       </Router>
    );
}

export default MainApp;
