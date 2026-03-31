import { toast } from "react-toastify";
import { CiShoppingCart } from 'react-icons/ci';

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCarts([]);
    toast.success("Payement successful!");
  };

  const handleDelete = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);

    

    toast.success("Item deleted!");
  };

  return (
   <div className="w-[1200px]  mx-auto bg-[#F2F2F2] rounded-3xl shadow-sm border border-gray-100 p-12 flex flex-col justify-between">
  {/* Header Section */}
  <div>
    <h1 className="text-[32px] text-[#101727] font-bold mb-8">Your Cart</h1>

    {carts.length === 0 ? (
      
     <div className="flex flex-col items-center justify-center">
      <CiShoppingCart className="text-6xl" />
  <p className="text-2xl p-5 text-gray-400">Cart is empty</p>
</div>
    ) : (
      <div className="space-y-4 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
        {carts.map((item) => (
          <div
            className="flex items-center justify-between bg-[#F9FAFC] rounded-2xl p-5"
            key={item.id}
          >
            <div className="flex items-center gap-5">
              <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-50">
                <img
                  className="h-8 w-8 object-contain"
                  src={item.icon}
                  alt={item.name}
                />
              </div>

              <div className="flex flex-col">
                <h2 className="text-[20px] font-bold text-[#101727]">
                  {item.name}
                </h2>
                <p className="text-[16px] font-medium text-[#627382]">
                  ${item.price}
                </p>
              </div>
            </div>

            <button
              onClick={() => handleDelete(item)}
              className="text-[#25065D] text-[16px] font-bold hover:opacity-80 transition-opacity mr-4"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    )}
  </div>

  
  {carts.length > 0 && (
    <div className="mt-auto">
      <div className="flex justify-between items-center mb-6 px-2 mt-4">
        <div className="text-[#627382] text-[18px] font-medium ">Total:</div>
        <div className="text-[#101727] font-bold text-[32px]">${totalPrice}</div>
      </div>

      <button
        onClick={handlePayment}
        className="w-full py-5 rounded-[20px] font-bold text-[18px] text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:bg-[#6b21e3] transition-all 
        shadow-lg active:scale-[0.99] cursor-pointer"
      >
        Proceed To Checkout
      </button>
    </div>
  )}
</div>
  );
};

export default Cart;