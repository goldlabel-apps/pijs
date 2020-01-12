import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { getStore } from '../';
import {
    Avatar,
    AppBar,
    Toolbar,
    IconButton,
    Tooltip,
} from '@material-ui/core/';
import {
    Icon,
    Logo,
} from './';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    center: {
    },
    constrain: {
        // border: '1px solid yellow',
        padding: theme.spacing(),
    }
}));

function Dock(props) {
    
    const classes = useStyles();
    const store = getStore();
    // const {
    //     system,
    // } = useSelector(state => state);
    const {
        data,
    } = useSelector(state => state.weather);

    let weatherIcon = <Icon
        icon={`weather`}
        color={`inherit`} />;
    
    const outlookIcon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    if (outlookIcon) {
        weatherIcon = <Avatar src={outlookIcon} alt={`weather`}/>;
    }
    // const userEntityOpen = system.userEntity.open;
    // const cameraOpen = system.camera.open;
    // const weatherOpen = weather.open;

    return (
        <AppBar
            className={classes.appBar}
            color={`secondary`}
            position={`fixed`}>
            <div className={classes.center}>
            <Toolbar className={classes.constrain}>
                
                <div className={classes.grow} />
                <Tooltip title={`Camera`}>
                    <IconButton
                        // disabled={cameraOpen}
                        edge={`start`}
                        color={`inherit`}
                        aria-label={`Camera`}
                        onClick={(e) => {
                            e.preventDefault();
                            store.dispatch({ type: `SYSTEM/CAMERA/OPEN` });
                        }}>
                        <Icon
                            icon={`camera`}
                            color={`inherit`} />
                    </IconButton>
                </Tooltip>

                <Tooltip title={`Weather`}>
                    <IconButton
                        // disabled={weatherOpen}
                        edge={`start`}
                        color={`inherit`}
                        aria-label={`Weather`}
                        onClick={(e) => {
                            e.preventDefault();
                            store.dispatch({ type: `WEATHER/OPEN` });
                        }}>
                        {weatherIcon}
                    </IconButton>
                </Tooltip>
                
                <Tooltip title={`Privacy`}>
                    <IconButton
                        // disabled={userEntityOpen}
                        edge={`start`}
                        color={`inherit`}
                        aria-label={`Privacy`}
                        onClick={(e) => {
                            e.preventDefault();
                            store.dispatch({ type: `SYSTEM/USERENTITY/OPEN` });
                        }}>
                        <Icon
                            icon={`userentity`}
                            color={`inherit`} />
                    </IconButton>
                    </Tooltip>
                    
                    <Logo />
                
                </Toolbar>
            </div>
        </AppBar>
    );
}

const MemodFuncComponent = React.memo(Dock);
export default MemodFuncComponent;
