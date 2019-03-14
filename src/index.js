import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route, Router } from 'react-router-dom';
import './index.css';
import HomePage from './views/HomePage/HomePage';
import Rodeo from './views/Rodeo/Rodeo';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './styles/MuiTheme';


ReactDOM.render ((
    <MuiThemeProvider theme={theme}>
        <BrowserRouter>
            <div>
                <Route path="/" exact component={HomePage} />
                <Route path="/rodeobullnamegenerator" component={Rodeo} />
            </div>
        </BrowserRouter>
    </MuiThemeProvider>
    ), document.getElementById('root')
);

registerServiceWorker();
