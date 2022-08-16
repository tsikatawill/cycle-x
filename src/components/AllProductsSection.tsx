/* eslint-disable multiline-ternary */
import {FC, useState} from 'react'
import {HiChevronLeft, HiChevronRight, HiOutlineFilter} from 'react-icons/hi'
import {FaArrowsAltH} from 'react-icons/fa'
import ProductCard from './ProductCard'
import Products from '../products'
import {CartItemI} from './Cart'
import {useDispatch} from 'react-redux'
import {addToCart} from '../slices/cartSlice'

export interface FilterItemI {
  name: string
}

interface FilterPropsI {
  name: string
  filterItems: FilterItemI[]
}

const SearchFilter: FC<FilterPropsI> = ({name, filterItems}) => {
  return (
    <div className="product-type">
      <h4 className="p-2 bg-gray-300 font-semibold">{name}</h4>
      <ul className="space-y-2 p-2">
        {filterItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

interface TogglePropsI {
  onClick: () => void
  menuMinimized: boolean
  className?: string
}

const NavToggleBtn: FC<TogglePropsI> = ({
  onClick,
  menuMinimized,
  className
}) => {
  return (
    <div
      className={`${className} menu-toggle h-6 w-6 bg-white rounded-full text-purple-400 grid place-content-center cursor-pointer`}
      onClick={onClick}
    >
      {menuMinimized ? (
        <HiChevronRight size={20} />
      ) : (
        <HiChevronLeft size={20} />
      )}
    </div>
  )
}

const AllProductsSection = () => {
  const [menuMinimized, setMenuMinimized] = useState(false)
  const dispatch = useDispatch()

  const handleAddToCart = (clickedItem: CartItemI) => {
    dispatch(addToCart(clickedItem))
  }

  return (
    <section className="all-products">
      <div className="container py-5">
        <h2 className="section-title mb-5 text-center">All products</h2>

        <div className="flex gap-5 relative">
          {menuMinimized ? (
            <div className="absolute -top-7 flex gap-2">
              <span className="Menu">Menu</span>
              <NavToggleBtn
                onClick={() => setMenuMinimized(!menuMinimized)}
                menuMinimized={menuMinimized}
              />
            </div>
          ) : (
            <aside className="nav w-52 absolute md:relative -left-2 bg-white h-fit pb-5 flex-shrink-0 shadow-sm md:shadow-none shadow-purple-300">
              <div className="flex justify-between bg-purple-400 text-white font-bold p-2">
                <h3>Menu</h3>

                <NavToggleBtn
                  onClick={() => setMenuMinimized(!menuMinimized)}
                  menuMinimized={menuMinimized}
                />
              </div>

              <div className="mb-5">
                <HiOutlineFilter className="hidden" size={20} />

                <div>
                  <div>
                    <h5 className="font-semibold bg-slate-300 p-2">
                      Price range
                    </h5>

                    <div className="grid grid-cols-3 items-center p-2">
                      <div>
                        <label htmlFor="min">Min</label>
                        <input
                          id="min"
                          type="number"
                          placeholder="min"
                          className="border border-purple-400 p-2 w-full mt-1"
                        />
                      </div>

                      <span className="grid place-content-center mt-5">
                        <FaArrowsAltH size={20} />
                      </span>

                      <div>
                        <label htmlFor="max">Max</label>
                        <input
                          id="max"
                          type="number"
                          placeholder="max"
                          className="border border-purple-400 p-2 w-full mt-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <SearchFilter
                  name="Type"
                  filterItems={[{name: 'Bicycles'}, {name: 'Bicycle parts'}]}
                />
                <SearchFilter
                  name="Condition"
                  filterItems={[{name: 'Brand new'}, {name: 'Fairly used'}]}
                />
              </div>
            </aside>
          )}

          <div
            className={`${
              menuMinimized
                ? 'grid sm:grid-cols-2 md:grid-cols-3'
                : 'grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            } gap-5 w-full`}
          >
            {Products.map((prod, index) => (
              <ProductCard
                key={index}
                item={prod}
                handleAddToCart={() => {
                  handleAddToCart(prod)
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllProductsSection
