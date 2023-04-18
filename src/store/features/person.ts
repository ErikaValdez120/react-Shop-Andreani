import type { IState } from '@architecture-it/core'
import type { IPerson } from 'interfaces'
import type { RootState } from '..'
import type { combineReducers } from '@reduxjs/toolkit'
import personReducer from '../features/person'

// omitido por brevedad

import { getAll } from '../features/person/asyncActions'

interface IPersonState extends IState<IPerson[]> {}

const initialState: IPersonState = {
  data: [],
  isLoading: false,
  error: null,
}

const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {},
})
// Si tuviesemos acciones simples (funciones en reducers)
// export const { } = personSlice.actions;

//Importante el selectore de la porción del store, que sería el estado de personas
export const selectPerson = (state: RootState) => state.person

//Se exporta por default el reducer
export default personSlice.reducer

/*
store / reducers.ts

const rootReducer = combineReducers({
  person: personReducer,
})

//export default rootReducer

// omitido por brevedad

const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getAll
    builder.addCase(getAll.pending, (state) => {
      state.error = null
      state.isLoading = true
    })
    builder.addCase(getAll.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload as string
      } else {
        state.error = action.error?.message as string
      }
      state.isLoading = false
    })
    builder.addCase(getAll.fulfilled, (state, { payload }) => {
      // payload es de tipo IPerson[]
      state.data = payload
      state.error = null
      state.isLoading = false
    })
  },
})
// Omitido por brevedad
*/
