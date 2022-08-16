import LatestProductCard from './ProductCard'
import Products from '../products'
import {CartItemI} from './Cart'
import {useDispatch} from 'react-redux'
import {addToCart} from '../slices/cartSlice'

const LatestProductsSection = () => {
  const latest = Products.filter((item) => item.type === 'latest')
  const dispatch = useDispatch()

  const handleAddToCart = (clickedItem: CartItemI) => {
    dispatch(addToCart(clickedItem))
  }

  return (
    <section className="latest-products">
      <div className="container py-5">
        <h2 className="section-title">Latest Products</h2>

        <div className="product-cards w-full overflow-auto mt-5 pb-5">
          <div className="flex gap-5">
            {latest.map((prod, index) => (
              <LatestProductCard
                key={index}
                item={prod}
                handleAddToCart={() => handleAddToCart(prod)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestProductsSection
