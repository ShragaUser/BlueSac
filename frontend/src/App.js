import React, { Component } from 'react';
import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';

import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import SideBar from './Components/SideBar/SideBar';
import AddDiscussion from './Components/AddDiscussion/AddDiscussion';

import { connect } from 'react-redux';

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
                  <Grid item xl={2} lg={2} md={1} xs={1}>
                      <SideBar/>
                  </Grid>
                  <Grid item xl={8} lg={8} md={10} xs={10} className={classes.footer}>
                      <Body/>
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

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(withStyles(styles)(App));