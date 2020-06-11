import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import commonStyles from '../theme/commonStyles'
import { useTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Switch,
    // Typography,
} from '@material-ui/core/'

const style = makeStyles(theme => ({
    switchTheme: {
    },
    textColor: {
        color: theme.palette.text.main,

    },
    pad: {
        paddingTop: theme.spacing()
    }
}));

export default function SwitchTheme() {
    const dispatch = useDispatch()
    const classesCommon = commonStyles();
    const classes = style(useTheme());
    const {
        app,
    } = useSelector(state => state)
    const { mode } = app.theme

    return (
        <div className={classes.switchTheme}>
            <Grid container>
                {/* <Grid item className={classes.pad}>
                    <Typography variant={`body2`} className={classes.textColor}>
                        light
                    </Typography>
                </Grid> */}
                <Grid item>
                    <Switch
                        className={classesCommon.none}
                        checked={mode === `dark` ? true : false}
                        color={`primary`}
                        onChange={(e) => {
                            dispatch({
                                type: `APP/THEME/SWITCH`,
                                newMode: mode === `dark` ? `light` : `dark`
                            })
                        }}
                    />
                </Grid>
                {/* <Grid item className={classes.pad}>
                    <Typography variant={`body2`} className={classes.textColor}>
                        dark
                    </Typography>
                </Grid> */}
            </Grid>
        </div>
    );
}









/*

   Typography,
    AppBar,
    Toolbar,
    IconButton,


        <div className={classes.app}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Github color={`rgba(255,255,255,0.25)`} />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Appbar
                     </Typography>
                    <Button
                        variant={`contained`}
                        color={`secondary`}
                        onClick={(e) => {
                            window.open(`https://github.com/listingslab-hardware/pijs-app`,`_blank`)
                        }}>
                        Github
                    </Button>
                </Toolbar>
            </AppBar>
            <div className={classes.appInner}>
                <Button
                    className={classes.btn}
                    variant={`contained`}
                    color={`primary`}
                    onClick={(e) => {
                        e.preventDefault()
                    }}>
                    Primary
                </Button>
                <Button
                    className={classes.btn}
                    variant={`contained`}
                    color={`secondary`}
                    onClick={(e) => {
                        e.preventDefault()
                    }}>
                    Secondary
                </Button>
                <Typography className={classes.fingerprint}>
                    {entity.fingerprint}
                </Typography>
            </div>
        </div>
*/