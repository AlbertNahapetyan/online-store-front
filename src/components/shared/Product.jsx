import PropTypes from 'prop-types'
import { BiHeart } from 'react-icons/bi'
import { AiOutlineShoppingCart, AiFillHeart } from 'react-icons/ai'
import { useToggler } from '@/hooks/useToggler'

const Product = ({ img, name, id, price, company }) => {
  const [heart, { toggle: toggleHeart }] = useToggler(false)

  return (
    <>
      <li className="w-48 h-76 mr-8">
        <div
          style={{ backgroundImage: `url(${img})` }}
          className={`h-2/3 w-full relative bg-white text-black bg-no-repeat bg-center bg-contain bg-white rounded-2xl`}
        >
          <div
            onClick={toggleHeart}
            className="absolute top-2.5 right-2.5 flex items-center justify-center z-50"
          >
            {heart ? (
              <AiFillHeart color="orange" size={22} />
            ) : (
              <BiHeart color="black" size={22} />
            )}
          </div>
          <div className="hover:cursor-pointer absolute flex items-center justify-center z-50 bottom-2.5 right-2.5">
            <AiOutlineShoppingCart size={22} color="black" />
          </div>
        </div>
        <div className="w-full h-1/5">
          <h3 className="font-medium text-base">{name}</h3>
          <span className="text-aqua-150 font-normal text-sm">{company}</span>
        </div>
      </li>
    </>
  )
}

Product.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number,
  price: PropTypes.string.isRequired,
  company: PropTypes.string,
}

export default Product
