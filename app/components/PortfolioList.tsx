import { useContext, useId } from "react";
import { Star } from "./icons";
import { ModalContext } from "~/root";
import { portfolioListItems } from '../data/homepage';

export default function PortfolioList() {  
  const toggleModal = useContext(ModalContext);

  return (
    <div className="relative w-full">
      <div className="container py-12">
        <div className="max-w-5xl ml-auto flex flex-col gap-8">
          <span className="title">Work in the wild</span>
          <ul className="flex flex-col gap-3 pb-11 border-b border-current">
            {portfolioListItems.map(({ title, status, platform, link }, i) => (
              <li className={`relative group w-full grid grid-cols-[40%_1fr_auto] md:grid-cols-[50%_1fr_auto] items-end gap-4 ${status ? `opacity-80` : `focus-within:highlighted hover:highlighted hover-highlight !duration-500`}`} key={`${useId()}`}>
                {!status &&
                  <span className="transition duration-500 absolute bottom-1/2 -left-5 transform translate-y-1/2 -translate-x-full -rotate-45 scale-0 group-hover:rotate-90 group-hover:scale-100">
                    <Star className="w-9 h-9" />
                  </span>
                }
                <span className="flex w-full items-end leading-[0.75] gap-4 text-2xl md:text-[44px] font-title">
                  <strong className="block w-max whitespace-nowrap">                
                    {status ? title : <a target="_blank" href={link}>{title}</a>}
                  </strong>
                  <span className="w-full border-b border-current border-dashed"></span>
                </span>
                <span className="flex items-end w-full gap-4">
                  <span className="leading-none uppercase text-xs whitespace-nowrap">{platform}</span>
                  <span className="w-full border-b border-current border-dashed"></span>
                </span>
                <span className="leading-none uppercase text-xs text-center">
                  {status ? 'In progress' : <a target="_blank" href={link}>Visit</a>}
                </span>
              </li>
            ))}
          </ul>
          <strong className="ml-auto">
            <button className="ml-auto text-right title pb-0.5 border-b border-current" onClick={() => toggleModal ? toggleModal() : null}>
              More examples on request
            </button>
          </strong>
        </div>
      </div>
    </div>
  )
}