import Cycle from '../images/cycle6.webp'
import {FC} from 'react'
import FeatureCard from './FeatureCard'
import Part from '../images/part5.webp'
import Part2 from '../images/part4.webp'

const FeaturedSection: FC = () => {
  return (
    <section className="featured">
      <div className="container py-5">
        <h2 className="section-title mb-5 text-center">Featured Products</h2>
        <div className="sm:grid grid-cols-2 md:grid-cols-3 gap-5 space-y-5 sm:space-y-0">
          <FeatureCard
            orientation="portrait"
            description="Ipsum dolor sit amet consectetur."
            image={Cycle}
            buyURL="/login"
          />
          <FeatureCard orientation="square" image={Part} />
          <FeatureCard orientation="square" image={Part2} />
          <FeatureCard
            orientation="landscape"
            description="Ipsum dolor sit amet consectetur."
            image={Cycle}
            buyURL="/#"
          />
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection
