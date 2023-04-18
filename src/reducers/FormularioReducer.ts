import { ActionType } from '../actions/FormularioAction'
import { ContactForm } from '../clases/ContactoForm'

export const initialState = {
  data: [],
}

interface stateReducer {
  data: ContactForm[]
}

export const FormularioReducer = (state: stateReducer = initialState, action: ActionType) => {
  switch (action.type) {
    case 'ADD_USER': {
      return { ...state, data: action.payload }
    }
    default:
      return state
  }
}
