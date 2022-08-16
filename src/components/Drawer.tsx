import {FC, ReactNode, useEffect} from 'react'
import {FaTimes} from 'react-icons/fa'

interface Props {
  showMenu: boolean
  onClose: () => void
  children: ReactNode
}

const Drawer: FC<Props> = ({showMenu, onClose, children}) => {
  useEffect(() => {
    const body: any = document.querySelector('body')
    if (showMenu) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = 'auto'
    }
  }, [showMenu])

  return (
    <aside
      className={`${
        showMenu ? 'right-0 opacity-100' : '-right-full opacity-0'
      } fixed top-0 w-full h-screen bg-black bg-opacity-25 z-50 duration-200`}
    >
      <div className="inner w-full sm:w-96 ml-auto h-full overflow-y-auto bg-white text-black p-5">
        <div className="header flex justify-between mb-5 border-b-2 pb-1 border-black">
          <h2 className="font-bold text-2xl">Cart</h2>
          <button onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {children}
      </div>
    </aside>
  )
}

export default Drawer
