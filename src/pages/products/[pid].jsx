import { useRouter } from 'next/router'

const ProductPage = () => {
  const router = useRouter()
  const { pid } = router.query
  return <h1>This is products with ID of {pid}</h1>
}

export default ProductPage
