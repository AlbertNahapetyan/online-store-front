import { RiProductHuntLine } from 'react-icons/ri'
import {getAllProductsQuery, getProductsCount} from '@/services/apollo/queries'
import ProductsList from '@/components/pages/products/ProductsList'
import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi'
import clsx from 'clsx'
import apolloClient from "@/services/apollo/client";

const ProductsPage = ({ total }) => {
  const [step, setStep] = useState(0)
  const { data, loading, error } = useQuery(getAllProductsQuery, {
    variables: {
      start: step,
      limit: 10,
    },
  })

  if (loading) {
    return (
      <>
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold mr-1">Products</h1>
          <RiProductHuntLine size={20} />
        </div>
        <h2>Loading...</h2>
      </>
    )
  }

  if (error) return <h1>Something went wrong :(</h1>

  const products = data.products.data

  const nextStep = () => setStep((prev) => prev + 10)
  const prevStep = () => setStep((prev) => prev - 10)

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold mr-1">Products</h1>
        <RiProductHuntLine size={20} />
        <div className="ml-auto flex items-center">
          <button
            onClick={prevStep}
            className={clsx('px-3 py-2 hover:cursor-pointer mr-2', {
              'opacity-50': !step,
            })}
            disabled={!step}
          >
            <HiArrowNarrowLeft size={20} />
          </button>
          <button
              disabled={step + 10 > total}
              onClick={nextStep}
              className={clsx("px-3 py-2 hover:cursor-pointer", {'opacity-50': step + 10 > total})}>
            <HiArrowNarrowRight size={20} />
          </button>
        </div>
      </div>
      <ProductsList products={products} />
    </>
  )
}

export async function getServerSideProps() {
  const { data } = await apolloClient.query({ query: getProductsCount });
  const { total } = data.products.meta.pagination;
  return {
    props: { total }
  }
}

export default ProductsPage
