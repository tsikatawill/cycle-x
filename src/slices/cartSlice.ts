import {CartItemI} from '../components/Cart'
import {createSlice} from '@reduxjs/toolkit'

interface CartItem {
  value: CartItemI[]
}

const initialState: CartItem = {
  value: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value.push(action.payload)
    }
  }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer
