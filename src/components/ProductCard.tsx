import {CartItemI} from './Cart'
import {FC} from 'react'
import {HiOutlineShoppingCart} from 'react-icons/hi'

export interface ProductI {
  image: string
  title: string
  price: number
  type: 'latest' | 'all'
}

type Props = {
  item: CartItemI
  handleAddToCart: (clickedItem: CartItemI) => void
}

const ProductCard: FC<Props> = ({item, handleAddToCart}) => {
  const {image, title, price, type} = item

  return (
    <div
      className={`${
        type === 'latest' ? 'w-64' : 'w-full'
      } product-card bg-white  h-[23rem] flex-shrink-0 shadow-sm shadow-purple-300 hover:shadow-md hover:shadow-purple-400 duration-150 ease-in-out`}
    >
      <div className="inner space-y-4 p-2 sm:p-5">
        <div className="image-wrapper h-52 w-full">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-coer mx-auto"
          />
        </div>

        <div className="text-wrapper space-y-4">
          <h3 className="title font-bold">{title}</h3>

          <div className="flex justify-between items-center">
            <p className="price">${price}</p>
            <div
              className="add-to-cart h-8 w-8 grid place-content-center rounded-full cursor-pointer hover:bg-purple-300"
              onClick={() => handleAddToCart(item)}
            >
              <HiOutlineShoppingCart size={20} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
