import Image from 'next/image'
// import DropDown from './DropDown'
import { useToggler } from '@/hooks/useToggler'

const Categories = () => {
  const [isOpen, { toggle }] = useToggler(false)

  return (
    <>
      <div
        onClick={toggle}
        className="hover:cursor-pointer z-50 relative h-full px-8 flex items-center bg-gray-450 border-2 border-r-0 border-gray-150"
      >
        <span className="text-white">All categories</span>
        <div className="ml-2 h-fit">
          <Image
            placeholder="blur"
            width={10}
            height={10}
            src="/images/vector.svg"
            alt="vector"
          />
        </div>
      </div>
      {/*<DropDown isOpen={isOpen} />*/}
    </>
  )
}

export default Categories
