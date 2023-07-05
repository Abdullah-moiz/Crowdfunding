import { configureStore } from '@reduxjs/toolkit'
import NavigationReducer from '../slices/NavSlices'
import contractReducer from '../slices/smartContractSlice'

export const store = configureStore({
  reducer: {
    Navigation: NavigationReducer,
    Contract : contractReducer,
  },
})