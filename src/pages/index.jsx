import FreeDelivery from '@/components/pages/home/FreeDelivery'
import PopularCategories from '@/components/pages/home/PopularCategories'
import HotDeals from '@/components/pages/home/HotDeals'
import apolloClient from '@/services/apollo/client'
import { getHotDealsQuery } from '@/services/apollo/queries'

const HomePage = ({ products }) => {
  return (
    <>
      <FreeDelivery />
      <PopularCategories />
      <HotDeals products={products} />
    </>
  )
}

export async function getServerSideProps() {
  const { data: res } = await apolloClient.query({ query: getHotDealsQuery })
  const products = res.hotDeal.data.attributes.products.data
  return {
    props: { products },
  }
}

export default HomePage
