import PropTypes from 'prop-types'
import BlockLink from '@/components/shared/BlockLink'

const Category = ({ id, icon: Icon }) => {
  return (
    <>
      <BlockLink href={`/products/${id}`}>
        <li className="w-24 h-24 hover:text-orange-350 rounded-3xl bg-white flex items-center justify-center mr-8">
          <Icon size={35} />
        </li>
      </BlockLink>
    </>
  )
}

Category.propTypes = {
  id: PropTypes.number.isRequired,
  icon: PropTypes.func.isRequired,
}

export default Category
