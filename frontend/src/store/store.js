import { configureStore } from '@reduxjs/toolkit'
import NavigationReducer from '../slices/NavSlices'

export const store = configureStore({
  reducer: {
    Navigation: NavigationReducer,
  },
})