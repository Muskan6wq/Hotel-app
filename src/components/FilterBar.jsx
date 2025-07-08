import { FaHome, FaMapMarkerAlt, FaTags } from "react-icons/fa";

function FilterBar() {
    return (
        <div className="bg-[#EBD9CC]  flex flex-col lg:flex-row flex-wrap justify-between items-center px-6 py-8 mx-auto max-w-6xl rounded-xl shadow-md z-10  relative gap-6 lg:gap-0">

            {/* Left Filter Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 lg:gap-24 w-full lg:w-auto justify-center">
                {/* Location */}
                <button className="flex items-center justify-between gap-3 bg-[#F5E9E1] text-gray-800 px-6 py-4 rounded-lg font-medium text-sm hover:bg-[#e9d8cf] w-full sm:w-auto">
                    <span>Location</span>
                    <FaMapMarkerAlt className="text-base" />
                </button>

                {/* Type */}
                <button className="flex items-center justify-between gap-3 bg-[#F5E9E1] text-gray-800 px-6 py-4 rounded-lg font-medium text-sm hover:bg-[#e9d8cf] w-full sm:w-auto">
                    <span>Type</span>
                    <FaHome className="text-base" />
                </button>

                {/* Price Range */}
                <button className="flex items-center justify-between gap-3 bg-[#F5E9E1] text-gray-800 px-6 py-4 rounded-lg font-medium text-sm hover:bg-[#e9d8cf] w-full sm:w-auto">
                    <span>Price Range</span>
                    <FaTags className="text-base" />
                </button>
            </div>

            {/* Sign Up Button */}
            <button className="bg-black text-white px-10 py-4 rounded-lg font-semibold text-sm hover:bg-gray-900 w-full sm:w-auto">
                Sign up
            </button>
        </div>
    );
}

export default FilterBar;
