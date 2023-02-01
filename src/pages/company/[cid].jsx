import { getCompanyProducts } from '../../services/apollo/queries'
import apolloClient from '@/services/apollo/client'
import Product from '@/components/shared/Product'
import { useRouter } from 'next/router'

const CompanyPage = ({ products, name }) => {
  const router = useRouter()
  const { cid } = router.query

  return (
    <>
      <div className="flex items-center">
        <h2 className="text-2xl font-semibold mr-1">{name}</h2>
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
              company={name}
              companyId={cid}
            />
          )
        })}
      </ul>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const { cid } = ctx.params

  try {
    const { data } = await apolloClient.query({
      query: getCompanyProducts,
      variables: { id: cid },
    })

    const { name } = data.company.data.attributes
    const products = data.company.data.attributes.products.data

    return {
      props: {
        name,
        products,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

export default CompanyPage
