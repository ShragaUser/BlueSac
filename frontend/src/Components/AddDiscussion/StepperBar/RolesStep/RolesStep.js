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
import Input from '@material-ui/core/Input';

import AddRole from './AddRole/AddRole';

const ROLES = [
    { _id: '1' ,name: 'רע"ן יסודות' },
    { _id: '2' ,name: 'רע"ן יסודות' },
    { _id: '3' ,name: 'רע"ן יסודות' },
    { _id: '4' ,name: 'רע"ן יסודות' },
    { _id: '5' ,name: 'רע"ן יסודות' },
    { _id: '6' ,name: 'רע"ן יסודות' },
    { _id: '7' ,name: 'רע"ן יסודות' },
    { _id: '8' ,name: 'רע"ן יסודות' },
    { _id: '9' ,name: 'רע"ן יסודות' },
    { _id: '10' ,name: 'רע"ן יסודות' },
];

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
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
        let currRole = this.state.currRole;
        currRole[event.target.id] = event.target.value;
        this.setState({currRole: currRole})
    };

    handleClick = () => {
        this.setState(prevState => (
            {roles: prevState.roles.push(prevState.currRole)}
        ));
        this.props.handleNext(this.state.roles);
    };

    checkIfExists = id => {
        let toReturn = this.state.selectedRoles.find(role => {
            console.log(role._id === id);
            return role._id === id
        });

        return toReturn;
    };

    removeFromSelectedRoles = id => {
        let selectedRoles = this.state.selectedRoles;
        selectedRoles = selectedRoles.filter(roleId => (
            roleId != id
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

    render() {
        const { classes } = this.props;

        return (
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple-checkbox">Tag</InputLabel>
                    <Select
                        multiple
                        value={this.state.selectedRoles}
                        onChange={this.handleChange}
                        input={<Input />}
                        renderValue={selected => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {ROLES.map(role => (
                            <MenuItem key={role._id} value={role.name}>
                                <Checkbox id={role._id} onClick={this.handleChoose} />
                                <ListItemText primary={role.name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {/*<Button onClick={this.handleClick}>*/}
                    {/*המשך*/}
                {/*</Button>*/}
                {/*<Button onClick={this.props.handleBack}>*/}
                    {/*חזור*/}
                {/*</Button>*/}
            </div>
        )
    }
}

RolesStep.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(RolesStep);