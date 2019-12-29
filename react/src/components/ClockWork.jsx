// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStore } from "../";
import { pingPi } from '../redux/system/actions'

class ClockWork extends Component {

    state = {
        timer: null,
    }

    componentDidMount() {
        this.startTimer();
        pingPi();
    }

    componentWillUnmount() {
        this.stopTimer();
    }

    shouldComponentUpdate(e) {
        return true;
    }

    startTimer = () => {
        const timerDelay = 1;
        const {
            timer
        } = this.state;
        if (!timer) {
            this.setState({ timer: setInterval(this.update, timerDelay * 1000) });
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

    update = () => {
        const store = getStore();
        store.dispatch({ type: `SYSTEM/UPDATE/CLOCK` })


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

export default (connect(mapStateToProps, null)(ClockWork));
