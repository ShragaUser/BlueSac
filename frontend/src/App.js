import React, { Component } from 'react';
import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SideBar from './Components/SideBar/SideBar';
import AddDiscussion from './Components/AddDiscussion/AddDiscussion';


const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.default,
        height: '100%'
    },
    footer: {
        paddingTop: 100,
    },
    AddDiscussion : {
        position: 'fixed',
        bottom: 10,
        right: 10
    }
});

class App extends Component {
    render() {
        const { classes } = this.props;
        return (
          <div className={classes.root}>
              <Grid container justify="center" alignItems="center" direction="row">
                  <Grid item sm={12}>
                      <Header/>
                  </Grid>
                  <Grid item sm={2}>
                      <SideBar/>
                  </Grid>
                  <Grid item sm={8} className={classes.footer}>
                      <Footer/>
                  </Grid>
              </Grid>
              <div className={classes.AddDiscussion}>
                <AddDiscussion/>
              </div>
          </div>
      )
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
