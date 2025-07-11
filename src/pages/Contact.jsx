import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import ContactMapSection from "../components/ContactMapSection";
import Footer from "../components/Footer2";
import Navbar from "../components/Navbar";

const Contact = () => {
    return (
        <>
            <Navbar />

            {/* Top section with peach background */}
            <div className="bg-[#f4ded3] mt-6 pb-12">
                <div className="flex items-center gap-4 mb-10">
                    <div className="w-10 h-[2px] bg-black mt-12"></div>
                    <h2 className="text-5xl font-semibold mt-10">Contact us</h2>
                </div>


                {/* Address, Call, Email section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    {/* Address */}
                    <div className="flex flex-col items-center">
                        <FaMapMarkerAlt className="text-black text-3xl mb-2 mt-8" />
                        <p className="font-semibold">Address</p>
                        <p>Jaipur Rajasthan, INDIA<br />Pin 342087</p>
                    </div>

                    {/* Call us */}
                    <div className="flex flex-col items-center">
                        <FaPhoneAlt className="text-black text-3xl mb-2 mt-8" />
                        <p className="font-semibold">Call us</p>
                        <p>+91 98765 43210</p>
                    </div>

                    {/* Email us */}
                    <div className="flex flex-col items-center">
                        <FaEnvelope className=" text-black text-3xl mb-2 mt-8" />
                        <p className="font-semibold">Email us</p>
                        <p>info@test.com</p>
                    </div>
                </div>
            </div>


            {/* Contact form section */}

            <section className="bg-white py-12 px-4">
                <div className="text-center mb-10">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-2 mt-4">
                        Get in touch with us.
                    </h3>
                    <p className="text-gray-600 text-lg">
                        We're here to assist you.
                    </p>
                </div>

                {/* Peach background form box */}
                <div className="max-w-6xl mx-auto bg-[#FFF4EF] p-8 md:p-12 rounded-2xl shadow-sm">
                    <ContactForm />

                </div>

                <ContactMapSection />

                {/* <FooterContact /> */}
                <Footer />
            </section>

        </>
    );
};

export default Contact;
