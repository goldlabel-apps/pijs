import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import {
//     IconButton,
//     Typography
// } from '@material-ui/core/';
import {
    Camera,
    Logo,
    UserEntity,
} from './';

const useStyles = makeStyles(theme => ({
    stage: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#212121',
    }
}));

export default function View() {
    const classes = useStyles();

    return (
        <div className={classes.stage}>
            <Logo />
            <Camera />
            <UserEntity />
        </div>
    );
}
