import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
} from '@material-ui/core/';
import {
    Camera,
    Dock,
    Mapbox,
    UserEntity,
    Weather,
} from './';

const useStyles = makeStyles(theme => ({
    view: {
        backgroundColor: '#212121',
        minHeight: '100vh',
    },
    top: {
        margin: 'auto',
        maxWidth: 800,
    }
}));

export default function View() {
    const classes = useStyles();
    const {
        userEntity,
    } = useSelector(state => state.system);
    const {
        weather,
        camera,
    } = useSelector(state => state);
    const cameraOpen = camera.open;
    const userEntityOpen = userEntity.open;
    const weatherOpen = weather.open;
    return (
        <React.Fragment>
            <div className={classes.view}>
                <Grid container>

                    {cameraOpen ?
                        <Grid item xs={12} sm={6} md={8}>
                            <div className={classes.top}>
                                <Camera />
                                <Mapbox />
                            </div>
                        </Grid> : null}

                    {weatherOpen || userEntityOpen ?
                        <Grid item xs={12} sm={6} md={4}>
                            <div className={classes.none}>
                                <UserEntity />
                                <Weather />
                            </div>
                        </Grid> : null }
                        
                </Grid>
                <Dock />
            </div>
        </React.Fragment>
    );
}
