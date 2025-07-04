import Footer from "../components/Footer"; // Add this only if you've created Footer
import Navbar from "../components/Navbar";

function Contact() {
    return (
        <div>
            <Navbar />

            {/* Contact Us Page Layout */}
            <section className="bg-[#fdf4ef] min-h-screen px-6 md:px-20 py-12">
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact us</h2>
                    <p className="text-gray-600 text-lg">
                        We’re here to assist you. Reach out with any questions or feedback.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-center mb-20">
                    <div className="bg-white p-6 rounded-xl shadow">
                        <p className="text-2xl">📍</p>
                        <p className="font-semibold text-lg mt-2">Address</p>
                        <p className="text-gray-600 mt-1">Jaipur, Rajasthan<br />Pin 342087</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow">
                        <p className="text-2xl">📞</p>
                        <p className="font-semibold text-lg mt-2">Call us</p>
                        <p className="text-gray-600 mt-1">+91 98765 43210</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow">
                        <p className="text-2xl">✉️</p>
                        <p className="font-semibold text-lg mt-2">Email us</p>
                        <p className="text-gray-600 mt-1">info@test.com</p>
                    </div>
                </div>

                {/* Form Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <form className="bg-white p-8 rounded-xl shadow space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <input type="text" placeholder="Full name" className="p-3 border rounded-md" />
                            <input type="email" placeholder="Email address" className="p-3 border rounded-md" />
                            <input type="tel" placeholder="Phone number" className="p-3 border rounded-md" />
                            <input type="date" className="p-3 border rounded-md" />
                            <input type="text" placeholder="City" className="p-3 border rounded-md" />
                            <input type="text" placeholder="Country" className="p-3 border rounded-md" />
                        </div>
                        <div className="text-center">
                            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">Submit</button>
                        </div>
                    </form>
                    <div className="hidden md:block">
                        <img src="/src/assets/contact-image.png" alt="Contact" />
                    </div>
                </div>


            </section>

            <Footer />
        </div>
    );
}

export default Contact;
