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
}));

export default function PiJS() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper variant="outlined">
                <Typography gutterBottom variant={`h5`}>
                    About PiJS
                </Typography>
                <Typography gutterBottom variant={`body1`}>

                    PiJS is a React PWA with Secure SSL Node/Express server running on a Raspberry Pi 4. The Raspberry Pi is a very low cost, credit-card sized computer. It is a capable little device that enables people of all ages to explore computing, and to learn how to program in languages like Python.

                    {/* It can also give more experienced developers a chance to do some mad cool stuff they wouldn’t normally do. We’re going to turn our Pi into a Node server, connected to the interweb through an everyday broadband connection. */}
                </Typography>

                {/* <Typography gutterBottom variant={`h5`}>
                                    {moment.unix(Date.now() / 1000).format(`dddd, MMM Do, h:mm:ss a`)}
                                </Typography>

                                <Typography gutterBottom variant={`body1`}>
                                    Located in {region}, {state}, {country}
                                </Typography> */}

                {/* <Typography gutterBottom variant={`body2`}>
                                    Last checked {lastChecked}
                                    ({Date.now() - time})
                                </Typography>

                                <Typography gutterBottom>
                                    Current pi evironment: light | dark
                                </Typography> */}
            </Paper>
        </div>
    );
}