import { actionChannel, call, put, takeLatest, takelastest } from 'redux-saga/effects'

import * as ActionTypes from '../const/actionTypes'
import * as API from '../api/hallasgozAPI'

function* asyncGetCiudad() {
  try {
    //data is obtained after axios call is resolved
    var response = yield call(API.getCiudad)
    if (response) {
      //dispatch action to change redux state
      yield put({
        type: ActionTypes.GET_CIUDAD_SUCCESS,
        response,
      })
    }
  } catch (error) {
    yield put({
      type: ActionTypes.GET_CIUDAD_FAILED,
      message: error.message,
    })
  }
}

function* asyncGetProvincia() {
  try {
    //data is obtained after axios call is resolved
    var response = yield call(API.getProvincia)
    if (response) {
      //dispatch action to change redux state
      yield put({
        type: ActionTypes.GET_PROVINCIA_SUCCESS,
        response,
      })
    }
  } catch (error) {
    yield put({
      type: ActionTypes.GET_PROVINCIA_FAILED,
      message: error.message,
    })
  }
}

function* asyncGetPais() {
  try {
    // data is obtained after axios call is resolved
    var response = yield call(API.getPais)
    if (response) {
      yield put({
        type: ActionTypes.GET_PAIS_SUCCESS,
        response,
      })
    }
  } catch (error) {
    yield put({
      type: ActionTypes.GET_PAIS_FAILED,
      message: error.message,
    })
  }
}

function* asyncPostUsuario({ payload }) {
  try {
    var usuario = yield call(API.postUsuario, payload)

    if (usuario.id !== 0) {
      // dispatch action to change redux state
      yield put({
        type: ActionTypes.POST_USUARIO_SUCCES,
        response: usuario,
      })
    } else {
      yield put({
        type: ActionTypes.POST_USUARIO_FAILED,
        // eslint-disable-next-line no-undef
        message: error.message,
      })
    }
  } catch (error) {
    yield put({
      type: ActionTypes.POST_USUARIO_FAILED,
      message: error.message,
    })
  }
}

export default function* HallazgosSaga() {
  yield takelastest(ActionTypes.GET_CIUDAD, asyncGetCiudad)
  yield takelastest(ActionTypes.GET_PAIS, asyncGetPais)
  yield takelastest(ActionTypes.GET_PROVINCIA, asyncGetProvincia)
  yield takeLatest(ActionTypes.POST_USUARIO, asyncPostUsuario)
}
