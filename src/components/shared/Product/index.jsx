import PropTypes from 'prop-types'
import { BiHeart } from 'react-icons/bi'
import { AiOutlineShoppingCart, AiFillHeart } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import RATINGS, { keys } from './const'
import Link from 'next/link'
import {
  FavoriteItems,
  BasketItems,
  BasketItemsCount,
  BasketItemsPrice,
} from '@/storage/atoms'
import { useRecoilState, useSetRecoilState } from 'recoil'

const Product = ({
  img,
  name,
  id,
  price,
  company,
  rating,
  hotDeal,
  companyId,
  favoriteItem,
    basketItem
}) => {
  const [favoriteItems, setFavoriteItems] = useRecoilState(FavoriteItems)
  const [basketItems, setBasketItems] = useRecoilState(BasketItems)
  const setBasketItemsCount = useSetRecoilState(BasketItemsCount)
  const setBasketItemsPrice = useSetRecoilState(BasketItemsPrice)

  const heart = !!favoriteItems[id]
  const basket = !!basketItems[id]
  const strapiAPI = process.env.NEXT_PUBLIC_STRAPI_API

  const product = {
    name,
    price,
    rating,
    img,
    company,
    companyId,
  }

  const deleteFavoriteItem = (id) => {
    const obj = { ...favoriteItems }
    delete obj[id]
    setFavoriteItems(obj)
  }

  const deleteBasketItem = (id) => {
    const obj = { ...favoriteItems }
    setBasketItemsCount(prev => prev - 1)
    setBasketItemsPrice(prev => prev - price)
    delete obj[id]
    setBasketItems(obj)
  }

  const deleteItem = favoriteItem ? deleteFavoriteItem : deleteBasketItem

  const toggleFavorite = () => {
    if (heart) {
      const filteredItems = { ...favoriteItems }
      delete filteredItems[id]
      setFavoriteItems(filteredItems)
    } else {
      setFavoriteItems((prev) => ({ ...prev, [id]: product }))
    }
  }

  const toggleBasket = () => {
    if (basket) {
      const filteredItems = { ...favoriteItems }
      delete filteredItems[id]
      setBasketItems(filteredItems)
      setBasketItemsPrice((prev) => prev - Number(price))
      setBasketItemsCount((prev) => prev - 1)
    } else {
      setBasketItems((prev) => ({ ...prev, [id]: product }))
      setBasketItemsPrice((prev) => prev + Number(price))
      setBasketItemsCount((prev) => prev + 1)
    }
  }

  const promotion =
    Math.ceil(Number(price) - Math.ceil((Number(price) * 15) / 100)) + 0.99

  return (
    <>
      <li className="w-48 h-76 mr-8 mb-16">
        <div
          style={{ backgroundImage: `url(${strapiAPI}${img})` }}
          className={`h-2/3 w-full relative bg-white text-black bg-no-repeat bg-center bg-contain bg-white rounded-2xl`}
        >
          <div
            onClick={toggleFavorite}
            className="absolute top-2.5 right-2.5 flex items-center justify-center z-30"
          >
            {heart ? (
              <AiFillHeart
                className="hover:cursor-pointer"
                color="orange"
                size={22}
              />
            ) : (
              <BiHeart
                className="hover:cursor-pointer"
                color="black"
                size={22}
              />
            )}
          </div>
          {(favoriteItem || basketItem) && (
            <div
              onClick={() => deleteItem(id)}
              className="absolute flex items-center justify-center z-30 top-9 right-2.5"
            >
              <TiDeleteOutline
                size={22}
                color="black"
                className="hover:cursor-pointer"
              />
            </div>
          )}
          <div
            onClick={toggleBasket}
            className="absolute flex items-center justify-center z-30 bottom-2.5 right-2.5"
          >
            <AiOutlineShoppingCart
              size={22}
              color={basket ? 'orange' : 'black'}
              className="hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="w-full h-1/5 flex flex-col">
          <h3 className="font-medium text-base">{name}</h3>
          <Link
            href={`/company/${companyId}`}
            className="text-aqua-150 font-normal text-sm"
          >
            {company}
          </Link>
          <div className="flex my-1.5">
            {RATINGS[rating].map((Icon, i) => (
              <Icon size={20} className="mr-1" color="gold" key={keys[i]} />
            ))}
          </div>
          <span className="font-semibold text-lg">
            ${(!hotDeal && price) || promotion}
            {hotDeal && (
              <span className="text-sm text-gray-50 line-through ml-2">
                ${price}
              </span>
            )}
          </span>
        </div>
      </li>
    </>
  )
}

Product.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  company: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  hotDeal: PropTypes.bool,
  favoriteItem: PropTypes.bool,
  basketItem: PropTypes.bool,
}

Product.defaultProps = {
  hotDeal: false,
  favoriteItem: false,
  basketItem: false,
}

export default Product
