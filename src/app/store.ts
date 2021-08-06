import { ThunkAction, Action, configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import clientsReducer, { reloadClientsAsync } from '../features/clients/clientsSlice'
import editClientReducer from '../features/clients/edit-client-slice'
import notify from './notify-middleware'

const notifyEvents = [
  {
    catch: ['editClient/saveClient/fulfilled'],
    dispatch: reloadClientsAsync
  }
];

const notifyMiddleware = notify(notifyEvents)

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    clients: clientsReducer,
    editClient: editClientReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(notifyMiddleware)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>