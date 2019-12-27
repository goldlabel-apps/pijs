import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    pingPi
} from '../../redux/system/actions';
import { withRouter } from "react-router";
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    Card,
    CardContent,
    Grid,
    Typography,
} from '@material-ui/core/';
import {
    Nav,
} from '../';

class Home extends Component {

    componentDidMount() {
        const { data, fetching } = this.props.pijs;
        if (data === null && !fetching) {
            pingPi();
        }
    }

    render() {
        const {
            classes,
        } = this.props;
        return (
            <div className={cn(classes.screenCentered)}>
                <Card className={cn(classes.screenCard)}>

                    <CardContent>
                        <Grid container>

                            <Grid item xs={12} md={4}>
                                <Nav isHome={true} />
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Typography variant={`h2`}>
                                    PiJS is an Open Source React PWA with Secure SSL Node/Express server running on a Raspberry Pi 4
                                </Typography>
                            </Grid>

                        </Grid>
                    </CardContent>
                </Card>
            </div>
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