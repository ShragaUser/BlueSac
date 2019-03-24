import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class PeopleStep extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: [],
            currPerson: {},
            fields: this.initFields(),
            selectedRoles: this.props.selectedRoles
        }
    }

    initFields = () => ([
        {id: 'person_id', label: 'מספר מזהה'},
        {id: 'first_name', label: 'שם פרטי'},
        {id: 'last_name', label: 'שם משפחה'}
    ]);

    handleChange = (event) => {
        let currPerson = this.state.currPerson;
        currPerson[event.target.id] = event.target.value;
        this.setState({currPerson: currPerson})
    };

    handleClick = () => {
        this.setState(prevState => (
            {people: prevState.people.push(prevState.currPerson)}
        ));
        this.props.handleNext(this.state.people);
    };

    getSelectField = () => (
        <TextField
            id="standard-select-currency-native"
            select
            label="Native select"
            // className={classes.textField}
            value={this.state.currency}
            onChange={this.handleChange('currency')}
            SelectProps={{
                native: true,
                MenuProps: {
                    // className: classes.menu,
                },
            }}
            helperText="Please select your currency"
            margin="normal"
        >
            {this.state.selectedRoles.map(role=> (
                <option key={role.value} value={role.value}>
                    {role.label}
                </option>
            ))}
        </TextField>
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
                            onChange={this.handleChange}
                            fullWidth
                        />
                    ))}
                    {/*{this.getSelectField()}*/}
                </Grid>
                <Grid item sm={6}>
                    asdada
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