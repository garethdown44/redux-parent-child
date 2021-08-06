import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import * as actions from './clientsSlice'
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { EditClient } from './edit-client';

export const Clients = () => {
  const dispatch = useAppDispatch()
  const state = useSelector((state: RootState) => state.clients)

  useEffect(() => {
    dispatch(actions.getClientsAsync())
  }, [dispatch])

  if (state.status === 'loading') {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div style={{ display: 'flex' }}>
      <div>hello</div>
      <ul>
        {state.clients.map(x => (
          <li onClick={() => {
            dispatch(actions.selectClient(x.id))
          }}>{x.name}</li>
        ))}
      </ul>

      <div>
        {state.status === 'clientSelected' && <EditClient client={state.selectedClient!} />}
      </div>
    </div>
  )
}