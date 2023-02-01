import Product from '@/components/shared/Product'
import PropTypes from 'prop-types'

const ProductsList = ({ products }) => {
  return (
    <>
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
            />
          )
        })}
      </ul>
    </>
  )
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
}

export default ProductsList
