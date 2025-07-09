import { FaHome, FaMapMarkerAlt, FaTags } from "react-icons/fa";

function FilterBar() {
    return (
        <div className="bg-[#EBD9CC]  flex flex-col lg:flex-row flex-wrap justify-between items-center px-8 py-12 mx-auto max-w-7xl h-800 rounded-xl shadow-md z-10  relative gap-2 lg:gap-0">

            {/* Left Filter Buttons */}
            <div className="flex flex-col lg:flex-row flex-wrap xl:px-6 gap-10  lg:gap-24 w-full lg:w-auto justify-center">
                {/* Location */}
                <button className="flex items-center justify-between gap-3 lg:gap-6 bg-[#F5E9E1] text-gray-800 px-14 py-4 rounded-lg font-medium lg:font-semibold
                text-sm hover:bg-[#e9d8cf] w-full sm:w-auto">
                    <span>Location</span>
                    <FaMapMarkerAlt className="text-base" />
                </button>

                {/* Type */}
                <button className="flex items-center justify-between gap-3 lg:gap-6 bg-[#F5E9E1] text-gray-800 px-14 py-4 rounded-lg font-medium text-sm hover:bg-[#e9d8cf] w-full sm:w-auto">
                    <span>Type</span>
                    <FaHome className="text-base" />
                </button>

                {/* Price Range */}
                <button className="flex items-center justify-between gap-3 lg:gap-6  bg-[#F5E9E1] text-gray-800 px-14 py-4 rounded-lg font-medium text-sm hover:bg-[#e9d8cf] w-full sm:w-auto">
                    <span>Price Range</span>
                    <FaTags className="text-base" />
                </button>
            </div>

            {/* Sign Up Button */}
            <button className="bg-black mt-6 lg:mt-0 text-white px-14 py-4 lg:mx-4 rounded-lg font-semibold text-sm hover:bg-gray-900 w-full sm:w-auto">
                Sign up
            </button>
        </div>
    );
}

export default FilterBar;
