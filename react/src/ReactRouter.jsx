import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import muiTheme from './theme/mui';
import styles from './theme/commonStyles';
import {
    Dashboard,
    NotFound,
} from './components';

class ReactRouter extends Component {

    render() {
        return (
            <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
                <React.Fragment>
                    <Router>
                        <Switch>
                            <Route exact path="/" render={props => {
                                return (<Dashboard />);
                            }} />
                            <Route component={NotFound} />
                        </Switch>
                    </Router>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(ReactRouter)
);
