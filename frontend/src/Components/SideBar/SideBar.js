import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import MaxSizeSideBar from './MaxSizeSideBar/MaxSizeSideBar';
import NotMaxSizeSideBar from './NotMaxSizeSideBar/NotMaxSizeSideBar';

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
    }
});

class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listItems: this.getListItems(),
            selected: undefined,
        }
    }

    getListItems = () => (
        [
            {id: 0, url: '/', text: 'דף בית'},
            {id: 1, url: '/discussionPage', text: 'דש"בים'},
            {id: 2, url: '/settingsPage', text: 'הגדרות'},
        ]
    );

    isScreenSizeMax = () => (
        !(window.outerHeight < window.screen.availHeight &&
            window.outerWidth < window.screen.availWidth)
    );

    updateScreenSize = () => {
        this.setState({
            isMaxSize: this.isScreenSizeMax()
        })
    };

    componentWillMount() {
        this.updateScreenSize();
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateScreenSize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateScreenSize);
    }

    render() {
        const { classes } = this.props;
        { return this.state.isMaxSize ? <MaxSizeSideBar/> : <NotMaxSizeSideBar/> }
    }
}

SideBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideBar);