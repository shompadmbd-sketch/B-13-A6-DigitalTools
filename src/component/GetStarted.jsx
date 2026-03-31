import React from 'react';
import UsserImg from '../assets/user.png';
import PackageImg from '../assets/package.png';
import RocketImg from '../assets/rocket.png'

const GetStarted = () => {
    return (
        <div className="mx-0 text-center ">
           <div className="mt-10 lg:mt-30"> 
    
    {/* মোবাইলে ছোট ফন্ট (text-[32px]), বড় স্ক্রিনে (sm/lg) বড় ফন্ট */}
    <h2 className="text-[32px] sm:text-[48px] font-extrabold text-[#101727] mb-4">
      Get Started in 3 Steps
    </h2>
    
    <p className="text-[16px] font-normal text-[#627382] mb-2 px-4">
      Start using premium digital tools in minutes, not hours.
    </p>
  </div>
            <div className="max-w-[1200px] mx-auto px-6 py-10 lg:py-20"> 


  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-20 justify-items-center">
  

   
    <div className="card bg-white border border-[#F1F1F1] rounded-2xl shadow-sm hover:shadow-md transition-all relative overflow-hidden group 
         w-full sm:max-w-[380px] lg:w-[380px] lg:h-[380px] flex flex-col justify-center min-h-[340px]">
      
      <div className="absolute top-5 right-5 w-12 h-12 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full flex items-center justify-center font-bold text-[14px] z-10 border-4 border-white shadow-sm">
        01
      </div>
      
      <figure className="pt-10 lg:pt-14 flex justify-center">
        <div className="w-20 h-20 rounded-full flex items-center justify-center bg-[#F2F2F2]">
          <img className="w-10 h-10" src={UsserImg} alt="User" />
        </div>
      </figure>

      <div className="card-body items-center text-center p-6 lg:pb-10">
        <h2 className="card-title text-[24px] font-bold text-[#101727] mb-2">Create Account</h2>
        <p className="text-[#627382] text-[16px] font-normal leading-relaxed">
          Sign up for free in seconds. No credit card <br className="hidden lg:block"/> required to get started.
        </p>
      </div>
    </div>

    
    <div className="card bg-white border border-[#F1F1F1] rounded-2xl shadow-sm hover:shadow-md transition-all relative overflow-hidden group 
         w-full sm:max-w-[380px] lg:w-[380px] lg:h-[380px] flex flex-col justify-center min-h-[340px]">
      
      <div className="absolute top-5 right-5 w-12 h-12 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full flex items-center justify-center font-bold text-[14px] z-10 border-4 border-white shadow-sm">
        02
      </div>
      
      <figure className="pt-10 lg:pt-14 flex justify-center">
        <div className="w-20 h-20 rounded-full flex items-center justify-center bg-[#F2F2F2]">
          <img className="w-10 h-10" src={PackageImg} alt="Package" />
        </div>
      </figure>

      <div className="card-body items-center text-center p-6 lg:pb-10">
        <h2 className="card-title text-[24px] font-bold text-[#101727] mb-2">Choose Products</h2>
        <p className="text-[#627382] text-[16px] font-normal leading-relaxed">
          Browse our catalog and select the tools <br className="hidden lg:block"/> that fit your needs perfectly.
        </p>
      </div>
    </div>

   
    <div className="card bg-white border border-[#F1F1F1] rounded-2xl shadow-sm hover:shadow-md transition-all relative overflow-hidden group 
         w-full sm:max-w-[380px] lg:w-[380px] lg:h-[380px] flex flex-col justify-center min-h-[340px]">
      
      <div className="absolute top-5 right-5 w-12 h-12 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full flex items-center justify-center font-bold text-[14px] z-10 border-4 border-white shadow-sm">
        03
      </div>
      
      <figure className="pt-10 lg:pt-14 flex justify-center">
        <div className="w-20 h-20 rounded-full flex items-center justify-center bg-[#F2F2F2]">
          <img className="w-10 h-10" src={RocketImg} alt="Rocket" />
        </div>
      </figure>

      <div className="card-body items-center text-center p-6 lg:pb-10">
        <h2 className="card-title text-[24px] font-bold text-[#101727] mb-2">Start Creating</h2>
        <p className="text-[#627382] text-[16px] font-normal leading-relaxed">
          Download and start using your premium <br className="hidden lg:block"/> tools immediately without delay.
        </p>
      </div>
    </div>

  </div>
</div>
        </div>
    );
};

export default GetStarted;