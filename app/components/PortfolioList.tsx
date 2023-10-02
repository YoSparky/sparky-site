import { useContext, useId } from "react";
import { Star } from "./icons";
import { ModalContext } from "~/root";
import { portfolioListItems } from '../data/homepage';

export default function PortfolioList() {  
  const toggleModal = useContext(ModalContext);

  return (
    <div className="w-full pt-5 pb-8 md:py-10">
      <div className="container py-5 md:py-10">
        <div className="md:max-w-5xl ml-auto flex flex-col gap-8">
          <span className="title">Work in the wild</span>
          <ul className="flex flex-col gap-3 pb-11 border-b border-current">
            {portfolioListItems.map(({ title, status, platform, link }) => (
              <li className={`relative group w-full grid grid-cols-[40%_1fr_auto] md:grid-cols-[50%_1fr_auto] items-end gap-4 ${status ? `opacity-80` : `focus-within:highlighted hover:highlighted hover-highlight after:!duration-500`}`} key={`${useId()}`}>
                {!status &&
                  <span className="transition duration-500 absolute bottom-1/2 -left-5 transform translate-y-1/2 -translate-x-full -rotate-45 scale-0 group-hover:rotate-90 group-hover:scale-100">
                    <Star className="w-9 h-9" />
                  </span>
                }
                <span className="flex w-full items-end gap-4 ">
                  <strong className="block w-max whitespace-nowrap text-2xl md:text-[44px] font-title leading-[0.75]">                
                    {status ? title : <a target="_blank" href={link}>{title}</a>}
                  </strong>
                  <span className="w-full border-b border-current border-dashed"></span>
                </span>
                <span className="flex items-end w-full gap-4">
                  <span className="max-md:text-xs title leading-none whitespace-nowrap">{platform}</span>
                  <span className="w-full border-b border-current border-dashed"></span>
                </span>
                <span className="max-md:text-xs title leading-none text-center">
                  {status ? 'In progress' : <a target="_blank" href={link}>Visit</a>}
                </span>
              </li>
            ))}
          </ul>
          <button className="ml-auto text-right button--link" onClick={() => toggleModal ? toggleModal() : null}>
            More examples on request
          </button>
        </div>
      </div>
    </div>
  )
}