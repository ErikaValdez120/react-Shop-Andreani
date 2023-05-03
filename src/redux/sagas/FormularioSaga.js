import { call, put, takeLatest } from 'redux-saga/effects'

import * as ActionTypes from '../const/actionTypes'
import * as API from '../api/formularioAPI'

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
    var response = yield call(API.postUsuario, payload)

    if (response) {
      yield put({
        type: ActionTypes.POST_USUARIO_SUCCESS,
        response,
      })
    }
  } catch (error) {
    yield put({
      type: ActionTypes.POST_USUARIO_FAILED,
      response: error.response,
    })
  }

  // try {
  //   // 2 forma
  //   var usuario = yield call(API.postUsuario, payload)

  //   if (usuario) {
  //     yield put({
  //       type: ActionTypes.POST_USUARIO_SUCCESS,

  //       response: usuario,
  //     })
  //   }

  //   // dispatch action to change redux state
  // } catch (error) {
  //   yield put({
  //     type: ActionTypes.POST_USUARIO_FAILED,
  //     response: error.response,
  //   })
  // }
}

export default function* FormularioSaga() {
  yield takeLatest(ActionTypes.GET_CIUDAD, asyncGetCiudad)
  yield takeLatest(ActionTypes.GET_PAIS, asyncGetPais)
  yield takeLatest(ActionTypes.GET_PROVINCIA, asyncGetProvincia)
  yield takeLatest(ActionTypes.POST_USUARIO, asyncPostUsuario)
  yield takeLatest(ActionTypes.POST_USUARIO_SUCCESS, asyncPostUsuario)
}
