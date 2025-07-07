import ContactForm from "../components/ContactForm";

function Contact() {
    return (
        <div className="bg-[#FEF6F2] min-h-screen py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <h2 className="text-4xl font-bold text-[#2A2A2A] mb-6">Contact us</h2>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-xl shadow text-center">
                        <p className="font-semibold text-[#2A2A2A]">📍 Address</p>
                        <p className="text-gray-600 text-sm mt-1">Jaipur Rajasthan, INDIA<br />Pin 342087</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow text-center">
                        <p className="font-semibold text-[#2A2A2A]">📞 Call us</p>
                        <p className="text-gray-600 text-sm mt-1">+91 98765 43210</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow text-center">
                        <p className="font-semibold text-[#2A2A2A]">📩 Email us</p>
                        <p className="text-gray-600 text-sm mt-1">info@test.com</p>
                    </div>
                </div>

                {/* Intro Text Above Form */}
                <div className="mb-8 text-center">
                    <h3 className="text-2xl md:text-3xl font-semibold text-[#2A2A2A] mb-2">
                        Get in touch with us.
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                        We're here to assist you.
                    </p>
                </div>


                {/* Contact Form */}
                <ContactForm />
            </div>
        </div>
    );
}

export default Contact;
