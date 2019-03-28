import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Panel from './Panel/Panel';

const DISCUSSIONS = [
    {
        _id: "5c7d24ee8920ba0888dd969a",
        name: "tohnithan",
        date: "12/10/2019",
        discussion_roles: [
            {
                discussion_people: [
                    "5c7d24b28920ba0888dd9699"
                ],
                _id: "5c7d24ee8920ba0888dd969b",
                role: "5c7d24228920ba0888dd9698"
            }
        ],
    },
    {
        _id: "5c7d24ee8920ba0888dd969a",
        name: "tohnithan",
        date: "12/10/2019",
        discussion_roles: [
            {
                discussion_people: [
                    "5c7d24b28920ba0888dd9699"
                ],
                _id: "5c7d24ee8920ba0888dd969b",
                role: "5c7d24228920ba0888dd9698"
            }
        ],
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
                    discussion={discussion}
                />
            )}
        </div>
    )
}

DiscussionPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DiscussionPage);