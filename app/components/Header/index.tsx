import { Link } from "@remix-run/react";
import { Modal } from "../Modal";
import sparkyLogo from "../../../public/sparkyLogo.png";
import { useState } from "react";

export default function Header() {
  const [modalState, setModalState] = useState(false);
  
  const toggleModal = () => {
    setModalState(!modalState);
  };
  
  return (
    <>
      <div className="py-4 px-8 grid grid-cols-3 items-center">
        <Link title="home" to="/">
          <img className="w-32" src={sparkyLogo} />
        </Link>
        <div className="w-full text-center">Ecomm Wizards</div>
        <div className="flex justify-end">
          <button onClick={toggleModal}>
            CONTACT
          </button>
        </div>
      </div>
      
      <Modal modalState={modalState} closeModal={() => setModalState(false)}>
        <div className="flex flex-col">
          SLIDE INTO OUR CRMs
        </div>
      </Modal>
    </>
  )
}