import * as types from '../const/actionTypes'
import { Pais } from '../../clases/Pais'
import { Provincia } from '../../clases/Provincia'
import { Ciudad } from '../../clases/Ciudad'
import { ContactForm } from '../../clases/ContactoForm'

const ExampleState = {
  paises: Array<Pais>(),
  provincias: Array<Provincia>(),
  ciudades: Array<Ciudad>(),
  usuario: ContactForm,
  pais: {},
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
      return { ...state, usuario: action.response }

    case types.POST_USUARIO_FAILED:
      return { ...state, postRespues: false }

    default:
      return state
  }
}

/*
export function genericoReducers(state = ExampleState, action: any) {
  switch (action.type) {
    case types.GET_GENERICO_SUCCESS:
      return { ...state, generico: action.response }
      break

    default:
      return state
      break
  }
}

*/
