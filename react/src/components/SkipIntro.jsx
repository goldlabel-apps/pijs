import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PiJSSVG from '../graphics/PiJSSVG';

const useStyles = makeStyles(theme => ({
    stage: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#212121',
    },
    logo: {
        width: 300,
        height: 300,
    },
    svg: {
        height: '100%',
        width: '100%',
    }
}));

export default function SkipIntro() {
    const classes = useStyles();

    return (
        <div className={classes.stage}>
            <div className={classes.logo}>
                <PiJSSVG className={classes.svg} />
            </div>
        </div>
    );
}
