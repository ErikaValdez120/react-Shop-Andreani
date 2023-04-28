import { combineReducers } from 'redux'

import { formularioReducers } from './FormularioReducers'

const rootReducers = combineReducers({
  formularioReducers: formularioReducers,
  //genericoReducers: genericoReducers,
})

export default rootReducers
