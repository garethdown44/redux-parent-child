import { call, takeEvery, put, all } from 'redux-saga/effects'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Client } from '../../store/types'
// import { store } from '../../store/store'

const FETCH_CLIENTS = 'clients/fetchClients'
const RELOAD_CLIENTS_FAIL = 'clients/reloadClientsFail'

export type ClientsState = {
  status: 'loading' | 'idle' | 'client-selected'
  clients: Client[]
  selectedClient?: Client
}

const initialState: ClientsState = {
  status: 'idle',
  clients: []
}

export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    selectClient: (state, action: PayloadAction<number>) => {
      const client = state.clients.find(x => x.id === action.payload)
      state.selectedClient = client
      state.status = 'client-selected'
    },
    fetchClientsSuccess: (state, action: PayloadAction<Client[]>) => {
      state.clients = action.payload
      state.status = 'idle'
    },
    reloadClientsSuccess: (state, action: PayloadAction<Client[]>) => {
      state.clients = action.payload
      // todo: reselect client
    }
  }
})

// The action creators from redux-toolkit are exported here
export const { selectClient, reloadClientsSuccess, fetchClientsSuccess } = clientsSlice.actions

// any other action creators can be exported here
export const fetchClients = () => ({ type: FETCH_CLIENTS })

export function* fetchClientsSaga(): any {
  try {
    const data = [
      { id: 1, name: 'Initial client' },
      { id: 2, name: 'Herbie PLC' }
    ]

    const result = yield call(() => Promise.resolve(data))
    yield put(fetchClientsSuccess(result))

  } catch (e) {
    yield put({ type: RELOAD_CLIENTS_FAIL })
  }
}

export function* reloadDataSaga(): any {
  try {
    const data = [
      { id: 1, name: 'Reloaded client' },
      { id: 2, name: 'Herbie PLC' }
    ]

    const result = yield call(() => Promise.resolve(data))
    yield put(reloadClientsSuccess(result))

  } catch (e) {
    yield put({ type: RELOAD_CLIENTS_FAIL })
  }
}

export function* rootSaga() {
  yield all([
    // run the fetchClientsSaga within this module/slice when the FETCH_CLIENTS action is 
    takeEvery(FETCH_CLIENTS, fetchClientsSaga),
    // listen out for actions from children, run a saga in response
    takeEvery('editClient/saveClient/fulfilled', reloadDataSaga)
  ])
}

export default clientsSlice.reducer