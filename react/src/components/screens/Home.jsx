import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    Card,
    CardContent,
    CardMedia,
    CardHeader,
    Grid,
} from '@material-ui/core/';
import {
    Icon,
    Map,
    Environment,
    ScreenHeader,
} from '../';

class Home extends Component {

    render() {
        const {
            classes,
        } = this.props;
        return (

            <React.Fragment>
                <ScreenHeader title={`PiJS.app`} icon={`pi`} isHome={true} />
                <CardContent>
                    <Grid container>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardHeader
                                    title={`Webcam`}
                                    avatar={<Icon
                                        icon={`webcam`}
                                        color={`primary`}
                                    />}
                                />
                                <div className={classes.cardStuff}>
                                    <CardMedia
                                        className={classes.media}
                                        title={`What is a Raspberry Pi?`}
                                        image={`https://pijs.app/jpg/current-photo.jpg`}
                                    />
                                </div>

                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardHeader
                                    title={`Map`}
                                    avatar={<Icon
                                        icon={`map`}
                                        color={`primary`}
                                    />}
                                />
                                <div className={classes.cardStuff}>
                                    <Map />
                                </div>
                            </Card>
                        </Grid>


                        <Grid item xs={12} sm={6} md={4}>
                            <Environment />
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