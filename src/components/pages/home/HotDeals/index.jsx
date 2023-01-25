import Product from '@/components/shared/Product'

const HotDeals = () => {
  const props = {
    img: 'http://localhost:1337/uploads/thumbnail_Iphone_11_8907dbb909.jpg',
    name: 'Iphone 11, 64GB',
    company: 'Apple',
    price: '299.99',
  }

  return (
    <>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Hot Deals 🔥</h2>
        <ul className="flex mt-4">
          <Product {...props} />
        </ul>
      </section>
    </>
  )
}

export default HotDeals
