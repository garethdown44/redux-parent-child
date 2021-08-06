import { ClientsState } from '../modules/clients/clients-slice'
import { EditClient } from '../modules/edit-client/edit-client'

type Props = {
  state: ClientsState
  onSelectClient: (clientId: number) => void
}

export const ClientsStateless = ({ state, onSelectClient }: Props) => {
  if (state.status === 'loading') {
    return (
      <div>Loading...</div>
    )
  }
  
  return (
    <div style={{ display: 'flex' }}>
      <ul>
        {state.clients.map(x => (
          <li style={{ cursor: 'pointer' }} key={x.id} onClick={() => onSelectClient(x.id)}>{x.name}</li>
        ))}
      </ul>
  
      <div style={{ marginLeft: '20px'}}>
        {state.status === 'client-selected' && <EditClient client={state.selectedClient!} />}
      </div>
    </div>
  )
}