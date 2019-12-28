import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
} from '@material-ui/core/';
import {
    Icon,
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
        background: 'url(https://pi.listingslab.io/jpg/current-photo.jpg?' + Date.now() + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPosition: 'right 0px bottom 0px',
        height: 450,
    },
    webcamBoxZoomedIn: {
        marginTop: theme.spacing(),
        background: 'url(https://pi.listingslab.io/jpg/current-photo.jpg?' + Date.now() + ')',
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
        paddingTop: '50%',
    },
    webcamImg: {
        marginTop: theme.spacing(),
        borderRadius: theme.spacing(0.5),
        maxWidth: '100%',
    },
}));

export default function Webcam() {
    const classes = useStyles();
    const { webcam } = useSelector(state => state);
    const dispatch = useDispatch();
    const { zoomed } = webcam;
    let dispatchType = zoomed === `out` ? `WEBCAM/ZOOM/IN` : `WEBCAM/ZOOM/OUT`;

    let zoomClass = zoomed === `out` ? classes.webcamBoxZoomedOut : classes.webcamBoxZoomedIn;

    return (
        <React.Fragment>
            <ScreenHeader icon={`webcam`} title={`Webcam`} />
            <div className={classes.content}>
                <Button
                    className={classes.mapBtn}
                    variant={`contained`}
                    color={`primary`}
                    onClick={(e) => {
                        dispatch({ type: dispatchType })
                        e.preventDefault();
                    }}>
                    <Icon icon={zoomed === `out` ? `zoomin` : `zoomout`} color={`secondary`} />
                    <span className={classes.btnIconPadRight}>
                        {zoomed === `out` ? `Zoom In` : `Zoom Out`}</span>
                </Button>
                <div className={zoomClass}>

                </div>

            </div>
        </React.Fragment>
    );
}