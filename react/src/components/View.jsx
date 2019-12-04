import React, { Component } from 'react';
import moment from 'moment';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../theme/App.Style';
import {
    Avatar,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Typography
} from '@material-ui/core/';
import {
    Icon,
    Location,
    ViewActions
} from './';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAPBOX
});

class View extends Component {

    state = {
        updated: Date.now(),
        timer: null,
        timerDelay: 60,
    }

    componentDidMount() {
        const {
            timer,
            timerDelay
        } = this.state;
        if (!timer) {
            this.setState({ timer: setInterval(this.update, timerDelay * 1000) });
        }
    }

    componentWillUnmount() {
        const {
            timer
        } = this.state;
        clearInterval(timer);
    }

    update = () => {
        this.setState({ updated: Date.now() })
    }

    render() {
        const {
            classes,
        } = this.props;
        const currentPhotoUrl = `http://pi.listingslab.io/jpg/current-photo.jpg?cb=${Date.now()}`;
        const momented = moment(Date.now()).format(`dddd, MMMM Do YYYY, h:mm:ss a`);

        return (
            <div className={cn(classes.view)}>
                <div className={cn(classes.pad)}>
                    <Card className={cn(classes.card)}>
                        <CardHeader
                            title={`Pi Node Server`}
                            subheader={`Your local time :${momented}`}
                            avatar={(
                                <Avatar
                                    alt={`Pi Serer`}
                                    className={classes.avatar}>
                                    <Icon icon={`pi`} />
                                </Avatar>
                            )}
                            action={
                                <ViewActions />
                            }
                        />

                        <CardContent>
                            <Location />

                            <Map
                                // eslint-disable-next-line react/style-prop-object
                                style="mapbox://styles/mapbox/streets-v9"
                                containerStyle={{
                                    height: '250px',
                                    width: '100%'
                                }}
                            >
                                <Feature coordinates={[-0.13235092163085938, 51.518250335096376]} />
                            </Map>

                            <Typography variant={`h5`}>
                                Live Image
                            </Typography>

                            <CardMedia
                                className={classes.media}
                                image={currentPhotoUrl}
                                alt={`Current Photo`}
                            />
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(View))
);
