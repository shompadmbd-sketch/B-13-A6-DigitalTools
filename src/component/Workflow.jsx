import React from 'react';

const Workflow = () => {
    return (
       
           <div className="w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-12 md:py-20 mt-15">
  <div className="container mx-auto text-center px-6 md:px-12 lg:px-20 ">
    <div>
      <h2 className="text-[#FFFFFF] text-[32px] md:text-[40px] font-extrabold mb-4">
        Ready to Transform Your Workflow?
      </h2>
      <p className="text-[#FFFFFF] text-[16px] font-normal opacity-90 leading-relaxed">
        Join thousands of professionals who are already using Digitools to work smarter. <br className="hidden md:block"/> 
        Start your free trial today.
      </p>
    </div>

    {/* justify-center ক্লাসটি বাটনগুলোকে মাঝখানে নিয়ে আসবে */}
    <div className="flex flex-wrap justify-center gap-4 pt-10">
      
      <button className="bg-white hover:scale-105 transition-all px-8 py-3 rounded-full font-semibold  shadow-xl flex items-center gap-3 group text-[16px] cursor-pointer">
        <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
          Explore Products
        </span>
      </button>

      <button className=" hover:scale-105 transition-all px-8 py-3 rounded-full font-semibold text-[16px] shadow-xl flex items-center gap-3 group border border-[#FFFFFF] cursor-pointer">
        <span className="text-[#FFFFFF] ">
          Watch Demo
        </span>
      </button>

    </div>
    <div>
      <p className="mt-4  text-[#FFFFFF] text-[16px] font-normal ">14-day free trial • No credit card required • Cancel anytime</p>
    </div>
  </div>
</div>

        
    );
};

export default Workflow;