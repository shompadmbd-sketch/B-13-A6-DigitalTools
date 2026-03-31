import React from 'react';
import BannerImage from '../../assets/banner.png';
import CircleImg from '../../assets/circle.png';
import PlayImg from '../../assets/play.png'

const Banner = () => {
    return (
 <div className="relative min-h-162.5 flex items-center overflow-hidden mt-20 mb-20 sm:mt-15 md:mt-36 lg:mt-10">

      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">

        {/* Left Content */}

        <div className="space-y-4  ">

          <div className="inline-flex items-center gap-2 bg-[#E1E7FF] border border-[#E1E7FF] text-sm px-5 py-2 rounded-full">

             <span><img src={CircleImg } alt="" /></span> 

         <span className="font-medium text-4 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">

           New: AI-Powered Tools Available

         </span>

           </div>

          <h1 className="text-4xl lg:text-[72px] font-extrabold leading-[1.1666666666666667] text-[#101727]">

            Supercharge Your

            <br className="block min-[1010px]:max-[1300px]:hidden"/>
            <span className="">
              Digital Workflow

            </span>

          </h1>
          <p className="text-[18px] text-[#627382] font-normal text-4 max-w-lg">

            Access premium AI tools, design assets, templates, and productivity

              software—all in one place. Start creating faster today.

             Explore Products

          </p>

          <div className="flex flex-wrap gap-4 pt-4">

          <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:brightness-110 active:scale-95 transition-all px-8 py-3 rounded-full font-semibold text-lg shadow-xl shadow-[#7427F8]/40 flex items-center gap-3 group text-[#FFFFFF] cursor-pointer">
        Explore Products
      </button>  
    <button className="relative p-[1px] rounded-full overflow-hidden transition-all shadow-xl shadow-[#7427F8]/40 group flex items-center justify-center cursor-pointer">
  
  {/* গ্রাডিয়েন্ট লেয়ার (এটিই বর্ডার হিসেবে কাজ করবে) */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#4F39F6] to-[#9514FA]"></div>

  {/* ভেতরের সাদা অংশ */}
  <div className="relative bg-white px-8 py-3 rounded-full flex items-center gap-3 w-full h-full group-hover:bg-transparent transition-all">
    
    <span><img src={PlayImg} alt="Play" /></span>
    
    <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semibold text-lg group-hover:text-white">
      Watch Demo
    </span>
    
  </div>
</button>

          </div>
        </div>

        {/* Right Image */}

        <div className="relative flex justify-center lg:justify-end  sm:mt-10 lg:mt-0">

          <div className="relative">

            <img

              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"

              src={BannerImage}

              alt="AI Models Banner"

            /> 

          </div>

        </div>

      </div>

    </div> 
    );
};

export default Banner;