import LatestProductCard from './ProductCard'
import Prod from '../images/cycle1.webp'
import Prod2 from '../images/part5.webp'
import Prod3 from '../images/part4.webp'
import Prod4 from '../images/part3.webp'

const LatestProductsSection = () => {
  return (
    <section className="latest-products">
      <div className="container py-5">
        <h2 className="section-title">Latest Products</h2>

        <div className="product-cards w-full overflow-auto mt-5 pb-5">
          <div className="flex gap-5">
            <LatestProductCard
              title="some product"
              image={Prod}
              price={99.99}
              type="latest"
            />
            <LatestProductCard
              title="some product"
              image={Prod4}
              price={99.99}
              type="latest"
            />
            <LatestProductCard
              title="some product"
              image={Prod3}
              price={99.99}
              type="latest"
            />
            <LatestProductCard
              title="some product"
              image={Prod2}
              price={99.99}
              type="latest"
            />
            <LatestProductCard
              title="some product"
              image={Prod}
              price={99.99}
              type="latest"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestProductsSection
