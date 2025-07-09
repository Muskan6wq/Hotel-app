import FilterBar from "../components/FilterBar";
import Navbar from "../components/Navbar";

import Cards from "../components/Cards";
import IntroSection from "../components/IntroSection";


function Home() {
    return (
        <div>
            <Navbar />
            <section className="bg-[#fdf4ef] p-10 xl:py-2 flex flex-col md:flex-row justify-between  items-center gap-8">
                <div className="max-w-xl mx-4">
                    <h2 className="text-6xl font-bold text-black mb-4 ">Find Your Dream Home</h2>
                    <p className="text-gray-600 mb-6 ">
                        Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision
                    </p>
                    <button className="bg-black text-white px-12 py-3 mt-6  rounded">Sign up</button>
                </div>
                <div>
                    {/* Replace below src with actual image file */}
                    <img src="/src/assets/house6.png" alt="House" className="px-5 mx-4 mb-6 w-[1000px]" />
                </div>
            </section>

            {/*FilterBar */}
            <div className="-mt-20 ">
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
                                <img src="https://tse3.mm.bing.net/th/id/OIP.cVbi8plLwg006wL9LCRlkgHaFL?pid=Api&P=0&h=180" alt="San Francisco Residence" class="w-full h-48 object-cover" />
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
                                    <p class="text-blue-600 font-bold text-xl mb-4 lg:mx-40 md:mx-10">$3,500,000</p>
                                    <a href="#" class="block w-full text-center bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-700 transition-colors duration-300">
                                        Sign up
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-1/3 px-4 mb-8">
                            <div class="bg-[#f7e7de] rounded-lg shadow-lg overflow-hidden">
                                <img src="https://tse2.mm.bing.net/th/id/OIP.Ks1C9IbwNzNWcSw0NxYzfQHaE8?pid=Api&P=0&h=180" alt="Beverly Hills Residence" class="w-full h-48 object-cover" />
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
                                    <p class="text-blue-600 font-bold text-xl mb-4 lg:mx-40 md:mx-10">$800,000</p>
                                    <a href="#" class="block w-full text-center bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-700 transition-colors duration-300">
                                        sign up
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-1/3 px-4 mb-8">
                            <div class="bg-[#f7e7de] rounded-lg shadow-lg overflow-hidden">
                                <img src="https://tse2.mm.bing.net/th/id/OIP.bRTfe7kLCmZ2sunl8yCr9QHaD-?pid=Api&P=0&h=180" alt="Palo Alto Residence" class="w-full h-48 object-cover" />
                                <div class="p-5">
                                    <h3 class="text-lg font-semibold text-gray-800">Palo Alto, California</h3>
                                    <div class="flex items-center text-gray-600 text-sm mb-3  md:mt-4 lg:mt-0 ">
                                        <span class="flex items-center mr-3  ">
                                            <span class="w-4 h-4  bg-blue-200 rounded mr-1"></span> 5 rooms
                                        </span>

                                        <span class="flex items-center">
                                            <span class="w-4 h-4 bg-yellow-200 rounded mr-1 "></span> 3,700 Sqft
                                        </span>
                                    </div>
                                    <p class="text-blue-600 font-bold text-xl mb-4 lg:mx-40 md:mx-10 md:mt-6 lg:mt-0">$5,700,000</p>
                                    <a href="#" class="block w-full text-center bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-700 transition-colors duration-300">
                                        sign up
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-12 bg-[#f7e7de]">
                <div class="container mx-auto px-4">
                    <h2 class="text-center text-3xl font-bold text-gray-800 mb-10">What People Say About Dwello</h2>

                    <div class="flex flex-wrap -mx-4 justify-center">
                        <div class="w-full md:w-1/3 px-4 mb-8">
                            <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                                <div class="p-6 flex-grow">
                                    <div class="flex items-center mb-4">
                                        <img src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="Sarah Nguyen" class="w-16 h-16 rounded-full object-cover mr-4" />
                                        <div>
                                            <h3 class="text-lg font-semibold text-gray-800">Sarah Nguyen</h3>
                                            <p class="text-gray-600 text-sm">New York, USA</p>
                                        </div>
                                        <div class="flex  flex-col lg:flex-row ml-auto ">
                                            <svg class="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.693 7.502 8.307 1.205-6.002 5.858 1.416 8.261L12 18.25l-7.414 3.963 1.416-8.261L.0 9.294l8.307-1.205L12 .587z" /></svg>
                                            <svg class="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.693 7.502 8.307 1.205-6.002 5.858 1.416 8.261L12 18.25l-7.414 3.963 1.416-8.261L.0 9.294l8.307-1.205L12 .587z" /></svg>
                                            <svg class="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.693 7.502 8.307 1.205-6.002 5.858 1.416 8.261L12 18.25l-7.414 3.963 1.416-8.261L.0 9.294l8.307-1.205L12 .587z" /></svg>
                                            <svg class="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.693 7.502 8.307 1.205-6.002 5.858 1.416 8.261L12 18.25l-7.414 3.963 1.416-8.261L.0 9.294l8.307-1.205L12 .587z" /></svg>
                                            <svg class="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.693 7.502 8.307 1.205-6.002 5.858 1.416 8.261L12 18.25l-7.414 3.963 1.416-8.261L.0 9.294l8.307-1.205L12 .587z" /></svg>
                                        </div>
                                    </div>
                                    <p class="text-gray-700 text-sm leading-relaxed">
                                        "Dwello transformed our home search! The platform is intuitive, and their agents provided invaluable support. We found our dream home faster than we ever imagined. Highly recommend their personalized service."
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-1/3 px-4 mb-8">
                            <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                                <div class="p-6 flex-grow">
                                    <div class="flex items-center mb-4">
                                        <img src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-712513.jpg&fm=jpg" alt="Michael Rodriguez" class="w-16 h-16 rounded-full object-cover mr-4" />
                                        <div>
                                            <h3 class="text-lg font-semibold text-gray-800">Michael Rodriguez</h3>
                                            <p class="text-gray-600 text-sm">Los Angeles, USA</p>
                                        </div>
                                        <div class="flex  flex-col lg:flex-row ml-auto ">
                                            <svg class="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.693 7.502 8.307 1.205-6.002 5.858 1.416 8.261L12 18.25l-7.414 3.963 1.416-8.261L.0 9.294l8.307-1.205L12 .587z" /></svg>
                                            <svg class="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.693 7.502 8.307 1.205-6.002 5.858 1.416 8.261L12 18.25l-7.414 3.963 1.416-8.261L.0 9.294l8.307-1.205L12 .587z" /></svg>
                                            <svg class="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.693 7.502 8.307 1.205-6.002 5.858 1.416 8.261L12 18.25l-7.414 3.963 1.416-8.261L.0 9.294l8.307-1.205L12 .587z" /></svg>
                                            <svg class="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.693 7.502 8.307 1.205-6.002 5.858 1.416 8.261L12 18.25l-7.414 3.963 1.416-8.261L.0 9.294l8.307-1.205L12 .587z" /></svg>
                                            <svg class="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.693 7.502 8.307 1.205-6.002 5.858 1.416 8.261L12 18.25l-7.414 3.963 1.416-8.261L.0 9.294l8.307-1.205L12 .587z" /></svg>
                                        </div>
                                    </div>
                                    <p class="text-gray-700 text-sm leading-relaxed">
                                        "Finding a property that met all my specific requirements seemed impossible until I used Dwello. Their advanced filtering and responsive team made the process seamless. Truly a game-changer for real estate."
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-1/3 px-4 mb-8">
                            <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                                <div class="p-6 flex-grow">
                                    <div class="flex items-center mb-4">
                                        <img src="https://images.inc.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg" alt="Emily Johnson" class="w-16 h-16 rounded-full object-cover mr-4" />
                                        <div>
                                            <h3 class="text-lg font-semibold text-gray-800">Emily Johnson</h3>
                                            <p class="text-gray-600 text-sm">Chicago, USA</p>
                                        </div>
                                        <div class="flex  flex-col lg:flex-row ml-auto ">
                                            <svg class="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.693 7.502 8.307 1.205-6.002 5.858 1.416 8.261L12 18.25l-7.414 3.963 1.416-8.261L.0 9.294l8.307-1.205L12 .587z" /></svg>
                                            <svg class="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.693 7.502 8.307 1.205-6.002 5.858 1.416 8.261L12 18.25l-7.414 3.963 1.416-8.261L.0 9.294l8.307-1.205L12 .587z" /></svg>
                                            <svg class="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.693 7.502 8.307 1.205-6.002 5.858 1.416 8.261L12 18.25l-7.414 3.963 1.416-8.261L.0 9.294l8.307-1.205L12 .587z" /></svg>
                                            <svg class="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.693 7.502 8.307 1.205-6.002 5.858 1.416 8.261L12 18.25l-7.414 3.963 1.416-8.261L.0 9.294l8.307-1.205L12 .587z" /></svg>
                                            <svg class="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.693 7.502 8.307 1.205-6.002 5.858 1.416 8.261L12 18.25l-7.414 3.963 1.416-8.261L.0 9.294l8.307-1.205L12 .587z" /></svg>
                                        </div>
                                    </div>
                                    <p class="text-gray-700 text-sm leading-relaxed">
                                        "The ease of use and comprehensive listings on Dwello are unmatched. As a busy professional, I appreciated the efficiency in finding a rental property. The process from start to finish was seamless and stress-free."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center mt-8 space-x-2">
                        <span class="block w-3 h-3 bg-gray-400 rounded-full cursor-pointer hover:bg-gray-500"></span>
                        <span class="block w-3 h-3 bg-gray-800 rounded-full cursor-pointer"></span>
                        <span class="block w-3 h-3 bg-gray-400 rounded-full cursor-pointer hover:bg-gray-500"></span>
                    </div>
                </div>
            </section>
        </div >

    );
};

export default Home;
