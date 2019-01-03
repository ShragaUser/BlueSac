import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import PersonPage from "./PersonPage/PersonPage";

// import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/personPage" component={PersonPage}/>
            </Switch>
        </div>
    );
  }
}

export default App;
