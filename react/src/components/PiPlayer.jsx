import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../theme/AppShell.Style';
import { getStore } from "../";
import cn from 'classnames';
import {
    Tooltip,
    IconButton,
} from '@material-ui/core/';
import { Icon } from './';

class PiPlayer extends Component {

    navClick = (path) => {
        const {
            history
        } = this.props;
        const store = getStore();
        history.push(path);
        store.dispatch({ type: "SYSTEM/NAV/CLOSE" });
    }

    render() {
        const {
            classes,
        } = this.props;
        const currentPhotoUrl = `https://pi.listingslab.io/jpg/current-photo.jpg?cb=${Date.now()}`;
        return (

            <div className={cn(classes.piPlayer)} id="pi-player" >

                <img
                    className={cn(classes.piPlayerImg)}
                    src={currentPhotoUrl}
                    alt={`piPlayer`} />

                <Tooltip title={`Go Back in Time`}
                    color={`primary`}>
                    <IconButton
                        onClick={(e) => {
                            e.preventDefault();
                            console.log('')
                        }}>
                        <Icon icon={`time`} color={`primary`} />
                    </IconButton>
                </Tooltip>

                <Tooltip title={`Zoom In`}>
                    <IconButton
                        onClick={(e) => {
                            e.preventDefault();
                            console.log('zoom in')
                        }}>
                        <Icon icon={`zoomin`} color={`primary`} />
                    </IconButton>
                </Tooltip>

                <Tooltip title={`Zoom Out`}>
                    <IconButton
                        onClick={(e) => {
                            e.preventDefault();
                            console.log('zoom Out')
                        }}>
                        <Icon icon={`zoomout`} color={`primary`} />
                    </IconButton>
                </Tooltip>

            </div >
        );
    }
}

const mapStateToProps = (store) => {
    return {
        store,
        nav: store.system.nav,
    };
};

export default (connect(
    mapStateToProps,
    null
)(withStyles(styles, { withTheme: true })(withRouter(PiPlayer))));




/*
<CardMedia
    className={webcamClass}
    style={{ background: '#333333' }}
    image={currentPhotoUrl}
    alt={`Webcam`}
/>

let webcamClass = classes.webcamFull;
if (screenMode === `preview`) {
    webcamClass = classes.webcamPreview;
}



*/