import { createReducer } from "@reduxjs/toolkit"
import { reset } from "./actions"

export const entitySlice = {}

const entityReducer = createReducer(entitySlice, {
  [reset]: () => {
    return entitySlice
  }
})

export { entityReducer }
