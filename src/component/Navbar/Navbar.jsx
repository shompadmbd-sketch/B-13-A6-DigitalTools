import React from 'react';
import { FiShoppingCart } from "react-icons/fi";


const Navbar = ({ carts }) => {
    return (
 <div className="navbar bg-white border-b border-[#E5E7EB] px-4 md:px-8 lg:px-12 xl:px-50  xl:px- py-4 lg:py-6 relative z-[50]  mx-auto">
  
  <div className="navbar-start">
    {/* Hamburger Menu - Mobile & Tablet */}
    <div className="dropdown lg:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost p-0 mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-5 shadow-2xl bg-white rounded-xl w-64 border border-gray-100 font-semibold text-[#101727]">
        <li><a>Products</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Testimonials</a></li>
        <li><a>FAQ</a></li>
      </ul>
    </div>

    {/* Logo */}
    <div className="flex items-center">
      <img 
        className="w-28 md:w-32 lg:w-36 h-9 lg:h-10 object-contain" 
        src="/logo.png" 
        alt="DigiTools Logo" 
      />
    </div>
  </div>

  {/* Desktop Menu - Center */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-6 xl:gap-8 px-1 text-[15px] lg:text-[16px] font-semibold text-[#101727]">
      <li><a className="hover:text-[#4F39F6] transition-colors p-0">Products</a></li>
      <li><a className="hover:text-[#4F39F6] transition-colors p-0">Features</a></li>
      <li><a className="hover:text-[#4F39F6] transition-colors p-0">Pricing</a></li>
      <li><a className="hover:text-[#4F39F6] transition-colors p-0">Testimonials</a></li>
      <li><a className="hover:text-[#4F39F6] transition-colors p-0">FAQ</a></li>
    </ul>
  </div>

  {/* Right Side - Login & Get Started */}
  <div className="navbar-end gap-3 md:gap-4 lg:gap-6 items-center">
    <button className="flex items-center gap-1.5 text-[15px] md:text-[16px] font-semibold text-[#101727] hover:text-[#4F39F6] transition-colors">
  
  {/* Cart Icon wrapper with relative positioning */}
  <div className="relative">
    <FiShoppingCart className="text-2xl" />
    
   
    {carts.length > 0 && (
      <span className="absolute -top-2 -right-2 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-[12px] font-semibold w-5 h-5 rounded-full flex items-center justify-center">
      {carts.length}
     </span>
    )}
  </div>

  <span className="hidden sm:inline ml-1">Login</span>
</button>
    
    <a className="btn bg-gradient-to-r from-blue-600 to-purple-600 border-none rounded-full text-white px-5 lg:px-8 min-h-0 h-10 lg:h-12 normal-case font-semibold text-sm lg:text-base">
      Get Started
    </a>
  </div>
</div>


    );
};

export default Navbar;