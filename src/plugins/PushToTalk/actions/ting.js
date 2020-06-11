import axios from 'axios'
import { 
	getStore,
} from '../../../'

export const ting = () => {
	const store = getStore()
	store.dispatch({ type: `APP/SNACKBAR`, snackbar: null })
	const pushToTalkSlice = store.getState().pushToTalk
	const { ting, app } = pushToTalkSlice
	if (ting){
		store.dispatch({ type: `PUSHTOTALK/TINGING`, tinging: true })
		const endPoint = `${process.env.REACT_APP_PUSH_TO_TALK}/pushToTalk`
		axios.post(endPoint, {
			action:`ting`, 
			app,
			ting,
		})
			.then(function(response) {
				store.dispatch({ type: `PUSHTOTALK/TING_SUCCESS`, tingSuccess: true })
				store.dispatch({ type: `PUSHTOTALK/ERROR`, error: null })
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