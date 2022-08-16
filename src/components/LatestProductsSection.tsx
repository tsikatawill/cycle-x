import {CartItemI} from './Cart'
import LatestProductCard from './ProductCard'
import {LatestProducts} from '../products'
import {addToCart} from '../slices/cartSlice'
import {useDispatch} from 'react-redux'

const LatestProductsSection = () => {
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
            {LatestProducts.map((prod, index) => (
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
