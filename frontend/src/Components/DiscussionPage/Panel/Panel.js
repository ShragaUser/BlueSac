import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import axios from 'axios';

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
            discussion: props.discussion
        }
    }

    handleClick = () => {
        this.setState(prevState => (
            {isOpen: !prevState.isOpen}
        ));
    };

    renderSecondaryHeading = () => (
        <Typography className={this.props.classes.secondaryHeading}>
            {this.state.discussion.date}
        </Typography>
    );

    getData = (url, id) => {
        axios.get('http://localhost:3001/api/' + url, {
            data: {
                filter : {_id: id}
            }})
            .then(function (response) {
                // handle success
                console.log(response.data.docs);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    };

    componentWillMount() {
        this.state.discussion.discussion_roles.forEach(discussionRole => {
            this.getData('role', discussionRole.role);

            discussionRole.discussion_people.forEach(personID => {
                console.log(personID)
                this.getData('person', personID)
            })
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <ExpansionPanel className={classes.root}>
                <ExpansionPanelSummary onClick={this.handleClick} expandIcon={<ExpandMoreIcon/>}>
                    <div className={classes.headers}>
                        <Typography className={classes.heading}>
                            {this.state.discussion.name}
                        </Typography>
                        { this.state.isOpen ? null : this.renderSecondaryHeading() }
                    </div>
                </ExpansionPanelSummary>
                <Divider />
                <ExpansionPanelDetails>
                    <div className={classes.details}>
                        <Typography className={classes.secondaryHeading}>
                            {this.state.discussion.date}
                        </Typography>
                    <Typography>
                        {this.state.discussion.details}
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