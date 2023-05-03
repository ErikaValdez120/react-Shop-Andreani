import * as types from '../const/actionTypes'
import { Pais } from '../../clases/Pais'
import { Provincia } from '../../clases/Provincia'
import { Ciudad } from '../../clases/Ciudad'

const ExampleState = {
  paises: Array<Pais>(),
  provincias: Array<Provincia>(),
  ciudades: Array<Ciudad>(),
  usuario: undefined,
  pais: {}, // no se usa
  postRespuesta: undefined,
}

export function formularioReducers(state = ExampleState, action: any) {
  switch (action.type) {
    case types.GET_PAIS_SUCCESS:
      return { ...state, paises: action.response }

    case types.GET_PROVINCIA_SUCCESS:
      return { ...state, provincias: action.response }

    case types.GET_CIUDAD_SUCCESS:
      return { ...state, ciudades: action.response }

    case types.POST_USUARIO_SUCCESS:
      return { ...state, usuario: action.response, postRespuesta: true }

    case types.POST_USUARIO_FAILED:
      return { ...state, usuario: action.response, postRespuesta: false }
    //usuario: action.response.data no funciona / usuario: action.response,
    default:
      return state
  }
}
