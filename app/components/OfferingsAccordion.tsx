import { ReactNode, useId, useRef, useState } from 'react';
import backgroundImage from '../assets/offerings-accordion-background.jpeg';
import { Star } from './icons';

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
}

const Accordion = ({ label, children } : AccordionProps) => {
  const [isOpen, toggleAccordion] = useState(false);
  const [currentHeight, setHeight] = useState(0);
  
  const accordionRef = useRef(null);
  const id = useId();
  
  const clickHandler = () => {
    if (isOpen) {
      toggleAccordion(false);
      setHeight(0);
      return;
    }
    
    toggleAccordion(true);
    // @ts-expect-error
    setHeight(accordionRef?.current?.scrollHeight ?? 0)
  }
  
  return (
    <>
      <h3 className="text-3xl md:text-7xl font-black relative max-md:pl-16">
        <Star className={`absolute top-1/2 left-0 transition duration-500 transform -translate-y-1/2 md:-translate-x-[calc(100%+32px)] ${isOpen && 'rotate-90'}`} />
        <button className={`${isOpen ? 'text-wattle' : `stroke text-[#f9df5e1a]`} transition duration-500 hover:text-wattle`} id={`controls-${id}`} aria-controls={`contents-${id}`} aria-expanded={isOpen} onClick={clickHandler}>
          {label}
        </button>
      </h3>
      <div aria-labelledby={`controls-${id}`} role="region" id={`contents-${id}`} ref={accordionRef} style={{ height: `${currentHeight}px` }} className="transition-all duration-500 overflow-hidden">
        {children}
      </div>
    </>
  )
}

export default function OfferingsAccordion() {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }} className="bg-no-repeat max-md:pb-32 py-52 z-[0] relative">
      <div className="container text-wattle grid grid-cols-1 md:grid-cols-2 gap-16 text-[#f9df5e1a]">
        <div className="md:sticky md:top-[50vh] transform md:-translate-y-1/2 h-max text-ivory uppercase">
          We work with <br/> fast-growing brands with <br/> diverse eComm needs.
        </div>
        <div className="flex flex-col gap-2">
          {offerings.map(({ title, listItems }, i) => {
            return (
              <Accordion key={useId()} label={title}>
                <ul className="flex gap-4 flex-wrap py-6">
                  {listItems.map((item) => (
                    <li className="px-8 py-4 block bg-logCabin text-ivory text-sm" key={useId()}>{item}</li>
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
