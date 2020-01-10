import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
} from '@material-ui/core/';
import {
    // BottomAppBar,
    // MenuAppBar,
    // Logo,
    SpeedDialMenu,
    UserEntity,
} from './';

const useStyles = makeStyles(theme => ({
    view: {
        backgroundColor: '#000', // '#212121'
        minHeight: '100vh',
    },
}));

export default function View() {
    const classes = useStyles();

    return (
        <React.Fragment>
            {/* <MenuAppBar /> */}
            <div className={classes.view}>
                <SpeedDialMenu />
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            <UserEntity />
                        </Grid>
                        {/* <Grid item xs={12} sm={6}>
                            <Camera />
                        </Grid> */}
                    </Grid>
            </div>
            {/* <BottomAppBar /> */}
        </React.Fragment>
    );
}
