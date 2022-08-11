import './FeatureCard.css'

import {FC} from 'react'
import {Link} from 'react-router-dom'

interface Props {
  orientation: 'square' | 'landscape' | 'portrait'
  image: string
  description?: string
  buyURL?: string
}

const FeatureCard: FC<Props> = ({orientation, image, description, buyURL}) => {
  return (
    <div className={`${orientation} feature-card`}>
      <div className="text p-2 sm:p-5">
        <h3 className="font-bold text-sm sm:text-base title">
          Some interesting product title
        </h3>
        <p className="text-xs sm:text-sm description mb-3">{description}</p>
        {buyURL && (
          <Link
            to={buyURL}
            className="text-xs sm:text-sm px-3 py-1 border border-black"
          >
            Buy now
          </Link>
        )}
      </div>
      <div className="image-wrapper">
        <img src={image} alt="cycle" />
      </div>
    </div>
  )
}
export default FeatureCard
