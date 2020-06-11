import React from 'react'
// import commonStyles from '../theme/commonStyles'
import { useTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles';
// import { useSelector } from 'react-redux';
import {
    Grid,
} from '@material-ui/core/'
import {
    Logo,
} from '../graphics'

const style = makeStyles(theme => ({
    ssr: {
        background: theme.palette.background.default,
    },
    logo: {
        width: 24,
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(2)
    }
}));

export default function SSR() {
    // const classesCommon = commonStyles();
    const classes = style(useTheme());
    return (
        <div id={`ssr`} className={classes.ssr}>
            <Grid container>
                <Grid item className={classes.logo}>
                    <Logo thememode={`light`} />
                </Grid>
                <Grid item className={classes.none}>
                    <h1 className={`h1Tag`}>PiJS.app</h1>
                </Grid>
            </Grid>
        </div>
    );
}
