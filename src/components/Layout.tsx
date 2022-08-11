import {FC, ReactElement} from 'react'
import Navbar from './Navbar'

interface Props {
  children: ReactElement
}

const Layout: FC<Props> = ({children}) => {
  return (
    <>
      <Navbar />
      {children}
      <footer>footer</footer>
    </>
  )
}

export default Layout
