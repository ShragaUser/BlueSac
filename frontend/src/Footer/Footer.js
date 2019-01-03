import React from 'react';
import { withStyles } from '@material-ui/core';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import PersonPage from "../PersonPage/PersonPage";
import PropTypes from "prop-types";

const styles = {
    root: {
        backgroundColor: '#333333'
    }
};

function Footer(props) {
    const { classes } = props;
    return(
        <div></div>
    )
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);