import React from 'react';
// import { useSelector/*, useDispatch*/ } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    // IconButton,
    CardMedia,
} from '@material-ui/core/';
import {
    // Icon,
    ScreenHeader,
} from '../';

const useStyles = makeStyles(theme => ({
    content: {
        marginRight: theme.spacing(),
        marginLeft: theme.spacing(),
        boxShadow: 'none',
    },
    webcamBoxZoomedOut: {
        marginTop: theme.spacing(),
        background: 'url(https://pijs.app/jpg/current-photo.jpg?' + Date.now() + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPosition: 'right 0px bottom 0px',
        height: 450,
    },
    webcamBoxZoomedIn: {
        marginTop: theme.spacing(),
        background: 'url(https://pijs.app/jpg/current-photo.jpg?' + Date.now() + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '150% 150%',
        backgroundPosition: 'left -200px bottom 10px',
        height: 450,
    },
    btnIconPadRight: {
        marginLeft: theme.spacing()
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        marginBottom: theme.spacing(),
    },
}));

export default function Webcam() {
    const classes = useStyles();
    // const { webcam } = useSelector(state => state);
    // const dispatch = useDispatch();
    // const { zoomed } = webcam;
    // let dispatchType = zoomed === `out` ? `WEBCAM/ZOOM/IN` : `WEBCAM/ZOOM/OUT`;

    // let zoomClass = zoomed === `out` ? classes.webcamBoxZoomedOut : classes.webcamBoxZoomedIn;

    return (
        <React.Fragment>
            <ScreenHeader icon={`webcam`} title={`Webcam`} />
            <div className={classes.content}>
                {/* <IconButton
                    className={classes.mapBtn}
                    variant={`contained`}
                    color={`primary`}
                    onClick={(e) => {
                        dispatch({ type: dispatchType })
                        e.preventDefault();
                    }}>
                    <Icon
                        icon={zoomed === `out` ? `zoomin` : `zoomout`}
                        color={`primary`} />
                </IconButton> */}

                <CardMedia
                    className={classes.media}
                    title={`What is a Raspberry Pi?`}
                    image={`https://pijs.app/jpg/current-photo.jpg`}
                />

            </div>
        </React.Fragment>
    );
}

/*
<span className={classes.btnIconPadRight}>
    {zoomed === `out` ? `Zoom In` : `Zoom Out`}
</span>
*/