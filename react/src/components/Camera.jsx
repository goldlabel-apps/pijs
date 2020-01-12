import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { getStore } from '../';
import {
    Card,
    CardContent,
    CardHeader,
    IconButton,
} from '@material-ui/core/';
import {
    Icon,
} from './';

const useStyles = makeStyles(theme => ({
    camera: {
        margin: theme.spacing(),
        maxWidth: 800,
    },
    iconBtnSpacer: {
        marginTop: theme.spacing(),
        marginLeft: theme.spacing(2),
    },
    cameraImage: {
        border: '1px solid rgba(241,221,63,0.25)',
        borderRadius: theme.spacing(),
        maxWidth: '100%',
        maxHeight: 450,
    },
    grow: {
        flexGrow: 1,
    },
    white: {
        color: 'white',
    },
}));


function Camera() {
    
    const classes = useStyles();
    const store = getStore();
    const {
        open,
        currentPhoto,
    } = useSelector(state => state.camera);

    if (!open) { return null }
    const title = `Camera`;
    let imageSrc;
    if (currentPhoto) {
        imageSrc = currentPhoto
    } else {
        imageSrc = `/jpg/pi4.jpg`;
    }

    return (
        <Card className={classes.camera}>
            <CardHeader
                title={title}
                avatar={<Icon
                            icon={`camera`}
                    color={`inherit`} />}
                action={
                    <IconButton
                        onClick={(e) => {
                            e.preventDefault();
                            store.dispatch({ type: "CAMERA/CLOSE" });
                        }}>
                        <Icon
                            icon={`close`}
                            color={`inherit`}
                        />
                    </IconButton>
                } />
            <CardContent>
                <img
                    className={classes.cameraImage}
                    alt={`camera`}
                    src={imageSrc}
                    onError={(e) => {
                        store.dispatch({ type: "CAMERA/BROKEN" });
                    }}
                />
            </CardContent>
        </Card>
    );
}

const MemodFuncComponent = React.memo(Camera);
export default MemodFuncComponent;
