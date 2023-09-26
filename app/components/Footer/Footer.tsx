import { useContext } from "react";
import { ModalContext } from "~/root";
import FooterInfo from "./components/FooterInfo";

export default function Footer() {  
  const toggleModal = useContext(ModalContext);

  return (
    <>
      <div className="bg-ivory py-52">
        <div className="container flex flex-col items-center justify-center gap-14">  
          <strong className="h1 text-5xl text-center">Take your Shopify site to <br/> the next-level today.</strong> 
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