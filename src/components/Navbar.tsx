import Cart, {getTotalItems} from './Cart'
import {FC, useState} from 'react'
import {
  HiChevronDown,
  HiOutlineLogin,
  HiOutlineLogout,
  HiOutlineShoppingCart
} from 'react-icons/hi'
import Drawer from './Drawer'
import {Link} from 'react-router-dom'
import {RootState} from '../store/store'
import {useSelector} from 'react-redux'

const Navbar: FC = () => {
  const [showLogout, setShowLogout] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const cartItems = useSelector((state: RootState) => state.cart.value)
  const cartItemCount = getTotalItems(cartItems)

  const handleCartClose = () => {
    setShowCart(false)
  }

  return (
    <nav className="navbar h-20 bg-black text-white">
      <div className="container flex items-center h-full justify-between">
        <Link to="/" className="logo text-3xl font-black uppercase">
          Cycle-X
        </Link>

        <div className="hidden sm:flex gap-2">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="flex gap-8 items-center">
          <div
            className="cart-icon relative cursor-pointer"
            onClick={() => setShowCart(true)}
          >
            <HiOutlineShoppingCart size={20} />
            {cartItemCount > 0 && (
              <div className="item-count text-xs text-black grid place-content-center absolute -top-3 -right-3 bg-white rounded-full font-semibold h-5 w-5">
                {cartItemCount}
              </div>
            )}
          </div>

          <div className="user-details flex sm:hidden items-center gap-1">
            <div className="image-wrapper h-12 w-12 bg-white rounded-full"></div>
            <div className="logout relative">
              <button
                className="p-1 hover:bg-slate-900 duration-100 ease-out"
                onClick={() => setShowLogout(!showLogout)}
              >
                <HiChevronDown size={20} />
              </button>
              {showLogout && (
                <p className="bg-white text-black text-sm whitespace-nowrap absolute right-0 -bottom-10 flex items-center gap-2 px-2">
                  Logout <HiOutlineLogout />
                </p>
              )}
            </div>
          </div>

          <Link to="/login" className="hidden sm:flex gap-1 items-center">
            Login <HiOutlineLogin />
          </Link>
        </div>
      </div>

      <Drawer showMenu={showCart} onClose={handleCartClose}>
        <Cart cartItems={cartItems} />
      </Drawer>
    </nav>
  )
}

export default Navbar
