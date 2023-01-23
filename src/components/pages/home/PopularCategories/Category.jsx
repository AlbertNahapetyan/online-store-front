import Link from 'next/link'

const Category = ({ id, icon: Icon }) => {
  return (
    <>
      <Link href={`/products/${id}`}>
        <li className="w-24 h-24 hover:text-orange-350 rounded-3xl bg-white flex items-center justify-center mr-8">
          <Icon size="35px" />
        </li>
      </Link>
    </>
  )
}

export default Category
