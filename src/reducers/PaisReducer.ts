import { Pais} from '../clases/Pais'
import { AGREGAR_PAIS } from '../actions/PaisAction'

const initialState ={
  data:[],
}

interface stateReducer {
  data: Pais[]
}

/*

const AGREGAR_PAIS = 'AGREGAR_PAIS'

// reducer
export default function pais_reducer(state = initialState,action){
  switch(action.type){
      case AGREGAR_PAIS:
          return {...state ,array: action.payload}
      default:
          return state
  }
}

// acciones
export const agregarPais = (nombre) => (dispatch,getState) =>{

  try {
      dispatch({
          type: AGREGAR_PAIS,
          payload: nombre
      })
  } catch (error) {
      console.log(error)
  }
}
*/

const paisSlice = createSlice({
  name: 'paises',
  initialState: [],
  reducers:{
    // Define los reducers dentro del objeto `reducers`
    agregarPais : (state:stateReducer = initialState, action:PaisAction ) => {
      // Maneja la acción "agregarPais" y actualiza el estado
      // Puedes acceder a la acción y su payload con `action.payload`
      state.push(action.payload);
    },
    actualizarPais: (state, action) => {
      // Maneja la acción "actualizarPais" y actualiza el estado
      // Puedes acceder a la acción y su payload con `action.payload`
      const { id, nombre, capital, poblacion } = action.payload;
      const paisIndex = state.findIndex(pais => pais.id === id);
      if (paisIndex !== -1) {
        state[paisIndex] = { id, nombre, capital, poblacion };
      }
    },
    eliminarPais: (state, action) => {
      eliminarPais: (state, action) => {
        // Maneja la acción "eliminarPais" y actualiza el estado
        // Puedes acceder a la acción y su payload con `action.payload`
        const paisId = action.payload;
        const paisIndex = state.findIndex(pais => pais.id === paisId);
        if (paisIndex !== -1) {
          state.splice(paisIndex, 1);
        }
      }
  }

});


// Exporta los reducers generados automáticamente por createSlice
export const { agregarPais, actualizarPais, eliminarPais } = paisSlice.actions;

// Exporta el reducer del slice
export default paisSlice.reducer;



