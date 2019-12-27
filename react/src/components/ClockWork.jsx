// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    updateWebcam
} from '../redux/system/actions';
import { withRouter } from "react-router";

// ~/Desktop/node/pi-firmware/bin/create_current_photo.sh

class ClockWork extends Component {

    state = {
        timer: null,
    }

    componentDidMount() {
        // this.startTimer();
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
        return null;
    }
}

const mapStateToProps = (store) => {
    return {
        store,
    };
};

export default (connect(mapStateToProps, null)(withRouter(ClockWork)));
