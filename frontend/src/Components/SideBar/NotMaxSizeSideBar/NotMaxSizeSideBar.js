import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        // display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        borderWidth: 0,
        backgroundColor: theme.palette.background.default
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    toolbar: theme.mixins.toolbar,
    listItem: {
        display: 'flex',
    },
    menuButton: {
        position: 'fixed',
        top: 50,
        left: 10
    }
});

class NotMaxSizeSideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listItems: this.getListItems(),
            selected: undefined,
            isOpen: false
        }
    }

    getListItems = () => (
        [
            {id: 0, url: '/', text: 'דף בית'},
            {id: 1, url: '/discussionPage', text: 'דש"בים'},
            {id: 2, url: '/settingsPage', text: 'הגדרות'},
        ]
    );

    toggleSideBar = () => {
        this.setState(prevState => ({
                isOpen: !prevState.isOpen
        }))
    };

    handleClick = (id, event) => {
        this.setState({ selected: id })
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.toggleSideBar}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer open={this.state.isOpen} onClose={this.toggleSideBar}>
                    <div>i am a drawer</div>
                </Drawer>
            </div>
        )
    }
}

NotMaxSizeSideBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotMaxSizeSideBar);