import Categories from "@/components/shared/Layout/Header/InputSection/LeftPart/Categories";
import Search from "@/components/shared/Layout/Header/InputSection/LeftPart/Search";

const LeftPart = () => {
    return (
        <div className="relative ml-24 flex">
            <input maxLength="26" className="bg-gray-450 w-96 rounded-lg outline-0 text-white border-2 border-gray-150 placeholder-white pl-4 py-2" placeholder="Search..." />
            <Categories />
            <Search />
        </div>
    )
}

export default LeftPart