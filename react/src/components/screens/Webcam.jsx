import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    updateWebcam
} from '../../redux/system/actions';
import { withRouter } from "react-router";
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    Card,
    CardHeader,
    IconButton,
    CardMedia,
} from '@material-ui/core/';
import { Icon } from '../'

class Webcam extends Component {

    state = {
        timer: null,
    }

    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() {
        this.stopTimer();
    }

    shouldComponentUpdate(e) {
        return true;
    }

    startTimer = () => {
        const {
            webcam
        } = this.props;
        const { timerDelay } = webcam;
        const {
            timer
        } = this.state;
        if (!timer) {
            this.setState({ timer: setInterval(this.updateTimer, timerDelay * 1000) });
        }
    }

    stopTimer = () => {
        console.log('stopTimer');
        const {
            timer
        } = this.state;
        if (timer) {
            clearInterval(timer);
            this.setState({ timer: null });
        }
    }

    updateTimer = () => {
        updateWebcam();
    }

    render() {
        const {
            classes,
            mode,
            history,
        } = this.props;
        let screenMode = `full`;
        if (mode) {
            screenMode = mode;
        } else {
            alert('Webcam mode not specified');
            return null;
        }
        let webcamClass = classes.webcamFull;
        if (screenMode === `preview`) {
            webcamClass = classes.webcamPreview;
        }

        const currentPhotoUrl = `https://pi.listingslab.io/jpg/current-photo.jpg?cb=${Date.now()}`;
        return (
            <Card className={cn(classes.screenCard)}>
                <CardHeader
                    title={`Webcam`}
                    avatar={<IconButton
                        onClick={(e) => {
                            e.preventDefault();
                            history.push(`/webcam`)
                        }}
                    >
                        <Icon
                            icon={`webcam`}
                            color={`secondary`}
                        />
                    </IconButton>}

                    action={
                        screenMode === 'full' ?
                            <IconButton
                                onClick={(e) => {
                                    e.preventDefault();
                                    history.push(`/`)
                                }}
                            >
                                <Icon icon={`home`} />
                            </IconButton>
                            : null
                    }
                />
                <CardMedia
                    className={webcamClass}
                    style={{ background: '#333333' }}
                    image={currentPhotoUrl}
                    alt={`Webcam`}
                />
            </Card>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        store,
        webcam: store.system.webcam
    };
};

export default (connect(
    mapStateToProps,
    null
)(withStyles(styles, { withTheme: true })(withRouter(Webcam))));
