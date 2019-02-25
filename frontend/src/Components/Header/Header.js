import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#333333'
        },
        secondary: {
            main: '#999999'
        }
    }
});

const styles = style => ({
    appBar: {
        zIndex: style.zIndex.drawer + 1,
    },
    toolbar: style.mixins.toolbar
});

function Header(props) {
    const { classes } = props;

    return (
        <MuiThemeProvider theme={theme}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Grid container justify="space-between">
                        <Grid item>
                            <Typography color="inherit" variant="h6">
                                Blue-Sac
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography color="inherit" variant="subtitle1">
                                שלום שון
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </MuiThemeProvider>
    )
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);