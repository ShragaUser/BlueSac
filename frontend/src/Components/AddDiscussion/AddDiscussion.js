import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import StepperBar from './StepperBar/StepperBar';
import nameIcon from '../../icons/briefing.svg';

const styles = theme => ({
    root: {

    },
    title: {
        backgroundColor: theme.palette.background.default,
        width: '100%'
    },
    textField: {
        paddingTop: 10
    },
    createButton: {
        color: '#2196f3'
    },
    cancelButton: {
        color: theme.palette.common.black
    },
    dialog: {
        width: '100%'
    }
});

class AddDiscussion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            name: "",
            date: "",
            people: []
        };
    }

    handleOpen = () => {
        this.setState({ isOpen: true });
    };

    handleClose = () => {
        this.setState({ isOpen: false });
    };

    handleCreate = () => {
        // TODO: use axios to send http request to the backend
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Fab color="secondary" aria-label="Add" onClick={this.handleOpen}>
                    <AddIcon />
                </Fab>
                <Dialog
                    open={this.state.isOpen}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    className={classes.dialog}
                    maxWidth='sm'
                    fullWidth={true}
                >
                    <DialogContent className={classes.title}>
                        <div>
                            <Typography variant='h6'>
                                יצירת דש"ב
                            </Typography>
                            <StepperBar/>
                        </div>
                    </DialogContent>
                    <Divider/>
                </Dialog>
            </div>

        )
    }
}

AddDiscussion.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddDiscussion);