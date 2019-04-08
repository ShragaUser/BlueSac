import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import RoleChip from './RoleChip/RoleChip';
import EditRole from './EditRole/EditRole';

import { connect } from 'react-redux';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingTop: '1em',
        height: '35vh'
    },
    editRole: {
        maxHeight: '40vh'
    },
    chipsDiv: {
        overflowY: 'auto',
        direction: 'rtl',
        maxHeight: '40vh'
    },
    div: {
        direction: 'ltr'
    }
});

function getRolesChips(roles) {
    return roles.map((role, index) => (
        <RoleChip
            key={index}
            role={role}
        />
    ))
}

function RolesStep (props){
    const { classes, roles, roleEdit } = props;

    return (
        <div className={classes.root}>
            <Grid
                container
                direction="row"
                justify="space-between"
            >
                <Grid item sm={6}>
                    <div className={classes.chipsDiv}>
                        <div className={classes.div}>
                            {getRolesChips(roles)}
                        </div>
                    </div>
                </Grid>
                <Grid item sm={1}>
                    <Divider />
                </Grid>
                <Grid item sm={5} className={classes.editRole}>
                    <div>
                        <EditRole role={roleEdit}/>
                    </div>
                </Grid>
                <Grid item sm={2}>
                    <Button onClick={props.handleNext.bind(this, props.selectedRoles)}>
                        המשך
                    </Button>
                </Grid>
                <Grid item sm={2}>
                    <Button onClick={props.handleBack}>
                        חזור
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

RolesStep.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => state.addDiscussionState;

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(RolesStep));