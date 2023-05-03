import { applyMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { legacy_createStore as createStore } from 'redux'
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
