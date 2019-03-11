import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

import AddRole from './AddRole/AddRole';

const ROLES = [
    { _id: '1' ,name: 'רע"ן יסודות', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "שון ביג דיק",
        approved_at: new Date()
    },
    { _id: '2' ,name: 'רע"ן יסודות', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "שון ביג דיק",
        approved_at: new Date()
    },{ _id: '3' ,name: 'רע"ן יסודות', unit: "ספיר", rank: 2,
        description: "בלה בלה בלה בלה", requirements: "ידע בניהול טכנולוגי",
        skills: "כישורים כישורים", approved_by: "שון ביג דיק",
        approved_at: new Date()
    },{ _id: '4' ,name: 'רע"ן יסודות', unit: "ספיר", rank: 2,
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
];

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingTop: '1em'
    },
    formControl: {
        //margin: theme.spacing.unit,
        minWidth: 120,
        maxWidth: 300,
    },

});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

class RolesStep extends Component {
    constructor(props) {
        super(props);

        this.state = {
            roles: [],
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

    handleChange = (event) => {
        // let currRole = this.state.currRole;
        // currRole[event.target.id] = event.target.value;
        // this.setState({currRole: currRole})
    };

    handleClick = (roleId) => {
        ROLES.forEach(role => {
            if(role._id === roleId)
                this.setState({ currRole: role })
        })
    };

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

    handleChoose = event => {
        let id = event.target.id;
        this.state.selectedRoles.includes(id) ? this.removeFromSelectedRoles(id) : this.addToSelectedRoles(id);
    };

    isChecked = (roleId) => (
        this.state.selectedRoles.find(id => (
            id === roleId
        )) || false
    );

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
                        {/*<Grid item xs={4}>*/}
                        {/*<TextField*/}
                        {/*id="standard-name"*/}
                        {/*label="יחידה"*/}
                        {/*value={currRole.unit}*/}
                        {/*margin="normal"*/}
                        {/*/>*/}
                        {/*</Grid>*/}
                        {/*<Grid item xs={4}>*/}
                        {/*<TextField*/}
                        {/*id="standard-name"*/}
                        {/*label="דרגה"*/}
                        {/*value={currRole.rank}*/}
                        {/*margin="normal"*/}
                        {/*/>*/}
                        {/*</Grid>*/}
                        {/*<Grid item xs={4}>*/}
                        {/*<TextField*/}
                        {/*id="standard-name"*/}
                        {/*label='אושר ע"י'*/}
                        {/*value={currRole.approved_by}*/}
                        {/*margin="normal"*/}
                        {/*/>*/}
                        {/*</Grid>*/}
                    </Grid>
                </div>
            )
        }

    };

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
                    <Grid item sm={3}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="select-multiple-checkbox">רשימת תפקידים</InputLabel>
                            <Select
                                multiple
                                value={this.state.selectedRoles}
                                onChange={this.handleChange}
                                renderValue={selected => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {ROLES.map(role => (
                                    <MenuItem key={role._id} value={role.name}>
                                        <Checkbox checked={this.isChecked(role._id)} id={role._id} onClick={this.handleChoose} />
                                        <ListItemText primary={role.name} onClick={this.handleClick.bind(this, role._id)} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item sm={8}>
                        {this.currRoleView()}
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