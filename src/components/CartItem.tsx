import {HiOutlineChevronDown, HiOutlineChevronUp} from 'react-icons/hi'
import {CartItemI} from './Cart'

const CartItem = (props: CartItemI) => {
  return (
    <div className="flex justify-between flex-col-reverse sm:flex-row gap-5">
      <div className="w-3/4">
        <div className="flex justify-between">
          <p className="font-bold">{props.title}</p>
          <p>${props.price.toFixed(2)}</p>
        </div>

        <div>
          <p className="text-base font-medium">Units</p>
          <div className="flex justify-between">
            <p className="amount">10</p>
            <div className="text-xs font-black">
              <div className="h-4 w-4 bg-black grid place-content-center">
                <HiOutlineChevronUp color="white" />
              </div>
              <div className="h-4 w-4 bg-black grid place-content-center">
                <HiOutlineChevronDown color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="image bg-slate-200 w-1/4">
        <img
          src={props.image}
          alt={props.title + '.jpg'}
          className="h-full w-full text-white"
        />
      </div>
    </div>
  )
}

export default CartItem
