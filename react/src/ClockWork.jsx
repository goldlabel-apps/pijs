// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStore } from './';

class ClockWork extends Component {

    state = {
        timer: null,
    }

    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() {
        this.stopTimer();
    }

    tick = () => {
        const store = getStore();
        
        store.dispatch({ type: `SYSTEM/TICK` })

        // const { ticks } = this.props;
        // console.log('tick', ticks);

        // console.log('tick', Date.now())
        // const { ticks } = this.props.store.system.clockwork;
        // store.dispatch({ type: `SYSTEM/UPDATE/CLOCK` })
        // if (ticks % 10 === 0) {
        //     pingPi();
        // }
        // if (ticks % 5 === 0) {
        //     const store = getStore();
        //     store.dispatch({ type: `WEBCAM/UPDATE` })
        // }
        // const { fingerprint } = this.props;
        // const store = getStore();
        // store.dispatch({
        //     type: `SYSTEM/BOOT`,
        //     payload: { dahs: 123 }
        // })
        // if (!fingerprint) {
            // console.log('createFingerprint');
            //createFingerprint()
            // systemBoot();
        // }
    }

    startTimer = () => {
        const {tickDelay} = this.props;
        const {
            timer
        } = this.state;
        if (!timer) {
            this.setState({ timer: setInterval(this.tick, tickDelay * 1000) });
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

    render() {
        return null;
    }
}

const mapStateToProps = (store) => {
    return {
        tickDelay: store.system.clockWork.tickDelay,
        ticks: store.system.clockWork.ticks,
        fingerprint: store.system.userEntity.fingerprint,
    };
};


export default (connect(mapStateToProps, null)(ClockWork));



/*
    // const store = getStore();
    // store.dispatch({ type: `DO/SHIT` });
*/