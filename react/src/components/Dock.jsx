import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { getStore } from '../';
import {
    AppBar,
    Toolbar,
    IconButton,
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
}));

function Dock(props) {
    
    const classes = useStyles();
    const store = getStore();
    const {
        system,
    } = useSelector(state => state);

    const userEntityOpen = system.userEntity.open;
    const cameraOpen = system.camera.open;
    const weatherOpen = system.weather.open;

    return (
        <AppBar
            className={classes.appBar}
            color={`secondary`}
            position={`fixed`}>
            <Toolbar>
                <div className={classes.grow} />
                
                <Logo />

                <IconButton
                    disabled={cameraOpen}
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

                <IconButton
                    disabled={weatherOpen}
                    edge={`start`}
                    color={`inherit`}
                    aria-label={`Weather`}
                    onClick={(e) => {
                        e.preventDefault();
                        store.dispatch({ type: `SYSTEM/WEATHER/OPEN` });
                    }}>
                    <Icon
                        icon={`weather`}
                        color={`inherit`} />
                </IconButton>

                <IconButton
                    disabled={userEntityOpen}
                    edge={`start`}
                    color={`inherit`}
                    aria-label={`User Entity`}
                    onClick={(e) => {
                        e.preventDefault();
                        store.dispatch({ type: `SYSTEM/USERENTITY/OPEN` });
                    }}>
                    <Icon
                        icon={`userentity`}
                        color={`inherit`} />
                </IconButton>
                
                <div className={classes.grow} />
            </Toolbar>
        </AppBar>
    );
}

const MemodFuncComponent = React.memo(Dock);
export default MemodFuncComponent;
