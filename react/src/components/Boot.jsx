import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
// import {
//     Typography,
// } from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
    boot: {
        background: '#212121',
        border: '1px solid #212121',
        height: '100vh',
    },
    message: {
        margin: theme.spacing(2),
        fontFamily: 'Monaco, monospace',
        fontSize: 30,
        color: 'white',
    }
}));

export default function Boot() {
    const classes = useStyles();
    let { consoleMessage } = useSelector(state => state.system.boot);

    return (
        <div className={classes.boot}>
            <div className={classes.message}>
                {consoleMessage}
            </div>
            
        </div>
    );
}
