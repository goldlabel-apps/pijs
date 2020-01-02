import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../theme/AppShell.Style';
import {
    CardContent,
    CardHeader,
} from '@material-ui/core/';
import {
    Icon,
    Environment,
} from './';

class Home extends Component {

    render() {
        const {
            classes,
        } = this.props;
        return (
            <React.Fragment>
                <CardHeader
                    title={`PiJS.app`}
                    avatar={<Icon
                        icon={`pi`}
                        color={`primary`}
                    />}
                />
                <CardContent>
                    <div className={classes.mainImage}>
                        <img
                            src={`/jpg/twin-towers.jpg`}
                            alt={`What's bred in the bone?`} />
                    </div>

                    <Environment />
                </CardContent>
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