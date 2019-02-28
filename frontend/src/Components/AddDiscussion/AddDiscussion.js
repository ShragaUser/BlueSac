import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const styles = theme => ({
    root: {

    },
    title: {
        backgroundColor: theme.palette.background.default
    },
    textField: {
        paddingTop: 10
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
                    <DialogTitle
                        id="form-dialog-title"
                        className={classes.title}
                    >
                        יצירת דש"ב
                    </DialogTitle>
                    <Divider />
                    <DialogContent>
                        <TextField
                            id="name"
                            placeholder='שם דש"ב'
                            fullWidth
                            className={classes.textField}
                        />
                        <TextField
                            id="date"
                            placeholder='תאריך'
                            fullWidth
                            className={classes.textField}
                        />

                    </DialogContent>
                    <Divider/>
                    <DialogActions>
                        <Button onClick={this.handleCreate} color="primary">
                            צור
                        </Button>
                        <Button onClick={this.handleClose} color="secondary">
                            ביטול
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

        )
    }
}

AddDiscussion.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddDiscussion);