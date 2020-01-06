import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    IconButton,
    Typography
} from '@material-ui/core/';

import {
    Icon,
    // Message,
} from './';

const useStyles = makeStyles(theme => ({
    stage: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#212121',
        
    },
    logo: {
        display: 'flex',
    },
    logoText: {
        color: '#F1DD3F',
        marginTop: theme.spacing(0.65)
    }
}));

export default function View() {
    const classes = useStyles();

    return (
        <div className={classes.stage}>

            <div
                id={`logo`}
                className={classes.logo}>
                <IconButton
                    onClick={(e) => { 
                        e.preventDefault();
                    }}>
                    <Icon icon={`pi`} />
                </IconButton>
                <Typography
                    className={classes.logoText}
                    variant={`h4`}>
                    PiJS.app
                </Typography>
            </div>
        </div>
    );
}
