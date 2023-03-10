import Categories from './Categories'
import Help from './Help'
import Sell from './Sell'

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-450 w-1/5 p-4 fixed left-0 top-20 h-screen">
        <Categories />
        <Sell />
        <Help />
      </nav>
    </>
  )
}

export default Navbar
