import FilterBar from "../components/FilterBar";
import Navbar from "../components/Navbar";

import Cards from "../components/Cards";
import IntroSection from "../components/IntroSection";


function Home() {
    return (
        <div>
            <Navbar />
            <section className="bg-[#fdf4ef] p-10 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="max-w-xl">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">Find Your Dream Home</h2>
                    <p className="text-gray-600 mb-6">
                        Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision
                    </p>
                    <button className="bg-black text-white px-6 py-3 rounded">Sign up</button>
                </div>
                <div>
                    {/* Replace below src with actual image file */}
                    <img src="/src/assets/house.png" alt="House" className="rounded-xl shadow-xl w-[400px]" />
                </div>
            </section>

            {/*FilterBar */}
            <div className="mt-8">
                <FilterBar />
            </div>

            <IntroSection />
            <Cards />


            <section class="py-12 bg-white">
                <div class="container mx-auto px-4">
                    <h2 class="text-center text-3xl font-bold text-gray-800 mb-8">Our Popular Residences</h2>

                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full md:w-1/3 px-4 mb-8">
                            <div class="bg-[#f7e7de] rounded-lg shadow-lg overflow-hidden">
                                <img src="https://via.placeholder.com/400x250?text=House+1" alt="San Francisco Residence" class="w-full h-48 object-cover" />
                                <div class="p-5">
                                    <h3 class="text-lg font-semibold text-gray-800">San Francisco, California</h3>
                                    <div class="flex items-center text-gray-600 text-sm mb-3">
                                        <span class="flex items-center mr-3">
                                            <span class="w-4 h-4 bg-blue-200 rounded mr-1"></span>4 rooms
                                        </span>

                                        <span class="flex items-center">
                                            <span class="w-4 h-4 bg-yellow-200 rounded mr-1"></span> 3,000 Sqft
                                        </span>
                                    </div>
                                    <p class="text-blue-600 font-bold text-xl mb-4">$3,500,000</p>
                                    <a href="#" class="block w-full text-center bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-700 transition-colors duration-300">
                                        Sign up
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-1/3 px-4 mb-8">
                            <div class="bg-[#f7e7de] rounded-lg shadow-lg overflow-hidden">
                                <img src="https://via.placeholder.com/400x250?text=House+2" alt="Beverly Hills Residence" class="w-full h-48 object-cover" />
                                <div class="p-5">
                                    <h3 class="text-lg font-semibold text-gray-800">Beverly Hills, California</h3>
                                    <div class="flex items-center text-gray-600 text-sm mb-3">
                                        <span class="flex items-center mr-3">
                                            <span class="w-4 h-4 bg-blue-200 rounded mr-1"></span> 3 Rooms
                                        </span>


                                        <span class="flex items-center">
                                            <span class="w-4 h-4 bg-yellow-200 rounded mr-1"></span> 2,500 Sqft
                                        </span>
                                    </div>
                                    <p class="text-blue-600 font-bold text-xl mb-4">$800,000</p>
                                    <a href="#" class="block w-full text-center bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-700 transition-colors duration-300">
                                        sign up
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-1/3 px-4 mb-8">
                            <div class="bg-[#f7e7de] rounded-lg shadow-lg overflow-hidden">
                                <img src="https://via.placeholder.com/400x250?text=House+3" alt="Palo Alto Residence" class="w-full h-48 object-cover" />
                                <div class="p-5">
                                    <h3 class="text-lg font-semibold text-gray-800">Palo Alto, California</h3>
                                    <div class="flex items-center text-gray-600 text-sm mb-3">
                                        <span class="flex items-center mr-3">
                                            <span class="w-4 h-4 bg-blue-200 rounded mr-1"></span> 5 rooms
                                        </span>

                                        <span class="flex items-center">
                                            <span class="w-4 h-4 bg-yellow-200 rounded mr-1"></span> 3,700 Sqft
                                        </span>
                                    </div>
                                    <p class="text-blue-600 font-bold text-xl mb-4">$5,700,000</p>
                                    <a href="#" class="block w-full text-center bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-700 transition-colors duration-300">
                                        sign up
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >

    );
};

export default Home;
