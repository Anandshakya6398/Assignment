import React, { useState } from "react";
import Logo from "../assets/log0.png";
import Image from "../assets/figma.png";
import Bbb from "../assets/bbb.png";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const HeroSection = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleAdditional = () => {
    navigate("/additional");
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gradient-to-l to-white from-[#F7E2F4] min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-transparent">
        <div className="text-xl bg-[#F7E2F4] rounded-full font-bold text-green-500">
          <img
            src={Logo}
            alt=""
            className="bg-[#F7E2F4] hover:cursor-pointer"
          />
        </div>
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li className="cursor-pointer hover:underline duration-300">Tools</li>
          <li className="cursor-pointer hover:underline duration-300">Explore</li>
          <li className="cursor-pointer hover:underline duration-300">Stock</li>
          <li className="cursor-pointer hover:underline duration-300">Pricing</li>
          <li className="cursor-pointer hover:underline duration-300">Blog</li>
          <li className="cursor-pointer hover:underline duration-300">Contact</li>
        </ul>
        <div className="hidden md:flex space-x-8">
          <button
            onClick={handleLoginClick}
            className="text-gray-700 cursor-pointer hover:text-red-500 hover:underline duration-500"
          >
            Login
          </button>
          <button
            onClick={handleLoginClick}
            className="border-[1.5px] px-4 py-1 rounded cursor-pointer hover:bg-pink-200 duration-500"
          >
            Sign up
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-700">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gradient-to-l to-white from-[#f2bbe9] z-50 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMobileMenu} className="text-gray-700">
            <FaTimes size={24} />
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-4 text-gray-700">
          <li className="cursor-pointer">Tools</li>
          <li className="cursor-pointer">Explore</li>
          <li className="cursor-pointer">Stock</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
        <div className="flex flex-col items-center space-y-4 mt-4">
          <button
            onClick={handleLoginClick}
            className="text-gray-700 cursor-pointer hover:text-red-500 hover:underline duration-500"
          >
            Login
          </button>
          <button
            onClick={handleLoginClick}
            className="border-[1.5px] px-4 py-1 rounded cursor-pointer hover:bg-pink-200 duration-500"
          >
            Sign up
          </button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col-reverse gap-10 md:flex-row items-center justify-between px-8 md:px-16 py-12 flex-grow">
        {/* Left Side Text */}
        <div className="max-w-lg text-center md:text-left">
          <span className="bg-gradient-to-r to-white from-[#E1E4FF] text-purple-700 px-3 py-1 rounded-full text-sm">
            DELIVER YOUR IDEAS FASTER
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Supercharge your productivity with AI image tools
          </h1>
          <p className="text-gray-600 mt-4">
            Say goodbye to tedious and time-consuming photo editing tasks and
            embrace a high-productivity workflow with an AI-assisted toolset.
          </p>
          <button onClick={handleAdditional} className="mt-6 bg-gray-700 hover:bg-gray-950 duration-500 text-white px-6 py-2 rounded-lg cursor-pointer">
           Go To Additional Page
          </button>
        </div>

        {/* Right Side Image */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
          <img src={Image} alt="AI Tools" className="w-64 md:w-96 rounded-lg" />
        </div>
        <img
          src={Bbb}
          alt=""
          className="w-16 absolute right-0 md:bottom-0 "
        />
      </div>
    </div>
  );
};

export default HeroSection;
