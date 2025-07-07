import { FaCloudUploadAlt, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";

const Contact = () => {
    return (
        <>
            <Navbar />

            {/* Top Contact Info Section */}
            <div className="max-w-6xl mx-auto py-10 px-4">
                <h2 className="text-2xl md:text-3xl font-semibold mb-8 border-l-4 border-black pl-4">
                    Contact us
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    {/* Address */}
                    <div className="flex flex-col items-center space-y-2">
                        <FaMapMarkerAlt className="text-pink-500 text-3xl" />
                        <p className="font-semibold">Address</p>
                        <p>Jaipur Rajasthan INDIA<br />Pin 342087</p>
                    </div>

                    {/* Call */}
                    <div className="flex flex-col items-center space-y-2">
                        <FaPhoneAlt className="text-pink-500 text-3xl" />
                        <p className="font-semibold">Call us</p>
                        <p>+91 98765 43210</p>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-center space-y-2">
                        <FaEnvelope className="text-pink-500 text-3xl" />
                        <p className="font-semibold">Email us</p>
                        <p>info@test.com</p>
                    </div>
                </div>
            </div>

            {/* Form Section with Background */}
            <div className="bg-[#FFF4EF] py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8">
                        Get in touch with us.<br />
                        <span className="font-normal">We're here to assist you.</span>
                    </h2>

                    {/* Contact Form */}
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Full name" className="border-b bg-transparent p-2" />
                        <input type="email" placeholder="Email address" className="border-b bg-transparent p-2" />
                        <input type="text" placeholder="Phone number" className="border-b bg-transparent p-2" />
                        <input type="date" placeholder="Date of birth" className="border-b bg-transparent p-2" />
                        <input type="text" placeholder="Gender" className="border-b bg-transparent p-2" />
                        <input type="text" placeholder="City" className="border-b bg-transparent p-2" />
                        <input type="text" placeholder="State" className="border-b bg-transparent p-2" />
                        <input type="text" placeholder="Country" className="border-b bg-transparent p-2" />
                        <input type="text" placeholder="Address" className="border-b bg-transparent p-2 md:col-span-1" />
                        <input type="text" placeholder="Message" className="border-b bg-transparent p-2 md:col-span-1" />

                        {/* Upload CV (below Message) */}
                        <div className="md:col-start-2">
                            <label className="block text-sm font-semibold mb-2">Upload your CV/Resume</label>
                            <div className="flex items-center gap-2">
                                <FaCloudUploadAlt className="text-lg text-gray-700" />
                                <input type="file" className="text-sm text-gray-600" />
                            </div>
                        </div>

                        {/* Request counselling */}
                        <div className="md:col-span-2 flex items-center gap-6">
                            <label className="text-sm font-semibold">Request a counselling session:</label>
                            <label><input type="radio" name="counselling" defaultChecked /> Yes</label>
                            <label><input type="radio" name="counselling" /> No</label>
                        </div>

                        {/* Terms Checkbox */}
                        <div className="md:col-span-2">
                            <label className="flex items-center gap-2 text-sm">
                                <input type="checkbox" />
                                Agree terms and conditions
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div className="md:col-span-2">
                            <button type="submit" className="bg-black text-white py-2 px-6 rounded-md">
                                Submit Information
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
