import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import {
//     Fab
// } from '@material-ui/core/';
// import {
//     Icon,
// } from './'

const useStyles = makeStyles(theme => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        background: 'none',
        boxShadow: 'none',
        border: 'none'
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    paper: {
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    grow: {
        flexGrow: 1,
    },
}));

export default function Bottom() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar position="fixed" color="secondary" className={classes.appBar}>
                <Toolbar>
                    {/* <Fab
                        className={classes.fabButton}
                        color={`secondary`}
                        aria-label={`Call to action`}
                        onClick={(e) => {
                            e.preventDefault()
                            console.log('Call to action')
                        }}>
                        <Icon icon={`contact`} color={`inherit`} />
                    </Fab> */}
                    <div className={classes.grow} />
                    <div style={{ width: 50 }} />
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
