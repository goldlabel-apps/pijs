import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../theme/AppShell.Style';
import cn from 'classnames';
import {
    Button,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core/';
import { Icon } from './';
import { PiJSSVG } from '../graphics';
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
            <React.Fragment>
                <Drawer
                    className={cn(classes.nav)}
                    anchor="top"
                    open={open}
                    onClose={() => {
                        store.dispatch({ type: "SYSTEM/NAV/CLOSE" });
                    }}>
                    <Button
                        fullWidth
                        color={`secondary`}
                        variant={`contained`}
                        onClick={(e) => {
                            e.preventDefault();
                            store.dispatch({ type: "SYSTEM/NAV/CLOSE" });
                        }}
                    >
                        <PiJSSVG className={cn(classes.piJSLogo)} />
                    </Button>
                    <List>
                        <ListItem button
                            onClick={(e) => {
                                this.navClick(`/`)
                            }}>
                            <ListItemIcon>
                                <Icon icon={`home`} />
                            </ListItemIcon>
                            <ListItemText primary={`Home`} />
                        </ListItem>

                        <ListItem button
                            onClick={(e) => {
                                this.navClick(`/webcam`)
                            }}>
                            <ListItemIcon>
                                <Icon icon={`webcam`} />
                            </ListItemIcon>
                            <ListItemText primary={`Webcam`} />
                        </ListItem>

                        <ListItem button
                            onClick={(e) => {
                                this.navClick(`/map`)
                            }}>
                            <ListItemIcon>
                                <Icon icon={`map`} />
                            </ListItemIcon>
                            <ListItemText primary={`Map`} />
                        </ListItem>

                        <ListItem button
                            onClick={(e) => {
                                this.navClick(`/weather`)
                            }}>
                            <ListItemIcon>
                                <Icon icon={`weather`} />
                            </ListItemIcon>
                            <ListItemText primary={`Weather`} />
                        </ListItem>
                        <Divider />

                        <ListItem button
                            onClick={(e) => {
                                window.open(`https://github.com/listingslab-hardware/pijs`, `_blank`)
                            }}>
                            <ListItemIcon>
                                <Icon icon={`github`} color={`#F1DD3F`} />
                            </ListItemIcon>
                            <ListItemText primary={`Github`} />
                        </ListItem>
                    </List>
                </Drawer>
            </React.Fragment>
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
