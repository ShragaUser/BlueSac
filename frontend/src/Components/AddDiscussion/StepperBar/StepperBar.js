import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Divider from '@material-ui/core/Divider';

import axios from 'axios';

import { connect } from 'react-redux';

import RolesStep from './RolesStep/RolesStep';
import PeopleStep from './PeopleStep/PeopleStep';
import DiscussionStep from './DiscussionStep/DiscussionStep';

const styles = theme => ({
    root: {
    },
    stepper: {
        backgroundColor: theme.palette.background.default
    },
    label: {
        paddingRight: 10,
        paddingLeft: 10
    },
    content: {
        width: '90%'
    },
    buttons: {
        paddingTop: 10
    }
});

class StepperBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeStep: 1,
        };
    }

    handleNext = async (obj) => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }));
    };

    // must be in this order
    getSteps = () => (
        [
            {url: 'person', content: this.state.people, label: 'הוספת אנשים'},
            {url: 'role', content: this.state.roles, label: 'הוספת תפקיד'},
            {url: 'discussion', content: this.state.discussion, label: 'יצירת דש"ב'}
        ]
    );

    getStepContent = () => {
        switch (this.state.activeStep) {
            case 0:
                return <DiscussionStep handleNext={this.handleNext}/>;
            case 1:
                return <RolesStep handleNext={this.handleNext} handleBack={this.handleBack}/>;
            case 2:
                return <PeopleStep selectedRoles={this.state.roles} handleBack={this.handleBack} handleNext={this.handleNext} />;
            default:
                return 'נוצר בהצלחה!';
        }
    };

    render() {
        const { classes, roles, people, discussion } = this.props;
        const { activeStep } = this.state;
        const steps = this.getSteps().reverse();

        return (
            <div className={classes.root}>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((step) => {
                        const props = {};
                        const labelProps = {};
                        return (
                            <Step key={step.label} {...props}>
                                <StepLabel {...labelProps}>
                                    <div className={classes.label}>
                                        {step.label}
                                        </div>
                                </StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <Divider />
                <div className={classes.content}>
                    {this.getStepContent()}
                </div>
            </div>
        );
    }
}

StepperBar.propTypes = {
    classes: PropTypes.object,
};

const mapStateToProps = state => state.addDiscussionState;

export default connect(mapStateToProps)(withStyles(styles)(StepperBar));