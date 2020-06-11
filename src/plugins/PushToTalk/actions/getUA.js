import UAParser from 'ua-parser-js'
import { 
	getStore,
} from '../../../'

export const getUA = () => {
	const parser = new UAParser()
	const ua = parser.getResult()
	const store = getStore()
	store.dispatch({ type: `PUSHTOTALK/UA`, ua })
}