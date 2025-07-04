import { FaHome, FaMapMarkerAlt, FaTags } from "react-icons/fa";

function FilterBar() {
    return (
        <div className="bg-[#EBD9CC] flex flex-wrap justify-between items-center px-6 py-5 mx-auto max-w-6xl rounded-xl shadow-md mt-[-30px] z-10 relative">
            {/* Left Filter Buttons */}
            <div className="flex gap-5 flex-wrap">
                {/* Location */}
                <button className="flex items-center gap-2 bg-[#F5E9E1] text-gray-800 px-5 py-2 rounded-lg font-medium text-sm hover:bg-[#e9d8cf]">
                    <span>Location</span>
                    <FaMapMarkerAlt className="text-base" />
                </button>

                {/* Type */}
                <button className="flex items-center gap-2 bg-[#F5E9E1] text-gray-800 px-5 py-2 rounded-lg font-medium text-sm hover:bg-[#e9d8cf]">
                    <span>Type</span>
                    <FaHome className="text-base" />
                </button>

                {/* Price Range */}
                <button className="flex items-center gap-2 bg-[#F5E9E1] text-gray-800 px-5 py-2 rounded-lg font-medium text-sm hover:bg-[#e9d8cf]">
                    <span>Price Range</span>
                    <FaTags className="text-base" />
                </button>
            </div>

            {/* Sign Up Button */}
            <button className="bg-black text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-gray-900">
                Sign up
            </button>
        </div>
    );
}

export default FilterBar;
