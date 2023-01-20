import { IoNotificationsSharp } from "react-icons/io5"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BiHeart } from "react-icons/bi"

const RightPart = () => {
  return (
      <div className="ml-auto flex items-center justify-center h-full">
        <div className="mx-5 hover:cursor-pointer">
            <BiHeart color="white" />
        </div>
        <div className="h-12 rounded-md bg-orange-350 p-4 flex items-center justify-center mx-5 hover:cursor-pointer relative">
          <AiOutlineShoppingCart color="black" />
            <div className="w-5 h-5 rounded-full -top-1 text-sm -right-1 absolute bg-white flex items-center justify-center">
                <span>1</span>
            </div>
        </div>
        <div className="mx-5 hover:cursor-pointer">
            <IoNotificationsSharp color="white" />
        </div>
        <span className="text-white mr-4 hover:cursor-pointer">Sign in</span>
      </div>
  )
}

export default RightPart