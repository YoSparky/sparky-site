import { Link } from "@remix-run/react";
import sparkyLogo from "../assets/sparkyLogo.png";
import { useContext } from "react";
import { ModalContext } from "~/root";

export default function Header() {  
  const toggleModal = useContext(ModalContext);

  return (
    <div className="py-4 fixed top-0 left-0 w-screen z-10">
      <div className="container grid grid-cols-3 items-center">
        <Link title="home" to="/">
          <img className="w-24 md:w-32" src={sparkyLogo} />
        </Link>
        <div className="text-center text-sm"></div>
        <div className="flex justify-end text-sm">
          <button onClick={() => toggleModal ? toggleModal() : null}>
            CONTACT
          </button>
        </div>
      </div>
    </div>
  )
}