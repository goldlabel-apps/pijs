import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../theme/AppShell.Style';
import {
    CardHeader,
} from '@material-ui/core/';
import {
    Icon,
    Television,
} from './';

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <CardHeader
                    // title={`PiJS.app`}
                    avatar={<Icon
                        icon={``}
                        color={`primary`}
                    />}
                />
                <Television />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        store,
        pijs: store.system.pijs,
        weather: store.weather
    };
};

export default (connect(
    mapStateToProps,
    null
)(withStyles(styles, { withTheme: true })(withRouter(Home))));