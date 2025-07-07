import { FaCloudUploadAlt } from "react-icons/fa";


const ContactForm = () => {
    return (
        <div className="bg-[#FFF4EF] max-w-5xl mx-auto p-8 md:p-12 rounded-2xl shadow-sm text-left">
            <form className="grid md:grid-cols-2 gap-6">

                {/* Full name */}
                <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">Full name</label>
                    <input type="text" className="w-full border-b border-gray-400 bg-transparent p-2 outline-none" />
                </div>

                {/* Email address */}
                <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">Email address</label>
                    <input type="email" className="w-full border-b border-gray-400 bg-transparent p-2 outline-none" />
                </div>

                {/* Phone number */}
                <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">Phone number</label>
                    <input type="text" className="w-full border-b border-gray-400 bg-transparent p-2 outline-none" />
                </div>

                {/* Date of Birth */}
                <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">Date of birth</label>
                    <input type="date" className="w-full border-b border-gray-400 bg-transparent p-2 outline-none" />
                </div>

                {/* Gender */}
                <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">Gender</label>
                    <input type="text" className="w-full border-b border-gray-400 bg-transparent p-2 outline-none" />
                </div>

                {/* City */}
                <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">City</label>
                    <input type="text" className="w-full border-b border-gray-400 bg-transparent p-2 outline-none" />
                </div>

                {/* State */}
                <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">State</label>
                    <input type="text" className="w-full border-b border-gray-400 bg-transparent p-2 outline-none" />
                </div>

                {/* Country */}
                <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">Country</label>
                    <input type="text" className="w-full border-b border-gray-400 bg-transparent p-2 outline-none" />
                </div>

                {/* Address */}
                <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">Address</label>
                    <input type="text" className="w-full border-b border-gray-400 bg-transparent p-2 outline-none" />
                </div>

                {/* Message */}
                <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">Message</label>
                    <input type="text" className="w-full border-b border-gray-400 bg-transparent p-2 outline-none " />
                </div>


                {/* Counselling Session */}
                <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">Request a counselling session</label>
                    <div className="flex gap-4 text-gray-800">
                        <label className="flex items-center gap-1">
                            <input type="radio" name="counselling" value="yes" />
                            Yes
                        </label>
                        <label className="flex items-center gap-1">
                            <input type="radio" name="counselling" value="no" />
                            No
                        </label>
                    </div>
                </div>


                {/* Upload CV/Resume */}
                <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">Upload your CV/Resume</label>
                    <div className="flex items-center gap-2 mb-4">
                        <FaCloudUploadAlt className="text-xl text-gray-800" />
                        <label className="cursor-pointer text-sm text-gray-800">
                            <input type="file" className="hidden" />
                            Choose file
                        </label>
                    </div>
                    <div className="border-b border-gray-400 w-full" />
                </div>



                {/* Checkbox + Submit Button - Full width */}
                <div className="md:col-span-2 flex flex-col gap-4 mt-1">
                    <label className="text-sm text-gray-800">
                        <input type="checkbox" className="mr-2" />
                        Agree terms and conditions
                    </label>
                    <button
                        type="submit"
                        className="bg-[#2A2A2A] text-white px-6 py-2 rounded hover:bg-[#444] w-fit"
                    >
                        Submit Information
                    </button>
                </div>


            </form>
        </div>
    );
};

export default ContactForm;
