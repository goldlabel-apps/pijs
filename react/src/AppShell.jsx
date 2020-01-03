import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './theme/AppShell.Style';
import muiTheme from './theme/mui';
import {
    CssBaseline,
} from '@material-ui/core/';

import {
    ClockWork,
    Home,
    NotFound,
} from './components';

class AppShell extends Component {

    render() {
        const {
            classes,
        } = this.props;
        return (
            <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
                <div className={classes.appShell}>
                    <ClockWork />
                    <CssBaseline />
                    <Router>
                        <Switch>
                            <Route exact path="/" render={props => {
                                return (<Home />);
                            }} />
                            <Route component={NotFound} />
                        </Switch>
                    </Router>
                    {/* <BottomAppBar /> */}
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
