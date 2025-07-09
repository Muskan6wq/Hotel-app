

import { FaComments, FaEnvelope, FaQuestionCircle } from "react-icons/fa";

const ContactMapSection = () => {
    return (
        <div className="bg-white  text-center mt-14 p-8 mx-6 mb-12" >
            {/* Embedded Map */}
            <div className="max-w-8xl text-center p-5 mx-20 xl:mx-80">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.6506959175035!2d72.93032674056066!3d26.175503177189523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c261937c551%3A0x65b7b9d2944ffeb4!2sCapsitech!5e0!3m2!1sen!2sin!4v1751884133084!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            {/* Help Section */}

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2 mt-16">
                Do You Have Any Questions?
            </h2>
            <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-6">
                Get Help From Us
            </h3>

            {/* Icons Row */}
            <div className="flex justify-center gap-6 mb-8 flex-wrap">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                    <FaComments className="text-black" /> Chat live with our support team
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                    <FaQuestionCircle className="text-black" /> Browse our FAQ
                </div>
            </div>

            {/* Email Subscribe */}
            <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
                <div className="flex items-center gap-2 bg-[#F3E0D9] px-4 py-2 rounded-md w-full">
                    <FaEnvelope className="text-gray-600" />
                    <input
                        type="email"
                        placeholder="Enter your email address..."
                        className="bg-transparent outline-none text-sm w-full placeholder:text-gray-600"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition"
                >
                    Submit
                </button>
            </form>
        </div >
    );
};

export default ContactMapSection;
