import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    CardContent,
    Grid,
    Typography,
} from '@material-ui/core/';
import {
    Nav,
    ScreenHeader,
} from '../';

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <ScreenHeader title={`PiJS.app`} icon={`pi`} isHome={true} />
                <CardContent>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Typography variant={`body1`} gutterBottom>
                                Open Source React PWA by Listingslab with Secure SSL Node/Express server running on a Raspberry Pi 4
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Nav />
                        </Grid>
                    </Grid>
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