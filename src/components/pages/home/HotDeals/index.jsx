import Product from '@/components/shared/Product'
import PropTypes from 'prop-types'

const HotDeals = ({ products }) => {
  return (
    <>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Hot Deals 🔥</h2>
        <ul className="flex flex-wrap mt-4 max-w-full overflow-x-hidden">
          {products.map(({ id, attributes }) => (
            <Product
              key={id}
              id={id}
              company={attributes.company.data.attributes.name}
              price={attributes.price}
              name={attributes.name}
              rating={attributes.rating}
              img={attributes.media.data[0].attributes.formats.thumbnail.url}
              hotDeal={true}
              companyId={attributes.company.data.id}
            />
          ))}
        </ul>
      </section>
    </>
  )
}

HotDeals.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
}

export default HotDeals
