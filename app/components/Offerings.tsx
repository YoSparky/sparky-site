import { useContext, useId } from "react";
import { ModalContext } from "~/root";
import { offerings } from '../data/homepage';

export default function Offerings() {  
  const toggleModal = useContext(ModalContext);

  return (
    <div>
      <div className="bg-[#f4df73]">
        <div className="container items-center text-center pt-[120px] pb-[100px] flex flex-col w-full gap-11">
          <strong className="text-[54px] leading-[1.37]">
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
      <div className="bg-gradient-to-b from-[#f4df73] from-[50%] via-white via-50%">
        <div className="container grid grid-cols-3 gap-2 text-white">
          {offerings.map(({ title, listItems }) => {
            const id = useId();
            return (
              <div className="bg-[#141414] rounded-md p-11 flex flex-col gap-[30px]">
                <strong className="font-body text-2xl">{title}</strong>
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