import { combineReducers } from 'redux'

import { hallazgosReducers, genericoReducers } from './HallazgosReducers'

const rootReducers = combineReducers({
  hallazgosReducers: hallazgosReducers,
  genericoReducers: genericoReducers,
})

export default rootReducers
