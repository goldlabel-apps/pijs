import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import {
    Typography,
} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
    systemTimer: {
        paddingTop: theme.spacing(1.5),
    },
    mutedText: {
        color: 'rgba(0,0,0,0.3)'
    }
}));

export default function SystemClock() {
    const classes = useStyles();
    const clockwork = useSelector(state => state.system.clockwork);
    const msToTime = (duration) => {
        let seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds;
    }
    const totalTime = msToTime(Date.now() - clockwork.started);

    return (
        <div className={classes.systemTimer}>
            <Typography variant={`button`} className={classes.mutedText}>
                {totalTime}
            </Typography>
        </div>
    );
}