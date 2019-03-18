import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Divider from '@material-ui/core/Divider';

import axios from 'axios';

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
            activeStep: 2,
            people: [],
            roles: [],
            discussion: {},
        };
    }

    changeState = async obj => {
        switch (this.state.activeStep) {
            case 0:
                return this.setState({discussion: obj});
            case 1:
                return this.setState({roles: obj});
            case 2:
                await this.setState({people: obj});
                return this.handleCreate();
            default:
                return 'Unknown step';
        }
    };

    handleNext = async (obj) => {
        await this.changeState(obj);
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }));
    };

    // getCleanUrl = (url) => {
    //     return url.slice(url.lastIndexOf("/") + 1);
    // };
    //
    // handleIdInit = (response) => {
    //     let url = this.getCleanUrl(response.config.url);
    //     let discussion = this.state.discussion;
    //
    //     switch (url) {
    //         case ('person'):
    //             let discussion_people = discussion.discussion_people || [];
    //             discussion_people.push(response.data.doc._id);
    //             discussion.discussion_people = discussion_people;
    //             this.setState({discussion: discussion});
    //             break;
    //         case ('role'):
    //
    //     }
    // };

    saveToDB = (url, obj)=> {
        axios.post('http://localhost:3001/api/' + url, {'newObj': obj}).then(response => {
            console.log(response)
        }).catch(error => {
            console.error(error)
        })
    };

    // must be in this order
    getSteps = () => (
        [
            {url: 'person', content: this.state.people, label: 'הוספת אנשים'},
            {url: 'role', content: this.state.roles, label: 'הוספת תפקיד'},
            {url: 'discussion', content: this.state.discussion, label: 'יצירת דש"ב'}
        ]
    );

    handleCreate = () => {
        this.getSteps().forEach(step => {
            if (Array.isArray(step.content)) {
                step.content.forEach(content => {
                    this.saveToDB(step.url, content);
                })
            } else {
                this.saveToDB(step.url, step.content);
            }
        });
        console.log(this.state);
    };

    getStepContent = () => {
        switch (this.state.activeStep) {
            case 0:
                return <DiscussionStep handleNext={this.handleNext}/>;
            case 1:
                return <RolesStep handleNext={this.handleNext} handleBack={this.handleBack}/>;
            case 2:
                return <PeopleStep handleBack={this.handleBack} handleNext={this.handleNext} />;
            default:
                return 'נוצר בהצלחה!';
        }
    };

    render() {
        const { classes } = this.props;
        const steps = this.getSteps().reverse();
        const { activeStep } = this.state;

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

export default withStyles(styles)(StepperBar);