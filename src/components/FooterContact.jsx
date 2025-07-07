const FooterContact = () => {
    return (
        <footer className="bg-[#6C4F3D] text-white py-12 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand/Logo Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Capsitech</h2>
                    <p className="text-sm text-gray-200">
                        Your trusted partner for hotel solutions.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-200">
                        <li><a href="/">Home</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/agents">Agents</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <p className="text-sm text-gray-200">Jaipur, Rajasthan, 342087</p>
                    <p className="text-sm text-gray-200 mt-2">+91 98765 43210</p>
                    <p className="text-sm text-gray-200">info@capsitech.com</p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center mt-10 text-sm text-gray-300">
                © {new Date().getFullYear()} Capsitech. All rights reserved.
            </div>
        </footer>
    );
};

export default FooterContact;
