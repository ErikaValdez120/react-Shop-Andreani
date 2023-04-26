import { combineReducers } from 'redux'

import { hallazgosReducers, genericoReducers } from './FormularioReducers'

const rootReducers = combineReducers({
  hallazgosReducers: hallazgosReducers,
  genericoReducers: genericoReducers,
})

export default rootReducers
