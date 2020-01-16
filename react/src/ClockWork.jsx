// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { getStore } from './';
import {
    createFingerprint,
    ipgeolocation,
} from './redux/system/actions';
import { fetchWeather } from './redux/weather/actions';
import { checkFingerprint } from './redux/firebase/actions';
class ClockWork extends Component {
    state = { timer: null }

    componentDidMount() {
        const store = getStore();
        store.dispatch({ type: `SYSTEM/NEW/VISIT` });
        this.startTimer();
        createFingerprint();
        fetchWeather();
        ipgeolocation();
    }

    componentWillUnmount() { this.stopTimer() }

    tick = () => {
        const store = getStore();
        store.dispatch({ type: `SYSTEM/TICK` });
        const {
            booted,
            fingerprint,
            ipgeo,
            ticks,
            userEntityCreated,
            userShownAtTick,
            fingerprintChecked,
        } = this.props;
        const userEntityCreatedAgo = moment(userEntityCreated).fromNow();

        if (booted && !fingerprintChecked) {
            console.log('checkFingerprint')
            checkFingerprint(fingerprint);
        }

        if (ticks % 20 === 0) {
            store.dispatch({ type: `CAMERA/UPDATE` })
        }

        switch (ticks) {
            case 1:
                store.dispatch({ type: `CAMERA/UPDATE` })
                store.dispatch({
                    type: `SYSTEM/SAYS`, say: {
                        message: `Debian GNU/Linux 4.19.75`,
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
                        message: `<br />pijs.app currently being moved to firebase.<br />`,
                        color: `#F1DD3F`,
                    }
                })
                break;

            default:
                break;
        }

        if (!booted && ticks > 2) {
            store.dispatch({ type: `CAMERA/UPDATE` })
            if (ipgeo && fingerprint) {
                if (!userShownAtTick) {
                    store.dispatch({ type: `SYSTEM/BOOT/SHOWUSERATTICK`, ticks });
                    store.dispatch({
                        type: `SYSTEM/SAYS`, say: {
                            message: `{<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;"created": "${userEntityCreatedAgo}"<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;"fingerprint": "${fingerprint}"<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;"ip": "${ipgeo.data.ip || ``}"<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;"latitude": ${ipgeo.data.latitude || ``}<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;"longitude": ${ipgeo.data.longitude || ``}<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;"postcode": "${ipgeo.data.zipcode || ``}"<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;"city": "${ipgeo.data.city || ``}"<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;"state": "${ipgeo.data.state_prov || ``}"<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;"country": "${ipgeo.data.country_name || ``}"<br />
                            }<br />`,
                            color: `#eee`,
                        }
                    })
                }
                if (ticks === userShownAtTick + 1) {
                    store.dispatch({
                        type: `SYSTEM/SAYS`, say: {
                            message: `Booting...<br />`,
                            color: `#F1DD3F`,
                        }
                    })
                }
                if (ticks === userShownAtTick + 2) {
                    store.dispatch({ type: `SYSTEM/BOOT` });
                }
            }
        }
    }

    startTimer = () => {
        const { tickDelay } = this.props;
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
        userShownAtTick: store.system.boot.userShownAtTick,
        booted: store.system.boot.booted,

        tickDelay: store.system.clockWork.tickDelay,
        ticks: store.system.clockWork.ticks,

        fingerprint: store.system.userEntity.fingerprint.value,
        components: store.system.userEntity.fingerprint.components,
        ipgeo: store.system.userEntity.ipgeo,
        userEntityCreated: store.system.userEntity.created,
        visits: store.system.userEntity.visits,

        fingerprintChecked: store.firebase.fingerprint.checked,

    };
};


export default (connect(mapStateToProps, null)(ClockWork));
