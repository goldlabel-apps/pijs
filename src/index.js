import pJSON from "../package.json"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import reduxStore from "./redux"
import Fingerprint2 from "fingerprintjs2"
import { fstore } from "./fire"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

console.log(`${pJSON.name} ${pJSON.version} (${process.env.REACT_APP_ENV})`)

let store
const getStore = () => {
  return store
}
export { getStore }

let entity = {
  bootTime: Date.now(),
  app_version: pJSON.version
}

const startReact = () => {
  store = reduxStore(entity)
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("react")
  )
}

const returning = () => {
  const docRef = fstore.collection("userentities").doc(entity.fingerprint)
  docRef.get().then(function(fsdoc) {
    const data = fsdoc.data()
    // delete data.fingerprint;
    // delete data.bootTime;
    entity = {
      ...entity,
      fstore: data
    }
    startReact()
  })
}

const firstRun = () => {
  entity.visits = 1
  const docRef = fstore.collection("userentities").doc(entity.fingerprint)
  docRef
    .set(entity, { merge: true })
    .then(function() {
      returning()
    })
    .catch(function(error) {
      console.log("Error firstRun failed", error)
    })
}

const initFirestore = fingerprint => {
  const docRef = fstore.collection("entities").doc(fingerprint)
  docRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        returning()
      } else {
        firstRun()
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error)
    })
}

const createFingerprint = () => {
  Fingerprint2.getPromise().then(function(components) {
    const values = components.map(function(component) {
      return component.value
    })
    const fingerprint = Fingerprint2.x64hash128(values.join(""), 31)
    entity.fingerprint = fingerprint
    initFirestore(fingerprint)
  })
}

setTimeout(createFingerprint, 50)

serviceWorker.register()
