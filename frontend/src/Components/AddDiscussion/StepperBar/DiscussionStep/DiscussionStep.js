import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class DiscussionStep extends Component {
    constructor(props) {
        super(props);

        this.state = {
            discussion: {},
            fields: this.initFields()
        }
    }

    initFields = () => ([
        {id: 'name', placeHolder: 'שם דש"ב'},
        {id: 'date', placeHolder: 'תאריך'}
    ]);

    handleChange = (event) => {
        let discussion = this.state.discussion;
        discussion[event.target.id] = event.target.value;
        this.setState({discussion: discussion})
    };

    handleClick = () => {
        this.props.handleNext(this.state.discussion);
    };

    render() {
        return (
            <div>
                {this.state.fields.map((field, index) => (
                    <TextField
                        key={index}
                        id={field.id}
                        placeholder={field.placeHolder}
                        onChange={this.handleChange}
                        fullWidth
                    />
                ))}
                <div>
                    <Button onClick={this.handleClick}>
                        המשך
                    </Button>
                    <Button>
                        ביטול
                    </Button>
                </div>
            </div>
        )
    }
}

export default DiscussionStep;