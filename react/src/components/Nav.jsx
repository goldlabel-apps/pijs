import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../theme/AppShell.Style';
import cn from 'classnames';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core/';
import { Icon } from './';
// import { PiJSSVG } from '../graphics';
import { getStore } from "../";

class Nav extends Component {

    navClick = (path) => {
        const {
            history
        } = this.props;
        const store = getStore();
        history.push(path);
        store.dispatch({ type: "SYSTEM/NAV/CLOSE" });
    }

    render() {
        const {
            classes,
            nav,
        } = this.props;
        const { open } = nav
        const store = getStore();
        return (
            <nav className={cn(classes.navDrawer)} aria-label="Nav">
                <Drawer
                    className={cn(classes.navDrawerWidth)}
                    anchor={`bottom`}
                    open={open}
                    onClose={() => {
                        store.dispatch({ type: "SYSTEM/NAV/CLOSE" });
                    }}>

                    <List>
                        <ListItem button
                            onClick={(e) => {
                                this.navClick(`/`)
                            }}>
                            <ListItemIcon>
                                <Icon icon={`home`} color={`primary`} />
                            </ListItemIcon>
                            <ListItemText primary={`Home`} />
                        </ListItem>

                        <ListItem button
                            onClick={(e) => {
                                this.navClick(`/about`)
                            }}>
                            <ListItemIcon>
                                <Icon icon={`docs`} color={`primary`} />
                            </ListItemIcon>
                            <ListItemText primary={`About`} />
                        </ListItem>


                        <ListItem button
                            onClick={(e) => {
                                this.navClick(`/webcam`)
                            }}>
                            <ListItemIcon>
                                <Icon icon={`webcam`} color={`primary`} />
                            </ListItemIcon>
                            <ListItemText primary={`Webcam`} />
                        </ListItem>

                        <ListItem button
                            onClick={(e) => {
                                this.navClick(`/map`)
                            }}>
                            <ListItemIcon>
                                <Icon icon={`map`} color={`primary`} />
                            </ListItemIcon>
                            <ListItemText primary={`Map`} />
                        </ListItem>

                        <ListItem button
                            onClick={(e) => {
                                this.navClick(`/weather`)
                            }}>
                            <ListItemIcon>
                                <Icon icon={`weather`} color={`primary`} />
                            </ListItemIcon>
                            <ListItemText primary={`Weather`} />
                        </ListItem>


                    </List>
                </Drawer>
            </nav>
        );
    }
}


const mapStateToProps = (store) => {
    return {
        store,
        nav: store.system.nav,
    };
};

export default (connect(
    mapStateToProps,
    null
)(withStyles(styles, { withTheme: true })(withRouter(Nav))));
