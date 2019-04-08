import React from 'react';
import PropTypes from "prop-types";
import Chip from '@material-ui/core/Chip';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import connect from "react-redux/es/connect/connect";

const styles = theme => ({
    chip: {
        margin: theme.spacing.unit / 2,
        direction: 'ltr'
    }
});

function isChecked(selectedRoles, roleId) {
    return selectedRoles.find(({_id}) => (
        _id === roleId
    )) || false
}

function RoleChip(props) {
    const { classes, add, remove, role, edit, selectedRoles } = props;
    return (
        <Chip
            label={props.role.name}
            onDelete={edit.bind(this, role._id)}
            clickable
            className={classes.chip}
            color="primary"
            deleteIcon={<EditIcon/>}
            variant={isChecked(selectedRoles, role._id) ? 'default' : 'outlined'}
            onClick={isChecked(selectedRoles, role._id) ? remove.bind(this, role) : add.bind(this, role)}
        />
    )
}

RoleChip.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => {
    return {
        add: role => dispatch({ type: 'addToSelectedRoles', payload: role }),
        remove: ({_id}) => dispatch({ type: 'removeFromSelectedRoles', payload: _id }),
        edit: role => dispatch({ type: 'selectRoleEdit', payload: role }),
    }
};

const mapStateToProps = state => state.addDiscussionState;

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RoleChip));