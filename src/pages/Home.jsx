import FilterBar from "../components/FilterBar";
import Navbar from "../components/Navbar";

import IntroSection from "../components/IntroSection";
import Cards from "../components/Cards";


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

        </div>
    );
}

export default Home;
