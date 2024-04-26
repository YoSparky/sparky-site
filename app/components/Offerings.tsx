import { useContext, useId } from "react";
import { ModalContext } from "~/root";
import { offerings } from '../data/homepage';

export default function Offerings() {  
  const toggleModal = useContext(ModalContext);

  return (
    <div>
      <div className="bg-[#f4df73]">
        <div className="container items-center text-center pt-20 pb-14 md:pt-[120px] md:pb-[100px] flex flex-col w-full gap-11">
          <strong className="font-semibold text-3xl md:text-[54px] leading-[1.37] max-w-[996px]">
            We are a partner for brands with diverse eComm technical and business needs.
          </strong>
          <button 
            className="font-NeueHaasGroteskDisplay font-bold text-lg border-b-2 border-current w-max transition duration-200 origin-center scale-100 hover:scale-105" 
            onClick={() => toggleModal ? toggleModal() : null}
          >
            Let's Talk
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#f4df73] via-white from-[30%] via-30% md:from-[50%] md:via-50%">
        <div className="container grid md:grid-cols-3 gap-2 text-white">
          {offerings.map(({ title, listItems }) => {
            const id = useId();
            return (
              <div key={id} className="bg-[#141414] rounded-md p-9 md:p-11 flex flex-col gap-6 md:gap-[30px]">
                <strong className="font-body text-lg md:text-2xl">{title}</strong>
                <ul 
                  className="border border-[#2c2c2c] bg-[#2c2c2c] gap-px rounded-md flex flex-col overflow-hidden" 
                  key={id}
                >
                  {listItems.map(({ title, logo }) => {
                    const subId = useId();
                    return (
                      <li className="flex items-center w-full p-6 bg-[#141414] gap-6" key={subId}>
                        <span 
                          className="block h-[50px] w-[50px] p-3 text-[#f4df73] border border-[#f4df73] rounded-full" 
                          dangerouslySetInnerHTML={{ __html: logo }}
                        ></span>
                        <span>{title}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}