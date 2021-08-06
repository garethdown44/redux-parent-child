import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { EditClientStateless } from '../../stateless/edit-client-stateless'
import { useAppDispatch } from '../../store/hooks'
import { RootState } from '../../store/store'
import { Client } from '../../store/types'
import * as actions from './edit-client-slice'

export const EditClient = ({ client } : { client: Client }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(actions.init({ ...client }))
  }, [dispatch, client])

  const state = useSelector((state: RootState) => state.editClient)

  return (
    <EditClientStateless
      client={state.client}
      isSaveSuccess={state.isSaveSuccess}
      count={state.count}
      onIncrement={(amount) => dispatch(actions.increment(amount))}
      onSave={() => dispatch(actions.saveClientAsync())} 
    />
  )
}