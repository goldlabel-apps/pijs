import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
} from '@material-ui/core/';
import {
    Camera,
    Dock,
    UserEntity,
    Weather,
} from './';

const useStyles = makeStyles(theme => ({
    view: {
        backgroundColor: '#000', // '#212121'
        minHeight: '100vh',
    },
}));

export default function View() {
    const classes = useStyles();
    const {
        camera,
        userEntity,
        weather,
    } = useSelector(state => state.system);
    const cameraOpen = camera.open;
    const userEntityOpen = userEntity.open;
    const weatherOpen = weather.open;
    return (
        <React.Fragment>
            <div className={classes.view}>
                <Grid container>
                    
                    
                    
                    {cameraOpen ? <Grid item xs={12} sm={6} md={4}>
                        <Camera />
                    </Grid> : null}

                    {weatherOpen ? <Grid item xs={12} sm={6} md={4}>
                        <Weather />
                    </Grid> : null}

                    {userEntityOpen ? <Grid item xs={12} sm={6} md={4}>
                        <UserEntity />
                    </Grid> : null}
                    
                </Grid>
                <Dock />
            </div>
        </React.Fragment>
    );
}
