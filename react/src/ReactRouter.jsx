import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import muiTheme from './theme/mui';
import styles from './theme/commonStyles';
import {
    View,
    NotFound,
} from './components';

class ReactRouter extends Component {

    render() {
        const {
            classes,
        } = this.props;

        return (
            <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
                <React.Fragment>
                    <div className={cn(classes.router)}>
                        <Router>
                            <Switch>
                                <Route exact path="/" render={props => {
                                    return (<View />);
                                }} />
                                <Route component={NotFound} />
                            </Switch>
                        </Router>
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(ReactRouter)
);
