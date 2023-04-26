import * as ActionTypes from '../const/actionTypes'

export function getHallazgos(param) {
  return {
    type: ActionTypes.GET_HALLAZGOS,
    payload: param,
  }
}

export function getGenerico() {
  return {
    type: ActionTypes.GET_GENERICO,
  }
}

export function postHallazgos(param) {
  return {
    type: ActionTypes.POST_HALLAZGOS,
    payload: param,
  }
}
