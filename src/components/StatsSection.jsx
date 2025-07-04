import { FaBuilding, FaSmile, FaUserCheck } from "react-icons/fa";
import houseImg from "../assets/He.png";
function IntroSection() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-start gap-12">
            {/* Left Side: Image */}
            <div className="w-full md:w-1/2">
                <img src={houseImg} alt="Modern House" className="rounded-xl shadow-lg" />
            </div>

            {/* Right Side: Text + Stats */}
            <div className="w-full md:w-1/2 flex flex-col gap-8">
                {/* Heading + Text */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2A2A2A] leading-tight mb-4">
                        We Help You To Find Your Dream Home
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base">
                        From cozy cottages to luxurious estates, our dedicated team is here to make your home journey enjoyable, efficient, and exciting.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="flex flex-col gap-6">
                    {/* Stat 1 */}
                    <div className="flex items-center gap-4">
                        <FaBuilding className="text-2xl text-[#7C5C4D]" />
                        <div>
                            <h3 className="text-2xl font-bold text-[#2A2A2A]">8K+</h3>
                            <p className="text-gray-600 text-sm">Premium Properties</p>
                        </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex items-center gap-4">
                        <FaSmile className="text-2xl text-[#7C5C4D]" />
                        <div>
                            <h3 className="text-2xl font-bold text-[#2A2A2A]">6K+</h3>
                            <p className="text-gray-600 text-sm">Happy Customers</p>
                        </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex items-center gap-4">
                        <FaUserCheck className="text-2xl text-[#7C5C4D]" />
                        <div>
                            <h3 className="text-2xl font-bold text-[#2A2A2A]">2K+</h3>
                            <p className="text-gray-600 text-sm">Verified Agents</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IntroSection;
