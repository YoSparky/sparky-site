import { useContext, useId } from "react";
import { ModalContext } from "~/root";
import { portfolioListItems } from '../data/homepage';

export default function PortfolioList() {  
  const toggleModal = useContext(ModalContext);

  return (
    <div className="bg-[#141414] text-white w-full py-10 md:py-20">
      <div className="container">
        <div className="flex items-center justify-between py-10">
          <span className="font-body text-lg md:text-2xl">Notable Merchants</span>
          <button 
            className="font-NeueHaasGroteskDisplay text-white cursor-pointer text-sm whitespace-nowrap" 
            onClick={() => toggleModal ? toggleModal() : null}
          >
            Become a Client
          </button>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-4 border border-[#2c2c2c] bg-[#2c2c2c] gap-px rounded-md overflow-hidden">
          {portfolioListItems.map(({ title, logo, link }) => (
            <li className="block relative aspect-[320/190] bg-[#141414] group" key={`${useId()}`}>
              <a 
                href={link} 
                target="_blank" 
                className="absolute top-0 left-0 h-full w-full flex items-center justify-center transform transition duration-500 origin-center scale-105 group-hover:scale-110"
              >
                <img 
                  className="block object-contain object-center w-1/2 h-1/3" 
                  src={logo} 
                  alt={title} 
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}