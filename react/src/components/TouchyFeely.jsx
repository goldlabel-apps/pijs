import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import {
//     Button,
// } from '@material-ui/core/';
// import {
//     Icon,
// } from '../';

const useStyles = makeStyles(theme => ({
    btnIconPadRight: {
        border: '1px solid blue',
    },
}));

export default function TouchyFeely() {
    const classes = useStyles();

    return (
        <React.Fragment>
            TouchyFeely
        </React.Fragment>
    );
}