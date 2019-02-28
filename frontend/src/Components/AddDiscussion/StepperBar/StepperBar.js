import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
    state = {
        activeStep: 1,
        discussion: {},
        roles: [],
        people: []
    };

    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }));
    };

    handleCreate = () => {
        alert("created successfully");
    };

    firstStep = () => (
        <div>
            <TextField
                id="name"
                placeholder='שם דש"ב'
                fullWidth
            />
            <TextField
                id="date"
                placeholder='תאריך'
                fullWidth
            />
            <div className={this.props.classes.buttons}>
                <Button onClick={this.handleNext}>
                    המשך
                </Button>
                <Button>
                    ביטול
                </Button>
            </div>
        </div>
    );

    secondStepFields = [
        {id: 'name', placeHolder: 'שם'},
        {id: 'unit', placeHolder: 'יחידה'},
        {id: 'rank', placeHolder: 'דרגה'},
        {id: 'description', placeHolder: 'תיאור'},
        {id: 'requirements', placeHolder: 'דרישות'},
        {id: 'skills', placeHolder: 'כישורים'},
        {id: 'approved_by', placeHolder: 'אושר ע"י'},
        {id: 'approved_date', placeHolder: 'תאריך אישור'}
    ];

    secondStep = () => (
        <div>
            <div>
                {this.secondStepFields.map((field) => {
                    return (<TextField
                        id={field.id}
                        placeholder={field.placeHolder}
                        fullWidth
                    />)
                })}
            </div>
            <Button onClick={this.handleNext}>
                המשך
            </Button>
            <Button onClick={this.handleBack}>
                חזור
            </Button>
        </div>
    );

    thirdStep = () => (
        <div>
            <Button onClick={this.handleCreate}>
                צור
            </Button>
            <Button onClick={this.handleBack}>
                חזור
            </Button>
            <Button>
                ביטול
            </Button>
        </div>
    );

    getStepContent = (step) => {
        switch (step) {
            case 0:
                return this.firstStep();
            case 1:
                return this.secondStep();
            case 2:
                return this.thirdStep();
            default:
                return 'Unknown step';
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