import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import AddRole from './AddRole/AddRole';
import RoleChip from './RoleChip/RoleChip';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingTop: '1em'
    },
    chipsDiv: {
        direction: 'ltr',
        maxHeight: '25vh',
        overflowY: 'auto'
    },
    chipsDivInside: {
        direction: 'rtl'
    }
});

class RolesStep extends Component {
    constructor(props) {
        super(props);

        this.state = {
            roles: ROLES,
            currRole: {},
            fields: this.initFields(),
            selectedRoles: []
        }
    }

    initFields = () => ([
        {id: 'name', placeHolder: 'שם'},
        {id: 'unit', placeHolder: 'יחידה'},
        {id: 'rank', placeHolder: 'דרגה'},
        {id: 'description', placeHolder: 'תיאור'},
        {id: 'requirements', placeHolder: 'דרישות'},
        {id: 'skills', placeHolder: 'כישורים'},
        {id: 'approved_by', placeHolder: 'אושר ע"י'},
        {id: 'approved_date', placeHolder: 'תאריך אישור'}
    ]);

    removeFromSelectedRoles = id => {
        let selectedRoles = this.state.selectedRoles;
        selectedRoles = selectedRoles.filter(roleId => (
            roleId !== id
        ));

        this.setState({ selectedRoles: selectedRoles });
    };

    addToSelectedRoles = id => {
        let selectedRoles = this.state.selectedRoles;
        selectedRoles.push(id);

        this.setState({ selectedRoles: selectedRoles })
    };

    currRoleView = () => {
        let currRole = this.state.currRole;

        if(Object.keys(currRole).length === 0 && currRole.constructor === Object) {
            return null
        } else {
            return (
                <div style={{width: '100%'}}>
                    <Typography variant="h6">
                        {currRole.name}
                    </Typography>
                    <Grid container spacing={24} direction="row" justify="space-between" alignItems="center">
                        <Grid item xs={4}>
                            <TextField
                                id="standard-name"
                                label="יחידה"
                                value={currRole.unit}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                id="standard-name"
                                label="דרגה"
                                value={currRole.rank}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                id="standard-name"
                                label='אושר ע"י'
                                value={currRole.approved_by}
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                </div>
            )
        }
    };

    isChecked = (roleId) => (
        this.state.selectedRoles.find(id => (
            id === roleId
        )) || false
    );

    getVariant = id => (
        this.isChecked(id) ? 'default' : 'outlined'
    );

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                >
                    <Grid item sm={6}>
                        <div className={classes.chipsDiv}>
                            <div className={classes.chipsDivInside}>
                            {this.state.roles.map(role => (
                                <RoleChip
                                    role={role}
                                    variant={this.getVariant(role._id)}
                                    add={this.addToSelectedRoles}
                                    remove={this.removeFromSelectedRoles}
                                />
                            ))}
                            </div>
                        </div>
                    </Grid>
                    <Grid item sm={6}>
                        Edit Roles!!
                    </Grid>
                {/*<Button onClick={this.handleClick}>*/}
                    {/*המשך*/}
                {/*</Button>*/}
                {/*<Button onClick={this.props.handleBack}>*/}
                    {/*חזור*/}
                {/*</Button>*/}
                </Grid>
            </div>
        )
    }
}

RolesStep.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(RolesStep);

const ROLES = [
    { _id: '1' ,name: 'אני תפקיד חשוב', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "שון ביג דיק",
        approved_at: new Date()
    },
    { _id: '2' ,name: 'לי יש תפקיד חשוב', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "שון ביג דיק",
        approved_at: new Date()
    },{ _id: '3' ,name: 'אני מבזבז כסף', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "שון ביג דיק",
        approved_at: new Date()
    },{ _id: '4' ,name: 'להלהלהלהלהלהלללל', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "שון ביג דיק",
        approved_at: new Date()
    },{ _id: '5' ,name: 'רע"ן יסודות', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "שון ביג דיק",
        approved_at: new Date()
    },{ _id: '6' ,name: 'רע"ן יסודות', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "שון ביג דיק",
        approved_at: new Date()
    },{ _id: '7' ,name: 'רע"ן יסודות', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "שון ביג דיק",
        approved_at: new Date()
    },
    { _id: '8' ,name: 'רע"ן יסודות', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "שון ביג דיק",
        approved_at: new Date()
    },
    { _id: '9' ,name: 'רע"ן יסודות', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "שון ביג דיק",
        approved_at: new Date()
    },
];