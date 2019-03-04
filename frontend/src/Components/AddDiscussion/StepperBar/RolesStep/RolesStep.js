import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class RolesStep extends Component {
    constructor(props) {
        super(props);

        this.state = {
            roles: [],
            currRole: {},
            fields: this.initFields()
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

    render() {
        return (
            <div>
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
                </div>
                <Button onClick={this.handleClick}>
                    המשך
                </Button>
                <Button onClick={this.props.handleBack}>
                    חזור
                </Button>
            </div>
        )
    }
}

export default RolesStep;