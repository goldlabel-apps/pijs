import { createAction } from '@reduxjs/toolkit'
import { createReducer } from "@reduxjs/toolkit"

export const reset = createAction(`PUSHTOTALK/RESET`)
export const error = createAction(`PUSHTOTALK/ERROR`)
export const tick = createAction(`PUSHTOTALK/TICK`)
export const lastTing = createAction(`PUSHTOTALK/LAST_TING`)
export const ua = createAction(`PUSHTOTALK/UA`)
export const fingerprinting = createAction(`PUSHTOTALK/FINGERPRINTING`)
export const fingerprint = createAction(`PUSHTOTALK/FINGERPRINT`)
export const ipgeoing = createAction(`PUSHTOTALK/IPGEOING`)
export const ipgeo = createAction(`PUSHTOTALK/IPGEO`)
export const ting = createAction(`PUSHTOTALK/TING`)
export const tinging = createAction(`PUSHTOTALK/TINGING`)
export const tingSuccess = createAction(`PUSHTOTALK/TING_SUCCESS`)

export const pushToTalkSlice = {
	app: `pijs`,
	ticks: 0,
	error: null,
	tickInterval: 1,
	ting: null,
	tinging: false,
	tingSuccess: false,
	fingerprint: null,
	fingerprinting: false,
	ipgeo: null,
	ipgeoing: false,
	ua: null,
}

const pushToTalkReducer = createReducer(pushToTalkSlice, {

	[error]: (state, action) => {
	    state.error = action.error
	    return state
	},

	[tinging]: (state, action) => {
	    state.tinging = action.tinging
	    return state
	},

	[tingSuccess]: (state, action) => {
	    state.tingSuccess = action.tingSuccess
	    return state
	},

	[ting]: (state, action) => {
	    state.ting = action.ting
	    return state
	},

	[ipgeoing]: (state, action) => {
	    state.ipgeoing = action.ipgeoing
	    return state
	},

	[ipgeo]: (state, action) => {
	    state.ipgeo = action.ipgeo
	    return state
	},

	[ua]: (state, action) => {
	    state.ua = action.ua
	    return state
	},

	[fingerprint]: (state, action) => {
	    state.fingerprint = action.fingerprint
	    return state
	},

	[fingerprinting]: (state, action) => {
	    state.fingerprinting = action.fingerprinting
	    return state
	},

	[tick]: (state, action) => {
		state.ticks = parseFloat(state.ticks) + 1
		return state
	},

	[reset]: () => {
		return pushToTalkSlice
	}
})

export { pushToTalkReducer }
