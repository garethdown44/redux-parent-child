import { call, takeEvery, put } from "redux-saga/effects";
// import { fetchData } from "./store";
// import { sagaActions } from "./sagaActions";

// let callAPI = async ({ url, method, data }) => {
//   return await Axios({
//     url,
//     method,
//     data
//   });
// };

export function* fetchDataSaga() : any {
  try {
    let result = yield call(() => Promise.resolve('hello'))
    yield put(result);
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export default function* rootSaga() {
  yield takeEvery('RELOAD_CLIENTS', fetchDataSaga);
}


// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

// export type Client = {
//   id: number
//   name: string
// }

// export interface ClientsState {
//   status: 'loading' | 'idle' | 'clientSelected'
//   clients: Client[]
//   selectedClient?: Client
// }

// const initialState: ClientsState = {
//   status: 'idle',
//   clients: []
// }

// export const getClientsAsync = createAsyncThunk(
//   'clients/fetchClients',
//   async () => {
//     return [
//       {
//         id: 1,
//         name: 'Tedson Industries'
//       },
//       {
//         id: 2,
//         name: 'Herbie PLC'
//       }
//     ]
//   }
// )

// export const reloadClientsAsync = createAsyncThunk(
//   'clients/reloadClients',
//   async () => {
//     return [
//       {
//         id: 1,
//         name: 'Test'
//       },
//       {
//         id: 2,
//         name: 'Herbie PLC'
//       }
//     ]
//   }
// );

// export const clientsSlice = createSlice({
//   name: 'clients',
//   initialState,
//   reducers: {
//     selectClient: (state, action: PayloadAction<number>) => {
//       const client = state.clients.find(x => x.id === action.payload)
//       state.selectedClient = client
//       state.status = 'clientSelected'
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getClientsAsync.pending, (state) => {
//         state.status = 'loading'
//       })
//       .addCase(getClientsAsync.fulfilled, (state, action) => {
//         state.status = 'idle'
//         state.clients = action.payload
//       })
//   }
// })

// export const { selectClient } = clientsSlice.actions

// export default clientsSlice.reducer