import { useEffect } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { useSelector } from 'react-redux'
import { fetchClients, selectClient } from './clients-slice'
import { RootState } from '../../store/store'
import { ClientsStateless } from '../../stateless/clients-stateless'

export const Clients = () => {
  const dispatch = useAppDispatch()
  const state = useSelector((state: RootState) => {
    return state.clients
  })

  useEffect(() => {
    dispatch(fetchClients())
  }, [dispatch])

  return (
    <ClientsStateless
      state={state}
      onSelectClient={(clientId: number) => dispatch(selectClient(clientId))}
    />
  )
}