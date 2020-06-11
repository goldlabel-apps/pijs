
import Fingerprint2 from 'fingerprintjs2'
import { 
	getStore,
} from '../../../'

export const getFingerprint = () => {
	const store = getStore()
	store.dispatch({ type: `PUSHTOTALK/FINGERPRINTING`, fingerprinting: true })
	Fingerprint2.getPromise().then(function(components) {
	    const values = components.map(function(component) {
	      return component.value
	    })
	    const fingerprint = Fingerprint2.x64hash128(values.join(""), 31)
	    store.dispatch({ type: `PUSHTOTALK/FINGERPRINT`, fingerprint })
	    store.dispatch({ type: `PUSHTOTALK/FINGERPRINTING`, fingerprinting: false })
	 })
}
