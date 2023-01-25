import Search from '../LeftPart/Search'
import Categories from '../LeftPart/Categories'

const LeftPart = () => {
  return (
    <div className="relative ml-64 flex h-12">
      <input
        maxLength="26"
        className="bg-gray-450 w-64 rounded-l-lg outline-0 text-white border-2 border-r-0 border-gray-150 placeholder-white pl-4 py-2"
        placeholder="Search..."
      />
      {/*<Categories />*/}
      <Search />
    </div>
  )
}

export default LeftPart
