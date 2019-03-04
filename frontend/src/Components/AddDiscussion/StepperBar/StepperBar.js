import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

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

function getSteps() {
    return ['פרטי דש"ב', 'הוספת תפקידים', 'הוספת אנשים'];
}

class StepperBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeStep: 0,
            discussion: {},
            roles: [],
            people: []
        };
    }

    changeState = obj => {
        switch (this.state.activeStep) {
            case 0:
                return this.setState({discussion: obj});
            case 1:
                return this.setState({roles: obj});
            case 2:
                this.setState({people: obj});
                this.handleCreate();
                break;
            default:
                return 'Unknown step';
        }
    };

    handleNext = async (obj) => {
        await this.changeState(obj);
        if(this.state.activeStep <= 2) {
            this.setState(prevState => ({
                activeStep: prevState.activeStep + 1,
            }));
        }
    };

    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }));
    };

    handleCreate = () => {

    };

    getStepContent = (step) => {
        switch (step) {
            case 0:
                return <DiscussionStep handleNext={this.handleNext}/>;
            case 1:
                return <RolesStep handleNext={this.handleNext} handleBack={this.handleBack}/>;
            case 2:
                return <PeopleStep handleBack={this.handleBack} handleNext={this.handleNext}/>;
            default:
                return 'נוצר בהצלחה!';
        }
    };

    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <div className={classes.root}>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((label) => {
                        const props = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...props}>
                                <StepLabel {...labelProps}>
                                    <div className={classes.label}>
                                        {label}
                                        </div>
                                </StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div className={classes.content}>
                    {this.getStepContent(this.state.activeStep)}
                </div>
            </div>
        );
    }
}

StepperBar.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(StepperBar);