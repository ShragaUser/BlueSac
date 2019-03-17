import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import AddRole from './AddRole/AddRole';
import RoleChip from './RoleChip/RoleChip';
import EditRole from './EditRole/EditRole';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingTop: '1em',
        minHeight: '20vh'
    },
    editRole : {
        maxHeight: '30vh'
    },
    chipsDiv: {
        maxHeight: '30vh',
        overflowY: 'auto'
    },
});

class RolesStep extends Component {
    constructor(props) {
        super(props);

        this.state = {
            roles: ROLES,
            currRole: {},
            selectedRoles: []
        }
    }

    addToSelectedRoles = id => {
        let selectedRoles = this.state.selectedRoles;
        selectedRoles.push(id);

        this.setState({ selectedRoles: selectedRoles })
    };

    removeFromSelectedRoles = id => {
        let selectedRoles = this.state.selectedRoles;
        selectedRoles = selectedRoles.filter(roleId => (
            roleId !== id
        ));

        this.setState({ selectedRoles: selectedRoles });
    };

    handleRoleEdit = async id => {
        let currRole = this.state.roles.find(role => (
            role._id === id
        ));

        await this.setState({ currRole: currRole });
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
                >
                    <Grid item sm={6}>
                        <div className={classes.chipsDiv}>
                            <div>
                                {this.state.roles.map((role, index) => (
                                    <RoleChip
                                        key={index}
                                        role={role}
                                        variant={this.getVariant(role._id)}
                                        add={this.addToSelectedRoles}
                                        remove={this.removeFromSelectedRoles}
                                        edit={this.handleRoleEdit}
                                    />
                                ))}
                            </div>
                        </div>
                    </Grid>
                    <Grid item sm={6} className={classes.editRole}>
                        <EditRole role={this.state.currRole}/>
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
        skills: "כישורים כישורים", approved_by: "דניאל כידון",
        approved_at: new Date().toDateString()
    },
    { _id: '2' ,name: 'לי יש תפקיד חשוב', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "דניאל כידון",
        approved_at: new Date().toDateString()
    },{ _id: '3' ,name: 'אני מבזבז כסף', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "דניאל כידון",
        approved_at: new Date().toDateString()
    },{ _id: '4' ,name: 'להלהלהלkkkkkkkkkkkkkkkkkהלהלהלללל', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "דניאל כידון",
        approved_at: new Date().toDateString()
    },{ _id: '5' ,name: 'רע"ן יסודות', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "דניאל כידון",
        approved_at: new Date().toDateString()
    },{ _id: '6' ,name: 'רע"ן יסודות', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "דניאל כידון",
        approved_at: new Date().toDateString()
    },{ _id: '7' ,name: 'רע"ן יסודות', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "דניאל כידון",
        approved_at: new Date().toDateString()
    },
    { _id: '8' ,name: 'רע"ן יסודות', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "דניאל כידון",
        approved_at: new Date().toDateString()
    },
    { _id: '9' ,name: 'רע"ן יסודות', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "דניאל כידון",
        approved_at: new Date().toDateString()
    },{ _id: '10' ,name: 'רע"ן יסודות', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "דניאל כידון",
        approved_at: new Date().toDateString()
    },{ _id: '11' ,name: 'רע"ן יסודות', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "דניאל כידון",
        approved_at: new Date().toDateString()
    },{ _id: '12' ,name: 'רע"ן יסודות', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "דניאל כידון",
        approved_at: new Date().toDateString()
    },{ _id: '13' ,name: 'רע"ן יסודות', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "דניאל כידון",
        approved_at: new Date().toDateString()
    },{ _id: '14' ,name: 'רע"ן יסודות', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "דניאל כידון",
        approved_at: new Date().toDateString()
    },{ _id: '15' ,name: 'רע"ן יסודות', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "דניאל כידון",
        approved_at: new Date().toDateString()
    },{ _id: '16' ,name: 'רע"ן יסודות', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "דניאל כידון",
        approved_at: new Date().toDateString()
    },{ _id: '17' ,name: 'רע"ן יסודות', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "דניאל כידון",
        approved_at: new Date().toDateString()
    },{ _id: '18' ,name: 'רע"ן יסודות', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "דניאל כידון",
        approved_at: new Date().toDateString()
    },
];