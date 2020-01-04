// View

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import {
//     List,
//     ListItem,
//     ListItemIcon,
//     ListItemSecondaryAction,
//     ListItemText,
//     Switch,
// } from '@material-ui/core/';
// import {
//     Icon,
// } from './';

const useStyles = makeStyles(theme => ({
    view: {
        width: '100%',
        // maxWidth: 360,
        //backgroundColor: theme.palette.background.paper,
        border: '1px solid white',
    },
}));

export default function View() {
    const classes = useStyles();

    return (
        <div className={classes.view}>
            view
        </div>
    );
}
