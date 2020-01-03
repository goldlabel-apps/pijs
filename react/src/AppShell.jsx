import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStore } from "./";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './theme/AppShell.Style';
import muiTheme from './theme/mui';
import {
    CssBaseline,
    Drawer,
} from '@material-ui/core/';

import {
    BottomAppBar,
    ClockWork,
    Home,
    Nav,
    NotFound,
} from './components';

class AppShell extends Component {

    render() {
        const {
            classes,
            nav,
        } = this.props;
        const { open } = nav
        const store = getStore();

        return (
            <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
                <div className={classes.appShell}>
                    <ClockWork />
                    <CssBaseline />
                    <Router>
                        <nav className={classes.navDrawer} aria-label="Nav">
                            <Drawer
                                className={classes.navDrawerWidth}
                                anchor={`bottom`}
                                open={open}
                                onClose={() => {
                                    store.dispatch({ type: "SYSTEM/NAV/CLOSE" });
                                }}>
                                <Nav />
                            </Drawer >
                        </nav >
                        <Switch>
                            <Route exact path="/" render={props => {
                                return (<Home />);
                            }} />
                            <Route component={NotFound} />
                        </Switch>
                    </Router>
                    <BottomAppBar />
                </div>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        nav: store.system.nav,
    };
};

export default (
    connect(
        mapStateToProps, null
    )(withStyles(styles, { withTheme: true })(AppShell))
);
