import { IoGameControllerOutline } from 'react-icons/io5'
import { ImBooks } from 'react-icons/im'
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { BsBicycle } from 'react-icons/bs'
import { GiSittingDog } from 'react-icons/gi'
import { FaCouch } from 'react-icons/fa'

const POPULAR_CATEGORIES = [
  { name: 'Books', id: 1, icon: ImBooks },
  { name: 'Electronics', id: 2, icon: HiOutlineDevicePhoneMobile },
  { name: 'Home and Garden', id: 3, icon: FaCouch },
  { name: 'Sport and Tourism', id: 6, icon: BsBicycle },
  { name: 'Games', id: 7, icon: IoGameControllerOutline },
  { name: 'Animals', id: 8, icon: GiSittingDog },
]

export default POPULAR_CATEGORIES
