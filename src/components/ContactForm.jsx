function ContactForm() {
    return (
        <form className="bg-white rounded-xl p-8 shadow grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-semibold">Full name</label>
                <input type="text" className="w-full border-b p-1 bg-transparent" placeholder="Ram Kumar Sharma" />
            </div>

            <div>
                <label className="block text-sm font-semibold">Email address</label>
                <input type="email" className="w-full border-b p-1 bg-transparent" />
            </div>

            <div>
                <label className="block text-sm font-semibold">Phone number</label>
                <input type="text" className="w-full border-b p-1 bg-transparent" />
            </div>

            <div>
                <label className="block text-sm font-semibold">Date of birth</label>
                <input type="date" className="w-full border-b p-1 bg-transparent" />
            </div>

            <div>
                <label className="block text-sm font-semibold">Gender</label>
                <input type="text" className="w-full border-b p-1 bg-transparent" />
            </div>

            <div>
                <label className="block text-sm font-semibold">City</label>
                <input type="text" className="w-full border-b p-1 bg-transparent" />
            </div>

            <div>
                <label className="block text-sm font-semibold">State</label>
                <input type="text" className="w-full border-b p-1 bg-transparent" />
            </div>

            <div>
                <label className="block text-sm font-semibold">Country</label>
                <input type="text" className="w-full border-b p-1 bg-transparent" />
            </div>

            <div>
                <label className="block text-sm font-semibold">Address</label>
                <input type="text" className="w-full border-b p-1 bg-transparent" />
            </div>

            <div>
                <label className="block text-sm font-semibold">Message</label>
                <textarea className="w-full border-b p-1 bg-transparent"></textarea>
            </div>

            {/* Bottom Row: Radio + File Upload */}
            <div>
                <label className="block text-sm font-semibold mb-1">Request a counselling session</label>
                <label><input type="radio" name="session" value="yes" /> Yes</label>
                <label className="ml-4"><input type="radio" name="session" value="no" /> No</label>
            </div>

            <div>
                <label className="block text-sm font-semibold">Upload your CV/Resume</label>
                <input type="file" className="w-full mt-2" />
            </div>

            {/* Checkbox + Submit */}
            <div className="col-span-2">
                <label className="block text-sm mb-4">
                    <input type="checkbox" /> I agree to terms and conditions
                </label>
                <button
                    type="submit"
                    className="bg-[#2A2A2A] text-white px-6 py-2 rounded hover:bg-[#444]"
                >
                    Submit Information
                </button>
            </div>
        </form>
    );
}

export default ContactForm;
