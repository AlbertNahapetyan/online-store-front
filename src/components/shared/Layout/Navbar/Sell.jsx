import { RiPercentLine } from 'react-icons/ri'

const Sell = () => {
  return (
    <div className="flex text-white items-center hover:cursor-pointer py-2 px-3 rounded-2xl hover:bg-gray-350 hover:text-orange-350">
      <RiPercentLine size="20px" />
      <h2 className="ml-2">Sell on Amazon</h2>
    </div>
  )
}

export default Sell