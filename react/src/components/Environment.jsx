import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../theme/AppShell.Style';
import {
    CardHeader,
    // Typography
} from '@material-ui/core/';
import { Icon } from './';
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
        // const {
        //     classes,
        // } = this.props;
        return (
            <React.Fragment>
                <CardHeader
                    title={`Environment`}
                    avatar={<Icon
                        icon={`enviro`}
                        color={`primary`}
                    />}
                />
            </React.Fragment >
        );
    }
}


const mapStateToProps = (store) => {
    return {
        nav: store.system.nav,
    };
};

export default (connect(
    mapStateToProps,
    null
)(withStyles(styles, { withTheme: true })(withRouter(Environment))));
