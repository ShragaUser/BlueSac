import React from 'react';
import PropTypes from "prop-types";
import Chip from '@material-ui/core/Chip';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    chip: {
        margin: theme.spacing.unit / 2,
        direction: 'ltr'
    }
});

function RoleChip(props) {
    const { classes, add, remove, variant, role, edit } = props;

    return (
        <Chip
            label={props.role.name}
            onDelete={edit.bind(this, role._id)}
            clickable
            className={classes.chip}
            color="primary"
            deleteIcon={<EditIcon/>}
            variant={props.variant}
            onClick={() => variant === 'default' ? remove(role._id) : add(role)}
        />
    )
}

RoleChip.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RoleChip);