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
            booted,
            components,
            fingerprint,
            ipgeo,
            ticks,
            userShownAtTick,
        } = this.props;
        const userAgent = components.find(o => o.key === 'userAgent').value;

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
                        message: `create userEntity<br />`,
                        color: `limegreen`,
                    }
                })
                break;
                        
            default:
                break;            
        }

        if (!booted && ticks > 2) {
            if (ipgeo && fingerprint) {
                if (!userShownAtTick) {
                    store.dispatch({ type: `SYSTEM/BOOT/SHOWUSERATTICK`, ticks });
                    store.dispatch({
                        type: `SYSTEM/SAYS`, say: {
                            message: `{<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;"userAgent": ${userAgent}<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;"fingerprint": "${fingerprint}"<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;"ip": "${ipgeo.ip}"<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;"zipcode": ${ipgeo.zipcode}<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;"city": "${ipgeo.city}"<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;"state_prov": "${ipgeo.state_prov}"<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;"country_name": "${ipgeo.country_name}"<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;"latitude": ${ipgeo.latitude}<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;"longitude": ${ipgeo.longitude}<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;"is_eu": ${ipgeo.is_eu}<br />
                            }<br />`,
                            color: `#F1DD3F`,
                        }
                    })
                }
                if (ticks === userShownAtTick + 4) {
                    store.dispatch({
                        type: `SYSTEM/SAYS`, say: {
                            message: `Booting...<br />`,
                            color: `limegreen`,
                        }
                    })
                }
                if (ticks === userShownAtTick + 5) {
                    store.dispatch({ type: `SYSTEM/BOOT` });
                }
            }
        }
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
        booted: store.system.boot.booted,
        tickDelay: store.system.clockWork.tickDelay,
        ticks: store.system.clockWork.ticks,
        fingerprint: store.system.userEntity.fingerprint,
        components: store.system.userEntity.components,
        ipgeo: store.system.userEntity.ipgeo,
        userShownAtTick: store.system.boot.userShownAtTick,
    };
};


export default (connect(mapStateToProps, null)(ClockWork));
