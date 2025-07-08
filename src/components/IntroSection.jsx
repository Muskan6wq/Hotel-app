import house7 from "../assets/house7.jpg";


function IntroSection() {
    return (
        <section className="max-w-6xl mx-auto my-10 mt-14 px-4 py-16 flex flex-col md:flex-row items-start gap-12">
            {/* LEFT: House Image */}
            <div className="w-full md:w-1/2">
                <img
                    src={house7}
                    alt="Modern House"
                    className="rounded-xl shadow-md w-full"
                />
            </div>

            {/* RIGHT: Text + Stats */}
            <div className="w-full md:w-1/2">
                {/* Heading + Paragraph */}
                <div className="mb-6">
                    <h2 className=" mt-18 text-3xl md:text-4xl font-bold text-[#2A2A2A] leading-snug mb-4">
                        We Help You To Find Your Dream Home
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        From cozy cottages to luxurious estates, our dedicated team guides you
                        through every step of the journey, ensuring your dream home becomes a
                        reality.
                    </p>
                </div>

                {/* Stats */}
                <div className="flex gap-10 mt-6">
                    <div>
                        <h3 className="text-3xl font-bold text-[#2A2A2A]">8K+</h3>
                        <p className="text-gray-600 text-sm mt-1">Houses Available</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-[#2A2A2A]">6K+</h3>
                        <p className="text-gray-600 text-sm mt-1">Houses Sold</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-[#2A2A2A]">2K+</h3>
                        <p className="text-gray-600 text-sm mt-1">Trusted Agents</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IntroSection;
