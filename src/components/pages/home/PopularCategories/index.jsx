import POPULAR_CATEGORIES from './const'
import Category from './Category'

const PopularCategories = () => {
  return (
    <>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Popular Categories ⭐</h2>
        <ul className="flex mt-4">
          {POPULAR_CATEGORIES.map((category) => (
            <Category {...category} key={category.id} />
          ))}
        </ul>
      </section>
    </>
  )
}

export default PopularCategories
