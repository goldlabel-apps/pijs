import axios from 'axios'
import { 
	getStore,
} from '../../../'

export const firstTing = () => {
	const store = getStore()
	const pushToTalkSlice = store.getState().pushToTalk
	const { ting, app } = pushToTalkSlice
	if (ting){
		store.dispatch({ type: `PUSHTOTALK/TINGING`, tinging: true })
		const endPoint = `${process.env.REACT_APP_PUSH_TO_TALK}/pushToTalk`
		axios.post(endPoint, {
			action:`firstTing`, 
			app,
			ting,
		})
			.then(function(response) {
				store.dispatch({ type: `PUSHTOTALK/TING_SUCCESS`, tingSuccess: true })
				store.dispatch({ type: `PUSHTOTALK/ERROR`, error: null })
				store.dispatch({ 
					type: `APP/SNACKBAR`, 
					snackbar: {
						severity: response.data.severity,
						message: response.data.message,
					}})
			})
			.catch(function(error) {
				store.dispatch({ type: `PUSHTOTALK/TING_SUCCESS`, tingSuccess: false })
				store.dispatch({ type: `PUSHTOTALK/ERROR`, error: error.toString() })
				store.dispatch({ 
					type: `APP/SNACKBAR`, 
					snackbar: {
						severity: `warning`,
						message: error.toString()
					}})
			})
			.finally(function() {
				store.dispatch({ type: `PUSHTOTALK/TINGING`, tinging: false })
			})
	}	
}
