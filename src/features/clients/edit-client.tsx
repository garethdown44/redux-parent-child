import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../app/hooks'
import { RootState } from '../../app/store'
import { Client } from './clientsSlice'
import * as actions from './edit-client-slice'

export const EditClient = ({ client } : { client: Client }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(actions.init({ ...client }))
  }, [dispatch, client])

  const state = useSelector((state: RootState) => state.editClient)

  if (state.client) {
    return (
      <div>
        <div>Client ID</div>
        <div>{state.client.id}</div>
  
        <div>Client Name</div>
        <div>{state.client.name}</div>
  
        <button onClick={() => dispatch(actions.saveClientAsync())}>Save</button>
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}