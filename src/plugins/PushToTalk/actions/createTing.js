import { 
	getStore,
	getHistory,
} from '../../../'

export const createTing = () => {

	const store = getStore()
	const state = store.getState()
	const history = getHistory()
	const pathname = history.location.pathname

	let ready = true
	let app = state.pushToTalk.app
	let fingerprint = null
	let browser = null
	let os = null
	let device = `Desktop`
	let ip = null
	let country = null
	let countryCode = null
	let currency = null
	let currencySymbol = null
	let city = null
	let lat = null
	let lng = null
	let province = null
	let postcode = null
	
	if (state.pushToTalk.ipgeo){
		ip = state.pushToTalk.ipgeo.ip
		country = state.pushToTalk.ipgeo.country_name
		countryCode = state.pushToTalk.ipgeo.country_code2
		city = state.pushToTalk.ipgeo.city
		currency = state.pushToTalk.ipgeo.currency.name
		currencySymbol = state.pushToTalk.ipgeo.currency.symbol
		lat = state.pushToTalk.ipgeo.latitude
		lng = state.pushToTalk.ipgeo.longitude
		province = state.pushToTalk.ipgeo.state_prov
		if (state.pushToTalk.ipgeo.zipcode){
			postcode = state.pushToTalk.ipgeo.zipcode
		}
	} else {
		ready = false
	}
	if (state.pushToTalk.fingerprint) {
		fingerprint = state.pushToTalk.fingerprint
	} else {
		ready = false
	}
	if (state.pushToTalk.ua) {
		browser = `${state.pushToTalk.ua.browser.name} ${state.pushToTalk.ua.browser.major}`
		os = `${state.pushToTalk.ua.os.name} ${state.pushToTalk.ua.os.version}`
		if (state.pushToTalk.ua.device.type === `mobile`){
			device = `${state.pushToTalk.ua.device.vendor} ${state.pushToTalk.ua.device.model}`
		}
	}
	let ting = {
		app,
		pathname,
		fingerprint,
		os,
		browser,
		device,
		ip,
		country,
		countryCode,
		city,
		province,
		postcode,
		currency,
		currencySymbol,
		lat,
		lng,
		time: state.pushToTalk.ticks,
	}

	if (!ready) ting = null	
	store.dispatch({ type: `PUSHTOTALK/TING`, ting })
}
