import { BiHeart } from 'react-icons/bi'
import { useRecoilValue } from 'recoil'
import { FavoriteItems } from '@/storage/atoms'
import Product from '@/components/shared/Product'

const Favorites = () => {
  const items = useRecoilValue(FavoriteItems)
  const ids = Object.keys(items)
  const products = Object.values(items)

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold mr-1">Favorites</h1>
        <BiHeart size={20} />
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
            favoriteItem={true}
          />
        ))}
      </ul>
    </>
  )
}

export default Favorites
