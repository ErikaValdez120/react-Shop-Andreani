import type { IPerson } from 'interfaces'
import PersonService from 'services/person'

export const getAll = createAsyncThunk<IPerson[], void>(
  'ACA VA EL LOCALHOST DE MI API',
  async (_, { rejectWithValue, signal }) => {
    try {
      // signal es justamente de tipo AbortSignal, permite cancelar la promesa, programaticamente, y por lo tanto la llamada al servicio
      // se llama desde services/person/index.ts
      const data = await PersonService.getAll(idOrder, signal)

      return data
    } catch (err) {
      // función que permite cancelar la promesa con el error que corresponda
      return rejectWithValue(err.isAxiosError ? err.response.data : err)
    }
  }
)
