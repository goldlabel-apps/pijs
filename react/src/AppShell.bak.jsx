import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import { styles } from './theme/AppShell.Style';

import {
    CssBaseline,
} from '@material-ui/core/';

import {
    ClockWork,
    Home,
    NotFound,
} from './components';


        return (

                    
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
        );
    }
}

