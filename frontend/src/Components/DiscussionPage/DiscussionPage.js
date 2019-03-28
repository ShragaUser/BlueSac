import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Panel from './Panel/Panel';

const DISCUSSIONS = [
    {
        name: "tohnithan",
        date: "12/10/2019",
        discussion_roles: [
            {
                discussion_people: [
                    {
                        "$oid": "5c7d24b28920ba0888dd9699"
                    }
                ],
                role: {
                    "$oid": "5c7d24228920ba0888dd9698"
                }
            }
        ]
    }
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
            {DISCUSSIONS.map((discussion, index) =>
                <Panel
                    key={index}
                    name={discussion.name}
                    date={discussion.date}
                    details={discussion.name}
                />
            )}
        </div>
    )
}

DiscussionPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DiscussionPage);