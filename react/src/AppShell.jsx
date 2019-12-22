import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './theme/AppShell.Style';
import {
    CssBaseline,
} from '@material-ui/core/';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import muiTheme from './theme/mui';
import {
    BottomAppBar,
    About,
    Home,
    Map,
    Nav,
    NotFound,
    Weather,
    Webcam,
    Settings,
} from './components';

class AppShell extends Component {

    render() {
        const {
            classes,
        } = this.props;

        return (
            <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
                <div className={cn(classes.appShell)}>
                    <CssBaseline />
                    <main>
                        <Router>
                            <Nav />
                            <Settings />
                            <Switch>
                                <Route exact path="/" render={props => {
                                    return (<Home />);
                                }} />
                                <Route exact path="/about" render={props => {
                                    return (<About />);
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
                    <BottomAppBar />
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
