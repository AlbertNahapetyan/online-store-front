import CATEGORIES from '../../const'
import Link from 'next/link'
import PropTypes from 'prop-types'

const DropDown = ({ isOpen }) => {
  return (
    <>
      <ul className={isOpen ? 'max-h-full' : 'max-h-0 overflow-y-hidden'}>
        {CATEGORIES.map((category) => (
          <Link href={`/products/${category.id}`} key={category.id}>
            <li className="text-white mb-2 ml-4 hover:cursor-pointer py-2 px-3 rounded-2xl hover:bg-gray-350 hover:text-orange-350">
              {category.name}
            </li>
          </Link>
        ))}
      </ul>
    </>
  )
}

DropDown.propTypes = {
  isOpen: PropTypes.bool,
}

export default DropDown
