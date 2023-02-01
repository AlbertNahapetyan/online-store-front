import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useRecoilState } from 'recoil'
import {
  BasketItems,
  BasketItemsPrice,
  BasketItemsCount,
} from '@/storage/atoms'
import Product from '@/components/shared/Product'
import {useEffect} from "react";

const Basket = () => {
  const [price, setPrice] = useRecoilState(BasketItemsPrice)
  const [items, setItems] = useRecoilState(BasketItems)
  const [count, setCount] = useRecoilState(BasketItemsCount)
  const ids = Object.keys(items)
  const products = Object.values(items)

  useEffect(() => {
      console.log(items)
  }, [items])

  const clear = () => {
    setPrice(0)
    setItems({})
    setCount(0)
  }

  let productsText = 'products'

   if(count === 1) {
       productsText = 'product'
   }



  return (
    <>
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold mr-1">Basket</h1>
        <AiOutlineShoppingCart color="black" size={20} />
      </div>
      <ul className="flex flex-wrap mt-4 max-w-full overflow-x-hidden">
        {products.map((product, i) => (
          <Product
            key={ids[i]}
            id={ids[i]}
            company={product.company}
            name={product.name}
            img={product.img}
            rating={product.rating}
            price={product.price}
            companyId={product.companyId}
          />
        ))}
      </ul>
      <div className="mt-12">
        <h3 className="text-xl font-semibold">Price: ${price}</h3>
        {count ? (
          <h3 className="text-xl font-semibold mt-4">{count} {productsText}</h3>
        ) : null}
        <button
          onClick={clear}
          className="mt-4 hover:cursor-pointer rounded-full text-white px-8 py-4 bg-gray-350"
        >
          Clear Basket
        </button>
      </div>
    </>
  )
}

export default Basket
