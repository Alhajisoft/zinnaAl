"use client"
import React, { useState} from 'react';
import {  Menu, X } from 'lucide-react'

const ZinnaAIWebsite: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen((o) => !o);
    };
   

    return (
        <div className=" bg-white">
            {/* Navbar */}
            <header className="bg-[#F8F5F3] text-[#1D1001]">
                <nav className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center space-x-2"> 
                            <div className="w-8 h-8 bg-[#ffda43] rounded-full flex items-center justify-center">
                                <span className="text-[#6f4a1c] font-bold text-sm">AI</span>
                            </div>
                            <span className="text-xl font-bold text-[#6f4a1c]">Zinna AI</span>
                        </div>

                        {/* Desktop Navigation */}
                        <ul className="hidden md:flex flex-row items-center font-bold space-x-8 text-[#1D1001]">
                            <li>
                                <a
                                    href="#"
                                    className="text-[#1D1001] hover:text-[#6f4a1c] transition-colors font-medium"
                                >
                                    Products
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[#1D1001] hover:text-[#6f4a1c] transition-colors font-medium"
                                >
                                    Talent Pool
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[#1D1001] hover:text-[#6f4a1c] transition-colors font-medium"
                                >
                                    About us
                                </a>
                            </li>
                            <div className="hidden md:flex items-center space-x-4">
                            <button className="bg-[#6f4a1c] text-white px-6 py-2 rounded-lg hover:bg-[#6f4a1c] transition-colors">
                                Join Community
                            </button>
                            </div>
                        </ul>

                        {/* Mobile menu button */}
                        <button
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                            className="md:hidden p-2 rounded-lg hover:bg-[#6f4a1c] transition-colors"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden mt-4 py-4 border-t border-gray-100">
                            <div className="flex flex-col space-y-4">
                                <a
                                    href="#"
                                    className="text-[#1D1001] hover:text-[#6f4a1c] transition-colors"
                                >
                                    Products
                                </a>
                                <a
                                    href="#"
                                    className="text-[#1D1001] hover:text-[#6f4a1c] transition-colors"
                                >
                                    Talent Pool
                                </a>
                                <a
                                    href="#"
                                    className="text-[#1D1001] hover:text-[#6f4a1c] transition-colors"
                                >
                                    About us
                                </a>
                                <hr className="border-gray-200" />
                                <a
                                    href="#"
                                    className="text-[#1D1001] hover:text-[#6f4a1c] transition-colors"
                                >
                                    Sign In
                                </a>
                                <a
                                    href="#"
                                    className="text-[#1D1001] hover:text-[#6f4a1c] transition-colors"
                                >
                                    My Account
                                </a>
                                <button className="bg-[#6f4a1c] text-white px-6 py-2 rounded-lg hover:bg-[#6f4a1c]/80 transition-colors w-full">
                                    Join Community
                                </button>
                            </div>
                        </div>
                    )}
                </nav>
            </header>
            {/* You can continue with the rest of the page here */}
        </div>
    );
};

export default ZinnaAIWebsite;
