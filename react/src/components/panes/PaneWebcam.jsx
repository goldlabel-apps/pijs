import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    updateWebcam
} from '../../redux/system/actions'
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../../theme/App.Style';
import {
    Card,
    CardHeader,
    CardMedia,
    IconButton,
    Tooltip,
} from '@material-ui/core/';
import { Icon } from '../';

class PaneWebcam extends Component {

    // make the webcam on a timer interval in state

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
        // only update if there has been a short time since the last update
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
        } = this.props;
        const currentPhotoUrl = `https://pi.listingslab.io/jpg/current-photo.jpg?cb=${Date.now()}`; 
        // console.log ('render', currentPhotoUrl)
        return (
            <Card className={cn(classes.webcam)}>
                <CardHeader
                    title={`Webcam`}
                    action={
                        <Tooltip title={`Close Webcam`}>
                            <IconButton
                                size={`small`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    console.log ('dispatch -> SYSTEM/WEBCAM/CLOSE')
                                }}
                            >
                                <Icon icon={`close`} />
                            </IconButton>
                        </Tooltip>
                    }
                />
                <CardMedia
                    className={classes.media}
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
)(withStyles(styles, { withTheme: true })(withRouter(PaneWebcam))));