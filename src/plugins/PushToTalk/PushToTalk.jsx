
import React from 'react'
import { connect } from 'react-redux'
import { getStore } from '../../'
import { 
    getUA,
    getFingerprint,
    createTing,
    getIpgeo,
    firstTing,
    ting,
} from './actions'

class PushToTalk extends React.Component {

    state = { timer: null }
    componentDidMount() { this.startTimer() }
    componentWillUnmount() { this.stopTimer() }

    tick = () => {
        const store = getStore()
        const { 
            error,
            ticks,
            ua,
            fingerprint,
            fingerprinting,
            ipgeoing,
            ipgeo,
            tinging,
            tingSuccess,
        } = this.props.pushToTalk

        createTing()
        
        if (!ua){
            getUA()
        }   
        if (!ipgeo && !ipgeoing){
            getIpgeo()
        }
        if (!fingerprint && !fingerprinting){
            getFingerprint()
        }
        if (ticks === 2){
            createTing()
        }

        if (!tinging && !tingSuccess && !error){
            firstTing()
        }

        if (ticks % 5 === 0){
            if (tingSuccess){
                ting()
            }
        }

        if (ticks % 20 === 0){
            if (error){
                store.dispatch({ type: `PUSHTOTALK/ERROR`, error: null })
                firstTing()
            }
        }
        
        store.dispatch({ type: `PUSHTOTALK/TICK` }) 
    }

    startTimer = () => {
        const { tickInterval} = this.props.pushToTalk
        const {
            timer
        } = this.state
        if (!timer) {
            this.setState({ timer: setInterval(this.tick, tickInterval * 1000) })
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
        return null
    }
}

const mapStateToProps = (store) => {
    return {
        pushToTalk: store.pushToTalk,
    }
}

export default (connect(mapStateToProps, null)(PushToTalk))
