import { useContext } from "react";
import { ModalContext } from "~/root";

export default function FooterInfo() {  
  const toggleModal = useContext(ModalContext);

  return (
    <div className="bg-ivory py-16 md:pb-32 text-xs">
      <div className="container flex flex-col gap-14 relative">
        <button 
          className="uppercase underline tracking-wide hover-highlight hover:highlighted"
          onClick={() => toggleModal ? toggleModal() : null}
        >
          CONTACT
        </button>
        <span>© {new Date().getFullYear()} / SPARKY / OPERATING WORLDWIDE</span>
      </div>
    </div>
  )
}