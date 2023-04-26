import * as ActionTypes from '../const/actionTypes'

export function getProvincia() {
  return {
    type: ActionTypes.GET_PROVINCIA,
  }
}

export function getPais() {
  return {
    type: ActionTypes.GET_PAIS,
  }
}

export function getCiudad() {
  return {
    type: ActionTypes.GET_CIUDAD,
  }
}

export function postUsuario(param) {
  return {
    type: ActionTypes.POST_USUARIO,
    payload: param,
  }
}
