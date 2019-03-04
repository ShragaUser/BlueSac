import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
        {id: 'first_name', placeHolder: 'שם פרטי'},
        {id: 'last_name', placeHolder: 'שם משפחה'},
        {id: 'person_id', placeHolder: 'מספר מזהה'}
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
            <div>
                {this.state.fields.map((field, index) => {
                    return (<TextField
                        key={index}
                        id={field.id}
                        placeholder={field.placeHolder}
                        onChange={this.handleChange}
                        fullWidth
                    />)
                })}
                <Button onClick={this.handleClick}>
                    צור
                </Button>
                <Button onClick={this.props.handleBack}>
                    חזור
                </Button>
                <Button>
                    ביטול
                </Button>
            </div>
        )
    }
}

export default PeopleStep;