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
});

class App extends Component {
    render() {
        const { classes } = this.props;
        return (
          <div className={classes.root}>
              <Grid container justify="center" alignItems="center" direction="row">
                  <Grid item xs={12}>
                      <Header/>
                  </Grid>
                  <Grid item xs={2}>
                      <SideBar/>
                  </Grid>
                  <Grid item xs={8} className={classes.footer}>
                      <Footer/>
                  </Grid>
              </Grid>
              <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
              >
                  <Grid item xs={0} style={{marginLeft: 30}}>
                      <AddDiscussion/>
                  </Grid>
              </Grid>
          </div>
      )
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};


export default withStyles(styles)(App);
