import { Link } from "@remix-run/react";
import sparkyLogo from "../assets/sparkyLogo.png";
import { useContext, useEffect, useRef, useState } from "react";
import { ModalContext } from "~/root";
import { Transition } from "react-transition-group";

export default function Header() {  
  const toggleModal = useContext(ModalContext);
  const headerRef = useRef(null);
  const [prevOffset, setPrevOffset] = useState(0);
  const [currentOffset, setCurrentOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setPrevOffset(currentOffset);    
      setCurrentOffset(window.scrollY);
    };
    
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', onScroll);
  }, [currentOffset, prevOffset]);
    
  const transitionStyles = {
    entering: {},
    entered:  { transform: `translateY(0)` },
    exiting: {},
    exited:  { transform: `translateY(-100%)` },
    unmounted: {}
  };

  return (
    <Transition nodeRef={headerRef} in={(prevOffset > currentOffset)} timeout={(prevOffset > currentOffset) ? 0 : 500}>
      {state => (
        <header 
          style={{ 
            transform: `translateY(-100%)`,
            ...transitionStyles[state]
          }}
          ref={headerRef}
          className={`${(prevOffset > currentOffset && headerRef?.current?.scrollHeight < currentOffset) && `bg-ivory shadow`} py-4 sticky left-0 w-screen z-10 transition duration-500 top-0`}
        >
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
        </header>
      )}
    </Transition>
  )
}