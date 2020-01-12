import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getStore } from '../';
import {
    Typography,
    IconButton,
} from '@material-ui/core/';
import {
    Icon,
} from './';

const useStyles = makeStyles(theme => ({
    logo: {
        display: 'flex',
        marginRight: theme.spacing(4),
    },
    logoText: {
        color: '#F1DD3F',
        marginTop: theme.spacing(1.2),
        marginLeft: theme.spacing()
    },
}));

function Logo() {
    const classes = useStyles();
    const store = getStore();
    return (
        <div
            id={`logo`}
            className={classes.logo}>
            <IconButton
                onClick={(e) => {
                    e.preventDefault();
                    store.dispatch({ type: `CAMERA/OPEN` });
                    store.dispatch({ type: `WEATHER/OPEN` });
                    store.dispatch({ type: `SYSTEM/USERENTITY/OPEN` });
                }}>
                <Icon icon={`pi`} />
            </IconButton>
            <Typography
                className={classes.logoText}
                variant={`h6`}>
                PiJS.app
            </Typography>
        </div>
    );
}

const MemodFuncComponent = React.memo(Logo);
export default MemodFuncComponent;