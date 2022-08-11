import Cycle from '../../images/cycle1.png'
import Cycle2 from '../../images/cycle2.png'
import Cycle3 from '../../images/cycle3.png'

import {Slide} from '../../components/Slide'

const Homepage = () => {
  return (
    <header className="h-[35rem] sm:h-[30rem]">
      <div className="container h-full py-5">
        <Slide
          slides={[
            {
              title: 'E-Mania 100m On a single charge',
              img: Cycle,
              description:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, ea exercitationem accusamus et minima minus adipisci repudiandae explicabo ipsum impedit nobis sequi autem nesciunt vitae tempora voluptate obcaecati dolor voluptatum!'
            },
            {
              title: 'Mountain X-Trememo Super Sturdy',
              img: Cycle2,
              description:
                'Cupiditate, ea exercitationem accusamus et minima minus adipisci repudiandae explicabo ipsum impedit nobis sequi autem nesciunt vitae tempora voluptate obcaecati dolor voluptatum!'
            },
            {
              title: 'Kittie Choo Choo the playground all day',
              img: Cycle3,
              description:
                'autem nesciunt vitae tempora voluptate obcaecati dolor voluptatum! Cupiditate, ea exercitationem accusamus et minima minus adipisci repudiandae explicabo ipsum impedit nobis sequi.'
            },
            {
              title: 'Comfy Bum Bum',
              img: Cycle3,
              description:
                'autem nesciunt vitae tempora voluptate obcaecati dolor voluptatum! Cupiditate, ea exercitationem accusamus et minima minus adipisci repudiandae explicabo ipsum impedit nobis sequi.'
            }
          ]}
        />
      </div>
    </header>
  )
}

export default Homepage
