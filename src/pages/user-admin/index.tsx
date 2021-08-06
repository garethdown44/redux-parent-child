import { Provider } from "react-redux"
import { Clients } from "./modules/clients/clients"
import { store } from './store/store'

export default function UserAdmin() {
  return (
    <Provider store={store}>
      <Clients />
    </Provider>
  )
}