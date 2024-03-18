import { Link } from "@remix-run/react";
import sparkyLogo from "../assets/sparkyLogo.png";
import { useContext, useEffect, useRef, useState } from "react";
import { ModalContext } from "~/root";
import { Transition } from "react-transition-group";
import Arrow from '~/components/icons/Arrow';

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
    
    if (currentOffset < prevOffset || currentOffset <= (headerRef?.current?.offsetHeight / 2)) {
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
          className={`${(headerVisible && (headerRef?.current?.scrollHeight / 2) < currentOffset) && `shadow`} bg-white py-4 fixed left-0 w-screen z-10 transition duration-500 top-0 flex flex-col`}
        >
          <div className="container items-center text-center font-NeueHaasGroteskDisplay pb-4 announcement">
            <button 
              className="max-md:text-xs inline-flex justify-center items-center gap-3" 
              onClick={() => toggleModal ? toggleModal() : null}
            >
              Let our team of eCommerce experts help your store grow <Arrow className="w-3" />
            </button>
          </div>
          <hr className="pt-0.5 mb-4 md:mb-5 border-t-0 border-b"></hr>
          <div className="container grid grid-cols-3 items-center">
            <Link title="home" to="/">
              <img className="w-24 md:w-32" src={sparkyLogo} />
            </Link>
            <div className="text-center text-sm"></div>
            <nav className="menu flex justify-end">
              <button 
                className="whitespace-nowrap font-NeueHaasGroteskDisplay border border-black text-black bg-transparent py-4 px-8 rounded-[3px] text-sm hover:bg-black hover:text-white transition duration-200" 
                onClick={() => toggleModal ? toggleModal() : null}
              >
                Let's Talk
              </button>
            </nav>
          </div>
        </header>
      )}
    </Transition>
  )
}