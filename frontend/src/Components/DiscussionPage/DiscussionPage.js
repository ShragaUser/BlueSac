import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Panel from './Panel/Panel';

let panels = [
    {summary: 'discussion 1', details: 'blasfsdfnbashdbfkjasdfksakdfbskadfbkjsafd'},
    {summary: 'discussion 1', details: 'blasfsdfnbashdbfkjasdfksakdfbskadfbkjsafd'},
    {summary: 'discussion 1', details: 'blasfsdfnbashdbfkjasdfksakdfbskadfbkjsafd'}
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
                <Panel summary={panel.summary} details={panel.details}/>
            )}
        </div>
    )
}

DiscussionPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DiscussionPage);