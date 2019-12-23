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
    CardHeader,
    CardContent,
    Grid,
    IconButton,
    Typography,
} from '@material-ui/core/';
import {
    Icon,
    Nav,
} from '../';
// import moment from 'moment';

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
            history,
        } = this.props;
        // let time = 0;
        // let region = `...`;
        // let state = `...`;
        // let country = `...`;
        // if (this.props.pijs !== null) {
        //     const { pijs } = this.props;
        //     if (this.props.pijs.data !== null) {
        //         const { location } = pijs.data.pijs
        //         time = location.time;
        //         region = location.region;
        //         state = location.state;
        //         country = location.country;
        //     }
        // }
        // const lastChecked = moment.unix(time / 1000).fromNow()

        return (
            <div className={cn(classes.screenCentered)}>
                <Card className={cn(classes.screenCard)}>
                    <CardHeader
                        className={cn(classes.screenHeader)}
                        title={`PiJS`}
                        avatar={
                            <IconButton
                                onClick={(e) => {
                                    e.preventDefault();
                                    history.push(`/`);
                                }}>
                                <Icon icon={`pi`} color={`primary`} />
                            </IconButton>
                        }
                    />
                    <CardContent>

                        <Grid container>


                            <Grid item xs={12} md={8}>
                                {/* <Typography gutterBottom variant={`h5`}>
                                    {moment.unix(Date.now() / 1000).format(`dddd, MMM Do, h:mm:ss a`)}
                                </Typography>

                                <Typography gutterBottom variant={`body1`}>
                                    Located in {region}, {state}, {country}
                                </Typography> */}

                                {/* <Typography gutterBottom variant={`body2`}>
                                    Last checked {lastChecked}
                                    ({Date.now() - time})
                                </Typography>

                                <Typography gutterBottom>
                                    Current pi evironment: light | dark
                                </Typography> */}

                                <Typography gutterBottom variant={`h5`}>
                                    Welsome to PiJS
                                </Typography>
                                <Typography gutterBottom variant={`body1`}>

                                    PiJS is a React PWA with Secure SSL Node/Express server running on a Raspberry Pi 4. The Raspberry Pi is a very low cost, credit-card sized computer. It is a capable little device that enables people of all ages to explore computing, and to learn how to program in languages like Python.

                                    {/*  It can also give more experienced developers a chance to do some mad cool stuff they wouldn’t normally do. We’re going to turn our Pi into a Node server, connected to the interweb through an everyday broadband connection. */}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <Nav isHome={true} />
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