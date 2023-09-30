import { useContext } from "react";
import { ModalContext } from "~/root";
import FooterInfo from "../Footer/components/FooterInfo";

type PortfolioPaginationItem = {
  handle: string | null,
  title: string | null
  | undefined
}

export function Footer({ prevItem, nextItem } : { prevItem: PortfolioPaginationItem, nextItem: PortfolioPaginationItem }) {  
  const toggleModal = useContext(ModalContext);

  return (
    <>
      <div className="container pt-11">
        <div className="flex items-center w-full">
          {prevItem.handle && 
            <a className="group flex items-center gap-3 md:gap-7" href={`/portfolio/${prevItem.handle}`}>
              <strong className="text-xl md:text-[44px] font-title underline hover-highlight group-hover:highlighted">{prevItem.title}</strong>
              <span className="uppercase text-xs">PREV</span>
            </a>
          }
          {nextItem.handle && 
            <a className="group flex items-center gap-3 md:gap-7 ml-auto" href={`/portfolio/${nextItem.handle}`}>
              <span className="uppercase text-xs">NEXT</span>
              <strong className="text-xl md:text-[44px] font-title underline hover-highlight group-hover:highlighted">{nextItem.title}</strong>
            </a>
          }
        </div>
        <hr className="border-0 border-b py-11 border-dashed border-current w-full" />
      </div> 
      <div className="bg-ivory py-52">
        <div className="container flex flex-col items-center justify-center gap-14"> 
          <strong className="h1 text-5xl text-center">Like what you see? <br/> Let's meet.</strong> 
          <button className="button--secondary" onClick={() => toggleModal ? toggleModal() : null}>
            Get in Touch  
          </button>
        </div>
      </div>
      <div className="container">
        <hr className="border-0 border-b border-dashed border-current" />
      </div>
      <FooterInfo />
    </>
  )
}