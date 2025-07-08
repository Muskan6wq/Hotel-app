
const Cards = () => {
    return (
        <section className="bg-white px-6 md:px-16 py-12">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-black mb-2">Why Choose Us</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Elevating Your Home Buying Experience with Expertise, Integrity, and Unmatched Personalized Service
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* Card 1 */}
                <div className="bg-[#f7e7dd] rounded-2xl shadow-md p-6 text-center">
                    <div className="text-3xl mb-3">📘</div>
                    <h3 className="font-semibold text-lg mb-1">Expert Guidance</h3>
                    <p className="text-sm text-gray-600">
                        Benefit from our team’s smooth expertise for a seamless buying experience.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#f7e7dd] rounded-2xl shadow-md p-6 text-center">
                    <div className="text-3xl mb-3">💼</div>
                    <h3 className="font-semibold text-lg mb-1">Personalized Service</h3>
                    <p className="text-sm text-gray-600">
                        Our services adapt to your journey needs, making your process stress-free.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-[#f7e7dd] rounded-2xl shadow-md p-6 text-center">
                    <div className="text-3xl mb-3">📄</div>
                    <h3 className="font-semibold text-lg mb-1">Transparent Process</h3>
                    <p className="text-sm text-gray-600">
                        Stay informed with our clear and honest approach to buying your home.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="bg-[#f7e7dd] rounded-2xl shadow-md p-6 text-center">
                    <div className="text-3xl mb-3">🎧</div>
                    <h3 className="font-semibold text-lg mb-1">Exceptional Support</h3>
                    <p className="text-sm text-gray-600">
                        Providing peace of mind with timely customer support.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Cards;
