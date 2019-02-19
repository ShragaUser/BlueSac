import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

function HomePage(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root} elevation={1}>>
            <div>Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home </div>
            <div>Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home </div>
            <div>Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home </div>
            <div>Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home </div>
            <div>Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home </div>
            <div>Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home </div>
            <div>Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home </div>
            <div>Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home </div>
            <div>Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home </div>
            <div>Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home </div>
            <div>Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home </div>
        </Paper>
    )
}

HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);