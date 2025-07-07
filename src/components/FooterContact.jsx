import { FaTwitter } from "react-icons/fa";
import dwelloLogo from "../assets/dwello-logo.jpg"; // Update path based on your project

const Footer = () => {
    return (
        <footer className="bg-[#6C4F3D] text-white py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

                {/* Dwello Logo & Tagline */}
                <div className="col-span-1 flex flex-col items-start">
                    <img src={dwelloLogo} alt="Dwello Logo" className="w-24 mb-4" />
                    <p className="text-sm text-gray-200">
                        Bringing you closer to your dream home, one click at a time.
                    </p>
                </div>

                {/* About */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">About</h3>
                    <ul className="space-y-2 text-sm text-gray-200">
                        <li><a href="#" className="hover:underline">Our Story</a></li>
                        <li><a href="#" className="hover:underline">Careers</a></li>
                        <li><a href="#" className="hover:underline">Our Team</a></li>
                        <li><a href="#" className="hover:underline">Resources</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Support</h3>
                    <ul className="space-y-2 text-sm text-gray-200">
                        <li><a href="#" className="hover:underline">FAQ</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                        <li><a href="#" className="hover:underline">Help Center</a></li>
                        <li><a href="#" className="hover:underline">Terms Of Service</a></li>
                    </ul>
                </div>

                {/* Find Us */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Find Us</h3>
                    <ul className="space-y-2 text-sm text-gray-200">
                        <li><a href="#" className="hover:underline">Events</a></li>
                        <li><a href="#" className="hover:underline">Locations</a></li>
                        <li><a href="#" className="hover:underline">Newsletter</a></li>
                    </ul>
                </div>

                {/* Our Social */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Our Social</h3>
                    <ul className="space-y-2 text-sm text-gray-200">
                        <li><a href="#" className="hover:underline">Instagram</a></li>
                        <li><a href="#" className="hover:underline">Facebook</a></li>
                        <li className="flex items-center gap-2">
                            <FaTwitter className="text-white" />
                            <a href="#" className="hover:underline">Twitter</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center text-gray-300 text-sm mt-10">

            </div>
        </footer>
    );
};

export default Footer;
