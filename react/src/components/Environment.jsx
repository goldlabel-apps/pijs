import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../theme/AppShell.Style';
import {
    Button,
    Tooltip,
} from '@material-ui/core/';
import { getStore } from "../";

class Environment extends Component {

    navClick = (path, target) => {
        const {
            history
        } = this.props;
        const store = getStore();
        if (target) {
            window.open(path, target)
        } else {
            history.push(path);
        }
        store.dispatch({ type: "SYSTEM/NAV/CLOSE" });
    }

    render() {
        const { classes } = this.props;
        const {
            pijs,
        } = this.props.store.system;
        if (!pijs.data) {
            return null;
        }
        // const { updated } = pijs.data;
        const { lux, pressure, temperature } = pijs.data.envirophat;
        // console.log(pijs.data.envirophat)
        return (
            <div className={classes.environment}>
                
                
                
            </div>
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
)(withStyles(styles, { withTheme: true })(withRouter(Environment))));
