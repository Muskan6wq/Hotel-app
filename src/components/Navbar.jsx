import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-[#fdf4ef]  shadow-sm px-6 md:px-16 py-5">
            <div className="flex justify-between items-center">
                {/* Left Logo */}
                <Link to="/" className="text-2xl mt-4 font-bold text-gray-900">Dwello</Link>

                {/* Center Nav Links */}
                <nav className="hidden md:flex gap-10 text-gray-700 text-sm mt-4 font-bold">
                    <Link to="/" className="hover:text-black">Home</Link>
                    <a href="#" className="hover:text-black">Service</a>
                    <a href="#" className="hover:text-black">Agents</a>
                    <Link to="/contact" className="hover:text-black">Contact</Link>
                </nav>

                {/* Right Icons + Button */}
                <div className="flex items-center mt-4 gap-5">
                    <FiSearch className="text-xl text-gray-700 hover:text-black cursor-pointer" />
                    <FaUser className="text-xl text-gray-700 hover:text-black cursor-pointer" />
                    <button className="bg-black text-white px-5 py-2 rounded text-sm font-medium">
                        Sign up
                    </button>
                </div>


                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
                    </button>
                </div>

            </div>

            {/* Mobile Dropdown Nav */}
            {menuOpen && (
                <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-700 text-sm font-medium px-2">
                    <Link to="/" className="hover:text-black">Home</Link>
                    <a href="#" className="hover:text-black">Service</a>
                    <a href="#" className="hover:text-black">Agents</a>
                    <Link to="/contact" className="hover:text-black">Contact</Link>

                    {/* Icons and Button on Mobile */}
                    <div className="flex gap-4 mt-4">
                        <FiSearch className="text-xl text-gray-700 hover:text-black" />
                        <FaUser className="text-xl text-gray-700 hover:text-black" />
                    </div>
                    <button className="bg-black text-white px-4 py-2 rounded text-sm font-medium mt-2">
                        Sign up
                    </button>
                </div>
            )}
        </header>
    );
}

export default Navbar;
