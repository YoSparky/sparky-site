import { useContext } from "react";
import { ModalContext } from "~/root";

export default function FooterInfo() {  
  const toggleModal = useContext(ModalContext);

  return (
    <div className="bg-ivory py-16 md:pb-32 text-xs">
      <div className="container flex flex-col gap-14 relative">
        <button 
          className="z-[0] uppercase underline tracking-wide py-2 relative after:absolute after:left-0 after:top-0 after:h-full after:-z-[1] after:w-0 after:bg-energyYellow after:transition-all after:duration-200 w-max hover:after:w-full"
          onClick={() => toggleModal ? toggleModal() : null}
        >
          CONTACT
        </button>
        <span>© {new Date().getFullYear()} / SPARKY / OPERATING WORLDWIDE</span>
      </div>
    </div>
  )
}