import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Paper,
    Typography,
} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
            padding: theme.spacing(1),
            width: '100%',
        },
    },
    infoPaper: {
        marginRight: theme.spacing(),
        marginLeft: theme.spacing(),
        boxShadow: 'none',
    },
}));

export default function PiJS() {
    const classes = useStyles();

    return (
        <Paper variant="outlined" className={classes.infoPaper}>
            <Typography gutterBottom variant={`h5`}>
                About PiJS
                </Typography>
            <Typography gutterBottom variant={`body1`}>

                PiJS is a React PWA with Secure SSL Node/Express server running on a Raspberry Pi 4. The Raspberry Pi is a very low cost, credit-card sized computer. It is a capable little device that enables people of all ages to explore computing, and to learn how to program in languages like Python.
            </Typography>
        </Paper>
    );
}