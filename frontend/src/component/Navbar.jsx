// components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between text-8xl bg-white shadow-md">
      <div className="text-5xl md:text-6xl font-bold">Logo</div>

      <ul className="hidden md:flex gap-8 text-2xl lg:text-3xl font-medium">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">Category</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>
        <li className="hover:text-blue-600 cursor-pointer">About us</li>
      </ul>

      <button className="text-xl lg:text-2xl px-6 py-3 border rounded-full hover:bg-black hover:text-white transition">
        Request a Review
      </button>
    </nav>
  );
};

export default Navbar;
