import React, { useEffect } from 'react'
import { getStore } from './'
import { useSelector } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { themeLight, themeDark } from './theme/mui.js'
import commonStyles from './theme/commonStyles'
import { gsap } from "gsap"
import {
    ByListingslab,
    SSR,
    Shell,
} from './components'

let duration = 2;
// if (process.env.REACT_APP_ENV === 'DEV') {
//     duration = 0.1
// }

function hasPlayed() {
    setTimeout(() => {
        const store = getStore()
        store.dispatch({
            type: `APP/ZXSPECTRUM/PLAYED`
        })
    }, duration * 1000 * 0.5)
}

function byListingslab() {
    gsap.to(`#by-listingslab`, {
        duration: 1.5 * duration,
        opacity: 1,
        rotationX: 360,
        onComplete: hasPlayed,
    });
}

function fadeOutSSR() {
    byListingslab()
    gsap.set(`#ssr`, {
        opacity: 0,
    })
}

function App() {
    const {
        app,
    } = useSelector(state => state)
    const classesCommon = commonStyles()
    const { mode } = app.theme
    const { playing, played } = app.zxSpectrum
    let theme = themeLight;
    if (mode === `dark`) {
        theme = themeDark
    }

    useEffect(() => {
        if (!playing && !played) {
            fadeOutSSR()
            const store = getStore()
            store.dispatch({
                type: `APP/ZXSPECTRUM/PLAY`,
            })
        }
    })
    let onScreen = <React.Fragment><ByListingslab /><SSR /></React.Fragment>
    if (played) {
        onScreen = <Shell />
    }

    return (
        <MuiThemeProvider theme={createMuiTheme(theme)}>
            <div className={classesCommon.app}>
                {onScreen}
            </div>
        </MuiThemeProvider>
    )
}

const MemodFuncComponent = React.memo(App);
export default MemodFuncComponent;