import CartItem from './CartItem'
import {FC} from 'react'
import {addToCart} from '../slices/cartSlice'
import {useDispatch} from 'react-redux'

export interface CartItemI {
  amount: number
  image: string
  price: number
  title: string
  type: 'all' | 'latest'
}

type Props = {
  cartItems: CartItemI[]
}

export const handleRemoveFromCart = (title: string) => {
  console.log(title)
}

export const getTotalItems = (cartItems: CartItemI[]) => {
  return cartItems.reduce((ack, cartItems) => ack + cartItems.amount, 0)
}
const Cart: FC<Props> = ({cartItems}) => {
  const dispatch = useDispatch()

  return (
    <div>
      <ul className="space-y-5 list-disc ml-4">
        {cartItems.map((item, index) => (
          <li key={index}>
            <CartItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
