import CartReducer from '../slices/cartSlice'
import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    cart: CartReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
