import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';

import { connect } from 'react-redux';

const newPerson = { person_id: '', first_name: '', last_name: '', progress: '', roles: []};

class PeopleStep extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: [],
            currPerson: newPerson,
            fields: this.initFields(),
        }
    }

    initFields = () => ([
        {id: 'person_id', label: 'מספר מזהה', onChange: this.handlePersonIDChange},
        {id: 'first_name', label: 'שם פרטי'},
        {id: 'last_name', label: 'שם משפחה'}
    ]);

    handleChange = event => {
        let currPerson = this.state.currPerson;
        currPerson[event.target.id] = event.target.value;
        this.setState({currPerson: currPerson})
    };

    handleRoleSelect = event => {
        let { currPerson } = this.state;
        currPerson.roles = event.target.value;
        this.setState({ currPerson: currPerson });
    };

    findPerson = id => (
        people.find(person => (
            person.person_id === id
        ))
    );

    handlePersonIDChange = event => {
        let person = this.findPerson(event.target.value);
        if(person) {
            person.roles = [];
            this.setState({currPerson: person});
        }
        else {
            let currPerson = newPerson;
            currPerson.person_id = event.target.value;
            this.setState({ currPerson:  currPerson });
        }
    };

    handleClick = () => {
        this.setState(prevState => (
            {people: prevState.people.push(prevState.currPerson)}
        ));
        this.props.handleNext(this.state.people);
    };

    getValues = roles => {
        let names = [];
        roles.forEach(role => {
            names.push(role.name);
        });

        return names.join(', ');
    };

    isChecked = id => (
        this.state.currPerson.roles.find(role => (
            role._id === id
        )) ? true : false
    );

    getSelectField = () => (
        <FormControl fullWidth={true}>
            <InputLabel htmlFor="select-multiple-checkbox">תפקידים</InputLabel>
            <Select
                multiple
                value={this.state.currPerson.roles}
                onChange={this.handleRoleSelect}
                input={<Input id="select-multiple-checkbox" />}
                renderValue={this.getValues}
            >
                // TODO: ugly as fuck!!
                {this.props.selectedRoles.map(role => (
                    <MenuItem key={role._id} value={role}>
                        <Checkbox checked={this.isChecked(role._id)}/>
                        <ListItemText primary={role.name} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );

    render() {
        return (
            <Grid
                container
                direction="row"
                justify="space-between"
            >
                <Grid item sm={5}>
                    {this.state.fields.map((field, index) => (
                        <TextField
                            key={index}
                            autoComplete="off"
                            id={field.id}
                            label={field.label}
                            value={this.state.currPerson[field.id]}
                            onChange={field.onChange || this.handleChange}
                            fullWidth
                        />
                    ))}
                    {this.getSelectField()}
                </Grid>
                <Grid item sm={6}>
                   אדי הומו
                </Grid>
                <Grid item sm={12}/>
                    <Button onClick={this.handleClick}>
                        צור דש"ב
                    </Button>
                    <Button onClick={this.props.handleBack}>
                        חזור
                    </Button>
                    <Button>
                        ביטול
                    </Button>
                <Grid/>
            </Grid>
        )
    }
}

const mapStateToProps = state => state.addDiscussionState;

export default connect(mapStateToProps)(PeopleStep);

const people = [
    {first_name: 'שון', last_name: 'דניאל', person_id: '1', process: 65},
    {first_name: 'שחר', last_name: 'זמיר', person_id: '2', process: 65},
    {first_name: 'ישראל', last_name: 'ישראלי', person_id: '3', process: 65},
];