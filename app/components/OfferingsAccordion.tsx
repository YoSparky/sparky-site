import { ReactNode, useEffect, useId, useRef, useState } from 'react';
import backgroundImage from '../assets/offerings-accordion-background.jpeg';
import { Star } from './icons';
import { Transition } from "react-transition-group";

const offerings = [
  {
    title: "Front-End",
    listItems: [
      'UI/UX Design',
      'A/B Testing & Optimization',
      'Shopify Theme Development',
      'Product Data Taxonomy',
      'ADA Compliance',
      'And More'
    ]
  },
  {
    title: "Platform",
    listItems: [
      'Merchandising Operations',
      'CMS Admin',
      'Promo & Campaign Management',
      'Catalog Architecture ',
      'Apps & Integrations',
      'Private App Development',
      'Shopify Back-end API',
      'And More'
    ]
  },
  {
    title: "Strategy",
    listItems: [
      'UX Consulting',
      'CRO Strategy',
      'Roadmap Development',
      'Tech Stack Strategy',
      'Organizational Design',
      'Digital Innovation',
      'And More'
    ]
  }
];

type AccordionProps = {
  children: ReactNode,
  label: string,
  id: string,
  isOpen: boolean,
  toggleAccordion: Function
}

const Accordion = ({ label, children, id, isOpen, toggleAccordion } : AccordionProps) => {
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
    // @ts-expect-error
    entered:  { opacity: 1, height: `${accordionRef?.current?.scrollHeight}px` },
    exiting: {},
    exited:  { opacity: 0, height: 0 },
    unmounted: {}
  };
  
  return (
    <>
      <h3 className="text-3xl md:text-7xl font-black relative max-md:pl-16 py-2 mix-bl">
        <Star className={`absolute w-8 h-8 top-1/2 left-0 transition duration-500 transform -translate-y-1/2 md:-translate-x-[calc(100%+32px)] ${isOpen && 'rotate-[135deg]'}`} />
        <button className={`${isOpen ? 'text-wattle' : `stroke text-[#f9df5e1a]`} transition duration-500 hover:text-wattle`} id={`controls-${id}`} aria-controls={`contents-${id}`} aria-expanded={isOpen} onClick={clickHandler}>
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

export default function OfferingsAccordion() {
  const [currentlyActive, setCurrentlyActive] = useState(null);
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }} className="bg-no-repeat py-16 max-md:pb-32 md:py-52 mix-blend-multiply">
      <div className="container text-wattle grid grid-cols-1 md:grid-cols-2 gap-16 text-[#f9df5e1a]">
        <div className="md:sticky md:top-[50vh] transform md:-translate-y-1/2 h-max text-ivory uppercase">
          We work with <br/> fast-growing brands with <br/> diverse eComm needs.
        </div>
        <div className="flex flex-col">
          {offerings.map(({ title, listItems }) => {
            const accordionKey = useId();
            return (
              <Accordion toggleAccordion={setCurrentlyActive} id={accordionKey} isOpen={accordionKey === currentlyActive} key={accordionKey} label={title}>
                <ul className="flex gap-4 flex-wrap py-6">
                  {listItems.map((item, i) => (
                    <li className="px-8 py-4 block bg-logCabin text-ivory text-sm" key={`${accordionKey}-${i}`}>{item}</li>
                  ))}
                </ul>
              </Accordion>
            )}
          )}
        </div>
      </div>
    </div>
  );
}
