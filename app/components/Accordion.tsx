import classnames from 'classnames';
import { useState, useRef, useEffect, ReactNode } from "react";
import { Transition } from "react-transition-group";
import { Star } from "./icons";

type AccordionProps = {
  children: ReactNode,
  label: string,
  id: string,
  isOpen: boolean,
  toggleAccordion: Function
}

export const Accordion = ({ label, children, id, isOpen, toggleAccordion } : AccordionProps) => {
  const [currentHeight, setHeight] = useState(0);
  const accordionRef = useRef(null);
  
  const clickHandler = () => {
    toggleAccordion(isOpen ? null : id);
  }
  
  useEffect(() => {
    if (isOpen) {
      // @ts-expect-error
      setHeight(accordionRef?.current?.scrollHeight ?? 0)
      return;
    }
    setHeight(0);
  }, [isOpen])
  
  const transitionStyles = {
    entering: {},
    entered:  { opacity: 1, height: `${currentHeight}px` },
    exiting: {},
    exited:  { opacity: 0, height: 0 },
    unmounted: {}
  };
  
  return (
    <>
      <h3 className="text-3xl md:text-7xl font-black relative max-md:pl-16 py-2">
        <Star className={`absolute w-8 h-8 top-1/2 left-0 transition duration-500 transform -translate-y-1/2 md:-translate-x-[calc(100%+32px)] ${isOpen && 'rotate-[135deg]'}`} />
        <button
          id={`controls-${id}`}
          type="button"
          className={classnames({
            "accordion-heading": true,
            "transition": true,
            "duration-500": true,
            "text-left": true,
            isOpen: isOpen,
            isClosed: !isOpen,
          })}
          aria-controls={`contents-${id}`}
          aria-expanded={isOpen}
          onClick={clickHandler}
        >
          {label}
        </button>
      </h3>
      <Transition nodeRef={accordionRef} in={isOpen} timeout={isOpen ? 0 : 500} appear unmountOnExit>
        {state => (
          <div 
            style={{ 
              height: 0,
              opacity: 0,
              ...transitionStyles[state]
            }}
            aria-labelledby={`controls-${id}`} 
            role="region" 
            id={`contents-${id}`} 
            ref={accordionRef} 
            className="transition-all duration-500 overflow-hidden"
          >
            {children}
          </div>
        )}
      </Transition>
    </>
  )
}