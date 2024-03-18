import { useContext } from "react";
import { ModalContext } from "~/root";

export default function Footer() {  
  const toggleModal = useContext(ModalContext);

  return (
    <>
      <div className="bg-white py-16 md:py-52">
        <div className="container flex flex-col items-center justify-center gap-6 md:gap-14">  
          <strong className="text-3xl md:text-[54px] font-semibold leading-[1.37] text-center max-w-[550px]">Take your Shopify site to the next level today.</strong> 
          <button 
            className="font-NeueHaasGroteskDisplay border border-black text-black bg-transparent py-4 px-8 rounded-[3px] text-sm hover:bg-black hover:text-white transition duration-200" 
            onClick={() => toggleModal ? toggleModal() : null}
          >
            Contact Us
          </button>
        </div>
      </div>
      <div className="container">
        <hr className="border-0 border-b border-current" />
      </div>
      <div className="bg-white py-16 text-xs">
        <div className="container flex flex-col gap-14 relative">
          <span>© {new Date().getFullYear()} / Sparky / Operating Worldwide</span>
        </div>
      </div>
    </>
  )
}