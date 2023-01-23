import { HiQrCode } from 'react-icons/hi2'
import DropDown from './DropDown'
import { useToggler } from '@/hooks/useToggler'

const Categories = () => {
  const [isOpen, { toggle }] = useToggler(false)

  return (
    <>
      <div
        onClick={toggle}
        className="flex text-white ml-auto items-center hover:cursor-pointer py-2 px-3 rounded-2xl hover:bg-gray-350 hover:text-orange-350"
      >
        <HiQrCode size="20px" />
        <h2 className="ml-2">Categories</h2>
      </div>
      <DropDown isOpen={isOpen} />
    </>
  )
}

export default Categories
