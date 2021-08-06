import { ThunkAction, Action, configureStore } from '@reduxjs/toolkit'
import editClientReducer from '../modules/edit-client/edit-client-slice'
import createSagaMiddleware from '@redux-saga/core'
import clientsReducer, { rootSaga } from '../modules/clients/clients-slice'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    clients: clientsReducer,
    editClient: editClientReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export type UserAdminDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type UserAdminDispatchThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  UserAdminDispatch,
  unknown,
  Action<string>
>