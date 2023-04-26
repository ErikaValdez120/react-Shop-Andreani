import * as types from '../const/actionTypes'
import { Inspeccion } from '../../Components/Hallazgos/Utils/Models'

const ExampleState = {
  inspecciones: Array<Inspeccion>(),
  generico: {},
  postRespuesta: undefined,
}

export function hallazgosReducers(state = ExampleState, action: any) {
  switch (action.type) {
    case types.GET_HALLAZGOS_SUCCESS:
      return { ...state, inspecciones: action.response }
      break

    case types.POST_HALLAZGOS_SUCCES:
      return { ...state, postRespuesta: true }
      break

    case types.POST_HALLAZGOS_FAILED:
      return { ...state, postRespuesta: false }
      break

    default:
      return state
      break
  }
}

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
