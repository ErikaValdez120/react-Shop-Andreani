import { createStore, applyMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import rootReducers from '../reducers'
import rootSaga from '../sagas'

const ConfigureStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  return {
    ...createStore(rootReducers, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga),
  }
}

export default ConfigureStore
