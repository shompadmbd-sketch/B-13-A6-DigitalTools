import React from 'react';

const Pricing = () => {
    return (
      
       <div class="mx-auto text-center bg-white pb-20">
   
    <div class="px-4 text-center mt-10 sm:mt-16 lg:mt-24">
        <h2 class="text-[30px] sm:text-[38px] lg:text-[48px] font-extrabold text-[#101727] leading-tight">
            Simple, Transparent Pricing
        </h2>
        <p class="text-[14px] sm:text-[16px] font-normal text-[#627382] mt-3 mb-10 max-w-[600px] mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
    </div>

    <div class="container mx-auto px-6 py-10">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch">

          
            <div class="w-full bg-[#F2F2F2] border border-[#EDEDED] shadow-sm rounded-[24px] flex flex-col p-8 md:p-10 text-left">
                <div class="mb-4">
                    <h2 class="text-[24px] font-bold text-[#101727] mb-1">Starter</h2>
                    <p class="text-[#627382] text-base font-normal">Perfect for getting started</p>
                </div>
                <div class="mb-8">
                    <div class="flex items-baseline text-[#101727]">
                        <span class="text-[40px] font-extrabold leading-none">$0</span>
                        <span class="text-xl font-normal text-[#627382] ml-1">/Month</span>
                    </div>
                </div>
                
                
                <ul class="space-y-4 mb-10 text-[#627382] flex-grow">
                    <li class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-[#22C55E] flex-shrink-0">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="text-[15px] font-medium">Access to 10 free tools</span>
                    </li>
                    <li class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-[#22C55E] flex-shrink-0">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="text-[15px] font-medium">Basic templates</span>
                    </li>
                    <li class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-[#22C55E] flex-shrink-0">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="text-[15px] font-medium">Community support</span>
                    </li>
                    <li class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-[#22C55E] flex-shrink-0">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="text-[15px] font-medium">1 project per month</span>
                    </li>
                </ul>
                
                <button class="w-full py-4 px-6 rounded-full font-bold text-lg text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:from-[#4432d4] hover:to-[#8212db] transition-all mt-auto cursor-pointer shadow-md">
            Get Started Free
          </button>
            </div>

            
            <div class="w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] border border-[#8B3DFF] shadow-xl rounded-[24px] flex flex-col p-8 md:p-10 text-left relative lg:-mt-4">
         
                <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span class="bg-[#FEF3C6] text-[#BB4D00] px-5 py-2 rounded-full text-sm font-bold shadow-md whitespace-nowrap">
                        Most Popular
                    </span>
                </div>
                <div class="mb-4 text-white">
                    <h2 class="text-[24px] font-bold mb-1">Pro</h2>
                    <p class="text-purple-100 text-base opacity-90 font-normal">Best for professionals</p>
                </div>
                <div class="mb-8 text-white">
                    <div class="flex items-baseline">
                        <span class="text-[40px] font-extrabold leading-none">$29</span>
                        <span class="text-xl font-normal opacity-80 ml-1">/Month</span>
                    </div>
                </div>
                
                <ul class="space-y-4 mb-10 text-white flex-grow">
                    <li class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="text-[15px] font-medium opacity-95">Access to all premium tools</span>
                    </li>
                    <li class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="text-[15px] font-medium opacity-95">Unlimited templates</span>
                    </li>
                    <li class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="text-[15px] font-medium opacity-95">Priority support</span>
                    </li>
                    <li class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="text-[15px] font-medium opacity-95">Unlimited projects</span>
                    </li>
                    <li class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="text-[15px] font-medium opacity-95">Cloud sync</span>
                    </li>
                    <li class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="text-[15px] font-medium opacity-95">Advanced analytics</span>
                    </li>
                </ul>
                
                <button class="w-full py-4 px-6 rounded-full font-bold text-lg bg-white hover:bg-gray-100 transition-all mt-auto cursor-pointer border border-gray-100 shadow-sm">
             <span class="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
          Start Pro Trial
              </span>
           </button>
            </div>

           
            <div class="w-full bg-[#F2F2F2] border border-[#EDEDED] shadow-sm rounded-[24px] flex flex-col p-8 md:p-10 text-left">
                <div class="mb-4">
                    <h2 class="text-[24px] font-bold text-[#101727] mb-1">Enterprise</h2>
                    <p class="text-[#627382] text-base font-normal">For teams and businesses</p>
                </div>
                <div class="mb-8">
                    <div className="flex items-baseline text-[#101727]">
                        <span class="text-[40px] font-extrabold leading-none">$99</span>
                        <span class="text-xl font-normal text-[#627382] ml-1">/Month</span>
                    </div>
                </div>
                
                <ul class="space-y-4 mb-10 text-[#627382] flex-grow">
                    <li class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-[#22C55E] flex-shrink-0">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="text-[15px] font-medium">Everything in Pro</span>
                    </li>
                    <li class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-[#22C55E] flex-shrink-0">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="text-[15px] font-medium">Team collaboration</span>
                    </li>
                    <li class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-[#22C55E] flex-shrink-0">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="text-[15px] font-medium">Custom integrations</span>
                    </li>
                    <li class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-[#22C55E] flex-shrink-0">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="text-[15px] font-medium">Dedicated support</span>
                    </li>
                    <li class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-[#22C55E] flex-shrink-0">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="text-[15px] font-medium">SLA guarantee</span>
                    </li>
                    <li class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-[#22C55E] flex-shrink-0">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="text-[15px] font-medium">Custom branding</span>
                    </li>
                </ul>
                
                <button class="w-full py-4 px-6 rounded-full font-bold text-lg text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:from-[#4432d4] hover:to-[#8212db] transition-all mt-auto cursor-pointer shadow-md">
            Contact Sales
          </button>
            </div>

        </div>
    </div>
</div>
    
    );
};

export default Pricing;