import { actionChannel, call, put, takeLatest, takelastest } from 'redux-saga/effects'

import * as ActionTypes from '../const/actionTypes'
import * as API from '../api/hallasgozAPI'

function* asyncGetHallazgos({ payload }) {
  try {
    //data is obtained after axios call is resolved
    var response = yield call(API.getHallazgos, payload)
    if (response) {
      //dispatch action to change redux state
      yield put({
        type: ActionTypes.GET_HALLAZGOS_SUCCESS,
        response,
      })
    }
  } catch (error) {
    yield put({
      type: ActionTypes.GET_HALLAZGOS_FAILED,
      message: error.message,
    })
  }
}

function* asyncGetGenerico({ payload }) {
  try {
    // data is obtained after axios call is resolved
    var response = yield call(API.getGenerico, payload)
    if (response) {
      yield put({
        type: ActionTypes.GET_GENERICO_SUCCESS,
        response,
      })
    }
  } catch (error) {
    yield put({
      type: ActionTypes.GET_GENERICO_FAILED,
      message: error.message,
    })
  }
}

function* asyncPostHallazgos({ payload }) {
  try {
    var response = yield call(API.postHallazgos, payload)

    if (response.id !== 0) {
      // dispatch action to change redux state
      yield put({
        type: ActionTypes.POST_HALLAZGOS_SUCCES,
        response,
      })
    } else {
      yield put({
        type: ActionTypes.POST_HALLAZGOS_FAILED,
        // eslint-disable-next-line no-undef
        message: error.message,
      })
    }
  } catch (error) {
    yield put({
      type: ActionTypes.POST_HALLAZGOS_FAILED,
      message: error.message,
    })
  }
}

export default function* HallazgosSaga() {
  yield takelastest(ActionTypes.GET_HALLAZGOS, asyncGetHallazgos)
  yield takelastest(ActionTypes.GET_GENERICO, asyncGetGenerico)
  yield takeLatest(ActionTypes.POST_HALLAZGOS, asyncPostHallazgos)
}
