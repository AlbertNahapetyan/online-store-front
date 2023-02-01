import { IoNotificationsSharp } from 'react-icons/io5'
import { AiOutlineShoppingCart, AiFillHeart } from 'react-icons/ai'
import { BiHeart } from 'react-icons/bi'
import { useToggler } from '@/hooks/useToggler'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { BasketItemsCount } from '@/storage/atoms'
import Link from 'next/link'
import clsx from 'clsx'

const RightPart = () => {
  const { asPath } = useRouter()
  const heart = asPath === '/favorites'
  const [notification, { toggle: toggleNotification }] = useToggler(false)
  const basketItemsCount = useRecoilValue(BasketItemsCount)

  return (
    <div className="ml-auto flex items-center justify-center h-full">
      <Link href={heart ? '/' : '/favorites'}>
        <div className="mx-5 hover:cursor-pointer">
          {heart ? (
            <AiFillHeart color="orange" size={20} />
          ) : (
            <BiHeart color="white" size={20} />
          )}
        </div>
      </Link>
      <Link href="/basket">
        <div className="h-12 rounded-md bg-orange-350 p-4 flex items-center justify-center mx-5 hover:cursor-pointer relative">
          <AiOutlineShoppingCart color="black" />
          <div className="w-5 h-5 rounded-full -top-1 text-sm -right-1 absolute bg-white flex items-center justify-center">
            <span>{basketItemsCount}</span>
          </div>
        </div>
      </Link>
      <div
        onClick={toggleNotification}
        className={clsx(
          'mx-5 hover:cursor-pointer',
          { 'text-orange-350': notification },
          { 'text-white': !notification }
        )}
      >
        <IoNotificationsSharp />
      </div>
      <span className="text-white mr-4 hover:cursor-pointer">Sign in</span>
    </div>
  )
}

export default RightPart
