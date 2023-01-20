import { HiQrCode } from 'react-icons/hi2'
import { useState } from 'react'
import DropDown from './DropDown'

const Categories = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <div
        onClick={toggle}
        className="flex text-white items-center hover:cursor-pointer py-2 px-3 rounded-2xl hover:bg-gray-350 hover:text-orange-350"
      >
        <HiQrCode size="20px" />
        <h2 className="ml-2">Categories</h2>
      </div>
      <DropDown isOpen={isOpen} />

    </>
  )
}

export default Categories
