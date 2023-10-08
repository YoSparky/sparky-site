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
  const [headerVisible, setHeaderVisibility] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setPrevOffset(currentOffset);    
      setCurrentOffset(window.scrollY);
    };
    
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    
    if (currentOffset < prevOffset || currentOffset === 0) {
      setHeaderVisibility(true);
    } else {
      setHeaderVisibility(false);
    }
    
    return () => window.removeEventListener('scroll', onScroll);
  }, [currentOffset, prevOffset, headerRef]);
  
    
  const transitionStyles = {
    entering: {},
    entered:  { transform: `translateY(0)` },
    exiting: {},
    exited:  { transform: `translateY(-100%)` },
    unmounted: {}
  };
  

  return (
    <Transition nodeRef={headerRef} in={headerVisible} timeout={headerVisible ? 500 : 0}>
      {state => (
        <header 
          style={{ 
            transform: `translateY(0)`,
            ...transitionStyles[state]
          }}
          ref={headerRef}
          className={`${(headerVisible && headerRef?.current?.scrollHeight < currentOffset) && `bg-ivory shadow`} py-4 fixed left-0 w-screen z-10 transition duration-500 top-0`}
        >
          <div className="container grid grid-cols-3 items-center">
            <Link title="home" to="/">
              <img className="w-24 md:w-32" src={sparkyLogo} />
            </Link>
            <div className="text-center text-sm"></div>
            <nav className="menu flex justify-end">
              <Link to={{
                pathname: `portfolio`
              }}>
                Work
              </Link>
              <button className="btn" onClick={() => toggleModal ? toggleModal() : null}>
                Contact
              </button>
            </nav>
          </div>
        </header>
      )}
    </Transition>
  )
}