import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

import SideBar from '../SideBar/SideBar';
import Drawer from "@material-ui/core/Drawer";

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
        zIndex: style.zIndex.drawer + 1
    },
    toolbar: style.mixins.toolbar
});

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openSideBar: true
        }
    }

    handleHamburgerClick = () => {
        this.setState(prevState => {
            return {
                openSideBar: !prevState.openSideBar
            }
        })
    };

    render() {
        const { classes } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <AppBar position="absolute" className={classes.appBar}>
                    <Toolbar>
                        <Grid container justify="space-between">
                            <Grid item>
                                <IconButton color="inherit" aria-label="Menu" onClick={this.handleHamburgerClick}>
                                    <MenuIcon/>
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <Typography color="inherit" variant="h6">
                                    Dashab in click
                                </Typography>
                                <Typography color="inherit" variant="subtitle1">
                                    שלום שון
                                </Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <SideBar open={this.state.openSideBar}/>
            </MuiThemeProvider>
        )
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);