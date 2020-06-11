import pJSON from "../package.json"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import reduxStore from "./redux"
import { createBrowserHistory } from 'history'
import App from "./App"
import { PushToTalk } from './plugins/PushToTalk'
import * as serviceWorker from "./serviceWorker"

console.log(`${pJSON.name} ${pJSON.version} (${process.env.REACT_APP_ENV})`)

const getHistory = () => { return createBrowserHistory() }
export { getHistory }

let store = reduxStore()
const getStore = () => {
  return store
}
export { getStore }

ReactDOM.render(<Provider store={store}>
					<PushToTalk app={`pijs`} />
                	<App />
                </Provider>,
                document.getElementById("react")
)
serviceWorker.register()