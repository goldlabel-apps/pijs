// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStore } from './';
import {
    createFingerprint,
    ipgeolocation,
} from './redux/system/actions'

class ClockWork extends Component {
    state = { timer: null }
    componentDidMount() {
        createFingerprint();
        ipgeolocation();
        this.startTimer();
    }
    componentWillUnmount() { this.stopTimer() }

    tick = () => {
        const store = getStore();
        store.dispatch({ type: `SYSTEM/TICK` });
        const {
            ticks,
            fingerprint,
            ipgeo,
            userShownAtTick,
        } = this.props;

        switch (ticks) {
            case 1:
                store.dispatch({
                    type: `SYSTEM/SAYS`, say: {
                        message: `Debian GNU/Linux Linux raspberrypi 4.19.75 armv7l`,
                        color: `white`,
                    }
                })
                break;
            
            case 2:
                store.dispatch({
                    type: `SYSTEM/SAYS`, say: {
                        message: `<br />> pi@raspberrypi: ~$`,
                        color: `white`,
                    }
                })
                store.dispatch({
                    type: `SYSTEM/SAYS`, say: {
                        message: `userEntity<br />`,
                        color: `#F1DD3F`,
                    }
                })
                break;
                        
            default:
                break;            
        }
        if (ipgeo && fingerprint) {
            // readyToBoot = false;
            if (!userShownAtTick) {
                store.dispatch({ type: `SYSTEM/BOOT/SHOWUSERATTICK`, ticks });
            }
            if (ticks === userShownAtTick + 10) {
                store.dispatch({ type: `SYSTEM/BOOT` });
            }
        }

        console.log('this tick', ticks, 'targ ticks', userShownAtTick + 10)
        

        // store.dispatch({
        //     type: `SYSTEM/SAYS`, say: {
        //         message: `SUCCESS<br />
        //         ip ${ipgeo.ip}`,
        //         color: `limegreen`,
        //     }
        // })
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
        components: store.system.userEntity.components,
        ipgeo: store.system.userEntity.ipgeo,
        userShownAtTick: store.system.boot.userShownAtTick,
    };
};


export default (connect(mapStateToProps, null)(ClockWork));
