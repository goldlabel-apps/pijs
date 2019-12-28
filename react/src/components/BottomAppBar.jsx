import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import { getStore } from "../";
import { Icon } from './';

const useStyles = makeStyles(theme => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        border: 'none',
        boxShadow: 'none',
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
}));

export default function BottomAppBar() {
    const classes = useStyles();
    const store = getStore();
    return (
        <AppBar
            position="fixed"
            color={`primary`}
            className={classes.appBar}>
            <Toolbar>
                <Fab
                    color={`secondary`}
                    aria-label="Navigation"
                    className={classes.fabButton}
                    onClick={(e) => {
                        e.preventDefault();
                        store.dispatch({ type: "SYSTEM/NAV/OPEN" });
                    }}>
                    <Icon icon={`pi`} color={`primary`} />
                </Fab>
                <div className={classes.grow} />
                <IconButton
                    edge="end"
                    color="inherit"
                    onClick={(e) => {
                        e.preventDefault();
                        store.dispatch({ type: "SYSTEM/SETTINGS/OPEN" });
                    }}  >
                    <Icon icon={`settings`} color={`secondary`} />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
