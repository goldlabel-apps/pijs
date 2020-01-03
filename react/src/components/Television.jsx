import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import {
    Button,
    Tooltip,
    // Typography,
} from '@material-ui/core';
// import {
//     Environment,
// } from './';

const useStyles = makeStyles(theme => ({
    television: {
    },
    tvImage: {
        position: 'absolute',
    },
    environment: {
        maxWidth: 360,
        position: 'relative',
        top: theme.spacing(),
        left: theme.spacing(),
        padding: theme.spacing(),
        borderRadius: theme.spacing(0.5),
        // background: 'rgba(255,255,255,0.65)',
    },
    environmentBtn: {
        marginRight: theme.spacing()
    }
}));

function Television(props) {
    const classes = useStyles();
    const { currentPhotoURL} = useSelector(state => state.webcam);
    console.log(currentPhotoURL)
    return (
        <div className={classes.television}>
            <div className={classes.tvImage}>
                <img
                    alt={`What's bred in the bone?`}
                    src={`/television/default.jpg`}
                />
            </div>
            <div className={classes.environment}>
                <Tooltip title={`Temperature in Celsius`}>
                    <Button
                        className={classes.environmentBtn}
                        variant={`contained`}
                        color={`primary`}>
                        {Math.round(55) - 18} &deg; C
                    </Button>
                </Tooltip>
                <Tooltip title={`Atmospheric pressure (hecto pascals)`}>
                    <Button
                        className={classes.environmentBtn}
                        variant={`contained`}
                        color={`primary`}>
                        {Math.round(1000)} hPa
                    </Button>
                </Tooltip>
                <Tooltip title={`Lumens per square meter`}>
                    <Button
                        className={classes.environmentBtn}
                        variant={`contained`}
                        color={`primary`}>
                        {1000} lux
                    </Button>
                </Tooltip>
            </div>
        </div>
    );
}

const MemodFuncComponent = React.memo(Television)
export default MemodFuncComponent
