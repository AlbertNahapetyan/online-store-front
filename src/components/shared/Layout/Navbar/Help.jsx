import { BiHelpCircle } from 'react-icons/bi'

const Help = () => {
  return (
    <div className="flex text-white items-center hover:cursor-pointer py-2 px-3 rounded-2xl hover:bg-gray-350 hover:text-orange-350">
      <BiHelpCircle size={20} />
      <h2 className="ml-2">Help</h2>
    </div>
  )
}

export default Help
