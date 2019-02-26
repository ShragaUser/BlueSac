import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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
        backgroundColor: '#f2f2f2'
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
            selected: undefined
        }
    }

    getListItems() {
        return (
            [
                {id: 0, url: '/', text: 'דף בית'},
                {id: 1, url: '/discussionPage', text: 'דש"בים'},
                {id: 2, url: '/settingsPage', text: 'הגדרות'}
            ]
        )
    }

    handleClick(id, event) {
        this.setState({ selected: id })
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Drawer
                    anchor="right"
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.toolbar}/>
                    <List component="nav">
                        {this.state.listItems.map(item =>
                            <ListItem
                                key={item.id}
                                button
                                onClick={this.handleClick.bind(this, item.id)}
                                component={Link}
                                to={item.url}
                                selected={this.state.selected === item.id}>
                                <div className={classes.listItem}>
                                    <ListItemIcon><InboxIcon/></ListItemIcon>
                                    <ListItemText primary={item.text}/>
                                </div>
                            </ListItem>
                        )}
                    </List>
                </Drawer>
            </div>
        )
    }
}

SideBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideBar);

