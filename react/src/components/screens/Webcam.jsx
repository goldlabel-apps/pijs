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
} from '@material-ui/core/';
import {
    Icon,
    PiPlayer
} from '../';

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
            history,
        } = this.props;
        return (
            <Card className={cn(classes.screenCard)}>
                <CardHeader
                    className={cn(classes.screenHeader)}
                    title={`PiJS Webcam`}
                    avatar={
                        <IconButton
                            onClick={(e) => {
                                e.preventDefault();
                                history.push(`/`);
                            }}>
                            <Icon icon={`pi`} color={`primary`} />
                        </IconButton>
                    }
                />
                <PiPlayer />
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
