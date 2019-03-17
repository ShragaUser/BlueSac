import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const FIELDS = [
    { id: 'unit', label: 'יחידה'},
    { id: 'rank', label: 'דרגה'},
    { id: 'description', label: 'תיאור'},
    { id: 'requirements', label: 'דרישות'},
    { id: 'skills', label: 'כישורים'},
    { id: 'approved_by', label: 'אושר ע"י'},
    { id: 'approved_at', label: 'אושר בתאריך'}
];

class EditRole extends Component {
    constructor(props) {
        super(props);

        this.state = {
            role: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ role: nextProps.role })
    }

    handleChange = event => {
        let role = this.state.role;
        role[event.target.id] = event.target.value;

        this.setState({ role: role })
    };

    render() {
        const { role } = this.state;

        if(Object.keys(role).length === 0 && role.constructor === Object) {
            return null
        } else {
            return (
                <div style={{width: '100%'}}>
                    <Typography variant="h6" style={{paddingBottom: 10}}>
                        {role.name}
                    </Typography>
                    <Grid container spacing={24} direction="row" justify="space-between" alignItems="center">
                        {FIELDS.map((field, index) => (
                            <Grid item xs={4} key={index}>
                                <TextField
                                    key={index}
                                    id={field.id}
                                    label={field.label}
                                    value={role[field.id]}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            )
        }

    }
}

export default EditRole;