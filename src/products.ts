import {CartItemI} from './components/Cart'
import Cycle from './images/cycle2.webp'
import Cycle2 from './images/cycle5.webp'
import Part from './images/part4.webp'
import Part2 from './images/part5.webp'

const AllProducts: CartItemI[] = [
  {
    image: Cycle,
    title: 'Awesome mountain bike available',
    price: 59,
    type: 'all',
    amount: 1
  },
  {
    image: Part2,
    title: "Very 'sturdy' bike pedals",
    price: 59,
    type: 'all',
    amount: 1
  },
  {
    image: Cycle2,
    title: 'Great travelling/hiking companion',
    price: 59,
    type: 'all',
    amount: 1
  },
  {
    image: Part,
    title: 'New brake shoes',
    price: 59,
    type: 'all',
    amount: 1
  }
]

export const LatestProducts: CartItemI[] = [
  {
    image: Cycle,
    title: 'Awesome mountain bike available',
    price: 59,
    type: 'latest',
    amount: 1
  },
  {
    image: Part2,
    title: "Very 'sturdy' bike pedals",
    price: 59,
    type: 'latest',
    amount: 1
  },
  {
    image: Cycle2,
    title: 'Great travelling/hiking companion',
    price: 59,
    type: 'latest',
    amount: 1
  },
  {
    image: Part,
    title: 'New brake shoes',
    price: 59,
    type: 'latest',
    amount: 1
  }
]

export default AllProducts
