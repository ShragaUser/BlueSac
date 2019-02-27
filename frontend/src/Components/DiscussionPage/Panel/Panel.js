import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const styles = theme => {
    return ({
        root: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            flexBasis: '20%',
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
        },
        headers: {
            display: 'flex',
            flexGrow: 1,
            flexDirection: 'row'
        },
        details: {
            display: 'block',
        }

    });
};

class Panel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            name: props.name,
            date: props.date,
            details: props.details
        }
    }

    handleClick = () => {
        this.setState(prevState => (
            {isOpen: !prevState.isOpen}
        ));
    };

    renderSecondaryHeading = () => (
        <Typography className={this.props.classes.secondaryHeading}>
            {this.state.date}
        </Typography>
    );

    render() {
        const { classes } = this.props;
        return (
                <ExpansionPanel className={classes.root}>
                    <ExpansionPanelSummary onClick={this.handleClick}>
                        <div className={classes.headers}>
                            <Typography className={classes.heading}>
                                {this.state.name}
                            </Typography>
                            { this.state.isOpen ? null : this.renderSecondaryHeading() }
                        </div>
                        <div className={classes.icon}>
                            <ExpandMoreIcon />
                        </div>
                    </ExpansionPanelSummary>
                    <Divider />
                    <ExpansionPanelDetails>
                        <div className={classes.details}>
                            <Typography className={classes.secondaryHeading}>
                                {this.state.date}
                            </Typography>
                        <Typography>
                            {this.state.details}
                        </Typography>
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
        )
    }

}

Panel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Panel);