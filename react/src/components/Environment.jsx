import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../theme/AppShell.Style';
import {
    Card,
    CardContent,
    CardHeader,
    Typography,
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
        const { classes } = this.props;
        const {
            pijs,
        } = this.props.store.system;
        if (!pijs.data) {
            return null;
        }
        // const { updated } = pijs.data;
        const { lux, pressure, rgb, temperature } = pijs.data.envirophat;
        // console.log(pijs.data.envirophat)
        return (
            <React.Fragment>
                <Card className={classes.card}>
                    <CardHeader
                        title={`Environment`}
                        avatar={<Icon
                            icon={`environment`}
                            color={`primary`}
                        />}
                    />
                    <div className={classes.cardStuff}>
                        <CardContent>
                            <div style={{
                                float: 'right',
                                background: `rgba(${rgb}, 1)`,
                                height: 16,
                                width: 16,
                                borderRadius: 4
                            }} />

                            <Typography variant={`body1`}>
                                Temperature in Celsius <strong>{Math.round(temperature)} &deg; C</strong>
                            </Typography>

                            <Typography variant={`body1`}>
                                Atmospheric pressure <strong>{Math.round(pressure)} hPa</strong>
                            </Typography>

                            <Typography variant={`body1`}>
                                Lumens per square meter: <strong>{lux} lux</strong>
                            </Typography>

                        </CardContent>
                    </div>
                </Card>
            </React.Fragment >
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
