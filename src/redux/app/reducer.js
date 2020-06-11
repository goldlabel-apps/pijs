import { createReducer } from "@reduxjs/toolkit"
import {
  cameraUpdate,
  fetchingWeather,
  saveWeather,
  errorWeather,
  play,
  played,
  clockTick,
  reset,
  switchTheme,
  fetchingPi,
  savingPi,
  piError,
} from "./actions"

export const appSlice = {
  pi:{
    fetching: false,
    fetched: false,
    data:{
      lux: 0
    },
    error: null,
  },
  theme: {
    mode: `dark`
  },
  weather: {
    fetching: false,
    fetched: false,
    data: null,
    error: null,
    lastFetchSuccess: null
  },
  camera: {
    fetching: false,
    fetched: false,
    data: null,
    error: null,
    res: `md/`,
    src: `https://pi.listingslab.io/current-photo/`
  },
  map: {
    fetching: false,
    fetched: false,
    data: null,
    error: null,
    style: {
      light: `mapbox://styles/listingslab/ck4uugpxf13y11cqp72z8snc4`,
      dark: `mapbox://styles/listingslab/ck4c1er100to21co6sd5kl563`
    }
  },
  zxSpectrum: {
    played: false,
    playing: false
  },
  clockwork: {
    tickDelay: 1,
    ticking: false,
    ticks: 0
  }
}

const appReducer = createReducer(appSlice, {

//   fetchingPi, savingPi, piError,

  [fetchingPi]: (state, action) => {
    state.pi.fetching = action.fetching
    return state
  },


  [savingPi]: (state, action) => {
    state.pi.data = action.data
    return state
  },

  [piError]: (state, action) => {
    state.pi.error = action.error.toString()
    return state
  },

  [errorWeather]: (state, action) => {
    state.weather.error = action.error.toString()
    return state
  },


  [cameraUpdate]: state => {
    state.camera.src = `https://pi.listingslab.io/current-photo/md/?cb=${Date.now()}`
    return state
  },
  [errorWeather]: (state, action) => {
    state.weather.error = action.error.toString()
    return state
  },
  [saveWeather]: (state, action) => {
    state.weather.data = action.data
    state.weather.error = null
    state.weather.lastFetchSuccess = Date.now()
    return state
  },
  [fetchingWeather]: (state, action) => {
    state.weather.fetching = action.fetching
    return state
  },

  [play]: state => {
    state.zxSpectrum.playing = true
    return state
  },
  [played]: state => {
    state.zxSpectrum.played = true
    state.zxSpectrum.playing = false
    return state
  },
  [clockTick]: state => {
    state.clockwork.ticks++
    // console.log("clockTick", state.clockwork.ticks)
    return state
  },
  [switchTheme]: (state, action) => {
    state.theme.mode = action.newMode
    // console.log("switchTheme", action.newMode)
    return state
  },
  [reset]: () => {
    return appSlice
  }
})

export { appReducer }
