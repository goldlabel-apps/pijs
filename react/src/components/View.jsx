import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
} from '@material-ui/core/';
import {
    BottomAppBar,
    MenuAppBar,
    Camera,
    UserEntity,
} from './';

const useStyles = makeStyles(theme => ({
    view: {
        // backgroundColor: '#212121',
        minHeight: '100vh',
    },
    content: {
        // backgroundColor: '#212121',
        marginTop: 75,
    }
}));

export default function View() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.view}>
                <MenuAppBar />
                {/* <SpeedDialMenu /> */}
                <div className={classes.content}>
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            <Camera />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <UserEntity />
                        </Grid>
                        
                    </Grid>
                </div>
                
                <BottomAppBar />
            </div>
        </React.Fragment>
    );
}









/*
        <div className={classes.stage}>
            <Logo />
            <Camera />
            <UserEntity />
        </div>
*/