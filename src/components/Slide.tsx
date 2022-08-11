import {FC, useState} from 'react'

type SlideT = {
  title: string
  description: string
  img: string
}

interface Props {
  slides: SlideT[]
}

export const Slide: FC<Props> = ({slides}) => {
  const [selectedSlide, setSelectedSlide] = useState<SlideT>(slides[0])

  return (
    <div className="slide h-full">
      <div className="h-full flex flex-col justify-between">
        <div className="currentSlide grid grid-cols-1 gap-5 sm:grid-cols-2 items-center h-96">
          <div className="text space-y-2 sm:space-y-5 text-center sm:text-left">
            <h1 className="text-2xl sm:text-4xl font-bold capitalize">
              {selectedSlide.title}
            </h1>
            <p>{selectedSlide.description}</p>
            <button className="px-4 py-1 border-black border">Buy now</button>
          </div>

          <div className="image row-start-1 col-start-1 sm:col-start-2">
            <img
              src={selectedSlide.img}
              className="h-52 mx-auto sm:mx-0 sm:h-80"
              alt={selectedSlide.title}
            />
          </div>
        </div>

        <div className="slideNavigation flex justify-center gap-2">
          {slides.map((item, index) => {
            return (
              <div
                key={index}
                className="navigationBtn  hover:scale-125 ease-in-out duration-150"
                onClick={() => setSelectedSlide(item)}
              >
                <img src={item.img} alt="" className="w-10" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
