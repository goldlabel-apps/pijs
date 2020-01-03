import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import {
    Button,
    Tooltip,
} from '@material-ui/core';
import {
    Icon,
} from './';

const useStyles = makeStyles(theme => ({
    television: {
    },
    tvImage: {
        position: 'absolute',
    },
    environment: {
        position: 'relative',
        display: 'block',
        top: theme.spacing(),
        left: theme.spacing(),
    },
    environmentBtn: {
        marginRight: theme.spacing()
    },
    environmentBtnText: {
        marginLeft: theme.spacing()
    }
}));

function Television(props) {
    const classes = useStyles();
    let { currentPhotoURL } = useSelector(state => state.webcam);
    // currentPhotoURL = `/television/twin-towers.jpg`;
    const { data } = useSelector(state => state.system.pijs);
    let showEnvironment = false;
    let temperature, pressure, lux = 0;
    if (data) {
        showEnvironment = true;
        temperature = data.envirophat.temperature;
        pressure = data.envirophat.pressure;
        lux = data.envirophat.lux;
    }
    return (
        <div className={classes.television}>
            <div className={classes.tvImage}>
                <img
                    alt={`What's bred in the bone?`}
                    src={currentPhotoURL}
                />
            </div>
            {showEnvironment ? 
                <div className={classes.environment}>
                    <Tooltip title={`Temperature in Celsius`}>
                        <Button
                            className={classes.environmentBtn}
                            variant={`contained`}
                            color={`secondary`}>
                            <Icon
                                icon={`temperature`}
                                color={`primary`}
                            />
                            <span className={classes.environmentBtnText}>
                                {Math.round(temperature) - 18} &deg; C
                        </span>

                        </Button>
                    </Tooltip>
                    <Tooltip title={`Atmospheric pressure (hecto pascals)`}>
                        <Button
                            className={classes.environmentBtn}
                            variant={`contained`}
                            color={`secondary`}>

                            <Icon
                                icon={`pressure`}
                                color={`primary`}
                            />
                            <span className={classes.environmentBtnText}>
                                {Math.round(pressure)} hPa
                        </span>
                        </Button>
                    </Tooltip>
                    <Tooltip title={`Lumens per square meter`}>
                        <Button
                            className={classes.environmentBtn}
                            variant={`contained`}
                            color={`secondary`}>
                            <Icon
                                icon={`airquality`}
                                color={`primary`}
                            />
                            <span className={classes.environmentBtnText}>
                                {lux} lux
                        </span>
                        </Button>
                    </Tooltip>
                </div>
            : null}
        </div>
    );
}

const MemodFuncComponent = React.memo(Television)
export default MemodFuncComponent
