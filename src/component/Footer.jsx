import React from 'react';
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";



const Footer = () => {
    return (
   <footer className="bg-[#101727] border-t border-white/10 pt-16 pb-10">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* grid-cols-2 সরাসরি দেওয়ার ফলে মোবাইলেই ২ কলাম হবে */}
    <div className="grid grid-cols-2 md:grid-cols-12 gap-8">
      
      {/* ১. লোগো ও ডেসক্রিপশন - মোবাইলেও ২ কলাম জুড়ে থাকবে (পুরো উইডথ) */}
      <div className="col-span-2 md:col-span-4">
        <div className="mb-6">
          <img className="w-32 lg:w-40 h-auto object-contain" src="/footerlogo.png" alt="Logo" />
        </div>
        <p className="text-gray-400 text-[16px] font-normal leading-relaxed max-w-xs">
          Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
        </p>
      </div>

      {/* ২. প্রোডাক্ট - মোবাইলে ১ কলাম দখল করবে (অর্থাৎ বাম পাশে থাকবে) */}
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
        <ul className="space-y-4 text-gray-400 text-sm">
          <li><a href="#" className="hover:text-white transition">Features</a></li>
          <li><a href="#" className="hover:text-white transition">Pricing</a></li>
          <li><a href="#" className="hover:text-white transition">Templates</a></li>
          <li><a href="#" className="hover:text-white transition">Integrations</a></li>
        </ul>
      </div>

      {/* ৩. কোম্পানি - মোবাইলে ১ কলাম দখল করবে (অর্থাৎ ডান পাশে থাকবে) */}
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
        <ul className="space-y-4 text-gray-400 text-sm">
          <li><a href="#" className="hover:text-white transition">About Us</a></li>
          <li><a href="#" className="hover:text-white transition">Blog</a></li>
          <li><a href="#" className="hover:text-white transition">Careers</a></li>
          <li><a href="#" className="hover:text-white transition">Contact</a></li>
        </ul>
      </div>

      {/* ৪. লিগ্যাল */}
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-white font-semibold mb-6 text-lg">Legal</h3>
        <ul className="space-y-4 text-gray-400 text-sm">
          <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
          <li><a href="#" className="hover:text-white transition">Cookie Settings</a></li>
        </ul>
      </div>

      {/* ৫. সোশ্যাল লিংক */}
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-white font-semibold mb-6 text-lg">Social Links</h3>
        <ul className="flex flex-wrap gap-3">
          <li>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-purple-500 hover:text-white transition-all shadow-md">
              <PiInstagramLogoFill size={20} />
            </a>
          </li>
          <li>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-purple-500 hover:text-white transition-all shadow-md">
              <FaFacebook size={20} />
            </a>
          </li>
          <li>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-purple-500 hover:text-white transition-all shadow-md">
              <RiTwitterXFill size={20} />
            </a>
          </li>
        </ul>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 font-medium">
      <div className="text-[14px] md:text-[16px] font-normal text-center md:text-left">
        © 2026 Digitools. All rights reserved.
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        <a href="#" className="hover:text-white transition text-[14px] md:text-[16px] font-normal">Privacy Policy</a>
        <a href="#" className="hover:text-white transition text-[14px] md:text-[16px] font-normal">Terms of Service</a>
        <a href="#" className="hover:text-white transition text-[14px] md:text-[16px] font-normal">Cookies</a>
      </div>
    </div>
  </div>
</footer>
    );
};

export default Footer;