import type { AsyncThunk, AsyncThunkOptions, AsyncThunkPayloadCreator } from '@reduxjs/toolkit'
import type { Dispatch } from 'redux'

import type { RootState } from '../store'

declare module '@reduxjs/toolkit' {
  type AsyncThunkConfig = {
    state?: unknown
    dispatch?: Dispatch
    extra?: unknown
    rejectValue?: unknown
    serializedErrorType?: unknown
  }

  export function createAsyncThunk<
    Returned,
    ThunkArg = void,
    ThunkApiConfig extends AsyncThunkConfig = { state: RootState } // here is the magic line
  >(
    _typePrefix: string,
    _payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, ThunkApiConfig>,
    _options?: AsyncThunkOptions<ThunkArg, ThunkApiConfig>
  ): AsyncThunk<Returned, ThunkArg, ThunkApiConfig>
}
