import {CartItemI} from '../components/Cart'
import Cycle2 from '../images/cycle5.webp'
import {createSlice} from '@reduxjs/toolkit'

interface CartItem {
  value: CartItemI[]
}

const initialState: CartItem = {
  value: [
    {
      image: Cycle2,
      title: 'Great travelling/hiking companion',
      price: 59,
      type: 'all',
      amount: 1
    }
  ]
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
