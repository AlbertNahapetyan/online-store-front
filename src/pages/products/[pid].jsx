import apolloClient from '@/services/apollo/client'
import { getProductsOfCategoryQuery } from '@/services/apollo/queries'
import CategoryIcons from '../../components/pages/products/const'
import Product from '@/components/shared/Product'

const ProductPage = ({ products, name }) => {
  const { icon: Icon } = CategoryIcons[name]

  return (
    <>
      <div className="flex items-center">
        <h2 className="text-2xl font-semibold mr-1">{name}</h2>
        <Icon size={20} />
      </div>
      <ul className="flex flex-wrap mt-4 max-w-full overflow-x-hidden">
        {products.map(({ id, attributes }) => {
          return (
            <Product
              key={id}
              id={id}
              price={attributes.price}
              name={attributes.name}
              img={attributes.media.data[0].attributes.formats.thumbnail.url}
              rating={attributes.rating}
              company={attributes.company.data.attributes.name}
              companyId={attributes.company.data.id}
            />
          )
        })}
      </ul>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const { pid } = ctx.params

  try {
    const { data } = await apolloClient.query({
      query: getProductsOfCategoryQuery,
      variables: { id: pid },
    })

    const { name } = data.category.data.attributes
    const products = data.category.data.attributes.products.data

    return {
      props: { products, name },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

export default ProductPage
