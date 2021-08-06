import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Client } from './clientsSlice';

export interface EditClientState {
  status: 'idle' | 'editing'
  client?: Client
  isSaveSuccess: boolean
}

const initialState: EditClientState = {
  status: 'idle',
  isSaveSuccess: false
}

export const saveClientAsync = createAsyncThunk(
  'editClient/saveClient',
  async () => {
    return [
      {
        id: 1,
        name: 'Tedson Industries'
      },
      {
        id: 2,
        name: 'Herbie PLC'
      }
    ]
  }
);

export const editClientSlice = createSlice({
  name: 'editClient',
  initialState,
  reducers: {
    init: (state, action: PayloadAction<Client>) => {
      state.client = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveClientAsync.pending, (state) => {
      })
      // .addCase(incrementAsync.rejected, (state, action) => {
      // })
      .addCase(saveClientAsync.fulfilled, (state, action) => {
        console.log('ACTION', action)
        state.isSaveSuccess = true
      })
  }
})

export const { init } = editClientSlice.actions

export default editClientSlice.reducer