import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
    palette: {
        type: "light",
        primary: red,
        secondary: {
            main: amber.A400,
            light: amber[200],
            dark: amber[800]
        },
        background: {
            default: '#f2f2f2',
            paper: '#ffffff'
        },
    },
    direction: "rtl",
});

ReactDOM.render((
    <MuiThemeProvider theme={theme}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MuiThemeProvider>
    ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
