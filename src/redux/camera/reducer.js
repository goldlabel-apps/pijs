import { createReducer } from "@reduxjs/toolkit"
import {
  reset,
} from "./actions"

export const cameraSlice = {
  controls: {
    zoomLevel: 0
  },

}

const cameraReducer = createReducer(cameraSlice, {  
  [reset]: () => {
    return cameraSlice
  }
})

export { cameraReducer }
