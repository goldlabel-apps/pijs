import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import {
//     Avatar,
//     List,
//     ListItem,
//     ListItemText,
//     ListItemAvatar,
//     Typography,
// } from '@material-ui/core/';
// import { CompositeVid } from './';

const useStyles = makeStyles(theme => ({
    home: {
        width: '100%',
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.home}>
            Home
        </div>
    );
}