import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import PropTypes from "prop-types";

const styles = theme => ({
    chip: {
        margin: theme.spacing.unit / 2,
    }
});

function RoleChip(props) {
    const { classes, add, remove, variant, role } = props;
    return (
        <Chip
            label={props.role.name}
            onDelete={alert}
            clickable
            className={classes.chip}
            color="primary"
            variant={props.variant}
            onClick={() => variant === 'default' ? remove(role._id) : add(role._id)}
        />
    )
}

RoleChip.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RoleChip);