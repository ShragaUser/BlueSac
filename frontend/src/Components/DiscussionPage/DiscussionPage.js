import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Panel from './Panel/Panel';

let panels = [
    {name: 'שם דש"ב', date: '20/01/2018', details: 'adsadsadsadsadasdsad'},
    {name: 'שם דש"ב', date: '20/01/2018', details: 'adasdasdasdasdsadasd'},
    {name: 'שם דש"ב', date: '20/01/2018', details: 'adasdadasdsadsadsads'}
];

const styles = {
    root: {
        width: '100%',
    }
};

function DiscussionPage(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            {panels.map(panel =>
                <Panel name={panel.name} date={panel.date} details={panel.details}/>
            )}
        </div>
    )
}

DiscussionPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DiscussionPage);