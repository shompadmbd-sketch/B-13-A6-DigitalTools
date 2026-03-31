
import { ToastContainer } from 'react-toastify'
import './App.css'
import Banner from './component/Banner/Banner'
import Counter from './component/Counter'
import Footer from './component/Footer'
import GetStarted from './component/GetStarted'
 import Navbar from './component/Navbar/Navbar'
import Pricing from './component/Pricing'
import Workflow from './component/Workflow'
import Models from './component/Models'
import { useState } from 'react'
import Cart from './component/Cart'
import Premium from './component/Premium'


const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};
const modelPromise = getModels();

function App() {
 const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([])

  return (
    <>
     <Navbar carts={carts}/> 
     <Banner/>
     <Counter/>
     <Premium/>
  
     {/* name of each tab group should be unique */}
       <div className="tabs tabs-boxed w-fit mx-auto bg-[#F2F2F2] rounded-full  p-1"> 
        
  <input
    type="radio"
    name="my_tabs_1"
    className="tab rounded-full w-40 h-10 text-[16px] font-bold transition-all !text-[#25065D] !opacity-100 checked:bg-gradient-to-r checked:from-[#4F39F6] checked:to-[#9514FA] checked:!text-white"
    aria-label="Products"
    onClick={() => setActiveTab("model")}
    defaultChecked
  />
  <input
    type="radio"
    name="my_tabs_1"
    className="tab rounded-full w-40 h-10 text-[16px] font-bold transition-all !text-[#25065D] !opacity-100 checked:bg-gradient-to-r checked:from-[#4F39F6] checked:to-[#9514FA] checked:!text-white"
    aria-label={`Cart (${carts.length})`}
    onClick={() => setActiveTab("cart")}
  />
</div>

      {activeTab === "model" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}/>}

      {activeTab === "cart" && <Cart  carts={carts} setCarts={setCarts}/>}
    
    
     <GetStarted/>
     <Pricing/>
     <Workflow/>
     <Footer/>
     <ToastContainer/>
    </>
  )
}

export default App
