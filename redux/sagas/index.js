import { all } from 'redux-saga/effects'

import HallazgosSaga from './HallazgosSaga'

export default function* rootSaga() {
  yield all([HallazgosSaga()])
}
