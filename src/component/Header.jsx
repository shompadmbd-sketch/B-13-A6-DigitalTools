const Header = ({ activeTab, setActiveTab, cartCount }) => {
  return (
    <div className="mx-auto text-center mt-20">
      <div>
        <h1 className="text-[#101727] text-[48px] font-extrabold leading-tight">
          Premium Digital Tools
        </h1>
        <p className="text-[16px] font-normal text-[#627382] mt-2">
          Choose from our curated collection of premium digital products designed <br />
          to boost your productivity and creativity.
        </p>
      </div>

      <div className="inline-flex items-center bg-gray-100 p-1 rounded-full border border-gray-200 mt-8">
        {/* Products Button */}
        <button
          onClick={() => setActiveTab("model")}
          className={`${
            activeTab === "model"
              ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"
              : "text-[#25065D] hover:bg-gray-200"
          } px-6 py-2 rounded-full transition-all text-[16px] font-bold`}
        >
          Products
        </button>

        {/* Cart Button */}
        <button
          onClick={() => setActiveTab("cart")}
          className={`${
            activeTab === "cart"
              ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"
              : "text-[#25065D] hover:bg-gray-200"
          } px-6 py-2 rounded-full transition-all text-[16px] font-bold`}
        >
          Cart ({cartCount})
        </button>
      </div>
    </div>
  );
};

export default Header;