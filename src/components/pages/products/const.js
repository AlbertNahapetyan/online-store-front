import { ImBooks } from 'react-icons/im'
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { FaCouch } from 'react-icons/fa'
import { BsBicycle } from 'react-icons/bs'
import { IoGameControllerOutline } from 'react-icons/io5'
import { GiSittingDog, GiLargeDress } from 'react-icons/gi'
import { FcFilmReel } from 'react-icons/fc'
import { MdOutlineCardGiftcard } from 'react-icons/md'
import { RxHobbyKnife } from 'react-icons/rx'

const CategoryIcons = {
  Books: { icon: ImBooks },
  Electronics: { icon: HiOutlineDevicePhoneMobile },
  'Home and Garden': { icon: FaCouch },
  Fashion: { icon: GiLargeDress },
  'Film and Music': { icon: FcFilmReel },
  'Sport and Tourism': { icon: BsBicycle },
  Games: { icon: IoGameControllerOutline },
  Animals: { icon: GiSittingDog },
  Hobby: { icon: RxHobbyKnife },
  'Gift Cards': { icon: MdOutlineCardGiftcard },
}

export default CategoryIcons
