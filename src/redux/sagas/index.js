import { all } from 'redux-saga/effects'

import FormulariosSaga from './FormularioSaga'

export default function* rootSaga() {
  yield all([FormulariosSaga()])
}
