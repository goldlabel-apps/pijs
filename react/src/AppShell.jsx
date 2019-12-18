import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStore } from "./";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './theme/AppShell.Style';
import {
    Button,
    CssBaseline,
} from '@material-ui/core/';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import muiTheme from './theme/muiWhitelabel';
import { PiJSSVG } from './graphics';
import {
    Home,
    Map,
    Nav,
    NotFound,
    Weather,
    Webcam,
} from './components';

class AppShell extends Component {

    render() {
        const {
            classes,
        } = this.props;
        const store = getStore();
        const bHg = true;
        return (
            <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
                <div className={cn(classes.appShell)}>
                    <CssBaseline />
                    {!bHg ?

                        <Button
                            fullWidth
                            className={cn(classes.navCallout)}
                            color={`primary`}
                            variant={`contained`}
                            onClick={(e) => {
                                e.preventDefault();
                                store.dispatch({ type: "SYSTEM/NAV/OPEN" });
                            }}
                        >
                            <PiJSSVG className={cn(classes.piJSLogo)} />
                        </Button>
                        : null}
                    <main>
                        <Router>
                            <Nav />
                            <Switch>
                                <Route exact path="/" render={props => {
                                    return (<Home />);
                                }} />
                                <Route exact path="/webcam" render={props => {
                                    return (<Webcam mode={`full`} />);
                                }} />
                                <Route exact path="/map" render={props => {
                                    return (<Map mode={`full`} />);
                                }} />
                                <Route exact path="/weather" render={props => {
                                    return (<Weather mode={`full`} />);
                                }} />
                                <Route component={NotFound} />
                            </Switch>
                        </Router>
                    </main>
                </div>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        // store
        // nav: store.system.systemState.nav,
    };
};

export default (
    connect(
        mapStateToProps, null
    )(withStyles(styles, { withTheme: true })(AppShell))
);
