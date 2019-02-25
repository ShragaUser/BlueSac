import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
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
        icon: {

        }
    });
};

function handleClick() {

}

function Panel(props) {
    const { classes } = props;
    return (
        <ButtonBase onClick={handleClick} className={classes.root}>
            <ExpansionPanel className={classes.root}>
                <ExpansionPanelSummary>
                    <div className={classes.headers}>
                        <Typography className={classes.heading}>
                            {props.summary}
                        </Typography>
                        <Typography className={classes.secondaryHeading}>
                            secondary header
                        </Typography>
                    </div>
                    <div className={classes.icon}>
                        <ExpandMoreIcon />
                    </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        {props.details}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </ButtonBase>
    )
}

Panel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Panel);