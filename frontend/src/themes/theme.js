import { createMuiTheme } from '@material-ui/core';

import amber from '@material-ui/core/colors/amber';
import blue from '@material-ui/core/colors/blue';
import indigo from '@material-ui/core/colors/indigo';

import orange from '@material-ui/core/colors/orange';
const theme = createMuiTheme({
    palette: {
        type: "light",
        primary: indigo,
        secondary: {
            main: orange[500],
            light: blue[500],
            dark: amber[800]
        },
        background: {
            default: '#e6e6e6',
            paper: '#ffffff'
        },
        common: {
            primary: '#000000',
            createBtn: blue[500]
        }
    },
    typography: { useNextVariants: true },
    direction: "rtl",
});

export default theme;