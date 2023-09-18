import { Link } from "@remix-run/react";
import { Modal } from "./Modal";
import sparkyLogo from "../assets/sparkyLogo.png";
import { useState } from "react";

export default function Header() {
  const [modalState, setModalState] = useState(false);
  
  const toggleModal = () => {
    setModalState(!modalState);
  };
  
  return (
    <div className="py-4 fixed top-0 left-0 w-screen z-10">
      <div className="container grid grid-cols-3 items-center">
        <Link title="home" to="/">
          <img className="w-24 md:w-32" src={sparkyLogo} />
        </Link>
        <div className="text-center text-sm">Ecomm Wizards</div>
        <div className="flex justify-end text-sm">
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
    </div>
  )
}