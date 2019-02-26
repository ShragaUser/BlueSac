import React from 'react';
import { withStyles, Paper } from '@material-ui/core';
import { Route, Switch } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import DiscussionPage from "../DiscussionPage/DiscussionPage";
import PropTypes from "prop-types";

const styles = theme => {
    console.log(theme);
    return ({
    root: {
        backgroundColor: theme.palette.background.paper,
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        height: '70vh',
    }
})};

function Footer(props) {
    const { classes } = props;
    return(
        <Paper className={classes.root} elevation={1}>
            <Switch>
                <Route path="/discussionPage" component={DiscussionPage}/>
                <Route component={HomePage}/>
            </Switch>
        </Paper>
    )
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);