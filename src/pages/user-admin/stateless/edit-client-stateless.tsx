import { useState } from 'react'
import { SaveSuccessMessage } from '../../../components'
import { Client } from '../store/types'

type Props = {
  client?: Client
  isSaveSuccess: boolean
  count: number
  onIncrement: (amount: number) => void
  onSave: () => void
}

export const EditClientStateless = ({ client, isSaveSuccess, count, onIncrement, onSave } : Props) => {
  // Local state can still be used. By "stateless" it means no reliance on redux dispatch or global state
  const [amount, setAmount] = useState(0)

  if (client) {
    return (
      <div>
        <h3>Client details</h3>
        <div>Client ID</div>
        <div>{client.id}</div>
  
        <div>Client Name</div>
        <div>{client.name}</div>

        <h3>Increment</h3>

        <div>Current count: {count}</div>

        <label>Amount to increment</label>
        <input type="text" value={amount} onChange={e => setAmount(Number(e.target.value))} />
        <button onClick={() => onIncrement(amount)}>Increment</button>

        <div>
          <SaveSuccessMessage
            isSaveSuccess={isSaveSuccess}
          >
            Client saved successfully
          </SaveSuccessMessage>
    
          <button onClick={() => onSave()}>Save</button>
        </div>
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}