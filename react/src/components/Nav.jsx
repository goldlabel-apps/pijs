import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../theme/AppShell.Style';
import cn from 'classnames';
import {
    Button,
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

    render() {
        const {
            classes,
            nav
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
                        color={`primary`}
                        variant={`contained`}
                        onClick={(e) => {
                            e.preventDefault();
                            store.dispatch({ type: "SYSTEM/NAV/CLOSE" });
                        }}
                    >
                        <PiJSSVG className={cn(classes.piJSLogo)} />
                    </Button>
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <Icon icon={`home`} />
                            </ListItemIcon>
                            <ListItemText primary={`Dashboard`} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <Icon icon={`webcam`} />
                            </ListItemIcon>
                            <ListItemText primary={`Webcam`} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <Icon icon={`map`} />
                            </ListItemIcon>
                            <ListItemText primary={`Map`} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <Icon icon={`weather`} />
                            </ListItemIcon>
                            <ListItemText primary={`Weather`} />
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
)(withStyles(styles, { withTheme: true })(Nav)));
