import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    boot: {
        background: '#212121',
        border: '1px solid #212121',
        height: '100vh',
    },
    message: {
        margin: theme.spacing(1),
        fontSize: '1rem',
        color: 'white',
    },
}));

export default function Boot() {
    const classes = useStyles();
    const {
        boot,
    } = useSelector(state => state.system);
    const { consoleMessage } = boot;
    const {
        cursorOn,
        // command,
    } = boot;
    const createMarkup = () => {
        let message = consoleMessage;
        // message = command ? `${message} ${command}` : message;
        message = cursorOn ? `${message} _` : message;
        return { __html: message};
    };
    return (
        <div className={classes.boot}>
            <div
                className={classes.message}
                dangerouslySetInnerHTML={createMarkup()} />
        </div>
    );
}
