import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => {
    return({

    })
};

class AddDiscussion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    handleClick = () => {
        this.setState(prevState => (
            { isOpen: !prevState.isOpen }
        ))
    };

    render() {
        return (
            <Dialog
                open={true}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
            >

            </Dialog>
        )
    }
}

AddDiscussion.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddDiscussion);