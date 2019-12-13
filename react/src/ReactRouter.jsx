import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = (store) => {
    return {
        store
    };
  };
  
  export default (connect(
      mapStateToProps,
      null
)(withStyles(styles, { withTheme: true })(ReactRouter)));
