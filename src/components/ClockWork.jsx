import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStore } from '../'
import { 
    fetchWeather,
    fetchPi 
} from '../redux/app/actions'
import { update } from '../redux/entity/actions'

class ClockWork extends Component {

    state = { timer: null }
    componentDidMount() { this.startTimer() }
    componentWillUnmount() { this.stopTimer() }

    tick = () => {
        const { weatherFetching, weatherFetched, weatherData, ticks } = this.props;
        const store = getStore()
        store.dispatch({ type: `APP/CLOCKWORK/TICK` })
        if (!weatherFetching && !weatherFetched && !weatherData) {
            fetchWeather()
        }
        if (ticks % 5 === 0) {
            update()
        }
        if (ticks % 3 === 0) {
            store.dispatch({ type: `APP/CAMERA/UPDATE` })
        }
        if (ticks % 60 === 0) {
            fetchPi()
        }
    }

    startTimer = () => {
        const { tickDelay } = this.props
        const {
            timer
        } = this.state
        if (!timer) {
            this.setState({ timer: setInterval(this.tick, tickDelay * 1000) })
        }
        this.tick()
    }

    stopTimer = () => {
        const {
            timer
        } = this.state
        if (timer) {
            clearInterval(timer)
            this.setState({ timer: null })
        }
    }

    render() {
        const showClock = false;
        if (!showClock) {
            return null
        }
        return <React.Fragment>Clock</React.Fragment>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: 'INCREMENT' }),
    };
};

const mapStateToProps = (store) => {
    return {
        tickDelay: store.app.clockwork.tickDelay,
        ticking: store.app.clockwork.ticking,
        ticks: store.app.clockwork.ticks,

        weatherFetching: store.app.weather.fetching,
        weatherFetched: store.app.weather.fetched,
        weatherData: store.app.weather.data,
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(ClockWork))
