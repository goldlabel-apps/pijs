import axios from 'axios'
import { 
	getStore,
} from '../../../'

export const getIpgeo = () => {
	const store = getStore()
	store.dispatch({ type: `PUSHTOTALK/IPGEOING`, ipgeoing: true })
	axios
	.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_IPGEO}`)
	.then(function(response) {
		store.dispatch({ type: `PUSHTOTALK/IPGEO`, ipgeo: response.data })
	})
	.catch(function(error) {
		store.dispatch({ type: `PUSHTOTALK/ERROR`, error: error.toString() })
	})
	.finally(function() {
		store.dispatch({ type: `PUSHTOTALK/IPGEOING`, ipgeoing: false })
	})
}
