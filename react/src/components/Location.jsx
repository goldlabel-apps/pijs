import React, { Component } from 'react';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../theme/App.Style';
import ReactMapboxGl, { /*Layer, */Feature } from 'react-mapbox-gl';
import {
    CardHeader,
    CardContent,
    IconButton,
    Typography
} from '@material-ui/core/';
import {
    Icon
} from './';

const MapLocation = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAPBOX
});

class Location extends Component {

    state = {
        updated: Date.now(),
        timer: null,
        timerDelay: 60,
    }


    render() {
        const {
            classes,
        } = this.props;

        const showMap = false;


        return (
            <div className={cn(classes.view)}>
                <div className={cn(classes.pad)}>


                    <CardHeader
                        title={`Geo Location`}
                        avatar={<IconButton disabled color={`primary`}>
                            <Icon icon={`location`} />
                        </IconButton>}
                        action={<IconButton
                            color={`primary`}
                            onClick={(e) => {
                                e.preventDefault();
                                window.open(`https://www.iplocation.net`, `_blank`)
                            }}>
                            <Icon icon={`link`} />
                        </IconButton>}
                    />

                    <CardContent>
                        <Typography variant={`body1`}>
                            Australia, Queensland <br />
                            Fortitude Valley <br />
                            <strong>Latitude</strong> -27.4571 <br />
                            <strong>Longitude</strong> -27.4571 <br />
                            <strong>IP</strong> 141.168.211.166 <br />
                            <strong>ISP</strong> Telstra Internet <br />
                        </Typography>
                        {showMap ? (
                            <MapLocation
                                // eslint-disable-next-line react/style-prop-object
                                style="mapbox://styles/mapbox/streets-v9"
                                containerStyle={{
                                    height: '180px',
                                    width: '100%'
                                }}
                            >
                                <Feature coordinates={[-0.13235092163085938, 153.0318]} />
                            </MapLocation>
                        ) : null}

                    </CardContent>
                </div>
            </div>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(Location))
);
