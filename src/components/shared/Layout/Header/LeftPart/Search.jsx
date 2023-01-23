import { IoSearch } from "react-icons/io5"

const Search = () => {
    return (
        <div className="flex items-center justify-center w-12 bg-orange-350 border-2 rounded-r-lg border-gray-150 h-full absolute right-[-48px] border-l-0 h-full hover:cursor-pointer">
            <IoSearch color="white" size="22px" />
        </div>
    )
}

export default Search