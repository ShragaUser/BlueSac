import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';

import StepperBar from './StepperBar/StepperBar';

const styles = theme => ({
    root: {

    },
    title: {
        backgroundColor: theme.palette.background.default,
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
    dialog: {},
});

class AddDiscussion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            name: "",
            date: "",
            people: []
        };
    }

    handleOpen = () => this.setState({ isOpen: true });

    handleClose = () => this.setState({ isOpen: false });

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
                    maxWidth='md'
                >
                    <DialogContent className={classes.title}>
                        <div>
                            <Typography variant='h6'>
                                יצירת דש"ב
                            </Typography>
                            <StepperBar close={this.handleClose}/>
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