import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { toast } from 'react-toastify';

const ModelsCard = ({ model, carts, setCarts }) => {
  const [isSubcribed, setIsSubscribed] = useState(false);

  // কালার ম্যাপিং
  const badgeStyles = {
    "Best Seller": "bg-[#FEF3C6] text-[#BB4D00]",
    "Popular": "bg-[#E1E7FF] text-[#9514FA]",
    "New": "bg-[#DBFCE7] text-[#0A883E]",
  };

  const handleSubsScription = () => {
    const isFound = carts.find((item) => item.id === model.id);
    if (isFound) {
      toast.error("Product already in cart!");
      return;
    }
    setIsSubscribed(true);
    setCarts([...carts, model]);
    toast.success("Product added to cart!");
  };

  return (
    <div className="relative shadow-xl rounded-3xl border border-zinc-200 bg-white p-6 transition-all hover:shadow-2xl">
      
     
      {model.badge && (
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${badgeStyles[model.badge] || "bg-zinc-100"}`}>
          {model.badge}
        </div>
      )}

      {/* Icon Section */}
      <div className="flex justify-start items-center mb-6">
        <div className="bg-zinc-50 p-4 rounded-full border border-zinc-100">
          <img className="h-10 w-10 object-contain" src={model.icon} alt={model.name} />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-extrabold text-zinc-900">{model.name}</h2>
        <p className="text-zinc-500 text-sm leading-relaxed">{model.description}</p>

        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-zinc-900">${model.price}</span>
          <span className="text-zinc-400 text-sm font-medium">/{model.billingCycle || 'Mo'}</span>
        </div>

        <ul className="space-y-3 pt-2">
          {model.features?.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-zinc-600">
              <FiCheck className="w-5 h-5 text-green-500" /> 
              <span className="text-[15px] font-medium">{feature}</span>
            </li>
          ))}
        </ul>

        <button
  onClick={handleSubsScription}
  className={`w-full py-4 mt-2 rounded-2xl font-bold text-[16px] text-white transition-all active:scale-95 shadow-lg ${
    isSubcribed 
      ? "bg-green-500" 
      : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:bg-[#521ce6] cursor-pointer"
  }`}
    >
  
  {isSubcribed ? "Add to Cart" : "Buy Now"}
</button>
      </div>
    </div>
  );
};

export default ModelsCard;