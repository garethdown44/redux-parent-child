import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, UserAdminDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<UserAdminDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;