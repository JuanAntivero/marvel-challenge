import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../store'

// Use instead of plain `useDispatch` and `useSelector` for better typing
export const useStoreDispatch = useDispatch.withTypes<AppDispatch>()
export const useStoreSelector = useSelector.withTypes<RootState>()