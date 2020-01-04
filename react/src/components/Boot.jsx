import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import {
//     Typography,
// } from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
    boot: {
    },
}));

export default function Boot() {
    const classes = useStyles();

    return (
        <div className={classes.boot}>
            boot
        </div>
    );
}
