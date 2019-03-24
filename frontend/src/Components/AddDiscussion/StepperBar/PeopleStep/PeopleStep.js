import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const newPerson = { person_id: '', first_name: '', last_name: '', progress: ''};

class PeopleStep extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: [],
            currPerson: newPerson,
            fields: this.initFields(),
            selectedRoles: this.props.selectedRoles
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

    findPerson = id => (
        people.find(person => (
            person.person_id === id
        ))
    );

    handlePersonIDChange = event => {
        let person = this.findPerson(event.target.value);
        if(person)
            this.setState({ currPerson: person });
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

    getSelectField = () => (
        <FormControl>
            <InputLabel htmlFor="select-multiple-checkbox">Tag</InputLabel>
            <Select
                multiple
                value={[]}
                onChange={this.handleChange}
                input={<Input id="select-multiple-checkbox" />}
            >
                {this.state.selectedRoles.map(role => (
                    <MenuItem key={role._id} value={role._id}>
                        <Checkbox />
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
                    asdad
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

export default PeopleStep;

const people = [
    {first_name: 'שון', last_name: 'דניאל', person_id: '1', process: 65},
    {first_name: 'שחר', last_name: 'זמיר', person_id: '2', process: 65},
    {first_name: 'ישראל', last_name: 'ישראלי', person_id: '3', process: 65},
];