import React from 'react';
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { withStyles, Paper } from '@material-ui/core';

import HomePage from "../HomePage/HomePage";
import DiscussionPage from "../DiscussionPage/DiscussionPage";

const styles = theme => {
    return ({
        root: {
            display: ''
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            ...theme.mixins.gutters(),
            paddingTop: theme.spacing.unit * 2,
            paddingBottom: theme.spacing.unit * 2,
            height: '68vh',
        }
})};

function Footer(props) {
    const { classes } = props;
    return(
        <div className={classes.root}>
            <div elevation={1}>
                <Switch>
                    <Route path="/discussionPage" component={DiscussionPage}/>
                    <Route component={DiscussionPage}/>
                </Switch>
            </div>
        </div>

    )
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);