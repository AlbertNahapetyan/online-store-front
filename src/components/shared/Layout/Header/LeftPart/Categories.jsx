import Image from 'next/image'

const Categories = () => {
  return (
    <div className="hover:cursor-pointer absolute h-full top-0 px-4 flex items-center right-0 bg-gray-450 border-2 border-r-0 border-gray-150">
      <span className="text-white">All categories</span>
      <div className="ml-2 h-fit">
        <Image width={10} height={10} src="/images/vector.svg" alt="vector" />
      </div>
    </div>
  )
}

export default Categories
