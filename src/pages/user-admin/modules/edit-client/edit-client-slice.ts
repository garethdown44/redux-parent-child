import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Client } from '../../store/types'

export type EditClientState = {
  status: 'idle' | 'editing'
  client?: Client
  count: number
  isSaveSuccess: boolean
}

const initialState: EditClientState = {
  status: 'idle',
  count: 1,
  isSaveSuccess: false
}

export const saveClientAsync = createAsyncThunk(
  'editClient/saveClient',
  async () => {
    return Promise.resolve('success')
  }
)

export const editClientSlice = createSlice({
  name: 'editClient',
  initialState,
  reducers: {
    init: (state, action: PayloadAction<Client>) => {
      state.client = action.payload
      state.count = 0
      state.isSaveSuccess = false
    },
    increment: (state, action: PayloadAction<number>) => {
      state.count += action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveClientAsync.pending, (state) => {
      })
      .addCase(saveClientAsync.fulfilled, (state, action) => {
        state.isSaveSuccess = true
      })
  }
})

export const { init, increment } = editClientSlice.actions

export default editClientSlice.reducer