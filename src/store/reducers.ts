import { combineReducers } from '@reduxjs/toolkit'
import personReducer from './features/person'

const rootReducer = combineReducers({
  person: personReducer,
})

export default rootReducer
