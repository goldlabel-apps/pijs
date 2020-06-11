import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { reduxBatch } from "@manaflair/redux-batch"
import { appReducer, appSlice } from "./app/reducer"
import { pushToTalkReducer, pushToTalkSlice } from '../plugins/PushToTalk/reducer'

const reduxStore = () => {
  
  const reducer = combineReducers({
    app: appReducer,
    pushToTalk: pushToTalkReducer,
  })

  const preloadedState = {
    app: appSlice,
    pushToTalk: pushToTalkSlice,
  }

  const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: false
    })
  ]

  const store = configureStore({
    devTools: process.env.NODE_ENV !== "production",
    reducer,
    middleware,
    preloadedState,
    enhancers: [reduxBatch]
  })

  return store
}

export default reduxStore
