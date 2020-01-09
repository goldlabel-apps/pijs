import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import {
//     IconButton,
//     Typography
// } from '@material-ui/core/';
import {
    BottomAppBar,
    MenuAppBar,
    SpeedDialMenu,
} from './';

const useStyles = makeStyles(theme => ({
    view: {
        backgroundColor: '#212121',
        minHeight: '100vh',
    }
}));

export default function View() {
    const classes = useStyles();

    return (
        <React.Fragment>
            
            <div className={classes.view}>
                <MenuAppBar />
                <SpeedDialMenu />
                <BottomAppBar />
            </div>
        </React.Fragment>
    );
}









/*
        <div className={classes.stage}>
            <Logo />
            <Camera />
            <UserEntity />
        </div>
*/