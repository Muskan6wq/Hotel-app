import { FaUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="bg-white shadow-sm px-6 md:px-16 py-5">
            <div className="flex justify-between items-center">
                {/* Left Logo */}
                <Link to="/" className="text-2xl font-bold text-gray-900">Dwello</Link>

                {/* Center Nav Links */}
                <nav className="hidden md:flex gap-10 text-gray-700 text-sm font-medium">
                    <Link to="/" className="hover:text-black">Home</Link>
                    <a href="#" className="hover:text-black">Service</a>
                    <a href="#" className="hover:text-black">Agents</a>
                    <Link to="/contact" className="hover:text-black">Contact</Link>
                </nav>

                {/* Right Icons + Button */}
                <div className="flex items-center gap-5">
                    <FiSearch className="text-xl text-gray-700 hover:text-black cursor-pointer" />
                    <FaUser className="text-xl text-gray-700 hover:text-black cursor-pointer" />
                    <button className="bg-black text-white px-5 py-2 rounded text-sm font-medium">
                        Sign up
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
