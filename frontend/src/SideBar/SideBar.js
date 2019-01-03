import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import {Link} from "react-router-dom";

const styles = style => ({
    toolbar: style.mixins.toolbar,

});

function SideBar(props) {
    return(
        <Drawer
            variant="persistent"
            anchor="right"
            open={props.open}
        >
            <div className={styles.toolbar} />
            <ul>
                <li>
                </li>
                <li>
                </li>
                <li>
                    <Link to='/personPage'>person page</Link>

                </li>
                <li>
                    <Link to='/'>home page</Link>
                </li>
            </ul>
        </Drawer>
    )
}

export default SideBar;