import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

class PeopleStep extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: [],
            currPerson: {},
            fields: this.initFields()
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