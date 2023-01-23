import { IoNotificationsSharp } from 'react-icons/io5'
import { AiOutlineShoppingCart, AiFillHeart } from 'react-icons/ai'
import { BiHeart } from 'react-icons/bi'
import { useToggler } from '@/hooks/useToggler'

const RightPart = () => {
  const [heart, { toggle: toggleHeart }] = useToggler(false)
  const [notification, { toggle: toggleNotification }] = useToggler(false)

  return (
    <div className="ml-auto flex items-center justify-center h-full">
      <div className="mx-5 hover:cursor-pointer" onClick={toggleHeart}>
        {heart ? (
          <AiFillHeart color="orange" size="20px" />
        ) : (
          <BiHeart color="white" size="20px" />
        )}
      </div>
      <div className="h-12 rounded-md bg-orange-350 p-4 flex items-center justify-center mx-5 hover:cursor-pointer relative">
        <AiOutlineShoppingCart color="black" />
        <div className="w-5 h-5 rounded-full -top-1 text-sm -right-1 absolute bg-white flex items-center justify-center">
          <span>1</span>
        </div>
      </div>
      <div
        onClick={toggleNotification}
        className={`mx-5 hover:cursor-pointer ${
          notification ? 'text-orange-350' : 'text-white'
        }`}
      >
        <IoNotificationsSharp />
      </div>
      <span className="text-white mr-4 hover:cursor-pointer">Sign in</span>
    </div>
  )
}

export default RightPart
