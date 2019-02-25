import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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
        <div>
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
        </div>
    )
}

HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);