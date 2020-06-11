import React from 'react'
import { useSelector } from 'react-redux'
import { useTheme, makeStyles } from '@material-ui/core/styles'
import commonStyles from '../theme/commonStyles'

import {
    Grid,
} from '@material-ui/core/'
import {
    Bottom,
    Snackbars,
    Camera,
    Weather,
    PrimaryAppBar,
    Map,
} from './'

const style = makeStyles(theme => ({
    shell: {
        height: "100vh",
        width: "100vw"
    }
}));

export default function Shell() {
    const classesCommon = commonStyles();
    const classes = style(useTheme());
    const reduxSlice = useSelector(state => state)
    const { data } = reduxSlice.app.pi
    let isNight = true
    if (parseFloat(data.lux) > 50){
        isNight = false
    }
    return (
        <div className={classes.shell}>
            <PrimaryAppBar className={classesCommon.none} />
            <Snackbars />
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                {!isNight ?
                    <Camera /> : <Map />
                }
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Weather />
                </Grid>
            </Grid>
            <Bottom />
        </div>
    );
}
