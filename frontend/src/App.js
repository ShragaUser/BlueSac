import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SideBar from './Components/SideBar/SideBar';

class App extends Component {
  render() {
      return (
          <div>
              <Grid container justify="center" alignItems="center">
                  <Grid item xs={12}>
                      <Header/>
                  </Grid>
                  <Grid item xs={2}>
                      <SideBar/>
                  </Grid>
                  <Grid item xs={8} style={{paddingTop: 100}}>
                      <Footer/>
                  </Grid>
              </Grid>
          </div>
      )
  }
}

export default App;
