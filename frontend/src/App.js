import React, { Component } from 'react';
import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SideBar from './Components/SideBar/SideBar';


const styles = style => ({
    footer: {
        paddingTop: 100
    }
});

class App extends Component {
    render() {
        const { classes } = this.props;
        return (
          <div>
              <Grid container justify="center" alignItems="center">
                  <Grid item xs={12}>
                      <Header/>
                  </Grid>
                  <Grid item xs={1}>
                      <SideBar/>
                  </Grid>
                  <Grid item xs={9} className={classes.footer}>
                      <Footer/>
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
